import React, { createContext, useState, useContext, ReactNode, FC } from 'react';

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  changeLanguage: () => {}
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
