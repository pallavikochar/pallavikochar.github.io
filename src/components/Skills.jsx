import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, TrendingUp, Brain, Bot } from 'lucide-react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const SKILL_GROUPS = [
  {
    category: 'Technical',
    icon: Code2,
    color: 'from-steel to-steel-dark',
    tagColor: {
      dark: 'bg-steel/10 text-steel-light border-steel/20',
      light: 'bg-steel/10 text-steel-dark border-steel/30',
    },
    skills: [
      'Python', 'SQL (SQL Server, PostgreSQL)', 'R', 'C++', 'C# / .NET',
      'AWS (S3, Lambda, Glue, ECS)', 'Apache Kafka', 'Docker',
      'Git', 'Bloomberg', 'Capital IQ',
    ],
  },
  {
    category: 'Finance & Quant',
    icon: TrendingUp,
    color: 'from-accent to-accent-dark',
    tagColor: {
      dark: 'bg-accent/10 text-accent-light border-accent/20',
      light: 'bg-accent/10 text-accent-dark border-accent/30',
    },
    skills: [
      'Monte Carlo Simulation', 'Stochastic Modeling', 'GARCH', 'VaR',
      'Expected Shortfall', 'MLE', 'Black-Scholes', 'Binomial Trees',
      'Portfolio Optimization', 'Variance Reduction', 'Cross-Validation', 'Risk Modeling',
    ],
  },
  {
    category: 'Machine Learning',
    icon: Brain,
    color: 'from-rust to-rust-dark',
    tagColor: {
      dark: 'bg-rust/10 text-rust-light border-rust/20',
      light: 'bg-rust/10 text-rust-dark border-rust/30',
    },
    skills: [
      'Probability & Stochastic Processes', 'Linear Algebra', 'Time Series Analysis',
      'XGBoost', 'LightGBM', 'Neural Networks', 'Bayesian Optimization',
      'Explainable AI (SHAP)', 'Logistic Regression',
    ],
  },
  {
    category: 'AI Tools & Systems',
    icon: Bot,
    color: 'from-market to-market-dark',
    tagColor: {
      dark: 'bg-market/10 text-market-light border-market/20',
      light: 'bg-market/10 text-market-dark border-market/30',
    },
    skills: [
      'Agentic AI', 'GenAI', 'Anthropic API / Claude Code',
      'Multi-Agent Orchestration', 'MCP (Model Context Protocol)',
      'GitHub Copilot', 'LangChain',
    ],
  },
]

const CERTIFICATIONS = [
  'Finance and Quantitative Modeling',
  'Machine Learning',
  'IBM Data Science',
  'LangChain',
]

function SkillCard({ group, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = group.icon
  const tag = group.tagColor[darkMode ? 'dark' : 'light']

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`rounded-2xl border p-6 ${
        darkMode ? 'border-accent/10 bg-ink-900' : 'border-stone-200 bg-white shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
          darkMode ? 'border-stone-600 bg-transparent' : 'border-stone-300 bg-transparent'
        }`}>
          <Icon size={15} className={darkMode ? 'text-white' : 'text-stone-600'} />
        </div>
        <h3 className={`text-sm font-semibold tracking-wide uppercase ${
          darkMode ? 'text-stone-300' : 'text-stone-700'
        }`}>
          {group.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
            className={`px-2.5 py-1 text-xs rounded-lg border font-medium ${tag}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills({ darkMode }) {
  return (
    <SectionWrapper id="skills" className={darkMode ? 'bg-ink-950' : 'bg-stone-50'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Toolkit"
          subtitle="Across quant finance, data engineering, machine learning, and AI systems."
          darkMode={darkMode}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} darkMode={darkMode} />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-stone-500' : 'text-stone-400'}`}>
            Certifications
          </span>
          {CERTIFICATIONS.map(cert => (
            <span
              key={cert}
              className={`px-3 py-1 text-xs rounded-full border font-medium ${
                darkMode ? 'border-accent/20 text-accent-light bg-accent/5' : 'border-accent/30 text-accent-dark bg-accent/5'
              }`}
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
