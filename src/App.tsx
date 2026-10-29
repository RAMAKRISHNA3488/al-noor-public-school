import React from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { AppLayout } from './components/layout/AppLayout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';

function AppContent() {
  const { currentView } = useSchool();

  switch (currentView) {
    case 'landing':
      return <LandingPage />;
    case 'login':
      return <LoginPage />;
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
