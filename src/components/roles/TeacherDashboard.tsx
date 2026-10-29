import React, { useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  ClipboardList,
  BookOpen,
  Send,
  AlertCircle,
  Users,
  Award,
  Plus,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const TeacherDashboard: React.FC = () => {
  const {
    currentUser,
    classRoutines,
    homeworkList,
    syllabusList,
    leaves,
    applyLeave,
    notices,
    setActiveModule
  } = useSchool();

  // Interactive state for daily attendance marking
  const [attendanceList, setAttendanceList] = useState([
    { id: 1, roll: '101', name: 'Zaid bin Tariq', status: 'Present' },
    { id: 2, roll: '102', name: 'Maryam Fatima', status: 'Present' },
    { id: 3, roll: '103', name: 'Hamza Zubair', status: 'Present' },
    { id: 4, roll: '104', name: 'Amina Siddiqui', status: 'Absent' },
    { id: 5, roll: '105', name: 'Bilal Mustafa', status: 'Late' },
    { id: 6, roll: '106', name: 'Danish Khan', status: 'Present' },
    { id: 7, roll: '107', name: 'Sarah Ahmed', status: 'Present' }
  ]);

  const [attendanceSaved, setAttendanceSaved] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveReason, setLeaveReason] = useState('');
  const [leaveType, setLeaveType] = useState<'Sick' | 'Casual' | 'Annual'>('Casual');
  const [leaveStartDate, setLeaveStartDate] = useState('2026-03-25');
  const [leaveEndDate, setLeaveEndDate] = useState('2026-03-26');
  const [leaveSuccessMsg, setLeaveSuccessMsg] = useState(false);

  const toggleStatus = (id: number) => {
    setAttendanceList(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextStatus = item.status === 'Present' ? 'Absent' : item.status === 'Absent' ? 'Late' : 'Present';
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  const handleSaveAttendance = () => {
    setAttendanceSaved(true);
    setTimeout(() => setAttendanceSaved(false), 3000);
  };

  const handleApplyLeave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leaveReason.trim()) return;

    applyLeave({
      date: new Date().toISOString().split('T')[0],
      reason: leaveReason,
      leaveType,
      applicantName: currentUser?.name || 'Prof. Tariq Mahmood',
      startDate: leaveStartDate,
      endDate: leaveEndDate
    });

    setLeaveSuccessMsg(true);
    setTimeout(() => {
      setLeaveSuccessMsg(false);
      setShowLeaveModal(false);
      setLeaveReason('');
    }, 1500);
  };

  const teacherSchedule = classRoutines.slice(0, 4);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. Welcome Header Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1B2238 0%, #24304F 100%)',
          borderRadius: '16px',
          padding: '24px 28px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          boxShadow: '0 8px 24px rgba(27, 34, 56, 0.15)'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                color: '#10B981',
                padding: '3px 10px',
                borderRadius: '20px',
                fontSize: '11.5px',
                fontWeight: 600,
                border: '1px solid rgba(16, 185, 129, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <GraduationCap size={13} color="#10B981" />
              <span>Faculty Portal Active</span>
            </span>
            <span style={{ color: '#A0AEC0', fontSize: '12px' }}>Employee ID: EMP-101</span>
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 700, margin: 0, letterSpacing: '0.2px' }}>
            Good day, {currentUser?.name || 'Prof. Tariq Mahmood'}!
          </h2>
          <p style={{ margin: '4px 0 0', color: '#CBD5E1', fontSize: '13px' }}>
            Department: {currentUser?.department || 'Senior Mathematics'} • Grade 10-A Class Coordinator
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setShowLeaveModal(true)}
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '9px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}
          >
            <Clock size={15} />
            <span>Apply Leave</span>
          </button>

          <button
            onClick={() => setActiveModule('homework')}
            className="btn-primary-pill"
            style={{ height: '38px', padding: '0 18px', fontSize: '13px' }}
          >
            <Plus size={15} />
            <span>Assign Homework</span>
          </button>
        </div>
      </div>

      {/* 2. Key Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Periods Today</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#EBF3FE', padding: '8px', borderRadius: '8px', color: '#1976ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CalendarDays size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>4 Classes</h3>
          <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 500 }}>Next: Room 201 (09:15 AM)</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Active Students</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#ECFDF5', padding: '8px', borderRadius: '8px', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>142 Enrolled</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>Grades 9-A, 10-A, 10-B</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Homework Submissions</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#FFF5E8', padding: '8px', borderRadius: '8px', color: '#FFA52E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ClipboardList size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>38 to Review</h3>
          <span style={{ fontSize: '11.5px', color: '#FFA52E', fontWeight: 500 }}>Exercise 4.2 Quadratic</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Annual Leave Quota</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#FFEBEF', padding: '8px', borderRadius: '8px', color: '#FF525F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>12 Days Left</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>3 Casual, 9 Sick Balance</span>
        </div>
      </div>

      {/* 3. Center Section: Daily Timetable & Student Attendance Register */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' }}>
        {/* Today's Teaching Timetable */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Today's Teaching Schedule</h3>
              <span style={{ fontSize: '12px', color: '#888888' }}>Monday, March 16, 2026</span>
            </div>
            <button
              onClick={() => setActiveModule('class-routine')}
              style={{ fontSize: '12px', color: '#1976ED', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Full Routine</span>
              <ArrowRight size={13} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {teacherSchedule.map((slot, index) => (
              <div
                key={slot.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  backgroundColor: index === 0 ? '#F4F8FE' : '#F9FAFC',
                  borderLeft: index === 0 ? '4px solid #1976ED' : '4px solid #E2E8F0',
                  transition: 'transform 0.15s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#172A55' }}>{slot.subject}</span>
                    <span className="date-badge" style={{ backgroundColor: '#1976ED', fontSize: '10px' }}>{slot.grade}-{slot.section}</span>
                    {index === 0 && (
                      <span style={{ backgroundColor: '#10B981', color: '#FFFFFF', fontSize: '9.5px', padding: '1px 6px', borderRadius: '10px', fontWeight: 600 }}>
                        UPCOMING
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '11.5px', color: '#777777', marginTop: '2px', display: 'block' }}>
                    {slot.room} • Coordinated by {slot.teacher}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: index === 0 ? '#1976ED' : '#555555' }}>
                    {slot.timeSlot}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Attendance Register for Grade 10-A */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Class 10-A Daily Attendance</h3>
              <span style={{ fontSize: '12px', color: '#888888' }}>Tap status pill to toggle Present / Absent / Late</span>
            </div>
            <button
              onClick={handleSaveAttendance}
              className="btn-primary-pill"
              style={{ height: '34px', padding: '0 14px', fontSize: '12px' }}
            >
              <CheckCircle2 size={13} />
              <span>{attendanceSaved ? 'Saved' : 'Save Register'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {attendanceList.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#888888', width: '28px' }}>#{item.roll}</span>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#172A55' }}>{item.name}</span>
                </div>

                <button
                  onClick={() => toggleStatus(item.id)}
                  style={{
                    padding: '3px 12px',
                    borderRadius: '12px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    border: 'none',
                    backgroundColor: item.status === 'Present' ? '#ECFDF5' : item.status === 'Absent' ? '#FFEBEF' : '#FFF5E8',
                    color: item.status === 'Present' ? '#10B981' : item.status === 'Absent' ? '#FF525F' : '#FFA52E'
                  }}
                >
                  {item.status}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Row: Active Homework & Syllabus Tracker */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
        {/* Homework list */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Assigned Homework</h3>
            <button onClick={() => setActiveModule('homework')} style={{ fontSize: '12px', color: '#1976ED', fontWeight: 500 }}>
              Manage All
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {homeworkList.map(hw => (
              <div key={hw.id} style={{ padding: '12px', borderRadius: '10px', backgroundColor: '#F9FAFC', border: '1px solid #ECEEF6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#172A55' }}>{hw.title}</span>
                  <span className="status-badge status-approved" style={{ fontSize: '10px' }}>{hw.status}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#666666', margin: '4px 0 8px' }}>{hw.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#888888' }}>
                  <span>Class: {hw.grade} - {hw.section}</span>
                  <span style={{ color: '#FF525F', fontWeight: 500 }}>Due: {hw.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus Progress */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Syllabus Completion</h3>
            <button onClick={() => setActiveModule('syllabus')} style={{ fontSize: '12px', color: '#1976ED', fontWeight: 500 }}>
              Update Units
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {syllabusList.map(item => (
              <div key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 600, color: '#172A55' }}>{item.unit}</span>
                  <span style={{ fontWeight: 700, color: item.completion === 100 ? '#10B981' : '#1976ED' }}>{item.completion}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${item.completion}%`,
                      height: '100%',
                      backgroundColor: item.completion === 100 ? '#10B981' : '#1976ED',
                      borderRadius: '4px',
                      transition: 'width 0.4s ease'
                    }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#888888', marginTop: '3px', display: 'block' }}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leave Application Modal */}
      {showLeaveModal && (
        <div className="modal-backdrop">
          <div className="modal-content" style={{ maxWidth: '440px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>
                Faculty Leave Application
              </h3>
              <button onClick={() => setShowLeaveModal(false)} style={{ border: 'none', background: 'transparent', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            {leaveSuccessMsg ? (
              <div style={{ padding: '24px', textAlign: 'center' }}>
                <CheckCircle2 size={40} color="#10B981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ color: '#10B981', margin: 0 }}>Leave Request Submitted!</h4>
                <p style={{ fontSize: '12.5px', color: '#666666', marginTop: '6px' }}>Sent to Principal Desk for approval.</p>
              </div>
            ) : (
              <form onSubmit={handleApplyLeave} style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Leave Type</label>
                  <select
                    value={leaveType}
                    onChange={e => setLeaveType(e.target.value as any)}
                    className="filter-select"
                    style={{ width: '100%', marginTop: '4px' }}
                  >
                    <option value="Casual">Casual Leave (Balance: 3)</option>
                    <option value="Sick">Medical / Sick Leave (Balance: 9)</option>
                    <option value="Annual">Annual Privilege Leave</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Start Date</label>
                    <input
                      type="date"
                      value={leaveStartDate}
                      onChange={e => setLeaveStartDate(e.target.value)}
                      className="filter-input"
                      style={{ width: '100%', marginTop: '4px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>End Date</label>
                    <input
                      type="date"
                      value={leaveEndDate}
                      onChange={e => setLeaveEndDate(e.target.value)}
                      className="filter-input"
                      style={{ width: '100%', marginTop: '4px' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Reason / Handover Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Provide justification and class adjustment details..."
                    value={leaveReason}
                    onChange={e => setLeaveReason(e.target.value)}
                    className="filter-input"
                    style={{ width: '100%', marginTop: '4px', resize: 'vertical' }}
                    required
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setShowLeaveModal(false)}
                    style={{ padding: '7px 14px', borderRadius: '6px', border: '1px solid #CCC', fontSize: '13px' }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary-pill" style={{ height: '36px', padding: '0 16px', fontSize: '13px' }}>
                    <Send size={13} />
                    <span>Submit Leave Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
