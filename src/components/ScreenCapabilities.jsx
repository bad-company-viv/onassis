import { motion } from 'framer-motion';
import { imageSet } from '../content';

const capabilitiesList = [
  {
    title: 'Blast Attenuation',
    text: 'Engineered layered compositions that diffuse overpressure and mitigate traumatic structural transfer during explosive events.',
    icon: 'explosion',
  },
  {
    title: 'Ballistic Integrity',
    text: 'Tested materials providing multi-strike kinetic resistance, adhering strictly to global defense operational standards.',
    icon: 'crisis_alert',
  },
  {
    title: 'Tactical Agility',
    text: 'Ergonomic structuring ensuring platforms remain lightweight, allowing operators sustained mobility in active zones.',
    icon: 'sprint',
  },
  {
    title: 'Environmental Resilience',
    text: 'Systems designed to maintain structural guarantees across extreme thermal shifts and abrasive operational climates.',
    icon: 'public',
  },
];

function ScreenCapabilities() {
  return (
    <section id="systems" className="border-b border-slate-200 bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[50vh] h-[50vh] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          className="mb-14 lg:max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary">Core Engineering</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">Capabilities & Applied Sciences</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            Our research and development pipeline focuses on singular objectives: maximizing survivability while preserving operator dexterity.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {capabilitiesList.map((cap, index) => (
              <motion.article
                key={cap.title}
                className="glass-panel group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glass hover:bg-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                      <span className="material-symbols-outlined text-[24px]">{cap.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{cap.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{cap.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="flex flex-col gap-5 relative h-full min-h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Grid overlay decorating the images */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMzcsOTksMjM1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_20%,transparent_90%)] pointer-events-none z-0" />

            <div className="relative h-1/2 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
              <img
                src={imageSet.eodLive}
                alt="Tactical Unit Deployment"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 text-white z-10 pointer-events-none">
                <p className="text-[0.65rem] uppercase tracking-widest text-blue-300">Operational Deployment</p>
                <p className="font-bold">Tactical Assualt Systems</p>
              </div>
            </div>

            <div className="grid h-1/2 grid-cols-2 gap-5 mt-5">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <img
                  src={imageSet.bombBlanket}
                  alt="Specialized Blast Blankets"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none" />
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <img
                  src={imageSet.plateCarrier}
                  alt="Modular Plate Carriers"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ScreenCapabilities;
