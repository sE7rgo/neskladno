import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {},
  keySeparator: false,
  react: {
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    useSuspense: true
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
