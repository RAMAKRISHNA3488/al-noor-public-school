import React from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { AppLayout } from './components/layout/AppLayout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { AboutPage } from './pages/public/AboutPage';
import { AcademicsPage } from './pages/public/AcademicsPage';
import { FacilitiesPage } from './pages/public/FacilitiesPage';
import { PublicNoticesPage } from './pages/public/PublicNoticesPage';
import { ContactPage } from './pages/public/ContactPage';

function AppContent() {
  const { currentView } = useSchool();

  switch (currentView) {
    case 'about':
      return <AboutPage />;
    case 'academics':
      return <AcademicsPage />;
    case 'facilities':
      return <FacilitiesPage />;
    case 'notices':
      return <PublicNoticesPage />;
    case 'contact':
      return <ContactPage />;
    case 'login':
      return <LoginPage />;
    case 'landing':
      return <LandingPage />;
    case 'dashboard':
    default:
      return <AppLayout />;
  }
}

export function App() {
  return (
    <SchoolProvider>
      <AppContent />
    </SchoolProvider>
  );
}

export default App;
