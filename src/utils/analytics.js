import ReactGA from 'react-ga4'

// Gunakan Measurement ID GA4 Anda sebagai nilai default.
const DEFAULT_MEASUREMENT_ID = 'G-N1GCKH0TM7'
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || DEFAULT_MEASUREMENT_ID

// Cek apakah Measurement ID sudah diisi dengan nilai yang valid.
const isMeasurementIdConfigured = () =>
  typeof measurementId === 'string' &&
  measurementId.trim().length > 0 &&
  measurementId !== 'G-XXXXXXXXXX'

// Inisialisasi GA4 saat aplikasi pertama kali dimuat.
export const initializeAnalytics = () => {
  if (typeof window === 'undefined') return

  if (!isMeasurementIdConfigured()) {
    console.info('[GA4] Measurement ID belum dikonfigurasi. Silakan isi VITE_GA_MEASUREMENT_ID atau ganti nilai default di src/utils/analytics.js.')
    return
  }

  ReactGA.initialize(measurementId)
  trackPageView()
}

// Kirim pageview secara manual agar tracking tetap bekerja di SPA.
export const trackPageView = (path = window.location.pathname + window.location.search) => {
  if (typeof window === 'undefined' || !isMeasurementIdConfigured()) return

  ReactGA.send({ hitType: 'pageview', page: path })
}
