import React, { useState } from 'react';
import { ArrowRight, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';
import { AppView } from '../../types';

interface PublicNavbarProps {
  activePage?: AppView;
}

export const PublicNavbar: React.FC<PublicNavbarProps> = ({ activePage }) => {
  const { currentView, setCurrentView } = useSchool();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const active = activePage || currentView;

  const navLinks: { label: string; view: AppView }[] = [
    { label: 'Home', view: 'landing' },
    { label: 'About Us', view: 'about' },
    { label: 'Academics', view: 'academics' },
    { label: 'Facilities', view: 'facilities' },
    { label: 'Notices', view: 'notices' },
    { label: 'Contact', view: 'contact' }
  ];

  const handleNavClick = (view: AppView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
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
        <img src="/logo.svg" alt="AL NOOR Logo" style={{ width: '46px', height: '46px', borderRadius: '50%' }} />
        <div>
          <div style={{ color: '#FFA52E', fontSize: '20px', fontWeight: 700, letterSpacing: '0.8px', lineHeight: 1.1 }}>
            AL NOOR
          </div>
          <div style={{ color: '#1B2238', fontSize: '10px', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
            PUBLIC SCHOOL
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
                transition: 'all 0.18s ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
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
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#1976ED',
                    display: 'inline-block'
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
