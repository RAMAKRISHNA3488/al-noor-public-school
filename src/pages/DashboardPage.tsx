import React from 'react';
import { Users, GraduationCap, Clock, AlertTriangle, Calendar, FileText, ArrowUpRight, TrendingUp } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';
import { TeacherDashboard } from '../components/roles/TeacherDashboard';
import { StudentDashboard } from '../components/roles/StudentDashboard';
import { ParentDashboard } from '../components/roles/ParentDashboard';
import { AccountantDashboard } from '../components/roles/AccountantDashboard';
import { LibrarianDashboard } from '../components/roles/LibrarianDashboard';

export const DashboardPage: React.FC = () => {
  const { students, staff, notices, holidays, complaints, leaves, setActiveModule, currentUser } = useSchool();

  if (currentUser?.role === 'Teacher') {
    return <TeacherDashboard />;
  }
  if (currentUser?.role === 'Student') {
    return <StudentDashboard />;
  }
  if (currentUser?.role === 'Parent') {
    return <ParentDashboard />;
  }
  if (currentUser?.role === 'Accountant') {
    return <AccountantDashboard />;
  }
  if (currentUser?.role === 'Librarian') {
    return <LibrarianDashboard />;
  }

  const totalStudents = 1248; // Simulated full school count
  const totalStaff = 86;
  const pendingLeaves = leaves.filter(l => l.status === 'Pending').length;
  const pendingComplaints = complaints.filter(c => c.status === 'Pending').length;

  const statCards = [
    { title: 'Total Enrolled Students', value: totalStudents.toLocaleString(), change: '+4.2% from last term', icon: <GraduationCap size={24} color="#1976ED" />, bg: '#EBF3FE' },
    { title: 'Faculty & Staff Members', value: totalStaff.toString(), change: '100% active roster', icon: <Users size={24} color="#FFA52E" />, bg: '#FFF5E8' },
    { title: 'Average Attendance', value: '94.8%', change: '+1.6% this week', icon: <TrendingUp size={24} color="#10B981" />, bg: '#ECFDF5' },
    { title: 'Pending Admin Approvals', value: (pendingLeaves + pendingComplaints).toString(), change: `${pendingLeaves} leaves, ${pendingComplaints} complaints`, icon: <AlertTriangle size={24} color="#FF525F" />, bg: '#FFEBEF' }
  ];

  // Attendance bar data
  const weeklyAttendance = [
    { day: 'Mon', rate: 96 },
    { day: 'Tue', rate: 95 },
    { day: 'Wed', rate: 93 },
    { day: 'Thu', rate: 97 },
    { day: 'Fri', rate: 94 },
    { day: 'Sat', rate: 91 }
  ];

  // Grade enrollment
  const gradeDistribution = [
    { grade: 'Grade 8', count: 240, pct: 19 },
    { grade: 'Grade 9', count: 265, pct: 21 },
    { grade: 'Grade 10', count: 280, pct: 23 },
    { grade: 'Grade 11', count: 235, pct: 19 },
    { grade: 'Grade 12', count: 228, pct: 18 }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
      {/* 4 Summary Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className="stat-card-premium"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span style={{ fontSize: '13px', color: '#666666', fontWeight: 500 }}>{card.title}</span>
              <h3 style={{ fontSize: '28px', color: '#172A55', fontWeight: 700, margin: '6px 0 4px' }}>
                {card.value}
              </h3>
              <span style={{ fontSize: '12px', color: '#888888' }}>{card.change}</span>
            </div>
            <div
              className="stat-icon-wrapper"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: card.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Row: Attendance Chart & Grade Distribution */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
        {/* Attendance Visualizer */}
        <div className="analytics-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '18px', color: '#172A55', fontWeight: 600 }}>Weekly Attendance Trends</h3>
              <p style={{ fontSize: '12px', color: '#888888' }}>Current Academic Week Daily Percentage</p>
            </div>
            <span className="date-badge" style={{ backgroundColor: '#10B981' }}>94.8% Overall</span>
          </div>

          {/* SVG Bar Chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '180px', paddingTop: '20px', borderBottom: '1px solid #EEEEEE' }}>
            {weeklyAttendance.map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '12%' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#172A55', marginBottom: '6px' }}>
                  {item.rate}%
                </span>
                <div
                  className="chart-bar-grow"
                  style={{
                    width: '100%',
                    height: `${(item.rate / 100) * 130}px`,
                    backgroundColor: i === 3 ? '#1976ED' : '#93C5FD',
                    borderRadius: '6px 6px 0 0',
                    cursor: 'pointer'
                  }}
                  title={`${item.day}: ${item.rate}% Attendance`}
                />
                <span style={{ fontSize: '12px', color: '#666666', marginTop: '8px', fontWeight: 500 }}>
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Grade Enrollment Distribution */}
        <div className="analytics-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '18px', color: '#172A55', fontWeight: 600 }}>Student Enrollment Distribution</h3>
              <p style={{ fontSize: '12px', color: '#888888' }}>Total Enrolled: 1,248 Students</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {gradeDistribution.map((grade, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                  <span style={{ fontWeight: 600, color: '#172A55' }}>{grade.grade}</span>
                  <span style={{ color: '#666666' }}>{grade.count} students ({grade.pct}%)</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#F1F1F1', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${grade.pct * 4}%`,
                      height: '100%',
                      backgroundColor: idx === 2 ? '#FFA52E' : '#1976ED',
                      borderRadius: '4px',
                      transition: 'width 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Feeds: Recent Notices & Upcoming Holidays */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
        {/* Recent Notices */}
        <div className="analytics-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '17px', color: '#172A55', fontWeight: 600 }}>Recent Notices</h3>
            <button
              onClick={() => setActiveModule('notice')}
              style={{ fontSize: '13px', color: '#1976ED', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '2px' }}
            >
              View All <ArrowUpRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {notices.slice(0, 3).map(n => (
              <div
                key={n.id}
                style={{
                  padding: '12px',
                  backgroundColor: '#F8FAFE',
                  borderRadius: '8px',
                  border: '1px solid #E9E9E9',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = '#BFDBFE';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = '#E9E9E9';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#172A55' }}>{n.notice}</span>
                  <span className="date-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{n.date}</span>
                </div>
                <span style={{ fontSize: '12px', color: '#666666' }}>{n.document}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Holidays */}
        <div className="analytics-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '17px', color: '#172A55', fontWeight: 600 }}>Upcoming Holidays</h3>
            <button
              onClick={() => setActiveModule('holiday')}
              style={{ fontSize: '13px', color: '#1976ED', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '2px' }}
            >
              View All <ArrowUpRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {holidays.slice(0, 3).map(h => (
              <div
                key={h.id}
                style={{
                  padding: '12px',
                  backgroundColor: '#FFF9F2',
                  borderRadius: '8px',
                  border: '1px solid #FFE4C4'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#172A55' }}>{h.purpose}</span>
                  <span className="date-badge" style={{ fontSize: '11px', padding: '3px 10px', backgroundColor: '#FFA52E' }}>
                    {h.date}
                  </span>
                </div>
                <span style={{ fontSize: '12px', color: '#888888' }}>
                  {h.type || 'General'} Holiday • Session {h.academicYear || '2025-2026'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
