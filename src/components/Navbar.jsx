import { Palette, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { m as motion } from 'framer-motion';

export default function Navbar() {
  const { theme, lang, toggleTheme, toggleLang, t } = useApp();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 w-full z-50 py-6"
    >
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 text-white text-2xl font-bold no-underline">
          <img src="/IC_putih.png" alt="UpSite Logo" width="36" height="36" className="h-9 w-auto object-contain" />
          UpSite
        </a>

        <div className="hidden md:flex gap-8 items-center list-none">
          {['Home', 'Services', 'Portfolio', 'Pricing'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/90 text-sm font-medium transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 bg-white/20 text-white border border-white/40 px-4 py-2 rounded-md text-xs font-semibold backdrop-blur-sm transition-all hover:bg-white hover:text-primary cursor-pointer"
          >
            <Palette size={16} />
            {t('Ubah Tema', 'Change Theme')}
          </button>
          
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 bg-white/20 text-white border border-white/40 px-4 py-2 rounded-md text-xs font-semibold backdrop-blur-sm transition-all hover:bg-white hover:text-primary cursor-pointer"
          >
            <Globe size={16} />
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
