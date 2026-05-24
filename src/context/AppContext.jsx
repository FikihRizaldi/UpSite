import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('purple'); // 'purple' | 'blue'
  const [lang, setLang] = useState('id'); // 'id' | 'en'

  const toggleTheme = () => {
    const newTheme = theme === 'purple' ? 'blue' : 'purple';
    setTheme(newTheme);
    document.body.className = `theme-${newTheme}`;
  };

  const toggleLang = () => setLang(lang === 'id' ? 'en' : 'id');

  const t = (id, en) => (lang === 'id' ? id : en);

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
