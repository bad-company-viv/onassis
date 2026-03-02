import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navClassName = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition-all ${isActive ? 'bg-primary/10 text-primary-dark' : 'text-slate-600 hover:text-primary-dark hover:bg-primary/5'
  }`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-transform group-hover:scale-105 group-hover:bg-primary/10">
            <span className="material-symbols-outlined text-[22px]">shield</span>
          </div>
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.22em] text-slate-500">Strategic Systems</p>
            <p className="text-base font-black uppercase tracking-tight text-slate-900 group-hover:text-primary transition-colors">Onassis Defense</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" className={navClassName} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navClassName}>
            About
          </NavLink>
          <a href="/#systems" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-primary/5 hover:text-primary-dark">
            Systems
          </a>
          <a href="/#technology" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-primary/5 hover:text-primary-dark">
            Technology
          </a>
          <a href="/#competition" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-primary/5 hover:text-primary-dark">
            Market
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#procurement"
            className="hidden rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-sm font-bold text-primary shadow-glow transition-all hover:bg-primary hover:text-white sm:inline-flex"
          >
            Request Brief
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-primary/5 lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-[20px]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 lg:hidden backdrop-blur-xl">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-2">
            <NavLink to="/" className={navClassName} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navClassName}>
              About
            </NavLink>
            <a href="/#systems" className="rounded-full px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-primary/5 hover:text-primary-dark">
              Systems
            </a>
            <a href="/#technology" className="rounded-full px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-primary/5 hover:text-primary-dark">
              Technology
            </a>
            <a href="/#competition" className="rounded-full px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-primary/5 hover:text-primary-dark">
              Market
            </a>
            <a
              href="/#procurement"
              className="mt-4 inline-flex justify-center rounded-full border border-primary px-5 py-3 text-sm font-bold text-white bg-primary shadow-glow"
            >
              Request Brief
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
