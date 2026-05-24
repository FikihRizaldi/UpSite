import { Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from './AnimationWrappers';

export default function Pricing() {
  const { t } = useApp();

  const pricingPlans = [
    {
      name: 'Starter',
      price: '1.5M',
      features: [
        t('Desain 1 Halaman', '1 Page Design'),
        t('Responsif di HP', 'Mobile Responsive')
      ],
      popular: false,
      btnText: t('Pilih Paket', 'Choose Plan')
    },
    {
      name: 'Professional',
      price: '3.5M',
      features: [
        t('Desain 5 Halaman', '5 Pages Design'),
        t('Panel Admin CMS', 'CMS Admin Panel'),
        t('Optimasi SEO Dasar', 'Basic SEO Setup')
      ],
      popular: true,
      btnText: t('Pilih Paket', 'Choose Plan')
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        t('Toko Online Full', 'Full E-Commerce'),
        t('Integrasi Pembayaran', 'Payment Gateway')
      ],
      popular: false,
      btnText: t('Hubungi Kami', 'Contact Us')
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal direction="up" className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 transition-colors">
            {t('Paket Transparan', 'Transparent Pricing')}
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto text-base md:text-lg">
            {t(
              'Pilih paket yang paling sesuai dengan kebutuhan operasional Anda.',
              'Choose the package that best fits your operational needs.'
            )}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => (
            <StaggerItem key={index}>
              <div 
                className={`border rounded-2xl p-10 text-center transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary text-white border-transparent shadow-2xl md:scale-105 relative z-10' 
                    : 'border-card-border bg-white hover:border-primary hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-[#1E293B] text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className={`text-xl font-bold mb-4 ${plan.popular ? 'text-white' : ''}`}>{plan.name}</div>
                <div className="text-4xl font-extrabold mb-8">
                  {plan.price !== 'Custom' && <span className="text-xl align-top mr-1">Rp</span>}
                  {plan.price}
                </div>
                
                <ul className={`text-left space-y-4 mb-10 ${plan.popular ? 'text-white/90' : 'text-text-gray'}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={20} className={plan.popular ? 'text-accent' : 'text-primary'} />
                      <span className="font-medium text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#" 
                  className={`block w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-primary hover:bg-accent hover:text-[#1E293B] shadow-md hover:shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {plan.btnText}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
