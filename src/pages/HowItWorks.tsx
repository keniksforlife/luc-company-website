import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, Bot, TrendingUp, Code2,
  MessageSquare, Calendar, FileText, CheckCircle2,
  Clock, Users, ChevronRight, Network, Zap
} from 'lucide-react'

const PHASES = [
  {
    num: '01',
    icon: <BarChart3 size={28} />,
    color: 'indigo',
    title: 'Discovery & Audit',
    duration: '1–2 days',
    description: 'We start by understanding your business deeply — not just what you do, but how work actually flows through your organization.',
    steps: [
      'Kickoff call with key stakeholders (CEO, ops lead, tech lead)',
      'Async workflow documentation exercise using our structured template',
      'Tool & integration inventory review',
      'Manual task time-and-cost analysis',
      'ROI scoring of top automation candidates',
    ],
    deliverable: 'Automation Opportunity Report with prioritized list of high-ROI workflows and rough cost/benefit estimates.',
  },
  {
    num: '02',
    icon: <Code2 size={28} />,
    color: 'cyan',
    title: 'Strategic Blueprint',
    duration: '3–5 days',
    description: 'Armed with the audit data, we architect your AI system. This phase produces the technical specification that guides every decision in the build.',
    steps: [
      'Agent role design (who does what, when, and how)',
      'Integration architecture diagram',
      'Data flow and security model',
      'Human-in-the-loop escalation design',
      'Success metrics and KPI framework',
    ],
    deliverable: 'Blueprint Document: a full technical spec covering agent architecture, integrations, governance rules, and measurable outcomes.',
  },
  {
    num: '03',
    icon: <Bot size={28} />,
    color: 'purple',
    title: 'Agent Deployment',
    duration: '5–14 days',
    description: 'We build and deploy your first agent. Speed is a feature here — our goal is to get something working in your hands as fast as possible so you can see real results.',
    steps: [
      'Environment setup and integration connections',
      'Agent scaffolding and prompt engineering',
      'Unit and integration testing against your real data',
      'Staging deployment with stakeholder review',
      'Production rollout with monitoring enabled',
    ],
    deliverable: 'Live agent system in production, with a monitoring dashboard, incident runbook, and handoff documentation.',
  },
  {
    num: '04',
    icon: <TrendingUp size={28} />,
    color: 'teal',
    title: 'Scale & Optimize',
    duration: 'Ongoing',
    description: 'The launch is just the beginning. We continuously improve your agents, add new automations, and expand coverage as your business grows.',
    steps: [
      'Weekly performance metrics review',
      'Prompt and model optimization cycles',
      'New automation rollouts (2 per quarter on retainer)',
      'Quarterly roadmap session to plan next phase',
      'Team training as new staff join',
    ],
    deliverable: 'A compounding automation capability that saves more time and generates more value each month.',
  },
]

const FAQS = [
  {
    q: 'How quickly can we expect results?',
    a: 'Most clients see their first automation live within 5–14 days. The Discovery & Blueprint phase can run in parallel with setup, so there\'s no long waiting period before value appears.',
  },
  {
    q: 'Do we need a technical team to work with you?',
    a: 'No. We handle all the technical implementation. We do need a business stakeholder who understands your workflows and can answer questions about priorities and edge cases.',
  },
  {
    q: 'What tools do you integrate with?',
    a: 'We integrate with most popular SaaS tools — CRMs (HubSpot, Salesforce), communication (Slack, email), databases, Google Workspace, Microsoft 365, Notion, Airtable, and custom APIs. If you use it, we can likely connect to it.',
  },
  {
    q: 'What happens if an agent makes a mistake?',
    a: 'Every system we build includes human-in-the-loop checkpoints for high-stakes decisions, a full audit trail, and alert triggers for anomalies. Agents are scoped conservatively at first, then given more autonomy as confidence grows.',
  },
  {
    q: 'Is our data secure?',
    a: 'Yes. By default, we deploy agents in your own infrastructure so data never leaves your environment. For cloud deployments, we follow strict data minimization and encryption standards.',
  },
  {
    q: 'What\'s the difference between a Blueprint and a custom build?',
    a: 'Blueprints are pre-built automation patterns that we configure to your stack — faster and cheaper. Custom builds are designed from scratch for complex, unique workflows. Most clients start with a Blueprint and evolve to custom systems.',
  },
]

