import { ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

/**
 * A miniature "live preview" of the website rendered at a small scale.
 * This component re-uses the real components so colours update with the theme.
 * It is rendered inside the Hero mockup devices (laptop / phone).
 *
 * `variant` — 'desktop' shows the full page; 'mobile' shows a narrower slice.
 */
export default function WebsiteMiniature({ variant = 'desktop' }) {
  const { t } = useApp();

  // Use a percentage-based scaling approach so it always exactly fits the container
  // width: 275% and scale: 1/2.75 means the scaled element takes exactly 100% of the parent width
  const multiplier = variant === 'desktop' ? 2.75 : 3.8;
  const scale = 1 / multiplier;

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-bg-light"
      style={{ pointerEvents: 'none' }}
    >
      <div
        style={{
          width: `${multiplier * 100}%`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {/* ── Mini Hero ── */}
        <div className="relative pt-20 pb-32 bg-gradient-to-br from-primary to-secondary overflow-hidden transition-colors duration-500">
          {/* BG blobs */}
          <div className="absolute top-10 left-6 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />

          {/* Nav bar */}
          <div className="absolute top-0 left-0 w-full py-4 px-8 flex justify-between items-center">
            <span className="text-white text-lg font-bold flex items-center gap-2">
              <img src="/IC_putih.png" alt="logo" width="20" height="20" className="h-5 w-auto object-contain" />
              UpSite
            </span>
            <div className="flex gap-6">
              {['Home', 'Services', 'Portfolio', 'Pricing'].map((s) => (
                <span key={s} className="text-white/80 text-xs">{s}</span>
              ))}
            </div>
          </div>

          {/* Hero text */}
          <div className="container mx-auto px-8 max-w-5xl text-white text-left">
            <h1 className="text-4xl font-bold leading-tight mb-3">
              {t('Jasa Pembuatan Website', 'Professional Website')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FFB800] to-accent">
                {t('Profesional', 'Development')}
              </span>
            </h1>
            <p className="text-white/80 text-sm max-w-md mb-5 leading-relaxed">
              {t(
                'Melayani pembuatan website, website maintenance, jasa desain grafis, dan portofolio.',
                'We provide website development, maintenance, graphic design, and portfolio creation.'
              )}
            </p>
            <span className="inline-flex items-center gap-1 border border-white text-white px-5 py-2 rounded-lg text-xs font-semibold">
              {t('Lihat Paket Website', 'View Packages')}
              <ChevronRight size={12} />
            </span>
          </div>
        </div>

        {/* ── Mini Services ── */}
        <div className="py-12 bg-white px-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center transition-colors">
            {t('Layanan Utama Kami', 'Our Main Services')}
          </h2>
          <div className={`grid ${variant === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
            {['Web Design', t('Toko Online', 'E-Commerce'), 'UI / UX Design'].map((s) => (
              <div key={s} className="border border-card-border rounded-xl p-5 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-bg-light rounded-xl mb-3 flex justify-center items-center text-primary transition-colors">
                  <div className="w-5 h-5 rounded bg-primary/20" />
                </div>
                <h3 className="text-sm font-bold mb-1">{s}</h3>
                <p className="text-text-gray text-[10px] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mini Pricing ── */}
        <div className="py-12 bg-bg-light px-8 transition-colors">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center transition-colors">
            {t('Pilih Paket Website', 'Choose Your Plan')}
          </h2>
          <div className={`grid ${variant === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
            {[
              { name: 'Starter', price: '799K' },
              { name: 'Business', price: '1.499K' },
              { name: 'Premium', price: '2.999K' },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl p-5 text-center ${
                p.name === 'Business'
                  ? 'bg-gradient-to-br from-primary to-secondary text-white'
                  : 'bg-white border border-card-border'
              }`}>
                <h3 className="text-sm font-bold mb-1">{p.name}</h3>
                <p className={`text-lg font-bold ${p.name === 'Business' ? '' : 'text-primary'}`}>
                  Rp {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
