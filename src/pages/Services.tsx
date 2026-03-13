import { Link } from 'react-router-dom'
import {
  ArrowRight, Brain, Bot, Zap, Workflow, TrendingUp,
  BarChart3, CheckCircle2, Shield, Clock, Layers, Target,
  Sparkles, ChevronRight
} from 'lucide-react'

const SERVICES = [
  {
    icon: <Brain size={32} />,
    color: 'indigo',
    title: 'AI Strategy & Consulting',
    subtitle: 'Clarity before code',
    description: 'We start where it matters most — your business. Our consultants map every workflow, identify your highest-ROI automation targets, and produce a concrete, prioritized roadmap that your team can execute against.',
    features: [
      'Full workflow audit across sales, ops, support, and finance',
      'ROI scoring and automation opportunity ranking',
      'Custom AI architecture blueprint',
      'Integration dependency mapping',
      'Change management and team enablement plan',
    ],
    outcome: 'Walk away with a board-ready AI strategy document and your top 3 quick wins identified.',
  },
  {
    icon: <Bot size={32} />,
    color: 'cyan',
    title: 'Autonomous Agent Systems',
    subtitle: 'Your AI workforce, built and deployed',
    description: 'We design and deploy multi-agent systems that operate inside your business 24/7. Each agent is purpose-built for a specific workflow — lead qualification, invoice processing, customer onboarding, support triage, and more.',
    features: [
      'Multi-agent orchestration with role-based governance',
      'Tool integration (CRM, email, Slack, databases)',
      'Human-in-the-loop escalation flows',
      'Audit trail and observability dashboard',
      'Iterative training on your business data',
    ],
    outcome: 'A live agent workforce running in production, with documented handoff protocols and monitoring.',
  },
  {
    icon: <Zap size={32} />,
    color: 'purple',
    title: 'Battle-Tested Blueprints',
    subtitle: 'Deploy proven automations in days',
    description: 'Skip the trial-and-error phase. Our blueprint library contains pre-built automation frameworks for the most common high-value workflows — tested across dozens of companies and refined with real-world data.',
    features: [
      'Lead generation & qualification agent',
      'AI SDR (Sales Development Representative)',
      'Customer support triage & response',
      'Invoice & document processing automation',
      'Weekly business intelligence reporting',
      'Employee onboarding orchestration',
    ],
    outcome: 'First blueprint live in 5 business days. Proven ROI benchmarks included.',
  },
  {
    icon: <Workflow size={32} />,
    color: 'teal',
    title: 'Process Automation',
    subtitle: 'Connect everything, automate anything',
    description: "If it's repetitive and rule-based, it shouldn't require a human. We integrate your SaaS tools, databases, and APIs into seamless automated pipelines that eliminate manual data entry and handoffs.",
    features: [
      'Zapier, Make, and n8n workflow design',
      'API integration and custom middleware',
      'Data sync between CRM, ERP, and databases',
      'Automated reporting and alerting',
      'Document generation and e-signature flows',
    ],
    outcome: 'Measurable reduction in manual task hours within the first 30 days.',
  },
  {
    icon: <TrendingUp size={32} />,
    color: 'amber',
    title: 'Continuous Optimization',
    subtitle: 'Compounding value over time',
    description: 'AI systems improve with data and iteration. Our optimization retainer keeps your agents performing at peak efficiency — tuning prompts, retraining models, and expanding automation coverage as your business grows.',
    features: [
      'Monthly performance reviews and KPI tracking',
      'Prompt engineering and model fine-tuning',
      'New integration rollouts',
      'Incident response and system health monitoring',
      'Quarterly roadmap reviews',
    ],
    outcome: 'Continuous improvement cycle that compounds ROI month over month.',
  },
  {
    icon: <BarChart3 size={32} />,
    color: 'rose',
    title: 'AI Training & Enablement',
    subtitle: 'Empower your team to think in AI',
    description: 'Technology only creates value when your team knows how to use it. Our enablement program transforms your staff from AI skeptics into confident operators who can extend and maintain your automation stack.',
    features: [
      'Executive AI literacy workshops',
      'Hands-on prompt engineering training',
      'Agent management and monitoring protocols',
      'Internal AI governance framework',
      'Custom documentation and runbooks',
    ],
    outcome: 'A self-sufficient team that can extend your AI stack without depending on consultants.',
  },
]