export function HowItWorks() {
  return (
    <main className="page-main">
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="hero-bg-aurora" />
        <div className="hero-bg-grid" />
        <div className="container page-hero-container">
          <div className="section-badge" style={{ marginBottom: '1.5rem' }}>
            <Network size={14} />
            The Process
          </div>
          <h1 className="page-hero-title">
            From kickoff to<br /><span className="gradient-text">live AI system in weeks</span>
          </h1>
          <p className="page-hero-subtitle">
            A systematic, battle-tested process that gets working automation in your hands fast —
            with zero tech-team dependency on your side.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start the Process <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <h2>The four phases of <span className="gradient-text">transformation</span></h2>
          </div>
          <div className="phases-list">
            {PHASES.map((phase, i) => (
              <div key={i} className="phase-item">
                <div className="phase-left">
                  <div className="phase-num-wrap">
                    <div className={`process-icon-wrap ${phase.color} phase-icon`}>
                      {phase.icon}
                    </div>
                    <span className="phase-num">{phase.num}</span>
                  </div>
                  {i < PHASES.length - 1 && <div className="phase-connector" />}
                </div>
                <div className="phase-right glass-card">
                  <div className="phase-header">
                    <h3>{phase.title}</h3>
                    <span className="phase-duration">
                      <Clock size={13} />
                      {phase.duration}
                    </span>
                  </div>
                  <p className="phase-desc">{phase.description}</p>
                  <ul className="phase-steps">
                    {phase.steps.map((s, si) => (
                      <li key={si}>
                        <CheckCircle2 size={14} className="sdc-check" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="sdc-outcome">
                    <FileText size={14} />
                    <strong>Deliverable:</strong>&nbsp;{phase.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT TIMELINE ───────────────────────────── */}
      <section className="section-pad" style={{ background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Calendar size={14} />
              Sample Timeline
            </div>
            <h2>What the first <span className="gradient-text">30 days look like</span></h2>
          </div>
          <div className="timeline-grid">
            {[
              { day: 'Day 1', title: 'Kickoff call', desc: 'Intro, goals alignment, workflow walkthrough with your team.' },
              { day: 'Day 2–3', title: 'Audit & scoring', desc: 'We document your processes and score them for automation potential.' },
              { day: 'Day 4–6', title: 'Blueprint review', desc: 'We present the architecture. You review, give feedback, we finalize.' },
              { day: 'Day 7–10', title: 'Build sprint', desc: 'Engineering begins. Daily async updates. First agent wired up.' },
              { day: 'Day 11–13', title: 'Staging & review', desc: 'You test the system in a staging environment. Final adjustments.' },
              { day: 'Day 14', title: 'Go live', desc: 'Production deployment. Monitoring enabled. Your AI agent is working.' },
              { day: 'Week 3–4', title: 'Iteration', desc: 'We monitor performance, tune behavior, and address any edge cases.' },
              { day: 'Month 2+', title: 'Expand', desc: 'Roll out the next automation on your priority list.' },
            ].map((item, i) => (
              <div key={i} className="timeline-item glass-card">
                <div className="timeline-day">{item.day}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU NEED ─────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="what-you-need-grid">
            <div className="glass-card wyn-card">
              <Users size={28} className="wyn-icon cyan" />
              <h3>What you bring</h3>
              <ul className="wyn-list">
                <li><CheckCircle2 size={14} className="sdc-check" /> A business stakeholder who knows your workflows</li>
                <li><CheckCircle2 size={14} className="sdc-check" /> Access to the tools you want automated</li>
                <li><CheckCircle2 size={14} className="sdc-check" /> 2–3 hours in week one for kickoff and review</li>
                <li><CheckCircle2 size={14} className="sdc-check" /> Feedback during staging review</li>
              </ul>
            </div>
            <div className="glass-card wyn-card">
              <Bot size={28} className="wyn-icon indigo" />
              <h3>What we handle</h3>
              <ul className="wyn-list">
                <li><CheckCircle2 size={14} className="sdc-check" /> All technical implementation</li>
                <li><CheckCircle2 size={14} className="sdc-check" /> Integration setup and authentication</li>
                <li><CheckCircle2 size={14} className="sdc-check" /> Agent design, prompt engineering, testing</li>
                <li><CheckCircle2 size={14} className="sdc-check" /> Deployment, monitoring, and documentation</li>
                <li><CheckCircle2 size={14} className="sdc-check" /> Ongoing optimization and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <MessageSquare size={14} />
              FAQ
            </div>
            <h2>Common <span className="gradient-text">questions</span></h2>
          </div>
          <div className="faq-grid">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item glass-card">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
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
            <div className="section-badge"><Zap size={14} /> Start Now</div>
            <h2>Ready to kick off <span className="gradient-text">your first AI project?</span></h2>
            <p className="cta-subtitle">
              Book a free 30-minute call. We'll walk you through what the process looks like for your specific business.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Call <ArrowRight size={18} />
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
