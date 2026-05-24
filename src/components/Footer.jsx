import { MessageCircle, Globe, Mail, Phone, Link, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { m as motion } from 'framer-motion';
import { ScrollReveal } from './AnimationWrappers';

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const { t } = useApp();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const bodyText = `Halo, tolong tambahkan email ini ke daftar newsletter UpSite: ${email}`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=fikihrz31@gmail.com&su=Berlangganan%20Newsletter&body=${encodeURIComponent(bodyText)}`, '_blank');
    e.target.reset();
  };

  return (
    <div className="relative bg-[#0B1120] text-[#94A3B8] mt-32">
      
      {/* Floating CTA */}
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <ScrollReveal direction="up" className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-14 text-center text-white max-w-4xl mx-auto -translate-y-1/2 shadow-2xl animate-gradient overflow-hidden relative border border-white/10">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t('Siap Membangun Website Impian Anda?', 'Ready to Build Your Dream Website?')}
            </h3>
            <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t(
                'Mari diskusikan ide Anda bersama tim ahli kami. Konsultasi gratis sekarang juga.',
                "Let's discuss your ideas with our expert team. Get a free consultation today."
              )}
            </p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fikihrz31@gmail.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <MessageCircle size={22} />
              {t('Hubungi Kami', 'Contact Us')}
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Footer */}
      <footer className="pb-10 pt-0 -mt-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-1">
              <h2 className="text-white text-2xl font-bold flex items-center gap-3 mb-6">
                <img src="/icon.png" alt="UpSite Logo" width="36" height="36" loading="lazy" className="h-9 w-auto object-contain" /> UpSite
              </h2>
              <p className="leading-relaxed mb-8 pr-4 text-sm md:text-base">
                {t(
                  'Mitra digital terpercaya untuk membangun identitas online yang solid, modern, dan profesional bagi bisnis Anda semenjak tahun 2020.',
                  'Your trusted digital partner in building a solid, modern, and professional online identity for your business since 2020.'
                )}
              </p>
              <div className="flex gap-4">
                {[
                  { icon: InstagramIcon, href: 'https://www.instagram.com/fikihrz_?igsh=eDVzdDZjYWQ5dWJp' },
                  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=fikihrz31@gmail.com' },
                  { icon: Globe, href: '#' }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href} 
                    target={item.href !== '#' ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={`Visit our ${item.icon.name || 'social'} page`}
                    className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex justify-center items-center text-[#94A3B8] hover:text-white hover:-translate-y-1 transition-all"
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-6">{t('Layanan', 'Services')}</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {['Web Development', 'UI/UX Design', 'E-Commerce Setup', 'SEO Optimization'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-accent hover:pl-2 transition-all block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-6">{t('Perusahaan', 'Company')}</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { id: 'Tentang Kami', en: 'About Us', href: '#' },
                  { id: 'Portofolio', en: 'Our Work', href: '#portfolio' },
                  { id: 'Karir', en: 'Careers', href: '#' },
                  { id: 'Kontak', en: 'Contact', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=fikihrz31@gmail.com' }
                ].map((link, i) => (
                  <li key={i}>
                    <a href={link.href} target={link.href.startsWith('http') ? "_blank" : undefined} rel="noreferrer" className="hover:text-accent hover:pl-2 transition-all block">
                      {t(link.id, link.en)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-6">{t('Berlangganan', 'Newsletter')}</h3>
              <p className="mb-6 leading-relaxed text-sm md:text-base">
                {t(
                  'Dapatkan info diskon dan artikel tips bisnis terbaru langsung di email Anda.',
                  'Get the latest discount info and business tips articles right in your inbox.'
                )}
              </p>
              <form onSubmit={handleSubscribe} className="flex bg-white/5 rounded-lg p-1 border border-white/10 focus-within:border-primary transition-colors">
                <input 
                  type="email" 
                  aria-label="Email Address"
                  placeholder="Email Address..." 
                  required 
                  className="flex-1 bg-transparent border-none text-white px-4 py-3 outline-none text-sm"
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe to Newsletter"
                  className="bg-primary hover:bg-secondary w-12 rounded-md flex justify-center items-center text-white transition-colors cursor-pointer"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>

          </div>

          <div className="text-center border-t border-white/10 pt-8 text-sm">
            &copy; 2026 UpSite Studio. All rights reserved. Crafted with precision.
          </div>
        </div>
      </footer>
    </div>
  );
}
