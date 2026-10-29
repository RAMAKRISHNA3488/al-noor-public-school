import React, { useState } from 'react';
import {
  Bell,
  Menu,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ChevronDown,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Users,
  CreditCard,
  Library,
  Globe,
  LogOut,
  User
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const TopNavigation: React.FC = () => {
  const {
    toggleSidebar,
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
    currentUser,
    setCurrentView,
    logout,
    login
  } = useSchool();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getRoleIcon = (roleName: string, size = 15) => {
    switch (roleName) {
      case 'Admin':
        return <ShieldCheck size={size} color="#1976ED" />;
      case 'Teacher':
        return <GraduationCap size={size} color="#10B981" />;
      case 'Student':
        return <BookOpen size={size} color="#2563EB" />;
      case 'Parent':
        return <Users size={size} color="#EA580C" />;
      case 'Accountant':
        return <CreditCard size={size} color="#7C3AED" />;
      case 'Librarian':
        return <Library size={size} color="#0891B2" />;
      default:
        return <User size={size} color="#1976ED" />;
    }
  };

  const roleList = [
    { role: 'Admin', label: 'Super Admin', icon: <ShieldCheck size={18} color="#1976ED" />, desc: 'All 18 modules & master control' },
    { role: 'Teacher', label: 'Teacher / Faculty', icon: <GraduationCap size={18} color="#10B981" />, desc: 'Schedule, attendance & homework' },
    { role: 'Student', label: 'Student Portal', icon: <BookOpen size={18} color="#2563EB" />, desc: 'Timetable, homework & library shelf' },
    { role: 'Parent', label: 'Parent / Guardian', icon: <Users size={18} color="#EA580C" />, desc: 'Child presence, live bus & fees' },
    { role: 'Accountant', label: 'Chief Bursar', icon: <CreditCard size={18} color="#7C3AED" />, desc: 'Counter collection, ledgers & receipts' },
    { role: 'Librarian', label: 'Chief Librarian', icon: <Library size={18} color="#0891B2" />, desc: 'Circulation desk & book catalog' }
  ];

  return (
    <header
      className="glass-nav"
      style={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
        position: 'relative',
        zIndex: 50
      }}
    >
      {/* Left: Mobile hamburger & Role Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={toggleSidebar}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            color: '#1B2238',
            borderRadius: '5px',
            transition: 'transform 0.15s ease, background-color 0.15s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#F4F6FD';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title="Toggle Navigation"
        >
          <Menu size={20} />
        </button>

        {/* Role Quick Switcher Pill */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowRoleDropdown(!showRoleDropdown)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              backgroundColor: '#F4F6FD',
              border: '1px solid #DCE3F2',
              fontSize: '12px',
              fontWeight: 600,
              color: '#172A55',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#EBF3FE'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F4F6FD'}
            title="Click to instantly switch between Admin, Teacher, Student, Parent, Accountant, or Librarian"
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {getRoleIcon(currentUser?.role || 'Admin', 14)}
            </span>
            <span>Switch Role: <strong>{currentUser?.role || 'Admin'}</strong></span>
            <ChevronDown size={13} color="#666666" />
          </button>

          {showRoleDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: 0,
                width: '260px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                border: '1px solid #E2E8F0',
                zIndex: 110,
                padding: '6px',
                animation: 'modalSpringIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) both'
              }}
            >
              <div style={{ padding: '8px 10px 6px', borderBottom: '1px solid #F1F1F1', fontSize: '11px', fontWeight: 700, color: '#888888', textTransform: 'uppercase' }}>
                Select User Portal Role
              </div>
              {roleList.map(item => (
                <button
                  key={item.role}
                  onClick={() => {
                    setShowRoleDropdown(false);
                    login(item.role);
                  }}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textAlign: 'left',
                    backgroundColor: currentUser?.role === item.role ? '#EBF3FE' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease'
                  }}
                  onMouseEnter={e => {
                    if (currentUser?.role !== item.role) e.currentTarget.style.backgroundColor = '#F8FAFE';
                  }}
                  onMouseLeave={e => {
                    if (currentUser?.role !== item.role) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#F4F6FD', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <div>
                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#172A55', display: 'block' }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '10.5px', color: '#777777', display: 'block' }}>
                      {item.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right: Notifications & User Greeting */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Notification Bell */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#F4F6FD',
              color: '#172A55',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#EBF3FE';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#F4F6FD';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            title="Notifications"
          >
            <span className={unreadCount > 0 ? 'bell-animated' : ''}>
              <Bell size={17} />
            </span>
            {unreadCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  backgroundColor: '#FF525F',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: 700,
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1.5px solid #FFFFFF',
                  animation: 'badgePop 0.3s ease-out'
                }}
              >
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div
              style={{
                position: 'absolute',
                top: '44px',
                right: '-8px',
                width: '300px',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.14)',
                border: '1px solid #E9E9E9',
                zIndex: 100,
                overflow: 'hidden',
                animation: 'modalSpringIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderBottom: '1px solid #EEEEEE',
                  backgroundColor: '#F8FAFE'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 600, color: '#172A55', fontSize: '13.5px' }}>Notifications</span>
                  {unreadCount > 0 && (
                    <span
                      style={{
                        backgroundColor: '#1976ED',
                        color: '#FFFFFF',
                        fontSize: '10px',
                        padding: '1px 6px',
                        borderRadius: '10px'
                      }}
                    >
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsRead}
                    style={{ fontSize: '11px', color: '#1976ED', fontWeight: 500 }}
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div style={{ maxHeight: '260px', overflowY: 'auto' }}>
                {notifications.map(n => (
                  <div
                    key={n.id}
                    onClick={() => markNotificationRead(n.id)}
                    style={{
                      padding: '10px 14px',
                      borderBottom: '1px solid #F1F1F1',
                      backgroundColor: n.read ? '#FFFFFF' : '#F6F9FF',
                      cursor: 'pointer',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#EEF4FF';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = n.read ? '#FFFFFF' : '#F6F9FF';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#1976ED', marginTop: '2px' }}>
                        {n.type === 'notice' ? <FileText size={14} /> :
                         n.type === 'complaint' ? <AlertTriangle size={14} /> :
                         <CheckCircle2 size={14} />}
                      </span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '12px', fontWeight: n.read ? 500 : 600, color: '#111111' }}>
                          {n.title}
                        </p>
                        <p style={{ fontSize: '11px', color: '#666666', marginTop: '2px' }}>
                          {n.message}
                        </p>
                        <span style={{ fontSize: '10px', color: '#999999', marginTop: '3px', display: 'block' }}>
                          {n.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile with Dropdown */}
        <div style={{ position: 'relative' }}>
          <div
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '4px 8px', borderRadius: '8px', transition: 'background-color 0.15s ease' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F4F6FD'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#1976ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(25, 118, 237, 0.2)',
                border: '2px solid #EBF3FE',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                alt="Admin Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#555555', fontSize: '15px', fontWeight: 400 }}>Hi,</span>
              <span style={{ color: '#111111', fontSize: '15.5px', fontWeight: 700 }}>
                {currentUser?.name?.split(' ')[0] || 'Admin'}
              </span>
            </div>
          </div>

          {/* User Profile Dropdown Menu */}
          {showProfileMenu && (
            <div
              style={{
                position: 'absolute',
                top: '48px',
                right: '0',
                width: '240px',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.14)',
                border: '1px solid #E9E9E9',
                zIndex: 100,
                overflow: 'hidden',
                animation: 'modalSpringIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both'
              }}
            >
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #EEEEEE', backgroundColor: '#F8FAFE' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#172A55' }}>
                  {currentUser?.name || 'Admin User'}
                </div>
                <div style={{ fontSize: '12px', color: '#1976ED', fontWeight: 600, marginTop: '2px' }}>
                  Role: {currentUser?.role || 'Admin'}
                </div>
                <div style={{ fontSize: '11px', color: '#888888', marginTop: '1px' }}>
                  {currentUser?.email || 'admin@alnoor.edu'}
                </div>
              </div>

              <div style={{ padding: '6px 0' }}>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    setCurrentView('landing');
                  }}
                  style={{
                    width: '100%',
                    padding: '9px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    color: '#333333',
                    textAlign: 'left',
                    transition: 'background-color 0.15s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F4F6FD'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Globe size={14} color="#1976ED" />
                  <span>Visit Public Website</span>
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    logout();
                  }}
                  style={{
                    width: '100%',
                    padding: '9px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    color: '#FF525F',
                    fontWeight: 600,
                    textAlign: 'left',
                    transition: 'background-color 0.15s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FFEBEF'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <LogOut size={14} color="#FF525F" />
                  <span>Sign Out of Portal</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
