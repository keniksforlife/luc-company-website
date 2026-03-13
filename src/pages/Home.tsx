import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, Bot, Zap, Brain, Workflow,
  TrendingUp, Shield, Clock, Users, ChevronRight,
  Sparkles, Network, Database, Code2, MessageSquare,
  CheckCircle2, Star
} from 'lucide-react'

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="stat-card glass-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="stat-value">
        <span className="gradient-text">{count}{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const INTEGRATIONS = [
  { name: 'OpenAI', icon: '⚡' },
  { name: 'Anthropic', icon: '🧠' },
  { name: 'Slack', icon: '💬' },
  { name: 'HubSpot', icon: '🎯' },
  { name: 'Salesforce', icon: '☁️' },
  { name: 'Notion', icon: '📝' },
  { name: 'Zapier', icon: '🔗' },
  { name: 'Google Sheets', icon: '📊' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Jira', icon: '🗂️' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Twilio', icon: '📱' },
]

const TESTIMONIALS = [
  {
    quote: "They mapped our entire sales pipeline in one session and deployed an AI SDR that books 15 qualified calls a week. Remarkable ROI.",
    author: "Sarah K.",
    title: "CEO, GrowthStack",
    stars: 5
  },
  {
    quote: "Our ops team used to spend 3 days a week on manual reporting. Now it's automated. We reinvested those hours into product.",
    author: "Marcus R.",
    title: "COO, NexaOps",
    stars: 5
  },
  {
    quote: "The blueprint approach is genius — we had our first AI agent running in the same week of the kickoff call.",
    author: "Priya M.",
    title: "Head of Growth, Launchbase",
    stars: 5
  }
]

export function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg-aurora" />
        <div className="hero-bg-grid" />
        <div className="hero-spotlight" />

        <div className="container hero-container">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            AI Automation Consulting
          </div>

          <h1>
            Replace Repetitive Work<br />
            with <span className="gradient-text">Autonomous AI Agents</span>
          </h1>

          <p className="hero-subtitle">
            We design, build, and deploy custom AI workforces for SMEs and startups.
            From strategy to production in weeks — not months.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Strategy Call <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Blueprints
            </Link>
          </div>

          <div className="hero-proof">
            <div className="hero-proof-avatars">
              {['S', 'M', 'P', 'J'].map((l, i) => (
                <div key={i} className="avatar" style={{ zIndex: 4 - i }}>{l}</div>
              ))}
            </div>
            <span className="hero-proof-text">
              Trusted by <strong>50+ growing companies</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <StatCard value={10000} suffix="+" label="Hours Automated Per Month" delay={0} />
            <StatCard value={320} suffix="%" label="Average ROI on First Blueprint" delay={100} />
            <StatCard value={14} suffix=" days" label="Average Time to First AI Agent" delay={200} />
            <StatCard value={50} suffix="+" label="Companies Transformed" delay={300} />
          </div>
        </div>
      </section>

      {/* ── SERVICES (Bento Grid) ────────────────────────────── */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} />
              What We Build
            </div>
            <h2>Everything you need to run<br />on <span className="gradient-text">AI autopilot</span></h2>
            <p className="section-subtitle">From strategy to autonomous systems — we handle the full stack of your AI transformation.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-card bento-featured glass-card">
              <div className="bento-icon-wrap indigo">
                <Brain size={28} />
              </div>
              <h3>Expert AI Strategy</h3>
              <p>Customized roadmaps that identify your highest-ROI automation opportunities. We've mapped hundreds of workflows across sales, ops, and support.</p>
              <div className="bento-tags">
                <span className="tag">Workflow Audit</span>
                <span className="tag">ROI Mapping</span>
                <span className="tag">Roadmap</span>
              </div>
            </div>

            <div className="bento-card bento-tall glass-card">
              <div className="bento-icon-wrap cyan">
                <Bot size={28} />
              </div>
              <h3>Autonomous Agent Systems</h3>
              <p>Custom AI workforces that operate inside your business 24/7. Governable, scalable, and deeply integrated with your existing stack.</p>
              <div className="bento-tags">
                <span className="tag">Multi-Agent</span>
                <span className="tag">24/7 Operation</span>
              </div>
            </div>

            <div className="bento-card glass-card">
              <div className="bento-icon-wrap purple">
                <Zap size={24} />
              </div>
              <h3>Battle-Tested Blueprints</h3>
              <p>Pre-built automation frameworks. Deploy in days.</p>
            </div>

            <div className="bento-card glass-card">
              <div className="bento-icon-wrap teal">
                <Workflow size={24} />
              </div>
              <h3>Process Automation</h3>
              <p>Connect any tool, automate any workflow, eliminate any bottleneck.</p>
            </div>

            <div className="bento-card glass-card">
              <div className="bento-icon-wrap amber">
                <TrendingUp size={24} />
              </div>
              <h3>Continuous Optimization</h3>
              <p>Monthly reviews to tune your agents for maximum performance.</p>
            </div>

            <div className="bento-card bento-wide glass-card bento-cta-card">
              <div className="bento-cta-content">
                <div>
                  <h3>Not sure where to start?</h3>
                  <p>Book a free 30-minute Discovery Call. We'll identify your top 3 automation wins — no commitment required.</p>
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Get Started Free <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-secondary">
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Network size={14} />
              The Process
            </div>
            <h2>From idea to <span className="gradient-text">live AI system</span></h2>
            <p className="section-subtitle">A systematic, proven path to an AI-powered organization.</p>
          </div>

          <div className="process-grid">
            {[
              {
                num: '01',
                icon: <BarChart3 size={22} />,
                title: 'Discovery & Audit',
                desc: 'We map your existing workflows, identify bottlenecks, and score each process for automation potential and ROI.',
                color: 'indigo'
              },
              {
                num: '02',
                icon: <Code2 size={22} />,
                title: 'Strategic Blueprint',
                desc: 'A custom architecture document defining your AI agent design, integrations, data flow, and measurable targets.',
                color: 'cyan'
              },
              {
                num: '03',
                icon: <Bot size={22} />,
                title: 'Agent Deployment',
                desc: 'Our engineers build, test, and integrate your autonomous workforce — connected to your existing tools via our Paperclip platform.',
                color: 'purple'
              },
              {
                num: '04',
                icon: <TrendingUp size={22} />,
                title: 'Scale & Optimize',
                desc: 'Continuous monitoring, performance reviews, and iterative improvements to drive compounding business value.',
                color: 'teal'
              },
            ].map((step, i) => (
              <div key={i} className="process-card glass-card">
                <div className="process-num">{step.num}</div>
                <div className={`process-icon-wrap ${step.color}`}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/how-it-works" className="btn btn-secondary">
              Learn More About Our Process <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS MARQUEE ──────────────────────────────── */}
      <section className="integrations">
        <div className="container">
          <p className="integrations-label">Connects with your entire stack</p>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...INTEGRATIONS, ...INTEGRATIONS].map((item, i) => (
              <div key={i} className="marquee-item glass-card">
                <span className="marquee-icon">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS / TESTIMONIALS ───────────────────────────── */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Star size={14} />
              Client Results
            </div>
            <h2>Real outcomes from <span className="gradient-text">real companies</span></h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
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
                    <div className="testimonial-title">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/results" className="btn btn-secondary">
              See All Case Studies <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <div className="section-badge">
                <Shield size={14} />
                Why Choose Us
              </div>
              <h2>Built for <span className="gradient-text">results</span>,<br />not experiments</h2>
              <p className="why-us-desc">
                Most AI consultancies pitch slides. We ship working systems.
                Every engagement ends with live, production AI agents generating measurable value for your business.
              </p>

              <div className="why-us-features">
                {[
                  { icon: <Clock size={18} />, text: 'First agent live within 14 days' },
                  { icon: <CheckCircle2 size={18} />, text: 'Fixed-scope engagements, no scope creep' },
                  { icon: <Database size={18} />, text: 'Your data stays in your infrastructure' },
                  { icon: <Users size={18} />, text: 'Dedicated engineer, not a ticket queue' },
                  { icon: <MessageSquare size={18} />, text: 'Transparent, async-first communication' },
                ].map((f, i) => (
                  <div key={i} className="why-feature">
                    <div className="why-feature-icon">{f.icon}</div>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-us-visual">
              <div className="terminal-card glass-card">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="terminal-title">agent_deploy.sh</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="term-prompt">$</span>
                    <span className="term-cmd"> paperclip deploy --blueprint lead-gen</span>
                  </div>
                  <div className="terminal-line term-output">
                    <span className="term-success">✓</span> Blueprint loaded: <span className="term-val">lead-gen v2.4</span>
                  </div>
                  <div className="terminal-line term-output">
                    <span className="term-success">✓</span> Agents initialized: <span className="term-val">3 agents</span>
                  </div>
                  <div className="terminal-line term-output">
                    <span className="term-success">✓</span> Integrations: <span className="term-val">HubSpot, Slack, Gmail</span>
                  </div>
                  <div className="terminal-line term-output">
                    <span className="term-success">✓</span> Health check: <span className="term-val">all systems go</span>
                  </div>
                  <div className="terminal-line">
                    <span className="term-prompt">$</span>
                    <span className="term-cmd term-blink"> _</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-bg-aurora" />
        <div className="container">
          <div className="cta-content">
            <div className="section-badge">
              <Zap size={14} />
              Get Started Today
            </div>
            <h2>Ready to build your<br /><span className="gradient-text">autonomous workforce?</span></h2>
            <p className="cta-subtitle">
              Book a free 30-minute strategy call. We'll identify your top automation wins
              and outline a concrete path to deployment.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Strategy Call <ArrowRight size={18} />
              </Link>
              <div className="cta-meta">
                <CheckCircle2 size={16} className="cta-check" />
                No commitment required
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
