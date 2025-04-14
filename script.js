document.getElementById('translateBtn').addEventListener('click', async () => {
  const text = document.getElementById('textToTranslate').value;
  const targetLang = document.getElementById('targetLang').value;
  const sourceLang = document.getElementById('sourceLang').value;

  if (!text || !targetLang) {
      alert('Please provide text .');
      return;
  }

  const response = await fetch('https://assignment2-6lbj.onrender.com', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          text: text,
          targetLang: targetLang,
          sourceLang: sourceLang === "" ? null : sourceLang  // Auto-detect if blank
      })
  });

  if (response.ok) {
      const data = await response.json();
      document.getElementById('translatedText').textContent = data.translatedText;
  } else {
      alert('Error during translation');
  }
});
