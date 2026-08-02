import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { ExternalLink, TrendingUp, BarChart2, Activity, Layers, Landmark } from 'lucide-react'

function IconGithub({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const PROJECTS = [
  {
    title: 'Multi-Asset Exotic Derivatives Pricing Model',
    description:
      'Simulated correlated GBM paths via Cholesky factorization of the implied correlation matrix under a 50% barrier, quarterly autocall, and memory-coupon structure, reaching a Monte Carlo standard error of $0.74 on a $978 price per $1,000 face. Reconciled payoff logic against a static decomposition (zero-coupon bond, short worst-of down-and-in put, autocall strip) and estimated delta and vega by bump-and-revalue under common random numbers to suppress finite-difference noise.',
    icon: BarChart2,
    color: 'from-rust to-rust-dark',
    accent: 'rust',
    tags: ['Python', 'Monte Carlo', 'Cholesky', 'GBM', 'Autocallable', 'Greeks'],
    metrics: [
      { label: 'MC Std Error', value: '$0.74' },
      { label: 'Price', value: '$978' },
      { label: 'Barrier', value: '50%' },
    ],
    github: null,
    demo: null,
  },
  {
    title: 'GARCH Volatility Modeling & Tail Risk (VaR/ES) Framework',
    description:
      'Derived and optimized the GARCH(1,1) log-likelihood with stationarity and positivity constraints through reparameterization, reconciling estimates to fGarch and tseries to 4 decimal places. Backtested 95% Value at Risk with Kupiec unconditional-coverage and Christoffersen independence tests, comparing exception counts and clustering across GARCH, historical-simulation, and delta-normal estimators.',
    icon: Activity,
    color: 'from-steel to-steel-dark',
    accent: 'steel',
    tags: ['R', 'GARCH', 'MLE', 'VaR', 'Kupiec Test', 'Christoffersen Test'],
    metrics: [
      { label: 'Model', value: 'GARCH(1,1)' },
      { label: 'VaR Conf.', value: '95%' },
      { label: 'Precision', value: '4 decimals' },
    ],
    github: null,
    demo: null,
  },
  {
    title: 'Alternative Data Trading Strategy & Ablation Testing',
    description:
      'Built an alternative-data equity strategy on satellite-derived production signals for Permian Basin E&P names, with LLM agents confined to qualitative roles behind a deterministic Python core so P&L stayed reproducible and auditable. Pre-registered the ablation set before evaluating results to separate genuine signal from specification search, reporting a 0.35 per-trade Sharpe and surfacing the gap between an 83% hit rate and risk-adjusted return.',
    icon: TrendingUp,
    color: 'from-accent to-accent-dark',
    accent: 'accent',
    tags: ['Python', 'Satellite Data', 'LLM Agents', 'Backtesting', 'Ablation Testing'],
    metrics: [
      { label: 'Hit Rate', value: '83%' },
      { label: 'Sharpe', value: '0.35' },
      { label: 'Basin', value: 'Permian' },
    ],
    github: 'https://github.com/pallavikochar/oil-gas-multi-agent-trading-system',
    demo: null,
  },
  {
    title: 'Multi-Agent Systematic Equity Research & Backtesting',
    description:
      'Built a hybrid vector-keyword retrieval pipeline (bge-base, HNSW index) over 160K SEC filing chunks with citation scoring, holding warm-query latency to ~740ms. Orchestrated 11 specialized research agents over filing evidence; a 10-year historical backtest yielded 13.9% CAGR and 2.1% alpha over the benchmark index.',
    icon: Layers,
    color: 'from-market to-market-dark',
    accent: 'market',
    tags: ['Python', 'Multi-Agent', 'HNSW', 'RAG', 'SEC Filings', 'Backtesting'],
    metrics: [
      { label: 'Agents', value: '11' },
      { label: 'CAGR', value: '13.9%' },
      { label: 'Alpha', value: '2.1%' },
    ],
    github: 'https://github.com/pallavikochar/stock-selection-topdown-method',
    demo: null,
  },
  {
    title: 'Interest Rate & Prepayment Modeling | Busey Bank Practicum',
    description:
      "Modeled conditional prepayment rate on bank loan-tape data with XGBoost across borrower and loan-characteristic segments, delivering results to Busey Bank's analytics team. Diagnosed target leakage in the CPR construction — prior and query balances mechanically embedded in the label — rebuilt the feature set, and flagged an inflated segment R² that would not have replicated out-of-sample.",
    icon: Landmark,
    color: 'from-rust to-rust-dark',
    accent: 'rust',
    tags: ['XGBoost', 'Python', 'Loan Tape', 'Target Leakage', 'Prepayment Modeling'],
    metrics: [
      { label: 'Model', value: 'XGBoost' },
      { label: 'Target', value: 'CPR' },
      { label: 'Partner', value: 'Busey Bank' },
    ],
    github: null,
    demo: null,
  },
]

const ACCENT_STYLES = {
  accent: {
    dark: { badge: 'bg-accent/10 text-accent-light border border-accent/20', metric: 'text-accent-light' },
    light: { badge: 'bg-accent/10 text-accent-dark border border-accent/30', metric: 'text-accent-dark' },
  },
  market: {
    dark: { badge: 'bg-market/10 text-market-light border border-market/20', metric: 'text-market-light' },
    light: { badge: 'bg-market/10 text-market-dark border border-market/30', metric: 'text-market-dark' },
  },
  steel: {
    dark: { badge: 'bg-steel/10 text-steel-light border border-steel/20', metric: 'text-steel-light' },
    light: { badge: 'bg-steel/10 text-steel-dark border border-steel/30', metric: 'text-steel-dark' },
  },
  rust: {
    dark: { badge: 'bg-rust/10 text-rust-light border border-rust/20', metric: 'text-rust-light' },
    light: { badge: 'bg-rust/10 text-rust-dark border border-rust/30', metric: 'text-rust-dark' },
  },
}

function ProjectCard({ project, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = project.icon
  const styles = ACCENT_STYLES[project.accent][darkMode ? 'dark' : 'light']

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className={`group rounded-2xl border overflow-hidden card-hover flex flex-col ${
        darkMode
          ? 'border-accent/10 bg-ink-900'
          : 'border-stone-200 bg-white shadow-sm'
      }`}
    >


      <div className="p-6 flex flex-col flex-1">
        {/* Icon + title */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} flex-shrink-0`}>
            <Icon size={18} className="text-white" />
          </div>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <h3 className={`text-base font-semibold leading-snug ${darkMode ? 'text-white' : 'text-stone-900'}`}>
              {project.title}
            </h3>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-shrink-0 transition-colors ${darkMode ? 'text-stone-500 hover:text-white' : 'text-stone-400 hover:text-stone-900'}`}
              >
                <IconGithub size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="flex gap-4 mb-4">
          {project.metrics.map(m => (
            <div key={m.label}>
              <div className={`text-xs font-mono font-semibold ${styles.metric}`}>{m.value}</div>
              <div className={`text-xs mt-0.5 ${darkMode ? 'text-stone-600' : 'text-stone-400'}`}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed flex-1 mb-4 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(t => (
            <span key={t} className={`px-2 py-0.5 text-xs font-mono rounded ${styles.badge}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.github || project.demo) && (
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-current/5">
          {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              darkMode ? 'text-stone-400 hover:text-accent' : 'text-stone-500 hover:text-accent'
            }`}
          >
            <IconGithub size={13} />
            GitHub
          </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                darkMode ? 'text-stone-400 hover:text-accent' : 'text-stone-500 hover:text-accent'
              }`}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects({ darkMode }) {
  return (
    <SectionWrapper id="projects" className={darkMode ? 'bg-ink-950' : 'bg-stone-50'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Quantitative research, derivative pricing, and AI-driven systems. All results are real."
          darkMode={darkMode}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} darkMode={darkMode} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-8 text-sm font-mono text-center ${darkMode ? 'text-stone-600' : 'text-stone-400'}`}
        >
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
