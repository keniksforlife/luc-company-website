import { ArrowRight, BarChart3, Bot, Zap } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/logo.svg" alt="AI Consulting Platform" className="logo-img" />
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#blueprints">Blueprints</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="btn btn-primary">Get Started</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Accelerate Your Growth with <span className="gradient-text">AI-Driven Transformation</span></h1>
              <p className="hero-subtitle">
                Expert consulting and autonomous agents for SMEs and startups.
                Combining strategic depth with battle-tested automation.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">
                  Book a Strategy Call <ArrowRight size={20} />
                </button>
                <button className="btn btn-secondary">
                  Explore Blueprints
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="value-prop">
          <div className="container">
            <div className="grid-3">
              <div className="card">
                <div className="card-icon indigo">
                  <BarChart3 size={32} />
                </div>
                <h3>Expert Consulting</h3>
                <p>Strategic AI roadmaps tailored to your business goals. We identify the high-impact opportunities for automation.</p>
              </div>
              <div className="card">
                <div className="card-icon cyan">
                  <Bot size={32} />
                </div>
                <h3>Autonomous Agent Systems</h3>
                <p>Custom AI workforces that operate within your business. Scalable, governable, and deeply integrated.</p>
              </div>
              <div className="card">
                <div className="card-icon purple">
                  <Zap size={32} />
                </div>
                <h3>Battle-Tested Blueprints</h3>
                <p>Pre-built automation frameworks for lead gen, operations, and support. Deployment in days, not months.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2>How It Works</h2>
              <p>A systematic path to an AI-powered organization.</p>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-number">1</div>
                <div className="timeline-content">
                  <h4>Discovery & Audit</h4>
                  <p>We analyze your current workflows and identify automation potential.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">2</div>
                <div className="timeline-content">
                  <h4>Strategic Blueprint</h4>
                  <p>A custom roadmap defining your AI architecture and ROI targets.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">3</div>
                <div className="timeline-content">
                  <h4>Agent Deployment</h4>
                  <p>We build and integrate your autonomous workforce into Paperclip.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-number">4</div>
                <div className="timeline-content">
                  <h4>Scale & Optimize</h4>
                  <p>Continuous monitoring and refinement for maximum business impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo.svg" alt="AI Consulting Platform" className="logo-img footer-logo-img" />
            </div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#blueprints">Blueprints</a>
              <a href="#about">About</a>
              <a href="#privacy">Privacy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 AI Consulting Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
