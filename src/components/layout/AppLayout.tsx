import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNavigation } from './TopNavigation';
import { AdminUserHeader } from './AdminUserHeader';
import { PageFooter } from './PageFooter';
import { useSchool } from '../../context/SchoolContext';

// Page Imports
import { DashboardPage } from '../../pages/DashboardPage';
import { NoticePage } from '../../pages/NoticePage';
import { HolidayPage } from '../../pages/HolidayPage';
import { LeavePage } from '../../pages/LeavePage';
import { ComplaintPage } from '../../pages/ComplaintPage';
import { RolePermissionPage } from '../../pages/RolePermissionPage';
import { ChessPage } from '../../pages/ChessPage';
import { StudentZonePage } from '../../pages/StudentZonePage';
import { StaffManagementPage } from '../../pages/StaffManagementPage';
import { AttendancePage } from '../../pages/AttendancePage';
import { ClassRoutinePage } from '../../pages/ClassRoutinePage';
import { SyllabusPage } from '../../pages/SyllabusPage';
import { HomeworkPage } from '../../pages/HomeworkPage';
import { LibraryPage } from '../../pages/LibraryPage';
import { TransportPage } from '../../pages/TransportPage';
import { SystemSetupPage } from '../../pages/SystemSetupPage';
import { PerformancePage } from '../../pages/PerformancePage';

export const AppLayout: React.FC = () => {
  const { activeModule, sidebarExpanded } = useSchool();

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <DashboardPage />;
      case 'notice':
        return <NoticePage />;
      case 'holiday':
      case 'holiday-general':
        return <HolidayPage />;
      case 'leave':
      case 'leave-general':
        return <LeavePage />;
      case 'complaint':
        return <ComplaintPage />;
      case 'permission':
        return <RolePermissionPage />;
      case 'chess':
        return <ChessPage />;
      case 'student-zone':
        return <StudentZonePage />;
      case 'staff-management':
        return <StaffManagementPage />;
      case 'attendance-staff':
      case 'attendance-general':
        return <AttendancePage />;
      case 'class-routine':
        return <ClassRoutinePage />;
      case 'syllabus':
        return <SyllabusPage />;
      case 'homework':
        return <HomeworkPage />;
      case 'book-inventory':
      case 'issued-books':
        return <LibraryPage />;
      case 'vehicle-route':
      case 'driver-mapping':
        return <TransportPage />;
      case 'system-setup':
        return <SystemSetupPage />;
      case 'performance':
        return <PerformancePage />;
      default:
        return <NoticePage />;
    }
  };

  const marginLeft = sidebarExpanded ? '290px' : '68px';

  return (
    <div className="ambient-animated-bg" style={{ display: 'flex', minHeight: '100vh' }}>
      {/* 1. Left Sidebar */}
      <Sidebar />

      {/* 2. Main Application Wrapper */}
      <div
        style={{
          flex: 1,
          marginLeft: marginLeft,
          transition: 'margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0
        }}
      >
        {/* Row 1: Top Navigation Bar */}
        <TopNavigation />

        {/* Row 2: Secondary "Admin User" strip */}
        <AdminUserHeader />

        {/* Row 3: Main Workspace Content with Page Animation */}
        <main
          style={{
            flex: 1,
            padding: '22px 28px 28px',
            maxWidth: '1750px',
            width: '100%',
            margin: '0 auto',
            boxSizing: 'border-box'
          }}
        >
          <div key={activeModule} className="page-animated-wrapper">
            {renderActiveModule()}
          </div>
        </main>

        {/* Row 4: Page Footer */}
        <PageFooter />
      </div>
    </div>
  );
};
