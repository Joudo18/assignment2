// Instead of calling DeepL directly:
const response = await fetch("http://localhost:3000/translate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    text,
    source_lang: sourceLang.value,
    target_lang: targetLang.value
  })
});
