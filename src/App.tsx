import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { HowItWorks } from './pages/HowItWorks'
import { Results } from './pages/Results'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import './App.css'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
        <Route path="/results" element={<Layout><Results /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        {/* Legacy anchor-style redirects */}
        <Route path="/privacy" element={<Navigate to="/" replace />} />
        <Route path="/terms" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
