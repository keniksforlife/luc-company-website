import { Link } from 'react-router-dom'
import {
  ArrowRight, Star, TrendingUp, Clock, Users,
  CheckCircle2, BarChart3, Zap, ChevronRight
} from 'lucide-react'

const CASE_STUDIES = [
  {
    company: 'GrowthStack',
    industry: 'B2B SaaS',
    size: '25 employees',
    color: 'indigo',
    initial: 'G',
    challenge: 'The sales team was spending 60% of their time on manual lead research, qualification emails, and CRM data entry — leaving little time for actual selling.',
    solution: 'We deployed an AI SDR (Sales Development Representative) that autonomously researches inbound leads, scores them against their ICP, drafts personalized outreach emails, and updates HubSpot — all without human intervention.',
    results: [
      { metric: '15', unit: 'qualified calls/week', label: 'booked by the AI agent' },
      { metric: '62%', unit: 'reduction', label: 'in manual sales admin time' },
      { metric: '3.2x', unit: 'pipeline increase', label: 'in the first 60 days' },
    ],
    quote: "They mapped our entire sales pipeline in one session and deployed an AI SDR that books 15 qualified calls a week. Remarkable ROI.",
    author: "Sarah K., CEO",
    tech: ['Claude AI', 'HubSpot', 'Gmail', 'LinkedIn API'],
  },
  {
    company: 'NexaOps',
    industry: 'Operations Consulting',
    size: '80 employees',
    color: 'cyan',
    initial: 'N',
    challenge: 'Three analysts spent 3 full days every week collecting data from 12 different systems, building Excel reports, and distributing them to leadership — a process that was slow, error-prone, and blocking strategic decisions.',
    solution: 'We built an automated business intelligence pipeline that pulls data from all 12 sources, runs validation checks, generates formatted reports in Google Slides and PDF, and sends them to the right people every Monday at 7am.',
    results: [
      { metric: '3 days', unit: 'recovered', label: 'per analyst per week' },
      { metric: '100%', unit: 'on-time delivery', label: 'every week since launch' },
      { metric: '$180K', unit: 'annual savings', label: 'in analyst time redirected to strategy' },
    ],
    quote: "Our ops team used to spend 3 days a week on manual reporting. Now it's automated. We reinvested those hours into product.",
    author: "Marcus R., COO",
    tech: ['Google Sheets API', 'Salesforce', 'Notion', 'Slack'],
  },
  {
    company: 'Launchbase',
    industry: 'Growth Marketing',
    size: '12 employees',
    color: 'purple',
    initial: 'L',
    challenge: 'As a fast-growing startup, Launchbase needed to onboard new clients faster without scaling their team. The onboarding process involved 47 manual steps across 6 tools and took 3 weeks on average.',
    solution: 'We built a client onboarding agent that triggers on contract signature, automatically provisions accounts, sends welcome sequences, creates project workspaces, schedules kick-off calls, and notifies the delivery team — all in under 30 minutes.',
    results: [
      { metric: '30 min', unit: 'onboarding time', label: 'down from 3 weeks' },
      { metric: '47', unit: 'manual steps', label: 'fully automated' },
      { metric: '40%', unit: 'NPS increase', label: 'due to faster time-to-value' },
    ],
    quote: "The blueprint approach is genius — we had our first AI agent running in the same week of the kickoff call.",
    author: "Priya M., Head of Growth",
    tech: ['Zapier', 'Notion', 'Stripe', 'Calendly', 'Slack'],
  },
  {
    company: 'ClearFinance',
    industry: 'FinTech',
    size: '45 employees',
    color: 'teal',
    initial: 'C',
    challenge: 'Their AP team processed 400+ invoices per month — manually extracting data, matching POs, routing for approval, and entering into their accounting system. Each invoice took 12 minutes on average.',
    solution: 'We deployed a document intelligence agent that reads incoming invoices (PDF/email), extracts key fields using structured AI output, validates against purchase orders, routes exceptions to the right approver, and syncs approved invoices to QuickBooks.',
    results: [
      { metric: '95%', unit: 'straight-through processing', label: 'no human touch required' },
      { metric: '12 min → 45 sec', unit: 'per invoice', label: 'processing time' },
      { metric: '$96K', unit: 'annual savings', label: 'in AP staff time' },
    ],
    quote: "Invoice processing was our biggest operational bottleneck. The AI handles it flawlessly — we barely think about it anymore.",
    author: "David L., CFO",
    tech: ['Claude AI', 'QuickBooks API', 'Gmail', 'AWS S3'],
  },
]

