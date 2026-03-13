import { useState } from 'react'
import {
  ArrowRight, Mail, MessageSquare, Clock, CheckCircle2,
  Calendar, Users, Zap
} from 'lucide-react'

const HOW_WE_HELP = [
  { icon: <Clock size={20} />, text: 'Call lasts 30 minutes, no fluff' },
  { icon: <CheckCircle2 size={20} />, text: 'We identify your top 3 automation wins' },
  { icon: <MessageSquare size={20} />, text: 'Concrete recommendations, whether you hire us or not' },
  { icon: <Users size={20} />, text: 'Speak directly with a senior consultant' },
]

type FormData = {
  name: string
  email: string
  company: string
  size: string
  message: string
  source: string
}

const INITIAL: FormData = {
  name: '',
  email: '',
  company: '',
  size: '',
  message: '',
  source: '',
}

export function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <main className="page-main">
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="hero-bg-aurora" />
        <div className="hero-bg-grid" />
        <div className="container page-hero-container">
          <div className="section-badge" style={{ marginBottom: '1.5rem' }}>
            <Calendar size={14} />
            Book a Call
          </div>
          <h1 className="page-hero-title">
            Let's talk about your<br /><span className="gradient-text">automation opportunity</span>
          </h1>
          <p className="page-hero-subtitle">
            A free 30-minute strategy call. Walk away with a clear picture of where AI can make the biggest impact in your business.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-grid">
            {/* Left: form */}
            <div className="contact-form-wrap glass-card">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">
                    <CheckCircle2 size={48} className="sdc-check" />
                  </div>
                  <h3>We'll be in touch shortly!</h3>
                  <p>Thanks for reaching out. A senior consultant will contact you within 1 business day to schedule your call.</p>
                </div>
              ) : (
                <>
                  <h2 className="form-title">Book your free strategy call</h2>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Work Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="company">Company Name *</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          placeholder="Acme Corp"
                          value={form.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="size">Company Size</label>
                        <select id="size" name="size" value={form.size} onChange={handleChange}>
                          <option value="">Select size</option>
                          <option value="1-10">1–10 employees</option>
                          <option value="11-50">11–50 employees</option>
                          <option value="51-200">51–200 employees</option>
                          <option value="201+">201+ employees</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">What's your biggest operational bottleneck? *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="e.g. Our sales team spends too much time on manual lead research. We process 200 invoices a month by hand. Reporting takes 3 days..."
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="source">How did you hear about us?</label>
                      <select id="source" name="source" value={form.source} onChange={handleChange}>
                        <option value="">Select one</option>
                        <option value="google">Google Search</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="referral">Referral</option>
                        <option value="podcast">Podcast / Content</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={submitting}>
                      {submitting ? 'Sending...' : (
                        <><ArrowRight size={18} /> Book My Free Call</>
                      )}
                    </button>
                    <p className="form-privacy">
                      No spam, ever. We'll only contact you about your strategy call.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Right: info */}
            <div className="contact-info">
              <div className="contact-info-section">
                <h3>What happens on the call</h3>
                <ul className="contact-bullets">
                  {HOW_WE_HELP.map((item, i) => (
                    <li key={i} className="contact-bullet">
                      <div className="contact-bullet-icon">{item.icon}</div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="contact-info-section glass-card contact-who-card">
                <h4>Who you'll talk to</h4>
                <div className="contact-person">
                  <div className="contact-person-avatar">A</div>
                  <div>
                    <div className="contact-person-name">Senior AI Consultant</div>
                    <div className="contact-person-title">5+ years in enterprise automation</div>
                  </div>
                </div>
                <p className="contact-who-desc">
                  Not a sales rep. A consultant who has built real AI systems for real businesses.
                  They'll ask good questions and give you honest answers.
                </p>
              </div>

              <div className="contact-info-section glass-card contact-channels">
                <h4>Prefer async?</h4>
                <a href="mailto:hello@twctechwarriors.com" className="contact-channel">
                  <Mail size={18} />
                  hello@twctechwarriors.com
                </a>
                <p className="contact-channel-note">We respond within 1 business day.</p>
              </div>

              <div className="contact-badges">
                <div className="contact-badge">
                  <Zap size={14} />
                  Response within 24h
                </div>
                <div className="contact-badge">
                  <CheckCircle2 size={14} />
                  No commitment required
                </div>
                <div className="contact-badge">
                  <Users size={14} />
                  50+ companies helped
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
