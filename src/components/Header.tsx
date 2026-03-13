import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Results', to: '/results' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="AI Consulting Platform" className="logo-img" />
        </Link>
        <nav className="nav">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? 'nav-active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary">
            Book a Call <ChevronRight size={16} />
          </Link>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-nav">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? 'nav-active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary">
            Book a Call <ChevronRight size={16} />
          </Link>
        </div>
      )}
    </header>
  )
}