const AGGREGATE_STATS = [
  { value: '10,000+', label: 'Hours automated per month', icon: <Clock size={24} /> },
  { value: '320%', label: 'Average first-year ROI', icon: <TrendingUp size={24} /> },
  { value: '50+', label: 'Companies transformed', icon: <Users size={24} /> },
  { value: '14 days', label: 'Average time to first agent', icon: <Zap size={24} /> },
]

const ALL_TESTIMONIALS = [
  ...CASE_STUDIES.map(cs => ({ quote: cs.quote, author: cs.author, company: cs.company, stars: 5 })),
  {
    quote: "We were skeptical about AI automation for a traditional manufacturing business. The ROI was visible in month one.",
    author: "James H., VP Operations",
    company: "ProMake Industries",
    stars: 5,
  },
  {
    quote: "The level of process understanding they brought to our discovery call blew us away. They got our business in 90 minutes.",
    author: "Nina S., Founder",
    company: "PulseLegal",
    stars: 5,
  },
]

export function Results() {
  return (
    <main className="page-main">
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="hero-bg-aurora" />
        <div className="hero-bg-grid" />
        <div className="container page-hero-container">
          <div className="section-badge" style={{ marginBottom: '1.5rem' }}>
            <BarChart3 size={14} />
            Client Results
          </div>
          <h1 className="page-hero-title">
            Real outcomes from<br /><span className="gradient-text">real companies</span>
          </h1>
          <p className="page-hero-subtitle">
            We measure success in hours saved, revenue generated, and costs reduced —
            not slides delivered. Here's the proof.
          </p>
        </div>
      </section>

      {/* ── AGGREGATE STATS ───────────────────────────────────── */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {AGGREGATE_STATS.map((stat, i) => (
              <div key={i} className="stat-card glass-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">
                  <span className="gradient-text">{stat.value}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <TrendingUp size={14} />
              Case Studies
            </div>
            <h2>Detailed <span className="gradient-text">client stories</span></h2>
          </div>
          <div className="case-studies-list">
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="case-study-card glass-card">
                <div className="cs-header">
                  <div className={`cs-avatar ${cs.color}`}>{cs.initial}</div>
                  <div>
                    <h3>{cs.company}</h3>
                    <div className="cs-meta">
                      <span>{cs.industry}</span>
                      <span className="cs-dot">·</span>
                      <span>{cs.size}</span>
                    </div>
                  </div>
                  <div className="cs-tech">
                    {cs.tech.map((t, ti) => <span key={ti} className="tag">{t}</span>)}
                  </div>
                </div>

                <div className="cs-body">
                  <div className="cs-section">
                    <h4>The Challenge</h4>
                    <p>{cs.challenge}</p>
                  </div>
                  <div className="cs-section">
                    <h4>The Solution</h4>
                    <p>{cs.solution}</p>
                  </div>
                </div>

                <div className="cs-results">
                  {cs.results.map((r, ri) => (
                    <div key={ri} className="cs-result-item">
                      <div className="cs-result-metric gradient-text">{r.metric}</div>
                      <div className="cs-result-unit">{r.unit}</div>
                      <div className="cs-result-label">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="cs-quote">
                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={13} className="star-filled" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{cs.quote}"</p>
                  <div className="testimonial-name">— {cs.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL TESTIMONIALS ──────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Star size={14} />
              Testimonials
            </div>
            <h2>What our clients <span className="gradient-text">say</span></h2>
          </div>
          <div className="testimonials-grid">
            {ALL_TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card glass-card">
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} className="star-filled" />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.author[0]}</div>
                  <div>
                    <div className="testimonial-name">{t.author}</div>
                    <div className="testimonial-title">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-bg-aurora" />
        <div className="container">
          <div className="cta-content">
            <div className="section-badge"><CheckCircle2 size={14} /> Your Turn</div>
            <h2>Ready to write your <span className="gradient-text">own case study?</span></h2>
            <p className="cta-subtitle">
              Book a free strategy call and we'll identify your top automation wins — just like we did for every company above.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Call <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Services <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
