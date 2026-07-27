import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/AppContext.jsx'
import { initializeAnalytics, trackPageView } from './utils/analytics.js'

// Jalankan inisialisasi Google Analytics saat aplikasi dimuat.
initializeAnalytics()

// Catat setiap perubahan halaman secara manual agar tracking tetap akurat di aplikasi SPA.
const handleRouteChange = () => {
  trackPageView()
}

// Jika aplikasi nanti menggunakan React Router, Anda bisa menghubungkan fungsi ini
// ke event pergeseran route. Untuk saat ini, kita tetap mengaktifkan tracking awal.
window.addEventListener('popstate', handleRouteChange)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
