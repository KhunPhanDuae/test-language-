document.addEventListener('DOMContentLoaded', function() {
    fetch('TTSdata.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('translations-container');
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('translation-card');

                const paoWord = document.createElement('h2');
                paoWord.textContent = item.pao_word;
                card.appendChild(paoWord);

                const wordType = document.createElement('p');
                wordType.textContent = `Type: ${item.word_type}`;
                card.appendChild(wordType);

                const translationsList = document.createElement('ul');
                for (const lang in item.translations) {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${lang.toUpperCase()}: ${item.translations[lang]}`;
                    translationsList.appendChild(listItem);
                }
                card.appendChild(translationsList);

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
