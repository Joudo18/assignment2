const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load .env

const deepl = require('deepl-node');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize translator with your API key
const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

// POST /translate route
app.post('/translate', async (req, res) => {
  const { text, sourceLang, targetLang } = req.body;

  try {
    const result = await translator.translateText(
      text,
      sourceLang === "auto" ? null : sourceLang,  // <-- this is key: null = auto-detect
      targetLang 
    );

    res.json({ translatedText: result.text });
  } catch (error) {
    console.error('Translation error:', error.message);
    res.status(500).json({ error: 'Translation failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
