const fs = require('fs');
const path = require('path');

const API_URL = 'https://script.google.com/macros/s/AKfycbz41O81peRW-i3HzeugixiZ_xacDqCiNqO6DNH4UDSobIPwr5crT185lqnjUux0oX1pzg/exec';
const HTML_FILE = path.join(__dirname, 'index.html');

/**
 * Escape text before inserting into HTML.
 */
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Safely validate URLs.
 */
function safeUrl(value, fallback = '#') {
  if (!value) return fallback;
  try {
    const url = new URL(String(value));
    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return url.href;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

/**
 * Safely convert values to text.
 */
function text(value, fallback = '-') {
  if (value === null || value === undefined || value === '') {
    return fallback;
  }
  return escapeHtml(value);
}

/**
 * Main build function.
 */
async function generateHTML() {
  try {
    console.log('========================================');
    console.log("Pa'O Digital Hub Build Started");
    console.log('========================================');

    // --------------------------------------------------
    // 1. Read Google Apps Script API
    // --------------------------------------------------
    console.log('📡 Google Sheet မှ ဒေတာများ လှမ်းယူနေပါသည်...');

    const response = await fetch(API_URL, {
      redirect: 'follow',
      headers: { Accept: 'application/json' }
    });

    console.log(`HTTP Status: ${response.status}`);

    if (!response.ok) {
      throw new Error(`Google Apps Script HTTP Error: ${response.status} ${response.statusText}`);
    }

    const rawText = await response.text();
    console.log(`API response length: ${rawText.length} characters`);

    // --------------------------------------------------
    // 2. Parse JSON
    // --------------------------------------------------
    let data;
    try {
      data = JSON.parse(rawText);
    } catch (error) {
      console.error('');
      console.error('❌ Google Apps Script က JSON မဟုတ်သော response ပြန်လာပါသည်။');
      console.error('----------------------------------------');
      console.error(rawText.slice(0, 1500));
      console.error('----------------------------------------');
      throw new Error('Google Apps Script response သည် valid JSON မဟုတ်ပါ။');
    }

    // --------------------------------------------------
    // 3. Validate API structure
    // --------------------------------------------------
    if (!data || typeof data !== 'object') {
      throw new Error('API response သည် object မဟုတ်ပါ။');
    }

    if (!Array.isArray(data.datasets)) {
      throw new Error('API response ထဲတွင် datasets array မတွေ့ပါ။');
    }

    console.log('');
    console.log('✅ Google Sheet API အောင်မြင်ပါသည်။');
    console.log(`📦 Datasets received: ${data.datasets.length}`);
    console.log(`📊 Total records: ${data.stats?.data_records ?? 0}`);
    console.log(`🎤 Speech hours: ${data.stats?.speech_hours ?? 0}`);
    console.log(`✓ Verified datasets: ${data.stats?.verified_datasets ?? 0}`);

    // --------------------------------------------------
    // 4. Read existing index.html
    // --------------------------------------------------
    if (!fs.existsSync(HTML_FILE)) {
      throw new Error('index.html ဖိုင်ကို မတွေ့ပါ။');
    }

    let htmlContent = fs.readFileSync(HTML_FILE, 'utf8');

    // --------------------------------------------------
    // 5. Generate Statistics HTML
    // --------------------------------------------------
    const statsHtml = `
      <div class="stat-card">
        <div class="label">Total Datasets</div>
        <div class="value">${text(data.stats?.total_datasets, '0')}</div>
      </div>
      <div class="stat-card">
        <div class="label">Data Records</div>
        <div class="value">${text(data.stats?.data_records, '0')}</div>
      </div>
      <div class="stat-card">
        <div class="label">Speech Hours</div>
        <div class="value">${text(data.stats?.speech_hours, '0')}</div>
      </div>
      <div class="stat-card">
        <div class="label">Verified Datasets</div>
        <div class="value">${text(data.stats?.verified_datasets, '0')}</div>
      </div>
    `;

    // --------------------------------------------------
    // 6. Generate Dataset Cards
    // --------------------------------------------------
    let cardsHtml = '';

    if (data.datasets.length > 0) {
      cardsHtml = data.datasets
        .map((item) => {
          const isVerified = String(item.status || '').toLowerCase() === 'verified';
          const dotClass = isVerified ? 'verified' : 'review';

          // Tags
          const tags = Array.isArray(item.tags)
            ? item.tags.map((tag) => `<span class="tag" itemprop="keywords">${text(tag, '')}</span>`).join('')
            : '';

          // URLs
          const hfUrl = safeUrl(item.hfUrl);
          const kaggleUrl = safeUrl(item.kaggleUrl);
          const datasetUrl = item.hfUrl || item.kaggleUrl || 'https://pao-dataset.pages.dev/';
          const safeDatasetUrl = safeUrl(datasetUrl, 'https://pao-dataset.pages.dev/');

          // License
          const licenseUrl = safeUrl(item.licenseUrl);

          // Buttons
          let btnHtml = '';
          if (item.hfUrl) {
            btnHtml += `<a href="${hfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-dark">Hugging Face</a>`;
          }
          if (item.kaggleUrl) {
            btnHtml += `<a href="${kaggleUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-kaggle">Kaggle</a>`;
          }
          if (!item.hfUrl && !item.kaggleUrl) {
            btnHtml = `<span class="btn btn-disabled">Not Available</span>`;
          }

          return `
            <article class="card" itemscope itemtype="https://schema.org/Dataset">
              <meta itemprop="url" content="${safeDatasetUrl}">
              <div itemprop="creator" itemscope itemtype="https://schema.org/Organization" style="display:none;">
                <span itemprop="name">${text(item.creator, "Pa'O Digital Hub")}</span>
              </div>
              <div>
                <div class="card-top">
                  <div class="badge-box">
                    <span>${text(item.type, 'Data')}</span> • <span class="dot ${dotClass}"></span> <span>${text(item.status, 'Pending')}</span>
                  </div>
                </div>
                <h3 class="card-title" itemprop="name">${text(item.title, '')}</h3>
                <div class="dataset-id" itemprop="identifier">${text(item.id, '')}</div>
                <p class="card-desc" itemprop="description">${text(item.desc, '')}</p>
                <div class="tags">${tags}</div>
                <div class="meta-grid">
                  <div class="meta-item">
                    <span class="key">Language</span>
                    <span class="val" itemprop="inLanguage">${text(item.language)}</span>
                  </div>
                  <div class="meta-item">
                    <span class="key">Records</span>
                    <span class="val">${text(item.records)}</span>
                  </div>
                  <div class="meta-item">
                    <span class="key">Format</span>
                    <span class="val">${text(item.format)}</span>
                  </div>
                  <div class="meta-item">
                    <span class="key">License</span>
                    <span class="val">
                      ${item.licenseUrl ? `<a href="${licenseUrl}" itemprop="license" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${text(item.license, 'CC BY 4.0')}</a>` : text(item.license, 'CC BY 4.0')}
                    </span>
                  </div>
                </div>
              </div>
              <div class="card-actions">${btnHtml}</div>
            </article>
          `;
        })
        .join('\n');
    } else {
      cardsHtml = `<div style="text-align:center; grid-column:1/-1;">Dataset များ ရှာမတွေ့ပါ။</div>`;
    }

    // --------------------------------------------------
    // 7. Replace Statistics
    // --------------------------------------------------
    const statsMarker = /<!--\s*STATS_START\s*-->[\s\S]*?<!--\s*STATS_END\s*-->/;

    if (!statsMarker.test(htmlContent)) {
      throw new Error('index.html ထဲတွင် STATS_START / STATS_END marker မတွေ့ပါ။');
    }

    htmlContent = htmlContent.replace(
      statsMarker,
      `<!-- STATS_START -->\n${statsHtml}\n<!-- STATS_END -->`
    );

    // --------------------------------------------------
    // 8. Replace Dataset Cards
    // --------------------------------------------------
    const datasetMarker = /<!--\s*DATASET_START\s*-->[\s\S]*?<!--\s*DATASET_END\s*-->/;

    if (!datasetMarker.test(htmlContent)) {
      throw new Error('index.html ထဲတွင် DATASET_START / DATASET_END marker မတွေ့ပါ။');
    }

    htmlContent = htmlContent.replace(
      datasetMarker,
      `<!-- DATASET_START -->\n${cardsHtml}\n<!-- DATASET_END -->`
    );

    // --------------------------------------------------
    // 9. Write index.html
    // --------------------------------------------------
    fs.writeFileSync(HTML_FILE, htmlContent, 'utf8');

    console.log('');
    console.log('========================================');
    console.log('✅ BUILD SUCCESS');
    console.log('========================================');
    console.log(`📦 Dataset count: ${data.datasets.length}`);
    console.log(`📊 Records: ${data.stats?.data_records ?? 0}`);
    console.log(`🎤 Speech hours: ${data.stats?.speech_hours ?? 0}`);
    console.log(`✓ Verified: ${data.stats?.verified_datasets ?? 0}`);
    console.log(`📄 Generated: ${HTML_FILE}`);
    console.log('========================================');

  } catch (error) {
    console.error('');
    console.error('========================================');
    console.error('❌ BUILD FAILED');
    console.error('========================================');
    console.error(error?.stack || error);
    console.error('========================================');
    process.exit(1);
  }
}

generateHTML();
