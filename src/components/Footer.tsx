import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <img src="/logo.svg" alt="AI Consulting Platform" className="logo-img footer-logo-img" />
            </Link>
            <p className="footer-tagline">
              Accelerating AI transformation for SMEs and startups worldwide.
            </p>
          </div>

          <div className="footer-links-group">
            <h5>Services</h5>
            <Link to="/services">AI Strategy</Link>
            <Link to="/services">Agent Systems</Link>
            <Link to="/services">Blueprints</Link>
            <Link to="/services">Process Automation</Link>
          </div>

          <div className="footer-links-group">
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/results">Case Studies</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links-group">
            <h5>Legal</h5>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AI Consulting Platform. All rights reserved.</p>
          <p className="footer-powered">Powered by <span className="gradient-text">Paperclip AI</span></p>
        </div>
      </div>
    </footer>
  )
}
