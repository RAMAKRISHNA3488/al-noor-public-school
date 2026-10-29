import React from 'react';
import {
  User,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Users,
  CreditCard,
  Library
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const AdminUserHeader: React.FC = () => {
  const { currentUser } = useSchool();

  const role = currentUser?.role || 'Admin';

  const roleConfig: Record<string, { label: string; bg: string; color: string; icon: React.ReactNode }> = {
    Admin: { label: 'Super Admin', bg: '#EBF3FE', color: '#1976ED', icon: <ShieldCheck size={12} color="#1976ED" /> },
    Teacher: { label: 'Faculty Member', bg: '#ECFDF5', color: '#10B981', icon: <GraduationCap size={12} color="#10B981" /> },
    Student: { label: 'Student Portal', bg: '#EFF6FF', color: '#2563EB', icon: <BookOpen size={12} color="#2563EB" /> },
    Parent: { label: 'Parent / Guardian', bg: '#FFF7ED', color: '#EA580C', icon: <Users size={12} color="#EA580C" /> },
    Accountant: { label: 'Chief Bursar', bg: '#F5F3FF', color: '#7C3AED', icon: <CreditCard size={12} color="#7C3AED" /> },
    Librarian: { label: 'Chief Librarian', bg: '#ECFEFF', color: '#0891B2', icon: <Library size={12} color="#0891B2" /> }
  };

  const currentConfig = roleConfig[role] || roleConfig.Admin;

  return (
    <div
      style={{
        height: '38px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #ECEEF6',
        boxShadow: '0 1px 4px rgba(27, 34, 56, 0.03)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        userSelect: 'none'
      }}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#1976ED',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF'
        }}
      >
        <User size={12} strokeWidth={2.5} />
      </div>

      <span
        style={{
          fontSize: '13.5px',
          fontWeight: 600,
          color: '#172A55',
          letterSpacing: '0.2px'
        }}
      >
        {currentUser?.name || 'Admin User'}
      </span>

      <span
        style={{
          backgroundColor: currentConfig.bg,
          color: currentConfig.color,
          fontSize: '11px',
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          border: `1px solid ${currentConfig.color}33`
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>{currentConfig.icon}</span>
        <span>{currentConfig.label}</span>
      </span>
    </div>
  );
};
