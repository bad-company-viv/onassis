import { motion } from 'framer-motion';

const competitorData = [
  { id: 1, name: 'Legacy Provider Alpha', weakness: 'Excessive thermal retention and limited mobility in active zones.', redFlag: 'Decline in Tier-1 unit renewals over the last 36 months.' },
  { id: 2, name: 'Mass-Market Defensive', weakness: 'Generic composite structures failing repetitive, high-velocity tests.', redFlag: 'Over-reliance on outdated NIJ certification thresholds.' }
];

const priorities = [
  { metric: 'Agility vs Weight', desc: 'Operators require protection without compromising speed and endurance.', icon: 'sprint' },
  { metric: 'Thermal Regulation', desc: 'Advanced materials must manage heat stress during extended deployments.', icon: 'thermostat' },
  { metric: 'Lifecycle Costs', desc: 'Durability under extreme conditions reduces long-term replacement cycles.', icon: 'monitoring' }
];

function ScreenCompetitive() {
  return (
    <section id="competition" className="border-b border-slate-200 bg-blue-50/50 py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.06),transparent_50%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* Competitor Benchmark Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary">Market Intelligence</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Competitive Benchmarking</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Analysis of tier-one legacy providers reveals systemic vulnerabilities in modernization pacing and agility.
            </p>

            <div className="mt-10 space-y-5">
              {competitorData.map((competitor, index) => (
                <motion.article
                  key={competitor.id}
                  className="glass-panel overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 relative group hover:-translate-y-1 hover:shadow-glass transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[30px] group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <h3 className="text-xl font-bold text-slate-900">{competitor.name}</h3>
                    <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-red-600">Legacy Profile</span>
                  </div>
                  <div className="space-y-2 relative z-10">
                    <p className="text-sm text-slate-600"><strong className="text-slate-800">Operational Deficit:</strong> {competitor.weakness}</p>
                    <p className="text-sm text-slate-600"><strong className="text-slate-800">Observed Signal:</strong> {competitor.redFlag}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Positional Priorities Column */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm relative overflow-hidden h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[40px]" />
              <h3 className="text-2xl font-bold text-slate-900 relative z-10">What Buyers Are Benchmarking</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 relative z-10">
                Institutional procurement is shifting focus from legacy brand momentum to verifiable performance metrics.
              </p>

              <div className="mt-10 space-y-8 relative z-10">
                {priorities.map((item, index) => (
                  <motion.div
                    key={item.metric}
                    className="flex gap-4 items-start group"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-primary transition-colors">{item.metric}</p>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ScreenCompetitive;
