import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  BookMarked,
  Crown,
  FileText,
  UploadCloud,
  ChevronRight,
  TrendingUp,
  ClipboardList
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const StudentDashboard: React.FC = () => {
  const {
    currentUser,
    classRoutines,
    homeworkList,
    issuedBooks,
    notices,
    setActiveModule
  } = useSchool();

  const [submittedTasks, setSubmittedTasks] = useState<number[]>([]);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedHomework, setSelectedHomework] = useState<any>(null);
  const [uploadProgress, setUploadProgress] = useState(false);

  const studentSchedule = classRoutines.slice(0, 4);
  const myIssuedBook = issuedBooks.find(b => b.borrowerId === 'ANPS-2024-001') || issuedBooks[0];

  const handleMarkSubmitted = (id: number) => {
    setSelectedHomework(homeworkList.find(h => h.id === id));
    setShowSubmitModal(true);
  };

  const handleCompleteUpload = () => {
    setUploadProgress(true);
    setTimeout(() => {
      setUploadProgress(false);
      if (selectedHomework) {
        setSubmittedTasks(prev => [...prev, selectedHomework.id]);
      }
      setShowSubmitModal(false);
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. Student Hero Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1B2238 0%, #15325B 100%)',
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
                backgroundColor: 'rgba(25, 118, 237, 0.25)',
                color: '#60A5FA',
                padding: '3px 10px',
                borderRadius: '20px',
                fontSize: '11.5px',
                fontWeight: 600,
                border: '1px solid rgba(96, 165, 250, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <GraduationCap size={13} color="#60A5FA" />
              <span>Student Portal Active</span>
            </span>
            <span style={{ color: '#CBD5E1', fontSize: '12px' }}>
              Admission: {currentUser?.studentId || 'ANPS-2024-001'}
            </span>
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 700, margin: 0, letterSpacing: '0.2px' }}>
            Welcome back, {currentUser?.name || 'Zaid bin Tariq'}!
          </h2>
          <p style={{ margin: '4px 0 0', color: '#CBD5E1', fontSize: '13px' }}>
            Class: {currentUser?.grade || 'Grade 10 - Section A'} • Roll No: #12 • Section Monitor
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setActiveModule('chess')}
            style={{
              backgroundColor: 'rgba(255, 165, 46, 0.15)',
              color: '#FFA52E',
              border: '1px solid rgba(255, 165, 46, 0.35)',
              padding: '9px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 165, 46, 0.25)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 165, 46, 0.15)'}
          >
            <Crown size={15} />
            <span>Chess Club (1,064 Games)</span>
          </button>
        </div>
      </div>

      {/* 2. Key Academic Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Overall Attendance</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#ECFDF5', padding: '8px', borderRadius: '8px', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#10B981', margin: '8px 0 2px' }}>96.5%</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>148 / 153 Days Attended</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Term Evaluation Score</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#EBF3FE', padding: '8px', borderRadius: '8px', color: '#1976ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Award size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>94.2% (Grade A+)</h3>
          <span style={{ fontSize: '11.5px', color: '#1976ED', fontWeight: 500 }}>Rank #3 in Grade 10</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Pending Homework</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#FFF5E8', padding: '8px', borderRadius: '8px', color: '#FFA52E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ClipboardList size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>
            {Math.max(homeworkList.length - submittedTasks.length, 0)} Tasks Due
          </h3>
          <span style={{ fontSize: '11.5px', color: '#FFA52E', fontWeight: 500 }}>Next due: March 17</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Library Book Due</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#FFEBEF', padding: '8px', borderRadius: '8px', color: '#FF525F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BookMarked size={18} /></span>
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {myIssuedBook?.bookTitle || 'Concepts of Physics'}
          </h3>
          <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 500 }}>Due: {myIssuedBook?.dueDate} (No Fine)</span>
        </div>
      </div>

      {/* 3. Timetable & Homework Action Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' }}>
        {/* Today's Classes */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>My Schedule Today</h3>
              <span style={{ fontSize: '12px', color: '#888888' }}>Class 10-A Timetable</span>
            </div>
            <button
              onClick={() => setActiveModule('class-routine')}
              style={{ fontSize: '12px', color: '#1976ED', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Weekly View</span>
              <ChevronRight size={13} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {studentSchedule.map((slot, index) => (
              <div
                key={slot.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  backgroundColor: index === 0 ? '#F4F8FE' : '#F9FAFC',
                  borderLeft: index === 0 ? '4px solid #1976ED' : '4px solid #E2E8F0'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#172A55' }}>{slot.subject}</span>
                    <span style={{ fontSize: '11px', color: '#777777' }}>({slot.teacher})</span>
                  </div>
                  <span style={{ fontSize: '11.5px', color: '#888888', marginTop: '2px', display: 'block' }}>
                    Venue: {slot.room}
                  </span>
                </div>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: index === 0 ? '#1976ED' : '#555555' }}>
                  {slot.timeSlot}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Assigned Homework with Submit Action */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Active Homework Tasks</h3>
              <span style={{ fontSize: '12px', color: '#888888' }}>Upload notes or solutions before due date</span>
            </div>
            <button
              onClick={() => setActiveModule('homework')}
              style={{ fontSize: '12px', color: '#1976ED', fontWeight: 500 }}
            >
              All Homework
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {homeworkList.map(hw => {
              const isSubmitted = submittedTasks.includes(hw.id);

              return (
                <div
                  key={hw.id}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: isSubmitted ? '#F0FDF4' : '#F9FAFC',
                    border: isSubmitted ? '1px solid #BBF7D0' : '1px solid #ECEEF6'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#172A55' }}>{hw.title}</span>
                      <span style={{ fontSize: '11.5px', color: '#1976ED', display: 'block', marginTop: '1px' }}>{hw.subject}</span>
                    </div>
                    {isSubmitted ? (
                      <span style={{ backgroundColor: '#ECFDF5', color: '#10B981', fontSize: '11px', padding: '2px 8px', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={12} />
                        Submitted
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMarkSubmitted(hw.id)}
                        className="btn-primary-pill"
                        style={{ height: '30px', padding: '0 12px', fontSize: '11.5px' }}
                      >
                        <UploadCloud size={13} />
                        <span>Submit</span>
                      </button>
                    )}
                  </div>
                  <p style={{ fontSize: '12px', color: '#666666', margin: '6px 0 4px' }}>{hw.description}</p>
                  <span style={{ fontSize: '11px', color: '#FF525F', fontWeight: 500 }}>Deadline: {hw.dueDate}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Bottom Cards: My Library Books & Recent Circulars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
        {/* Library Shelf */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>My Library Borrowings</h3>
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>Active Member: Good Standing</span>
          </div>

          <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: '#F8FAFE', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '48px', height: '60px', backgroundColor: '#1976ED', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
              <BookOpen size={24} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#172A55', margin: 0 }}>
                {myIssuedBook?.bookTitle || 'Concepts of Physics (Vol 1)'}
              </h4>
              <span style={{ fontSize: '12px', color: '#666666', display: 'block', marginTop: '2px' }}>
                Issued: {myIssuedBook?.issueDate} • Return by: <strong style={{ color: '#1976ED' }}>{myIssuedBook?.dueDate}</strong>
              </span>
              <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600, marginTop: '3px', display: 'block' }}>
                Fine accrued: ₹0.00
              </span>
            </div>
            <button
              onClick={() => alert('Renewal request submitted to Chief Librarian Mrs. Rizwana!')}
              style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #1976ED', color: '#1976ED', backgroundColor: '#FFF', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
            >
              Renew
            </button>
          </div>
        </div>

        {/* Notices */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>School Notice Board</h3>
            <button onClick={() => setActiveModule('notice')} style={{ fontSize: '12px', color: '#1976ED', fontWeight: 500 }}>
              View All Notices
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {notices.slice(0, 2).map(n => (
              <div key={n.id} style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: '#F9FAFC', border: '1px solid #ECEEF6' }}>
                <span className="date-badge" style={{ backgroundColor: '#1976ED', fontSize: '10px' }}>{n.date}</span>
                <h5 style={{ fontSize: '13px', fontWeight: 600, color: '#172A55', margin: '4px 0 2px' }}>{n.notice}</h5>
                <p style={{ fontSize: '11.5px', color: '#666666', margin: 0 }}>{n.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Homework Submission Modal */}
      {showSubmitModal && (
        <div className="modal-backdrop">
          <div className="modal-content" style={{ maxWidth: '440px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>
                Upload Homework Assignment
              </h3>
              <button onClick={() => setShowSubmitModal(false)} style={{ border: 'none', background: 'transparent', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <span style={{ fontSize: '11px', color: '#888888' }}>Assignment:</span>
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#172A55', margin: '2px 0 0' }}>
                  {selectedHomework?.title}
                </h4>
                <span style={{ fontSize: '12px', color: '#1976ED' }}>Subject: {selectedHomework?.subject}</span>
              </div>

              <div
                style={{
                  border: '2px dashed #1976ED',
                  backgroundColor: '#F8FAFE',
                  borderRadius: '10px',
                  padding: '24px 16px',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <UploadCloud size={36} color="#1976ED" style={{ margin: '0 auto 8px' }} />
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#172A55', margin: 0 }}>
                  Drag & Drop solution PDF or scanned pages
                </p>
                <span style={{ fontSize: '11px', color: '#888888', marginTop: '4px', display: 'block' }}>
                  Accepted formats: PDF, JPG, PNG (Max 15MB)
                </span>
                <span style={{ display: 'inline-block', marginTop: '10px', backgroundColor: '#EBF3FE', color: '#1976ED', padding: '4px 12px', borderRadius: '6px', fontSize: '11.5px', fontWeight: 600 }}>
                  Selected: zaid_homework_solution.pdf (1.8 MB)
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  style={{ padding: '7px 14px', borderRadius: '6px', border: '1px solid #CCC', fontSize: '13px' }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCompleteUpload}
                  className="btn-primary-pill"
                  style={{ height: '36px', padding: '0 16px', fontSize: '13px' }}
                  disabled={uploadProgress}
                >
                  <CheckCircle2 size={13} />
                  <span>{uploadProgress ? 'Submitting...' : 'Confirm Submission'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
