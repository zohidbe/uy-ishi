function translateText(inputLanguage, targetLanguage, text) {
    
    var languages = {
      "en": "English",
      "ru": "Russian",
      "uz": "Uzbek"
    };

    if (!(inputLanguage in languages)) {
      return "Noto'g'ri kiruvchi til kodi.";
    }
  
    if (!(targetLanguage in languages)) {
      return "Noto'g'ri tarjima til kodi.";
    }
  
    var translation = "Tarjima mavjud emas"; 
  
    return languages[inputLanguage] + " -> " + languages[targetLanguage] + ": " + translation;
  }
  
  function startTranslation() {
    var inputLanguage = prompt("Kiruvchi tilni tanlang (en, ru, uz):");
    if (!inputLanguage) return;
  
    var targetLanguage = prompt("Tarjima tilini tanlang (en, ru, uz):");
    if (!targetLanguage) return;
  
    var text = prompt("Tarjima qilinadigan matnni kiriting:");
    if (!text) return;
  
    var translation = translateText(inputLanguage, targetLanguage, text);
    alert(translation);
  }
  
  startTranslation();
  