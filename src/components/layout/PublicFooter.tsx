import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';
import { AppView } from '../../types';

export const PublicFooter: React.FC = () => {
  const { setCurrentView } = useSchool();

  const handleLink = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#1B2238', color: '#C5C9D2', padding: '60px 32px 30px' }}>
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}
      >
        {/* Col 1: Brand Info */}
        <div>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', cursor: 'pointer' }}
            onClick={() => handleLink('landing')}
          >
            <img src="/logo.svg" alt="AL NOOR Logo" style={{ width: '42px', height: '42px', borderRadius: '50%' }} />
            <div>
              <div style={{ color: '#FFA52E', fontSize: '18px', fontWeight: 700, lineHeight: 1.1 }}>
                AL NOOR
              </div>
              <div style={{ color: '#FFFFFF', fontSize: '9.5px', fontWeight: 600, letterSpacing: '1px' }}>
                PUBLIC SCHOOL
              </div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#858C9B', lineHeight: 1.6, marginBottom: '16px' }}>
            A premier educational institution dedicated to intellectual brilliance, character development, and values-led empowerment since 2005. Affiliated with CBSE, New Delhi.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '12px', fontWeight: 500 }}>
            <ShieldCheck size={16} />
            <span>CBSE Affiliation No: 2130842</span>
          </div>
        </div>

        {/* Col 2: Institutional Pages */}
        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>
            Institutional Pages
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
            <button
              onClick={() => handleLink('landing')}
              style={{ textAlign: 'left', color: '#C5C9D2', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFA52E'}
              onMouseLeave={e => e.currentTarget.style.color = '#C5C9D2'}
            >
              <ArrowRight size={13} color="#FFA52E" />
              <span>Home Overview</span>
            </button>
            <button
              onClick={() => handleLink('about')}
              style={{ textAlign: 'left', color: '#C5C9D2', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFA52E'}
              onMouseLeave={e => e.currentTarget.style.color = '#C5C9D2'}
            >
              <ArrowRight size={13} color="#FFA52E" />
              <span>About Us & Vision</span>
            </button>
            <button
              onClick={() => handleLink('academics')}
              style={{ textAlign: 'left', color: '#C5C9D2', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFA52E'}
              onMouseLeave={e => e.currentTarget.style.color = '#C5C9D2'}
            >
              <ArrowRight size={13} color="#FFA52E" />
              <span>Academics & Wings</span>
            </button>
            <button
              onClick={() => handleLink('facilities')}
              style={{ textAlign: 'left', color: '#C5C9D2', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFA52E'}
              onMouseLeave={e => e.currentTarget.style.color = '#C5C9D2'}
            >
              <ArrowRight size={13} color="#FFA52E" />
              <span>Campus Facilities</span>
            </button>
            <button
              onClick={() => handleLink('notices')}
              style={{ textAlign: 'left', color: '#C5C9D2', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFA52E'}
              onMouseLeave={e => e.currentTarget.style.color = '#C5C9D2'}
            >
              <ArrowRight size={13} color="#FFA52E" />
              <span>Public Notices & Circulars</span>
            </button>
            <button
              onClick={() => handleLink('contact')}
              style={{ textAlign: 'left', color: '#C5C9D2', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFA52E'}
              onMouseLeave={e => e.currentTarget.style.color = '#C5C9D2'}
            >
              <ArrowRight size={13} color="#FFA52E" />
              <span>Contact & Admissions Desk</span>
            </button>
          </div>
        </div>

        {/* Col 3: Portal Sign-Ins */}
        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>
            Digital ERP Portals
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
            <button
              onClick={() => setCurrentView('login')}
              style={{ textAlign: 'left', color: '#1976FF', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Administrative Portal Login</span>
            </button>
            <button
              onClick={() => setCurrentView('login')}
              style={{ textAlign: 'left', color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Teacher Workspace</span>
            </button>
            <button
              onClick={() => setCurrentView('login')}
              style={{ textAlign: 'left', color: '#60A5FA', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Student Academic Hub</span>
            </button>
            <button
              onClick={() => setCurrentView('login')}
              style={{ textAlign: 'left', color: '#FB923C', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Parent Guardian Desk & GPS</span>
            </button>
            <button
              onClick={() => setCurrentView('login')}
              style={{ textAlign: 'left', color: '#C084FC', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Bursar & Accounts Office</span>
            </button>
          </div>
        </div>

        {/* Col 4: Campus Contact */}
        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>
            Campus Helpdesk
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <MapPin size={17} color="#FFA52E" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Al-Noor Campus Road, Knowledge City, Sector 12, New Delhi 110075</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={16} color="#1976ED" style={{ flexShrink: 0 }} />
              <span>+91 11 2345 6789 / +91 98765 43210</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={16} color="#10B981" style={{ flexShrink: 0 }} />
              <span>admissions@alnoor.edu / principal@alnoor.edu</span>
            </div>
            <div style={{ marginTop: '8px' }}>
              <button
                onClick={() => handleLink('contact')}
                className="btn-secondary-pill"
                style={{ height: '34px', fontSize: '12px', padding: '0 16px' }}
              >
                Inquire Online Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          fontSize: '12.5px',
          color: '#858C9B'
        }}
      >
        <div>© 2026 AL NOOR Public School. All Rights Reserved.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>Empowering futures with moral wisdom & knowledge</span>
        </div>
      </div>
    </footer>
  );
};
