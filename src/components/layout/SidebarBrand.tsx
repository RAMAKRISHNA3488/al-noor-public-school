import React from 'react';
import { Menu } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const SidebarBrand: React.FC = () => {
  const { sidebarExpanded, toggleSidebar } = useSchool();

  return (
    <div
      style={{
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: sidebarExpanded ? 'space-between' : 'center',
        padding: sidebarExpanded ? '0 20px' : '0 10px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        backgroundColor: '#1B2238',
        userSelect: 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
        <img
          src="/logo.svg"
          alt="AL NOOR Logo"
          style={{
            width: '44px',
            height: '44px',
            flexShrink: 0,
            borderRadius: '50%',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
          }}
        />
        {sidebarExpanded && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                color: '#FFA52E',
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '0.8px',
                lineHeight: 1.1,
                fontFamily: "'Roboto', sans-serif"
              }}
            >
              AL NOOR
            </span>
            <span
              style={{
                color: '#858C9B',
                fontSize: '9.5px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginTop: '1px'
              }}
            >
              PUBLIC SCHOOL
            </span>
          </div>
        )}
      </div>

      {sidebarExpanded && (
        <button
          onClick={toggleSidebar}
          className="hamburger-btn"
          title="Toggle Sidebar"
          style={{
            color: '#858C9B',
            padding: '6px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s, background-color 0.2s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#858C9B';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Menu size={19} />
        </button>
      )}
    </div>
  );
};
