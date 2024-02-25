import i18next from "../../stores/i18next";
import en from "./locales/en";
import ua from "./locales/ua";

i18next.addResourceBundle("en", "translation", en);
i18next.addResourceBundle("ua", "translation", ua);

export { default } from "./Welcome";
