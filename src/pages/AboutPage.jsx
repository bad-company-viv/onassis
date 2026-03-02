import { motion } from 'framer-motion';
import { imageSet } from '../content';

const principles = [
  {
    title: 'Protection-First Engineering',
    text: 'Every platform is developed around survivability metrics, impact dissipation, and operational continuity under stress.',
    icon: 'shield_lock',
  },
  {
    title: 'Field-Driven Iteration',
    text: 'Design refinements are informed by live operator feedback across tactical and institutional deployment scenarios.',
    icon: 'tactic',
  },
  {
    title: 'Global Program Delivery',
    text: 'Structured procurement and logistics pipelines support mission deployment in domestic and cross-border programs.',
    icon: 'public',
  },
];

const gallery = [
  { id: 'about-blanket', title: 'Blast Containment', image: imageSet.bombBlanket },
  { id: 'about-carrier', title: 'Modular Armor', image: imageSet.plateCarrier },
  { id: 'about-boots', title: 'Mobility Platform', image: imageSet.bootsFront },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background-light pt-20">
      <section className="relative overflow-hidden border-b border-panel-border py-20 lg:py-28 text-slate-800">
        <div className="absolute inset-0 bg-background-light">
          <div className="absolute top-[10%] left-[60%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute top-[20%] right-[80%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-[1px] w-6 bg-primary block" /> About Onassis
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">Engineering Protection Without Compromise</h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Onassis Defense develops blast and ballistic systems for critical mission teams operating in high-risk theaters, where durability and trust-based procurement are essential.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white relative shadow-glass"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent mix-blend-overlay z-10" />
            <img src={imageSet.eodLive} alt="Onassis bomb disposal platform" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-blue-50/50 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <motion.div
            className="mb-12 lg:max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Core Operating Principles</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              From research through production, each system is validated for measurable field performance and deployment readiness.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                className="glass-panel overflow-hidden rounded-3xl p-8 relative group hover:-translate-y-1 transition-transform duration-300 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[30px] group-hover:bg-primary/10 transition-colors" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary mb-6">
                  <span className="material-symbols-outlined text-[28px]">{principle.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{principle.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05),transparent_50%)]" />
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Program Portfolio</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">Representative systems from the current Onassis operational catalog.</p>
            </div>
            <a href="/#systems" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary hover:text-primary-dark transition-colors">
              View full catalog <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item, index) => (
              <motion.article
                key={item.id}
                className="glass-panel overflow-hidden rounded-3xl group shadow-sm border-slate-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-slate-200 relative">
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10" />
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6 relative bg-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Portfolio System</p>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
