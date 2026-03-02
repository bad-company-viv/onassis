function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10 relative z-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
              <span className="material-symbols-outlined text-[20px]">shield</span>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-tight text-slate-900">Onassis Defense</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-600 mt-4">
            Mission-critical ballistic and blast protection systems built for military, law enforcement,
            and critical infrastructure operations.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-800">Sections</p>
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <a href="/#systems" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span> Systems
            </a>
            <a href="/#technology" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span> Technology
            </a>
            <a href="/#competition" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span> Market
            </a>
            <a href="/#procurement" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span> Procurement
            </a>
            <a href="/about" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span> About
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-800">Compliance</p>
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/60" /> ITAR-aligned workflows</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/60" /> Encrypted channels</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/60" /> Institutional protocols</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50 px-6 py-6 text-xs text-slate-500 lg:px-10 relative z-10">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Onassis Defense. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px] text-green-600">lock</span> Institutional Trust Framework
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
