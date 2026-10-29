import React, { useState } from 'react';
import {
  Home,
  BarChart3,
  Settings,
  GraduationCap,
  Users,
  Calendar,
  Clock,
  CalendarDays,
  BookOpen,
  ClipboardList,
  Library,
  BookMarked,
  Bus,
  Navigation,
  UserCheck,
  Megaphone,
  Send,
  AlertCircle,
  Shield,
  Crown,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface MenuSection {
  title?: string;
  expandable?: boolean;
  items: MenuItem[];
}

export const SidebarNav: React.FC = () => {
  const { activeModule, setActiveModule, sidebarExpanded, setMobileMenuOpen, currentUser } = useSchool();
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setCollapsedSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const handleItemClick = (id: string) => {
    setActiveModule(id);
    setMobileMenuOpen(false);
  };

  const role = currentUser?.role || 'Admin';

  let sections: MenuSection[] = [];

  if (role === 'Teacher') {
    sections = [
      {
        title: 'TEACHER WORKSPACE',
        expandable: false,
        items: [
          { id: 'dashboard', label: 'My Dashboard', icon: <Home size={17} /> },
          { id: 'class-routine', label: 'My Teaching Schedule', icon: <CalendarDays size={17} /> },
          { id: 'attendance-staff', label: 'Class Attendance Register', icon: <UserCheck size={17} /> },
          { id: 'homework', label: 'Homework & Assignments', icon: <ClipboardList size={17} /> },
          { id: 'syllabus', label: 'Syllabus Tracker', icon: <BookOpen size={17} /> },
          { id: 'leave', label: 'Faculty Leave Application', icon: <Clock size={17} /> }
        ]
      },
      {
        title: 'COMMUNICATIONS',
        expandable: false,
        items: [
          { id: 'notice', label: 'School Notices', icon: <Megaphone size={17} /> },
          { id: 'holiday', label: 'Holiday Calendar', icon: <Calendar size={17} /> }
        ]
      }
    ];
  } else if (role === 'Student') {
    sections = [
      {
        title: 'MY ACADEMICS',
        expandable: false,
        items: [
          { id: 'dashboard', label: 'Student Dashboard', icon: <Home size={17} /> },
          { id: 'class-routine', label: 'My Class Routine', icon: <CalendarDays size={17} /> },
          { id: 'homework', label: 'My Homework & Tasks', icon: <ClipboardList size={17} /> },
          { id: 'syllabus', label: 'Syllabus & Notes', icon: <BookOpen size={17} /> },
          { id: 'issued-books', label: 'My Library Books', icon: <BookMarked size={17} /> },
          { id: 'chess', label: 'Chess Club (1,064 Games)', icon: <Crown size={17} /> }
        ]
      },
      {
        title: 'CAMPUS UPDATES',
        expandable: false,
        items: [
          { id: 'notice', label: 'Notice Board', icon: <Megaphone size={17} /> },
          { id: 'holiday', label: 'Holidays & Vacations', icon: <Calendar size={17} /> }
        ]
      }
    ];
  } else if (role === 'Parent') {
    sections = [
      {
        title: 'GUARDIAN DESK',
        expandable: false,
        items: [
          { id: 'dashboard', label: 'Child Academic Portal', icon: <Home size={17} /> },
          { id: 'vehicle-route', label: 'Live Bus & GPS Tracker', icon: <Bus size={17} /> },
          { id: 'attendance-staff', label: 'Attendance Monitor', icon: <UserCheck size={17} /> },
          { id: 'homework', label: 'Homework & Tests', icon: <ClipboardList size={17} /> },
          { id: 'complaint', label: 'Inquiry / Complaint Desk', icon: <AlertCircle size={17} /> }
        ]
      },
      {
        title: 'COMMUNICATIONS',
        expandable: false,
        items: [
          { id: 'notice', label: 'Parent Circulars', icon: <Megaphone size={17} /> },
          { id: 'holiday', label: 'School Holidays', icon: <Calendar size={17} /> }
        ]
      }
    ];
  } else if (role === 'Accountant') {
    sections = [
      {
        title: 'TREASURY & FINANCE',
        expandable: false,
        items: [
          { id: 'dashboard', label: 'Fee Collection Counter', icon: <Home size={17} /> },
          { id: 'student-zone', label: 'Student Fee Roster', icon: <GraduationCap size={17} /> },
          { id: 'performance', label: 'Revenue & Audit Reports', icon: <BarChart3 size={17} /> }
        ]
      },
      {
        title: 'CAMPUS DESK',
        expandable: false,
        items: [
          { id: 'notice', label: 'Notices & Circulars', icon: <Megaphone size={17} /> },
          { id: 'holiday', label: 'Bank & School Holidays', icon: <Calendar size={17} /> }
        ]
      }
    ];
  } else if (role === 'Librarian') {
    sections = [
      {
        title: 'MEDIA & CIRCULATION',
        expandable: false,
        items: [
          { id: 'dashboard', label: 'Circulation Desk', icon: <Home size={17} /> },
          { id: 'book-inventory', label: 'Book Catalog & Shelves', icon: <Library size={17} /> },
          { id: 'issued-books', label: 'Issued Books & Overdue', icon: <BookMarked size={17} /> },
          { id: 'student-zone', label: 'Student & Staff Register', icon: <GraduationCap size={17} /> }
        ]
      },
      {
        title: 'CAMPUS DESK',
        expandable: false,
        items: [
          { id: 'notice', label: 'Library Notices', icon: <Megaphone size={17} /> },
          { id: 'holiday', label: 'Holiday Calendar', icon: <Calendar size={17} /> }
        ]
      }
    ];
  } else {
    // Super Admin: All 18 modules
    sections = [
      {
        items: [
          { id: 'dashboard', label: 'Dashboard', icon: <Home size={17} /> },
          { id: 'performance', label: 'Performance', icon: <BarChart3 size={17} /> }
        ]
      },
      {
        title: 'SYSTEM SETUP',
        expandable: true,
        items: [
          { id: 'system-setup', label: 'System Setup', icon: <Settings size={17} /> }
        ]
      },
      {
        title: 'STUDENT MANAGEMENT',
        expandable: true,
        items: [
          { id: 'student-zone', label: 'Student Zone', icon: <GraduationCap size={17} /> }
        ]
      },
      {
        title: 'STAFF & HR MANAGEMENT',
        expandable: true,
        items: [
          { id: 'staff-management', label: 'Staff Management', icon: <Users size={17} /> },
          { id: 'holiday', label: 'Holiday Management', icon: <Calendar size={17} /> },
          { id: 'leave', label: 'Leave Management', icon: <Clock size={17} /> },
          { id: 'attendance-staff', label: 'Attendance Management', icon: <UserCheck size={17} /> },
          { id: 'class-routine', label: 'Class Routine Management', icon: <CalendarDays size={17} /> }
        ]
      },
      {
        title: 'ACADEMIC MANAGEMENT',
        expandable: true,
        items: [
          { id: 'syllabus', label: 'Syllabus', icon: <BookOpen size={17} /> },
          { id: 'homework', label: 'Homework', icon: <ClipboardList size={17} /> }
        ]
      },
      {
        title: 'LIBRARY MANAGEMENT',
        expandable: true,
        items: [
          { id: 'book-inventory', label: 'Book Inventory', icon: <Library size={17} /> },
          { id: 'issued-books', label: 'Issued Books', icon: <BookMarked size={17} /> }
        ]
      },
      {
        title: 'TRANSPORT & BUS MANAGEMENT',
        expandable: true,
        items: [
          { id: 'vehicle-route', label: 'Vehicle & Route', icon: <Bus size={17} /> },
          { id: 'driver-mapping', label: 'Driver Mapping', icon: <Navigation size={17} /> }
        ]
      },
      {
        title: 'GENERAL',
        expandable: false,
        items: [
          { id: 'attendance-general', label: 'Attendance', icon: <UserCheck size={17} /> },
          { id: 'notice', label: 'Notice', icon: <Megaphone size={17} /> },
          { id: 'holiday-general', label: 'Holiday', icon: <Calendar size={17} /> },
          { id: 'leave-general', label: 'Leave', icon: <Send size={17} /> },
          { id: 'complaint', label: 'Complaint', icon: <AlertCircle size={17} /> },
          { id: 'permission', label: 'Permission', icon: <Shield size={17} /> },
          { id: 'chess', label: 'Chess', icon: <Crown size={17} /> }
        ]
      }
    ];
  }

  return (
    <div style={{ padding: '10px 0', userSelect: 'none' }}>
      {sections.map((section, sIndex) => {
        const isCollapsed = section.title ? collapsedSections[section.title] : false;

        return (
          <div key={sIndex} style={{ marginBottom: '10px' }}>
            {section.title && sidebarExpanded && (
              <div
                onClick={() => section.expandable && toggleSection(section.title!)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 20px 4px',
                  color: '#858C9B',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  cursor: section.expandable ? 'pointer' : 'default',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={e => {
                  if (section.expandable) e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={e => {
                  if (section.expandable) e.currentTarget.style.color = '#858C9B';
                }}
              >
                <span>{section.title}</span>
                {section.expandable && (
                  <span style={{ transition: 'transform 0.2s ease' }}>
                    {isCollapsed ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
                  </span>
                )}
              </div>
            )}

            {!isCollapsed && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                {section.items.map(item => {
                  const isActive =
                    activeModule === item.id ||
                    (item.id === 'holiday-general' && activeModule === 'holiday') ||
                    (item.id === 'leave-general' && activeModule === 'leave') ||
                    (item.id === 'attendance-general' && activeModule === 'attendance-staff');

                  return (
                    <button
                      key={item.id}
                      className={`sidebar-nav-btn ${isActive ? 'active' : ''}`}
                      onClick={() => handleItemClick(
                        item.id === 'holiday-general' ? 'holiday' :
                        item.id === 'leave-general' ? 'leave' :
                        item.id === 'attendance-general' ? 'attendance-staff' :
                        item.id
                      )}
                      title={item.label}
                      style={{
                        padding: sidebarExpanded ? '9px 20px' : '9px 0',
                        justifyContent: sidebarExpanded ? 'flex-start' : 'center'
                      }}
                    >
                      {/* Active Left Indicator Bar */}
                      {isActive && (
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '3.5px',
                            backgroundColor: '#6C5CE7',
                            borderTopRightRadius: '3px',
                            borderBottomRightRadius: '3px',
                            animation: 'badgePop 0.25s ease-out'
                          }}
                        />
                      )}

                      <span
                        className="menu-icon-container"
                        style={{
                          color: isActive ? '#6C5CE7' : '#858C9B'
                        }}
                      >
                        {item.icon}
                      </span>

                      {sidebarExpanded && (
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.label}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
