import { motion } from 'framer-motion';

function ScreenTrust() {
  return (
    <section id="procurement" className="border-b border-slate-200 bg-white py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.05),transparent_50%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            className="glass-panel overflow-hidden rounded-3xl p-8 lg:p-10 relative border-slate-200 shadow-glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px]" />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary">Institutional Trust</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Secure Procurement & Compliance Operations</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Dedicated procurement teams support government and institutional programs with secure communication channels, structured delivery milestones, and policy-aligned export workflows.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { step: '01', text: 'Technical scope validation and mission profile alignment.' },
                { step: '02', text: 'Security and compliance checks with export-control review.' },
                { step: '03', text: 'Deployment scheduling, logistics handoff, and support onboarding.' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-blue-50/50 p-5 flex gap-5 items-start backdrop-blur-sm group hover:bg-white transition-colors hover:shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
                    {item.step}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed transition-colors">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-3xl p-8 lg:p-10 border-slate-200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-slate-900">Confidential Inquiry</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Submit operational details for a secure procurement briefing.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Organization
                  <input
                    type="text"
                    className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all focus:bg-white focus:shadow-sm"
                    placeholder="Agency or institution"
                  />
                </label>

                <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Program Type
                  <select className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all appearance-none cursor-pointer focus:bg-white focus:shadow-sm">
                    <option>Tactical Equipment</option>
                    <option>Critical Infrastructure</option>
                    <option>Special Operations</option>
                    <option>EOD Programs</option>
                  </select>
                </label>
              </div>

              <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Deployment Region
                <input
                  type="text"
                  className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all focus:bg-white focus:shadow-sm"
                  placeholder="Region or command zone"
                />
              </label>

              <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Operational Brief
                <textarea
                  rows={4}
                  className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none focus:bg-white focus:shadow-sm"
                  placeholder="Mission requirements, timeline, and constraints"
                />
              </label>

              <button
                type="button"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-glow transition-all hover:bg-primary-dark hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                  Request Technical Briefing
                </span>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ScreenTrust;
