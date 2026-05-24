import { Monitor, ShoppingCart, PenTool } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from './AnimationWrappers';

export default function Services() {
  const { t } = useApp();

  const services = [
    {
      icon: <Monitor size={36} />,
      title: 'Web Design',
      desc: t(
        'Website untuk bisnis kecil menengah, company profile, dan katalog produk.',
        'Websites for small and medium businesses, company profiles, and product catalogs.'
      )
    },
    {
      icon: <ShoppingCart size={36} />,
      title: t('Toko Online', 'E-Commerce'),
      desc: t(
        'Sistem toko online terintegrasi dengan keranjang belanja dan gateway pembayaran.',
        'Integrated online store systems with shopping carts and payment gateways.'
      )
    },
    {
      icon: <PenTool size={36} />,
      title: 'UI / UX Design',
      desc: t(
        'Perancangan antarmuka pengguna yang modern, interaktif, dan mudah digunakan.',
        'Designing modern, interactive, and user-friendly user interfaces.'
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 transition-colors">
            {t('Layanan Utama Kami', 'Our Main Services')}
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto text-base md:text-lg">
            {t(
              'Kami mendedikasikan diri untuk memberikan solusi digital yang tepat sasaran.',
              'We dedicate ourselves to providing targeted digital solutions.'
            )}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="p-8 border border-card-border rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary group h-full bg-white flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 bg-bg-light rounded-2xl flex justify-center items-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-gray leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
