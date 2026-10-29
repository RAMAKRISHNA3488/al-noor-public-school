import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';
import { AppView } from '../../types';

interface PublicNavbarProps {
  activePage?: AppView;
}

export const PublicNavbar: React.FC<PublicNavbarProps> = ({ activePage }) => {
  const { currentView, setCurrentView } = useSchool();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledSection, setScrolledSection] = useState<AppView>('landing');

  const navLinks: { label: string; view: AppView }[] = [
    { label: 'Home', view: 'landing' },
    { label: 'About Us', view: 'about' },
    { label: 'Academics', view: 'academics' },
    { label: 'Facilities', view: 'facilities' },
    { label: 'Notices', view: 'notices' },
    { label: 'Contact', view: 'contact' }
  ];

  // Dynamic ScrollSpy: detect which section is currently in viewport when scrolling down
  useEffect(() => {
    if (currentView !== 'landing') {
      return;
    }

    // Ordered from bottom to top: contact -> notices -> facilities -> academics -> about -> home
    const sectionMapping: { id: string; view: AppView }[] = [
      { id: 'contact', view: 'contact' },
      { id: 'notices', view: 'notices' },
      { id: 'facilities', view: 'facilities' },
      { id: 'academics', view: 'academics' },
      { id: 'about', view: 'about' },
      { id: 'home', view: 'landing' }
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page: activate 'contact'
      if (scrollY + windowHeight >= docHeight - 80) {
        setScrolledSection('contact');
        return;
      }

      // Check sections from bottom to top (180px accounts for sticky navbar + header breathing room)
      const triggerY = scrollY + 180;

      for (const item of sectionMapping) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + scrollY;
          if (triggerY >= elTop) {
            setScrolledSection(item.view);
            return;
          }
        }
      }
      setScrolledSection('landing');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // When on landing page, active tab reflects scroll position. Otherwise reflects activePage / currentView
  const active = currentView === 'landing' ? scrolledSection : (activePage || currentView);

  const handleNavClick = (view: AppView) => {
    setMobileMenuOpen(false);

    if (currentView === 'landing') {
      const targetId = view === 'landing' ? 'home' : view;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navHeight = 76;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: Math.max(0, targetPos),
          behavior: 'smooth'
        });
        setScrolledSection(view);
        window.history.replaceState(null, '', view === 'landing' ? window.location.pathname : `#${view}`);
        return;
      }
    }

    setCurrentView(view);
  };

  return (
    <nav
      className="glass-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        padding: '0 32px',
        height: '76px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.94)'
      }}
    >
      {/* Brand Logo */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
        onClick={() => handleNavClick('landing')}
      >
        <img src="/logo.svg" alt="Meridian School Logo" style={{ width: '46px', height: '46px', borderRadius: '50%' }} />
        <div>
          <div style={{ color: '#FFA52E', fontSize: '20px', fontWeight: 700, letterSpacing: '0.8px', lineHeight: 1.1 }}>
            MERIDIAN
          </div>
          <div style={{ color: '#1B2238', fontSize: '10px', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
            SCHOOL
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13.5px',
          fontWeight: 500
        }}
      >
        {navLinks.map(link => {
          const isCurrent = active === link.view;
          return (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                color: isCurrent ? '#1976ED' : '#333333',
                backgroundColor: isCurrent ? '#EBF3FE' : 'transparent',
                fontWeight: isCurrent ? 600 : 500,
                transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                position: 'relative'
              }}
              onMouseEnter={e => {
                if (!isCurrent) {
                  e.currentTarget.style.color = '#1976ED';
                  e.currentTarget.style.backgroundColor = '#F8FAFE';
                }
              }}
              onMouseLeave={e => {
                if (!isCurrent) {
                  e.currentTarget.style.color = '#333333';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span>{link.label}</span>
              {isCurrent && (
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#1976ED',
                    display: 'inline-block',
                    animation: 'badgePop 0.25s ease-out'
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Right Portal CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => setCurrentView('login')}
          className="btn-primary-pill"
          style={{ height: '40px', padding: '0 20px', fontSize: '13.5px' }}
        >
          <span>Portal Login</span>
          <ArrowRight size={15} />
        </button>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            padding: '6px',
            color: '#1B2238'
          }}
          className="mobile-nav-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '76px',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #ECEEF6',
            boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {navLinks.map(link => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 14px',
                borderRadius: '8px',
                textAlign: 'left',
                color: active === link.view ? '#1976ED' : '#222222',
                backgroundColor: active === link.view ? '#EBF3FE' : 'transparent',
                fontWeight: active === link.view ? 600 : 500,
                fontSize: '14px'
              }}
            >
              <span>{link.label}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
