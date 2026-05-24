import { Image as ImageIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from './AnimationWrappers';
import { m as motion } from 'framer-motion';

export default function Portfolio() {
  const { t } = useApp();

  const portfolios = [
    {
      title: 'NexGen E-Commerce',
      desc: t('Platform toko online modern dengan integrasi payment gateway dan keranjang belanja dinamis.', 'Modern e-commerce platform with payment gateway integration and dynamic cart.'),
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Aura Corporate Profile',
      desc: t('Website company profile elegan untuk membangun kepercayaan dan identitas merek perusahaan.', 'Elegant company profile website to build corporate trust and brand identity.'),
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Lumina SaaS Landing',
      desc: t('Halaman utama interaktif yang dirancang khusus untuk meningkatkan konversi startup perangkat lunak.', 'Interactive landing page specifically designed to boost software startup conversions.'),
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Gourmet Resto Booking',
      desc: t('Sistem reservasi dan menu digital yang memukau untuk industri kuliner dan restoran mewah.', 'Stunning digital menu and reservation system for the culinary and fine dining industry.'),
      color: 'from-orange-400 to-rose-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-bg-light transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 transition-colors">
            {t('Karya Terbaru', 'Recent Works')}
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto text-base md:text-lg">
            {t(
              'Beberapa project website yang telah berhasil kami rilis.',
              'Some of the website projects we have successfully launched.'
            )}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolios.map((port, index) => (
            <StaggerItem key={index}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow border border-card-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-default"
              >
                <div className={`h-[250px] w-full bg-gradient-to-br ${port.color} flex justify-center items-center text-white relative overflow-hidden`}>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <ImageIcon size={64} className="opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-2">{port.title}</h4>
                  <p className="text-text-gray">{port.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
