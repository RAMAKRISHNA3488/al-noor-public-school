import React, { useState } from 'react';
import {
  BookOpen,
  Library,
  BookMarked,
  AlertCircle,
  Search,
  CheckCircle2,
  Clock,
  Plus,
  Users,
  Barcode,
  Info
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';
import { IssuedBook } from '../../types';

export const LibrarianDashboard: React.FC = () => {
  const { currentUser, books, issuedBooks } = useSchool();

  const [circulationList, setCirculationList] = useState<IssuedBook[]>(issuedBooks);
  const [borrowerName, setBorrowerName] = useState('Zaid bin Tariq');
  const [borrowerId, setBorrowerId] = useState('ANPS-2024-001');
  const [selectedBook, setSelectedBook] = useState('Concepts of Physics (Vol 1 & 2)');
  const [showIssueSuccess, setShowIssueSuccess] = useState(false);

  const handleIssueBook = (e: React.FormEvent) => {
    e.preventDefault();
    const newIssue: IssuedBook = {
      id: Date.now(),
      bookTitle: selectedBook,
      borrowerName,
      borrowerType: 'Student',
      borrowerId,
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'Issued',
      fine: 0
    };

    setCirculationList([newIssue, ...circulationList]);
    setShowIssueSuccess(true);
    setTimeout(() => setShowIssueSuccess(false), 2500);
  };

  const handleReturnBook = (id: number) => {
    setCirculationList(prev =>
      prev.map(b => b.id === id ? { ...b, status: 'Returned', fine: 0 } : b)
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. Librarian Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1B2238 0%, #1A365D 100%)',
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
              <Library size={13} color="#60A5FA" />
              <span>Library Circulation Desk</span>
            </span>
            <span style={{ color: '#CBD5E1', fontSize: '12px' }}>Staff ID: EMP-104</span>
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 700, margin: 0, letterSpacing: '0.2px' }}>
            Welcome, {currentUser?.name || 'Mrs. Rizwana Parveen'}!
          </h2>
          <p style={{ margin: '4px 0 0', color: '#CBD5E1', fontSize: '13px' }}>
            Central School Library & Digital Media Services • 3,420 Volumes Cataloged
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <span
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '12.5px',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Barcode size={15} />
            <span>Barcode Scanner Ready</span>
          </span>
        </div>
      </div>

      {/* 2. Key Library Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Cataloged Books</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#EBF3FE', padding: '8px', borderRadius: '8px', color: '#1976ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Library size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>3,420</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>4 Main Sections</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Currently Issued</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#ECFDF5', padding: '8px', borderRadius: '8px', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BookOpen size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#10B981', margin: '8px 0 2px' }}>{circulationList.filter(c => c.status === 'Issued').length + 182}</h3>
          <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 500 }}>Circulation Active</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Overdue Borrowers</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#FFEBEF', padding: '8px', borderRadius: '8px', color: '#FF525F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><AlertCircle size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FF525F', margin: '8px 0 2px' }}>8</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>Total Fines: ₹340</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Monthly Fine Collected</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#FFF5E8', padding: '8px', borderRadius: '8px', color: '#FFA52E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FFA52E', margin: '8px 0 2px' }}>₹1,240</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>Deposited with Bursar</span>
        </div>
      </div>

      {/* 3. Issue Book Counter & Active Loans */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' }}>
        {/* Issue Book Form */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: '0 0 14px' }}>
            Quick Book Issue Counter
          </h3>

          {showIssueSuccess && (
            <div style={{ backgroundColor: '#ECFDF5', color: '#10B981', padding: '10px 14px', borderRadius: '8px', fontSize: '12.5px', fontWeight: 600, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} />
              Book successfully checked out! Due in 14 days.
            </div>
          )}

          <form onSubmit={handleIssueBook} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Select Cataloged Title</label>
              <select
                value={selectedBook}
                onChange={e => setSelectedBook(e.target.value)}
                className="filter-select"
                style={{ width: '100%', marginTop: '4px' }}
              >
                {books.map(b => (
                  <option key={b.id} value={b.title}>
                    {b.title} (ISBN: {b.isbn}) — {b.availableCopies} available
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Borrower Name</label>
                <input
                  type="text"
                  value={borrowerName}
                  onChange={e => setBorrowerName(e.target.value)}
                  className="filter-input"
                  style={{ width: '100%', marginTop: '4px' }}
                  required
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Admission / Staff ID</label>
                <input
                  type="text"
                  value={borrowerId}
                  onChange={e => setBorrowerId(e.target.value)}
                  className="filter-input"
                  style={{ width: '100%', marginTop: '4px' }}
                  required
                />
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFE', padding: '10px 12px', borderRadius: '6px', fontSize: '11.5px', color: '#555', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Info size={14} color="#1976ED" />
              <span>Standard loan period: <strong>14 Days</strong>. Overdue fine: ₹5 / day after due date.</span>
            </div>

            <button
              type="submit"
              className="btn-primary-pill"
              style={{ height: '38px', marginTop: '4px', fontSize: '13px' }}
            >
              <Plus size={14} />
              <span>Issue Book to Borrower</span>
            </button>
          </form>
        </div>

        {/* Live Circulation Register */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Active Book Borrowers</h3>
            <span style={{ fontSize: '12px', color: '#888' }}>Live Circulation Register</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {circulationList.slice(0, 4).map(b => (
              <div
                key={b.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  backgroundColor: b.status === 'Overdue' ? '#FFF5F5' : '#F9FAFC',
                  border: b.status === 'Overdue' ? '1px solid #FED7D7' : '1px solid #ECEEF6'
                }}
              >
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#172A55', display: 'block' }}>{b.bookTitle}</span>
                  <span style={{ fontSize: '11.5px', color: '#666666' }}>
                    Borrower: <strong>{b.borrowerName}</strong> ({b.borrowerId})
                  </span>
                  <span style={{ fontSize: '11px', color: b.status === 'Overdue' ? '#E53E3E' : '#718096', display: 'block', marginTop: '2px' }}>
                    Due: {b.dueDate} {b.fine > 0 ? `(Fine: ₹${b.fine})` : ''}
                  </span>
                </div>

                <div>
                  {b.status === 'Returned' ? (
                    <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={12} color="#10B981" />
                      <span>Returned</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => handleReturnBook(b.id)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '6px',
                        border: '1px solid #1976ED',
                        backgroundColor: '#FFFFFF',
                        color: '#1976ED',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Return Book
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
