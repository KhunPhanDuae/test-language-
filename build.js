const fs = require('fs');

const API_URL = "https://script.google.com/macros/s/AKfycbz41O81peRW-i3HzeugixiZ_xacDqCiNqO6DNH4UDSobIPwr5crT185lqnjUux0oX1pzg/exec";

async function generateHTML() {
  try {
    console.log("Google Sheet မှ ဒေတာများ လှမ်းယူနေပါသည်...");
    const response = await fetch(API_URL, { redirect: 'follow' });

    // တုံ့ပြန်ချက်ကို စာသားအဖြစ် အရင်ရယူခြင်း
    const text = await response.text();

    // JSON ဟုတ်မဟုတ် စစ်ဆေးခြင်း
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("\n❌ Google Apps Script မှ JSON မဟုတ်သော တုံ့ပြန်ချက် (HTML) ပြန်လာပါသည်:");
      console.error("----------------------------------------");
      console.error(text.slice(0, 500)); // HTML Error ၏ ပထမ စာလုံး ၅၀၀ ကို ထုတ်ပြမည်
      console.error("----------------------------------------\n");
      throw new Error("Google Apps Script ဘက်တွင် Error တက်နေပါသည် (အထက်ပါ စာသားကို စစ်ဆေးပါ)");
    }

    let htmlContent = fs.readFileSync('index.html', 'utf8');

    // ၁။ Stats HTML ဖန်တီးခြင်း
    const statsHtml = `
        <div class="stat-card">
          <div class="label">စုစုပေါင်း Dataset</div>
          <div class="value">${data.stats?.total_datasets ?? 0}</div>
        </div>
        <div class="stat-card">
          <div class="label">Data Records</div>
          <div class="value">${data.stats?.data_records ?? 0}</div>
        </div>
        <div class="stat-card">
          <div class="label">Speech Hours</div>
          <div class="value">${data.stats?.speech_hours ?? 0}</div>
        </div>
        <div class="stat-card">
          <div class="label">Verified Datasets</div>
          <div class="value">${data.stats?.verified_datasets ?? 0}</div>
        </div>
    `;

    // ၂။ Datasets Cards HTML ဖန်တီးခြင်း
    let cardsHtml = "";
    if (data.datasets && data.datasets.length > 0) {
      cardsHtml = data.datasets.map(item => {
        const isVerified = item.status === "Verified";
        const dotClass = isVerified ? "verified" : "review";
        const tags = Array.isArray(item.tags)
          ? item.tags.map(t => `<span class="tag" itemprop="keywords">${t}</span>`).join("")
          : "";

        let btnHtml = "";
        if (item.hfUrl) {
          btnHtml += `<a href="${item.hfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-dark">Pa'O Digital Hub</a> `;
        }
        if (item.kaggleUrl) {
          btnHtml += `<a href="${item.kaggleUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-kaggle">Pa'O Digital Hub</a>`;
        }
        if (!item.hfUrl && !item.kaggleUrl) {
          btnHtml += `<span class="btn btn-disabled">Not Available</span>`;
        }

        return `
        <article class="card" itemscope itemtype="https://schema.org/Dataset">
          <meta itemprop="url" content="${item.hfUrl || 'https://pao-dataset.pages.dev/'}">
          <div itemprop="creator" itemscope itemtype="https://schema.org/Organization" style="display:none;">
            <span itemprop="name">${item.creator || "Pa'O Digital Hub"}</span>
          </div>

          <div>
            <div class="card-top">
              <div class="badge-box">
                <span>${item.type || 'Data'}</span> •
                <span class="dot ${dotClass}"></span>
                <span>${item.status || 'Pending'}</span>
              </div>
            </div>

            <h3 class="card-title" itemprop="name">${item.title || ''}</h3>
            <div class="dataset-id" itemprop="identifier">${item.id || ''}</div>
            <p class="card-desc" itemprop="description">${item.desc || ''}</p>
            <div class="tags">${tags}</div>

            <div class="meta-grid">
              <div class="meta-item">
                <span class="key">Language</span>
                <span class="val" itemprop="inLanguage">${item.language || '-'}</span>
              </div>
              <div class="meta-item">
                <span class="key">Records</span>
                <span class="val">${item.records || '-'}</span>
              </div>
              <div class="meta-item">
                <span class="key">Format</span>
                <span class="val">${item.format || '-'}</span>
              </div>
              <div class="meta-item">
                <span class="key">License</span>
                <span class="val">
                  <a href="${item.licenseUrl || '#'}" itemprop="license" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
                    ${item.license || 'CC BY 4.0'}
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div class="card-actions">
            ${btnHtml}
          </div>
        </article>`;
      }).join("\n");
    } else {
      cardsHtml = `<div style="text-align:center; grid-column:1/-1;">Dataset များ ရှာမတွေ့ပါ။</div>`;
    }

    // HTML ဖိုင်ထဲသို့ အစားထိုးထည့်သွင်းခြင်း (Function callback သုံး၍ $ ပြဿနာ ကာကွယ်ထားသည်)
    htmlContent = htmlContent.replace(
      /<!-- STATS_START -->[\s\S]*?<!-- STATS_END -->/,
      () => `<!-- STATS_START -->\n${statsHtml}\n<!-- STATS_END -->`
    );

    htmlContent = htmlContent.replace(
      /<!-- DATASET_START -->[\s\S]*?<!-- DATASET_END -->/,
      () => `<!-- DATASET_START -->\n${cardsHtml}\n<!-- DATASET_END -->`
    );

    fs.writeFileSync('index.html', htmlContent, 'utf8');
    console.log("index.html ကို Google Sheet ဒေတာများဖြင့် အောင်မြင်စွာ Pre-render ရေးသွင်းပြီးပါပြီ။");
  } catch (err) {
    console.error("Build လုပ်ရာတွင် အမှားဖြစ်ပေါ်ပါသည်:", err.message || err);
    process.exit(1);
  }
}

generateHTML();
