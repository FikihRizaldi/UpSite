import { ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { ScrollReveal } from './AnimationWrappers';

export default function Hero() {
  const { t } = useApp();

  return (
    <header className="relative pt-40 pb-48 lg:pb-64 bg-gradient-to-br from-primary to-secondary overflow-hidden transition-colors duration-500">
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollReveal direction="up">
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] mb-6">
                {t('Jasa Pembuatan Website', 'Professional Website')}<br />
                <span className="relative inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FFB800] to-accent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                  {t('Profesional', 'Development')}
                </span>
              </h1>
              
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {t(
                  'Melayani pembuatan website, website maintenance, jasa desain grafis, dan portofolio dengan hasil terbaik untuk skala bisnis Anda.',
                  'We provide website development, maintenance, graphic design, and portfolio creation with the best results for your business scale.'
                )}
              </p>
              
              <a 
                href="#pricing" 
                className="inline-flex items-center gap-2 bg-transparent text-white border border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white hover:text-primary group"
              >
                {t('Lihat Paket Website', 'View Packages')}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="hidden lg:flex relative justify-center items-center h-[400px]">
            {/* Mockup Container */}
            <div className="relative w-full max-w-[480px]">
              {/* Laptop Screen */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative bg-slate-100 rounded-t-xl border-[10px] border-slate-300 shadow-2xl overflow-hidden aspect-[16/10] z-10"
              >
                <div className="w-full h-full bg-slate-900 flex justify-center items-center text-white font-bold tracking-widest text-lg shadow-inner">
                  WEB PORTFOLIO
                </div>
              </motion.div>
              {/* Laptop Base */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative w-[110%] -left-[5%] h-4 bg-slate-400 rounded-b-xl z-20 shadow-xl"
              ></motion.div>
              
              {/* Phone Mockup */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -right-4 -bottom-10 w-[100px] h-[200px] bg-white rounded-2xl border-[6px] border-slate-200 shadow-2xl z-30 overflow-hidden"
              >
                <div className="w-full h-full bg-secondary flex flex-col justify-center items-center text-white text-[10px] font-semibold p-3 text-center">
                  <div className="w-full h-16 bg-white/20 rounded mb-2"></div>
                  MOBILE
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* SVG Wave */}
      <div className="wave-bottom text-white">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </header>
  );
}