const PRICING_TIERS = [
  {
    name: 'Blueprint',
    price: '$4,500',
    period: 'one-time',
    description: 'One pre-built blueprint deployed and configured for your business.',
    features: [
      '1 blueprint from our library',
      'Configuration to your stack',
      '2 weeks of hypercare support',
      'Documentation and runbook',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Full Deployment',
    price: '$12,000',
    period: 'starting from',
    description: 'Custom agent system built from scratch and deployed to production.',
    features: [
      'Discovery & strategy workshop',
      'Custom multi-agent architecture',
      'Full integration build-out',
      '30 days of post-launch support',
      'Monitoring dashboard setup',
    ],
    cta: 'Book a Call',
    highlight: true,
  },
  {
    name: 'Growth Retainer',
    price: '$3,500',
    period: 'per month',
    description: 'Ongoing optimization, new automations, and dedicated support.',
    features: [
      'Everything in Full Deployment',
      'Monthly performance reviews',
      '2 new automations per quarter',
      'Priority incident response',
      'Quarterly roadmap sessions',
    ],
    cta: 'Talk to Us',
    highlight: false,
  },
]

export function Services() {
  return (
    <main className="page-main">
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="hero-bg-aurora" />
        <div className="hero-bg-grid" />
        <div className="container page-hero-container">
          <div className="section-badge" style={{ marginBottom: '1.5rem' }}>
            <Sparkles size={14} />
            What We Build
          </div>
          <h1 className="page-hero-title">
            Services built for<br /><span className="gradient-text">real business outcomes</span>
          </h1>
          <p className="page-hero-subtitle">
            Every engagement is scoped to deliver measurable ROI. No vague "AI transformation" promises —
            just working systems that save time and drive revenue.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="services-detail-grid">
            {SERVICES.map((svc, i) => (
              <div key={i} className="service-detail-card glass-card">
                <div className="sdc-header">
                  <div className={`bento-icon-wrap ${svc.color} sdc-icon`}>
                    {svc.icon}
                  </div>
                  <div>
                    <h3>{svc.title}</h3>
                    <p className="sdc-subtitle">{svc.subtitle}</p>
                  </div>
                </div>
                <p className="sdc-desc">{svc.description}</p>
                <ul className="sdc-features">
                  {svc.features.map((f, fi) => (
                    <li key={fi}>
                      <CheckCircle2 size={15} className="sdc-check" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="sdc-outcome">
                  <Target size={15} />
                  <span>{svc.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────── */}
      <section className="section-pad pricing-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Layers size={14} />
              Pricing
            </div>
            <h2>Simple, <span className="gradient-text">transparent pricing</span></h2>
            <p className="section-subtitle">No hidden fees, no surprise invoices. Pick the engagement model that fits your stage.</p>
          </div>

          <div className="pricing-grid">
            {PRICING_TIERS.map((tier, i) => (
              <div key={i} className={`pricing-card glass-card${tier.highlight ? ' pricing-highlighted' : ''}`}>
                {tier.highlight && <div className="pricing-badge">Most Popular</div>}
                <h3 className="pricing-name">{tier.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-amount gradient-text">{tier.price}</span>
                  <span className="pricing-period">{tier.period}</span>
                </div>
                <p className="pricing-desc">{tier.description}</p>
                <ul className="pricing-features">
                  {tier.features.map((f, fi) => (
                    <li key={fi}>
                      <CheckCircle2 size={15} className="sdc-check" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${tier.highlight ? 'btn-primary' : 'btn-secondary'} pricing-cta`}>
                  {tier.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <p className="pricing-note">
            All prices in USD. Custom enterprise packages available —{' '}
            <Link to="/contact" className="text-link">talk to our team</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-bg-aurora" />
        <div className="container">
          <div className="cta-content">
            <div className="section-badge">
              <Shield size={14} />
              No Commitment
            </div>
            <h2>Start with a <span className="gradient-text">free strategy call</span></h2>
            <p className="cta-subtitle">
              30 minutes. We'll map your top automation opportunities and give you a concrete recommendation —
              whether you hire us or not.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Free Strategy Call <ArrowRight size={18} />
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-lg">
                See How It Works <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
