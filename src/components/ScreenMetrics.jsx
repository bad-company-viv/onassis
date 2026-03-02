import { motion } from 'framer-motion';
import { imageSet } from '../content';

const techLayers = [
  { name: 'Aramid Core Matrix', desc: 'Woven ballistic material providing high tensile strength.', code: 'AM-01X' },
  { name: 'Ceramic Strike Face', desc: 'Shatters projectiles on impact, dispersing kinetic energy.', code: 'CR-V4' },
  { name: 'Trauma Reduction Pad', desc: 'Backing material that minimizes blunt force trauma transfer.', code: 'TR-90' },
  { name: 'Spall Liner', desc: 'Contains bullet fragmentation and spall after impact.', code: 'SL-EX' },
];

const galleryTiles = [
  { id: 1, label: 'Tactical Helmet', img: imageSet.eodLive },
  { id: 2, label: 'Plate Carrier', img: imageSet.plateCarrier },
  { id: 3, label: 'Blast Suit', img: imageSet.bombBlanket },
  { id: 4, label: 'Combat Boots', img: imageSet.bootsFront },
];

const metrics = [
  { value: 'NIJ IV+', label: 'Certification Rating', desc: 'Exceeds standard 0101.06.' },
  { value: '30%', label: 'Weight Reduction', desc: 'Via composite dispersion.' },
  { value: 'V50 Test', label: 'Velocity Threshold', desc: 'Superior ballistic defeat.' },
];

function ScreenMetrics() {
  return (
    <section id="technology" className="border-b border-slate-200 bg-background-light py-20 lg:py-28 relative">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          className="grid gap-10 lg:grid-cols-2 lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary">Applied Science</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">Engineered Performance Metrics</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Onasis platforms leverage advanced polymer matrices and ceramic composites to achieve optimal weight-to-protection ratios.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="glass-panel overflow-hidden rounded-2xl border-t border-primary/20 bg-white p-5 hover:bg-slate-50 transition-colors shadow-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <p className="text-2xl font-black tracking-tight text-slate-900">{metric.value}</p>
                  <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">{metric.label}</p>
                  <p className="mt-2 text-xs text-slate-600">{metric.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:pl-10">
            {techLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-glass hover:border-primary/30"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              >
                <div className="relative z-10 flex-1">
                  <p className="font-bold text-slate-900 group-hover:text-primary transition-colors">{layer.name}</p>
                  <p className="mt-1 max-w-sm text-sm text-slate-600">{layer.desc}</p>
                </div>
                <div className="relative z-10 font-mono text-[0.65rem] font-bold tracking-widest text-slate-400">
                  {layer.code}
                </div>
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-blue-300 transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {galleryTiles.map((tile) => (
            <div key={tile.id} className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100">
              <img
                src={tile.img}
                alt={tile.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay transition duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-100 p-5 transition duration-500">
                <p className="text-xs font-bold uppercase tracking-widest text-white">{tile.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ScreenMetrics;
