import React, { useState } from 'react';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Users,
  CreditCard,
  Library
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const LoginPage: React.FC = () => {
  const { login, setCurrentView } = useSchool();

  const [activeTab, setActiveTab] = useState<'staff' | 'student'>('staff');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMsg('Please enter both username and password.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsLoading(false);
      // Auto-detect role or default to active tab
      const role = activeTab === 'staff' ? (username.toLowerCase().includes('teacher') ? 'Teacher' : 'Admin') : 'Student';
      login(role);
    }, 500);
  };

  const handleQuickLogin = (role: string) => {
    login(role);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#1B2238',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Roboto', sans-serif"
      }}
    >
      {/* Decorative background glow circles */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 165, 46, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(25, 118, 237, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.35)',
          padding: '36px 32px',
          position: 'relative',
          zIndex: 10,
          animation: 'modalSpringIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both'
        }}
      >
        {/* Back to website button */}
        <button
          onClick={() => setCurrentView('landing')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#666666',
            fontSize: '12.5px',
            fontWeight: 500,
            marginBottom: '18px',
            transition: 'color 0.15s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#1976ED'}
          onMouseLeave={e => e.currentTarget.style.color = '#666666'}
        >
          <ArrowLeft size={14} />
          <span>Back to School Website</span>
        </button>

        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <img
            src="/logo.svg"
            alt="Meridian School Logo"
            style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 10px', display: 'block' }}
          />
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1B2238', letterSpacing: '0.5px' }}>
            MERIDIAN <span style={{ color: '#FFA52E' }}>SCHOOL</span>
          </h2>
          <p style={{ fontSize: '13px', color: '#888888', marginTop: '2px' }}>
            Administrative & Academic ERP Portal
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#F4F6FD',
            borderRadius: '8px',
            padding: '4px',
            marginBottom: '22px'
          }}
        >
          <button
            onClick={() => {
              setActiveTab('staff');
              setUsername('admin');
              setErrorMsg('');
            }}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: activeTab === 'staff' ? 600 : 500,
              backgroundColor: activeTab === 'staff' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'staff' ? '#172A55' : '#666666',
              boxShadow: activeTab === 'staff' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Admin & Staff
          </button>
          <button
            onClick={() => {
              setActiveTab('student');
              setUsername('student');
              setErrorMsg('');
            }}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: activeTab === 'student' ? 600 : 500,
              backgroundColor: activeTab === 'student' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'student' ? '#172A55' : '#666666',
              boxShadow: activeTab === 'student' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Student & Parent
          </button>
        </div>

        {errorMsg && (
          <div
            style={{
              backgroundColor: '#FFEBEF',
              color: '#FF525F',
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '12.5px',
              marginBottom: '16px',
              textAlign: 'center'
            }}
          >
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              {activeTab === 'staff' ? 'Username / Employee ID' : 'Admission No / Student ID'}
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder={activeTab === 'staff' ? 'admin or emp ID' : 'ANPS-2024-001'}
                className="form-input"
                style={{ paddingLeft: '36px' }}
              />
              <User size={16} color="#888888" style={{ position: 'absolute', left: '12px', top: '11px' }} />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '14px' }}>
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter account password"
                className="form-input"
                style={{ paddingLeft: '36px', paddingRight: '36px' }}
              />
              <Lock size={16} color="#888888" style={{ position: 'absolute', left: '12px', top: '11px' }} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '9px', color: '#888888' }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '12.5px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#555555', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#1976ED' }} />
              <span>Remember me</span>
            </label>
            <a href="#forgot" onClick={e => { e.preventDefault(); alert('Password recovery link sent to registered email.'); }} style={{ color: '#1976ED', fontWeight: 500 }}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary-pill"
            style={{
              width: '100%',
              height: '42px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {isLoading ? 'Verifying Credentials...' : 'Sign In to Portal'}
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        {/* 1-Click Quick Demo Sign-Ins */}
        <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #EEEEEE' }}>
          <p style={{ fontSize: '11.5px', color: '#888888', textAlign: 'center', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
            Instant 1-Click Demo Sign-In
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <button
              onClick={() => handleQuickLogin('Admin')}
              className="demo-role-chip"
              style={{ color: '#1976ED', borderColor: '#BFDBFE' }}
              title="Super Admin Dashboard with all 18 modules"
            >
              <ShieldCheck size={14} color="#1976ED" />
              <span>Admin</span>
            </button>
            <button
              onClick={() => handleQuickLogin('Teacher')}
              className="demo-role-chip"
              style={{ color: '#10B981', borderColor: '#A7F3D0' }}
              title="Teacher Schedule, Attendance Register, Homework & Leaves"
            >
              <GraduationCap size={14} color="#10B981" />
              <span>Teacher</span>
            </button>
            <button
              onClick={() => handleQuickLogin('Student')}
              className="demo-role-chip"
              style={{ color: '#2563EB', borderColor: '#BFDBFE' }}
              title="Student Timetable, Homework Upload, Library Shelf & Chess"
            >
              <BookOpen size={14} color="#2563EB" />
              <span>Student</span>
            </button>
            <button
              onClick={() => handleQuickLogin('Parent')}
              className="demo-role-chip"
              style={{ color: '#EA580C', borderColor: '#FED7AA' }}
              title="Child Presence, GPS Bus Tracker, Fee Payment & Complaints"
            >
              <Users size={14} color="#EA580C" />
              <span>Parent</span>
            </button>
            <button
              onClick={() => handleQuickLogin('Accountant')}
              className="demo-role-chip"
              style={{ color: '#7C3AED', borderColor: '#DDD6FE' }}
              title="Bursar Counter, Fee Collection, Defaulter Alerts & Receipts"
            >
              <CreditCard size={14} color="#7C3AED" />
              <span>Bursar</span>
            </button>
            <button
              onClick={() => handleQuickLogin('Librarian')}
              className="demo-role-chip"
              style={{ color: '#0891B2', borderColor: '#A5F3FC' }}
              title="Circulation Desk, Book Catalog, Loan Issue/Return & Fines"
            >
              <Library size={14} color="#0891B2" />
              <span>Librarian</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
