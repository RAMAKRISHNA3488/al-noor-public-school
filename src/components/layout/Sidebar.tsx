import React from 'react';
import { SidebarBrand } from './SidebarBrand';
import { SidebarNav } from './SidebarNav';
import { useSchool } from '../../context/SchoolContext';

export const Sidebar: React.FC = () => {
  const { sidebarExpanded, mobileMenuOpen, setMobileMenuOpen } = useSchool();

  const width = sidebarExpanded ? '290px' : '68px';

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 900
          }}
        />
      )}

      {/* Main Sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: width,
          backgroundColor: '#1B2238',
          zIndex: 950,
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s ease',
          boxShadow: '4px 0 20px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden'
        }}
      >
        <SidebarBrand />
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          <SidebarNav />
        </div>
      </aside>
    </>
  );
};
