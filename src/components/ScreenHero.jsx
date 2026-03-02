import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { imageSet } from '../content';

const trustStats = [
  { value: '50+', label: 'Nations Served' },
  { value: 'ISO 9001', label: 'Quality Framework' },
  { value: '24/7', label: 'Operational Support' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 15 },
  },
};

function ScreenHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 py-16 lg:py-24 bg-background-light">
      <div className="absolute inset-0 bg-background-light">
        <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[600px] rounded-full bg-blue-200/40 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:px-10">
        <motion.div
          className="z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-dark">Global Command Specification</span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl xl:text-[4rem]">
              Advanced Defense Systems Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">High-Stakes Missions</span>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            Onasis engineers ballistic protection and tactical equipment for military and institutional partners where reliability, survivability, and procurement readiness are non-negotiable.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#systems"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-glow transition-all hover:bg-primary-dark hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Systems
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-slate-700 backdrop-blur-md transition-all hover:bg-slate-50 hover:text-slate-900"
            >
              About Onasis
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 grid gap-4 sm:grid-cols-3">
            {trustStats.map((item) => (
              <div key={item.label} className="glass-panel overflow-hidden rounded-2xl p-5 relative border-slate-200">
                <div className="absolute top-0 right-0 p-2 opacity-5">
                  <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
                </div>
                <p className="text-3xl font-black leading-none text-slate-900">{item.value}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.16em] text-primary">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero-media relative aspect-[4/5] lg:aspect-square w-full max-w-xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-glass">
            <img
              src={imageSet.eodRender}
              alt="Onasis tactical armor platform"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
            {/* Tech overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-8 pointer-events-none flex justify-center z-10">
              <div className="glass-panel inline-flex items-center gap-3 rounded-full px-4 py-2 border-slate-200 bg-white/90 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
                <span className="text-xs font-mono text-green-600 uppercase tracking-wider font-bold">System Active</span>
              </div>
            </div>
          </div>

          {/* Decorative scanner line */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-primary/30 shadow-glow z-20 pointer-events-none"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ScreenHero;
