document.addEventListener("DOMContentLoaded", () => {
  const defaultLang = "en";
  const supportedLangs = ["en", "fr", "nl"];
  const langKey = "finova_lang";

  // 1. Detect Language
  let currentLang = localStorage.getItem(langKey) || defaultLang;
  if (!supportedLangs.includes(currentLang)) {
    currentLang = defaultLang;
  }

  // 2. Select Elements (Define BEFORE usage)
  const switchers = document.querySelectorAll(".language-switcher");

  // 3. Initialize Switchers
  switchers.forEach((switcher) => {
    switcher.value = currentLang;
    switcher.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  });

  // 4. Initialize Language
  setLanguage(currentLang);

  async function setLanguage(lang) {
    try {
      // Update State
      currentLang = lang;
      localStorage.setItem(langKey, lang);

      // Update ALL Switchers UI
      switchers.forEach((switcher) => {
        if (switcher.value !== lang) {
          switcher.value = lang;
        }
      });

      // Fetch Translations
      const response = await fetch(`assets/lang/${lang}.json`);
      if (!response.ok) throw new Error(`Could not load ${lang} translations`);
      const translations = await response.json();

      // Apply Translations
      applyTranslations(translations);

      // Update HTML lang attribute
      document.documentElement.lang = lang;
    } catch (error) {
      console.error("Language loading failed:", error);
    }
  }

  function applyTranslations(translations) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        // Check if we should update textContent or placeholder
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[key];
        } else {
          el.textContent = translations[key];
        }
      }
    });
  }

  // Expose setLanguage globally if needed
  window.setLanguage = setLanguage;
});
