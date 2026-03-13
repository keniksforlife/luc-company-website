import { Link } from 'react-router-dom'
import {
  ArrowRight, Shield, Zap, Users, Target,
  CheckCircle2, Heart, Globe, ChevronRight
} from 'lucide-react'

const VALUES = [
  {
    icon: <Target size={24} />,
    color: 'indigo',
    title: 'Results over reports',
    desc: 'We measure every engagement in hours saved, revenue generated, and costs reduced. A slide deck is not a deliverable. A working system is.',
  },
  {
    icon: <Shield size={24} />,
    color: 'cyan',
    title: 'Honest over impressive',
    desc: 'We\'ll tell you when AI is the wrong tool. We\'d rather lose a deal than take money for something that won\'t work for you.',
  },
  {
    icon: <Zap size={24} />,
    color: 'purple',
    title: 'Speed is respect',
    desc: 'Every day you\'re doing a process manually is a day of wasted potential. We move fast because your time matters.',
  },
  {
    icon: <Heart size={24} />,
    color: 'teal',
    title: 'Long relationships, not transactions',
    desc: 'Our best clients have been with us for years. We\'re invested in your long-term success, not a quick engagement.',
  },
  {
    icon: <Globe size={24} />,
    color: 'amber',
    title: 'Automation for everyone',
    desc: 'Enterprise-grade AI shouldn\'t require an enterprise budget. We bring the same sophistication to SMEs and startups.',
  },
  {
    icon: <Users size={24} />,
    color: 'rose',
    title: 'Your team, amplified',
    desc: 'We don\'t replace your people — we free them from the work that doesn\'t require human judgment, so they can do the work that does.',
  },
]

const TEAM = [
  {
    initial: 'K',
    name: 'Kent',
    title: 'Founder & CEO',
    bio: 'Former enterprise software engineer turned automation specialist. Has designed AI systems for 50+ companies across 12 industries. Obsessed with the gap between AI hype and practical business value.',
    color: 'indigo',
  },
  {
    initial: 'A',
    name: 'AI Consulting Team',
    title: 'Senior Consultants',
    bio: 'Our consulting team combines deep AI engineering expertise with hands-on business operations experience. We\'ve been inside the workflows we automate.',
    color: 'cyan',
  },
  {
    initial: 'P',
    name: 'Paperclip AI Platform',
    title: 'Our Technology Partner',
    bio: 'We build on Paperclip, our proprietary multi-agent orchestration platform that powers every client deployment — giving your AI workforce governance, observability, and scale.',
    color: 'purple',
  },
]

const MILESTONES = [
  { year: '2022', event: 'Founded with a mission to make enterprise AI accessible to growing businesses' },
  { year: '2023', event: 'Deployed first multi-agent system for a Series A startup — 10x faster than traditional automation' },
  { year: '2024', event: 'Launched Paperclip — our proprietary agent orchestration platform' },
  { year: '2025', event: 'Crossed 50 client deployments across sales, ops, finance, and support' },
  { year: '2026', event: 'Expanding globally — helping SMEs worldwide build their autonomous workforce' },
]

export function About() {
  return (
    <main className="page-main">
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="hero-bg-aurora" />
        <div className="hero-bg-grid" />
        <div className="container page-hero-container">
          <div className="section-badge" style={{ marginBottom: '1.5rem' }}>
            <Users size={14} />
            About Us
          </div>
          <h1 className="page-hero-title">
            We build the AI systems<br /><span className="gradient-text">other consultants only talk about</span>
          </h1>
          <p className="page-hero-subtitle">
            We're a small team of AI engineers and business operators who believe that autonomous AI shouldn't be a luxury.
            Every growing company deserves a workforce that scales without headcount.
          </p>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="section-badge" style={{ marginBottom: '1.5rem' }}>
                <Target size={14} />
                Our Mission
              </div>
              <h2>Making AI automation <span className="gradient-text">accessible</span></h2>
              <p className="mission-text">
                The biggest companies in the world have been automating work with AI for years.
                But the tools, know-how, and implementation capacity have historically been locked
                behind enterprise budgets and enterprise timelines.
              </p>
              <p className="mission-text">
                We started this company to change that. Our mission is to give every growing business —
                regardless of technical team size — access to the same level of AI capability that
                Fortune 500 companies have been deploying internally.
              </p>
              <p className="mission-text">
                Not through generic tools. Through custom, production-ready systems built specifically
                for your workflows and your data.
              </p>
            </div>
            <div className="mission-stats">
              {[
                { value: '50+', label: 'Companies served' },
                { value: '12', label: 'Industries covered' },
                { value: '10K+', label: 'Hours automated / month' },
                { value: '4 yrs', label: 'In AI automation' },
              ].map((s, i) => (
                <div key={i} className="mission-stat glass-card">
                  <div className="stat-value"><span className="gradient-text">{s.value}</span></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Heart size={14} />
              Our Values
            </div>
            <h2>How we <span className="gradient-text">operate</span></h2>
            <p className="section-subtitle">These aren't wall posters. They're the principles that drive every client engagement.</p>
          </div>
          <div className="values-grid">
            {VALUES.map((val, i) => (
              <div key={i} className="value-card glass-card">
                <div className={`bento-icon-wrap ${val.color}`}>{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Users size={14} />
              The Team
            </div>
            <h2>The people behind <span className="gradient-text">your AI workforce</span></h2>
          </div>
          <div className="team-grid">
            {TEAM.map((member, i) => (
              <div key={i} className="team-card glass-card">
                <div className={`team-avatar ${member.color}`}>{member.initial}</div>
                <h3>{member.name}</h3>
                <div className="team-title">{member.title}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Zap size={14} />
              Our Story
            </div>
            <h2>How we got <span className="gradient-text">here</span></h2>
          </div>
          <div className="milestones-list">
            {MILESTONES.map((m, i) => (
              <div key={i} className="milestone-item">
                <div className="milestone-year gradient-text">{m.year}</div>
                <div className="milestone-connector" />
                <div className="milestone-event glass-card">
                  <CheckCircle2 size={16} className="sdc-check" />
                  <p>{m.event}</p>
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
            <div className="section-badge"><Shield size={14} /> Work With Us</div>
            <h2>Ready to join our <span className="gradient-text">client roster?</span></h2>
            <p className="cta-subtitle">
              Let's have a conversation about where AI can create the most impact for your business.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Call <ArrowRight size={18} />
              </Link>
              <Link to="/results" className="btn btn-secondary btn-lg">
                See Our Results <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
