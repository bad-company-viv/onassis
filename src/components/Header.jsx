import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll detection for active section
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('about');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for sticky header

      // Define our sections
      const sections = [
        { id: 'competition', name: 'market' },
        { id: 'technology', name: 'technology' },
        { id: 'systems', name: 'systems' },
        { id: 'home-top', name: 'home' } // Fallback
      ];

      let currentSection = 'home';

      for (const section of sections) {
        if (section.id === 'home-top') continue;

        const el = document.getElementById(section.id);
        if (el && scrollPosition >= el.offsetTop) {
          currentSection = section.name;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const getNavClass = (sectionName) => {
    const isActive = activeSection === sectionName;
    return `rounded-full px-4 py-2 text-sm font-semibold transition-all ${isActive
      ? 'bg-primary text-white border-transparent'
      : 'text-slate-600 hover:text-primary-dark hover:bg-primary/5 border-transparent'
      }`;
  };

  const handleHashNav = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      if (!hash) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      const el = document.querySelector(hash);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80, // offset for header
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-transform group-hover:scale-105 group-hover:bg-primary/10">
            <span className="material-symbols-outlined text-[22px]">shield</span>
          </div>
          <div>
            <p className="text-base font-black uppercase tracking-tight text-slate-900 group-hover:text-primary transition-colors">Onasis Defense</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          <button onClick={(e) => handleHashNav(e, '')} className={getNavClass('home')}>
            Home
          </button>
          <NavLink to="/about" className={getNavClass('about')}>
            About
          </NavLink>
          <button onClick={(e) => handleHashNav(e, '#systems')} className={getNavClass('systems')}>
            Systems
          </button>
          <button onClick={(e) => handleHashNav(e, '#technology')} className={getNavClass('technology')}>
            Technology
          </button>
          <button onClick={(e) => handleHashNav(e, '#competition')} className={getNavClass('market')}>
            Market
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => handleHashNav(e, '#procurement')}
            className="hidden rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-sm font-bold text-primary shadow-glow transition-all hover:bg-primary hover:text-white sm:inline-flex"
          >
            Request Brief
          </button>
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
            <button onClick={(e) => { handleHashNav(e, ''); setMenuOpen(false); }} className={getNavClass('home')}>
              Home
            </button>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={getNavClass('about')}>
              About
            </NavLink>
            <button onClick={(e) => { handleHashNav(e, '#systems'); setMenuOpen(false); }} className={`w-full text-left ${getNavClass('systems')}`}>
              Systems
            </button>
            <button onClick={(e) => { handleHashNav(e, '#technology'); setMenuOpen(false); }} className={`w-full text-left ${getNavClass('technology')}`}>
              Technology
            </button>
            <button onClick={(e) => { handleHashNav(e, '#competition'); setMenuOpen(false); }} className={`w-full text-left ${getNavClass('market')}`}>
              Market
            </button>
            <button
              onClick={(e) => { handleHashNav(e, '#procurement'); setMenuOpen(false); }}
              className="mt-4 w-full justify-center rounded-full border border-primary px-5 py-3 text-sm font-bold text-white bg-primary shadow-glow"
            >
              Request Brief
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
