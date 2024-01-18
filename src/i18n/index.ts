import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en.json";
import zhTranslation from "./zh-CN.json";
import frTranslation from "./fr.json";

const resources = {
  en: { translation: enTranslation },
  "zh-CN": { translation: zhTranslation },
  fr: { translation: frTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language, // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
