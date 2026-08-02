import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { MapPin, Calendar, ChevronDown } from 'lucide-react'

const EXPERIENCES = [
  {
    company: 'fAlpha.ai',
    role: 'Quant Data Engineer Intern',
    period: 'Mar 2026 – May 2026',
    location: 'New York City, NY',
    type: 'Internship',
    color: 'from-accent to-accent-dark',
    bullet_color: 'bg-accent-light',
    bullets: [
      'Engineered a SHAP-based feature attribution framework in Python to decompose multi-factor predictive equity models into per-feature sensitivity metrics; parallelized matrix operations to balance attribution fidelity against runtime.',
      'Built an LLM-powered synthesis layer compiling multi-model predictive signals into structured equity research briefs.',
    ],
    tags: ['Python', 'SHAP', 'Explainable AI', 'LLM', 'Equity Research'],
  },
  {
    company: 'Kotak Securities Limited',
    role: 'Software Developer (Promoted 3x, IT Champion Award FY 2023–24)',
    period: 'Jun 2022 – Dec 2024',
    location: 'Mumbai, India',
    type: 'Full-time',
    color: 'from-steel to-steel-dark',
    bullet_color: 'bg-steel-light',
    bullets: [
      "Built the SIP auto-debit execution path for Smallcase baskets in C#/.NET and SQL Server, with idempotent retry and daily reconciliation so duplicate instructions under at-least-once delivery could not double-debit.",
      'Optimized 50+ relational database queries, joins, and stored procedures across 10M+ financial records, ensuring strict data integrity and cutting manual reporting overhead by 50+ hours weekly.',
      'Distributed AWS data pipelines (S3, Glue, Step Functions, Lambda, Docker) to ingest and sync unstructured market and CRM data, improving analytics workflow efficiency by 30%.',
      'Engineered a Kafka/SQS streaming pipeline cross-checking PAN records against IP data, flagging 10+ fraudulent accounts monthly under KYC compliance.',
    ],
    tags: ['C#/.NET', 'SQL Server', 'AWS', 'Kafka', 'SQS', 'KYC Compliance'],
  },
  {
    company: 'Metvy',
    role: 'Entrepreneurship Trainee',
    period: 'Jun 2021 – Jul 2021',
    location: 'Mumbai, India',
    type: 'Trainee',
    color: 'from-rust to-rust-dark',
    bullet_color: 'bg-rust-light',
    bullets: [
      'Attended 15+ expert sessions across 8 aspects of entrepreneurship to understand the venture creation process.',
      'Developed a startup concept, conducted cost analysis, devised revenue strategies, and pitched to a panel of 10+ judges.',
    ],
    tags: ['Entrepreneurship', 'Business Strategy', 'Pitching', 'Cost Analysis'],
  },
  {
    company: 'FlexiEle',
    role: 'AI / ML Intern',
    period: 'May 2021 – Jul 2021',
    location: 'Gurgaon, India',
    type: 'Internship',
    color: 'from-market to-market-dark',
    bullet_color: 'bg-market-light',
    bullets: [
      'Designed an AI chatbot using NLP techniques to conduct initial screenings, reducing manual recruiter workload by 60%.',
      'Trained ML algorithms to assess responses, improving prediction accuracy by 25% compared to rule-based methods.',
    ],
    tags: ['Python', 'NLP', 'Chatbot', 'ML'],
  },
  {
    company: 'Reliance Jio',
    role: 'Product Management Intern',
    period: 'Nov 2020 – Jan 2021',
    location: 'Mumbai, India',
    type: 'Internship',
    color: 'from-accent to-accent-dark',
    bullet_color: 'bg-accent-light',
    bullets: [
      'Customized features for the JioPhone Next in partnership with Google, targeting 300M+ users in India\'s mass market.',
      'Recommended strategic product enhancements that contributed to an estimated 15% higher adoption in Tier-2 cities.',
    ],
    tags: ['Product Management', 'Google Partnership', 'Market Research'],
  },
  {
    company: 'Microsoft',
    role: 'Engage Mentorship Program Apprentice',
    period: 'May 2020 – Jul 2020',
    location: 'Mumbai, India',
    type: 'Apprenticeship',
    color: 'from-steel to-steel-dark',
    bullet_color: 'bg-steel-light',
    bullets: [
      'Developed a web application to visualize and analyze shortest-path algorithms, integrating A*, Dijkstra, Best-First, and Breadth-First search for efficient distance calculation.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms', 'Data Structures'],
  },
]

function ExperienceCard({ exp, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className={`absolute left-0 top-2 bottom-0 w-px ${darkMode ? 'bg-accent/15' : 'bg-accent/20'}`} />

      {/* Timeline dot */}
      <div className={`absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-accent bg-gradient-to-br ${exp.color}`} />

      <div
        className={`rounded-2xl border overflow-hidden ${
          darkMode
            ? 'border-accent/10 bg-ink-900'
            : 'border-stone-200 bg-white shadow-sm'
        }`}
      >
        {/* Clickable Header */}
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full p-6 flex flex-wrap items-start justify-between gap-4 text-left hover:opacity-80 transition-opacity"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-stone-900'}`}>
                {exp.role}
              </h3>
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                exp.type === 'Full-time'
                  ? darkMode ? 'bg-market/15 text-market-light' : 'bg-market/10 text-market-dark'
                  : darkMode ? 'bg-accent/15 text-accent-light' : 'bg-accent/10 text-accent-dark'
              }`}>
                {exp.type}
              </span>
            </div>
            <div className="text-base font-semibold text-gradient">{exp.company}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className={`flex items-center gap-1.5 text-sm ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}>
                <Calendar size={13} />
                {exp.period}
              </div>
              <div className={`flex items-center gap-1.5 text-xs mt-1 ${darkMode ? 'text-stone-500' : 'text-stone-400'}`}>
                <MapPin size={11} />
                {exp.location}
              </div>
            </div>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} className={darkMode ? 'text-stone-500' : 'text-stone-400'} />
            </motion.div>
          </div>
        </button>

        {/* Collapsible body */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className={`px-6 pb-6 border-t ${darkMode ? 'border-accent/10' : 'border-stone-100'}`}>
                {/* Bullets */}
                <ul className="space-y-2 mt-4 mb-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.bullet_color}`} />
                      <span className={`text-sm leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map(t => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md ${
                        darkMode
                          ? 'bg-ink-800 text-stone-400 border border-stone-700'
                          : 'bg-stone-100 text-stone-600 border border-stone-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience({ darkMode }) {
  return (
    <SectionWrapper
      id="experience"
      className={darkMode ? 'bg-ink-950' : 'bg-stone-50'}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Worked"
          subtitle="Three years of production engineering, quant research internships, and AI/ML development."
          darkMode={darkMode}
        />

        <div className="max-w-3xl">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
