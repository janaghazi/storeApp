import React, { createContext, useState } from "react";
import i18n from "i18n-js";
import * as Localization from "expo-localization";
import { en, ar } from "../language/languageConst";

i18n.fallbacks = true;
i18n.translations = { en, ar };

export const LanguageContext = createContext();
const deviceLanguage = Localization.getLocales()[0]?.languageCode || "en";

export const LanguageProvider = ({ children }) => {
  // const [locale, setLocale] = useState(Localization.locale.startsWith("ar") ? "ar" : "en");
  const [locale, setLocale] = useState(
  deviceLanguage.startsWith("ar") ? "ar" : "en"
);

  const switchLanguage = (lang) => {
    setLocale(lang);
    i18n.locale = lang;
  };

  // always keep i18n updated
  i18n.locale = locale;

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage, t: i18n.t }}>
      {children}
    </LanguageContext.Provider>
  );
};
