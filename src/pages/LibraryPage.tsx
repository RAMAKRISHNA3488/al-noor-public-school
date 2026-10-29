import React, { useState } from 'react';
import { Library, BookMarked, Plus, Search } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';

export const LibraryPage: React.FC = () => {
  const { books, issuedBooks } = useSchool();
  const [activeTab, setActiveTab] = useState<'inventory' | 'issued'>('inventory');

  return (
    <div>
      <ManagementCard
        title="Library Management System"
        actions={
          <button
            onClick={() => alert('New Book Cataloging modal will be opened.')}
            className="btn-primary-pill"
          >
            <Plus size={18} strokeWidth={2.5} />
            <span>Add New Book</span>
          </button>
        }
      >
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', padding: '16px 28px', borderBottom: '1px solid #E9E9E9' }}>
          <button
            onClick={() => setActiveTab('inventory')}
            className="page-btn"
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              backgroundColor: activeTab === 'inventory' ? '#1976ED' : '#FFFFFF',
              color: activeTab === 'inventory' ? '#FFFFFF' : '#333333',
              borderColor: activeTab === 'inventory' ? '#1976ED' : '#E9E9E9',
              fontWeight: 600
            }}
          >
            Book Inventory ({books.length})
          </button>
          <button
            onClick={() => setActiveTab('issued')}
            className="page-btn"
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              backgroundColor: activeTab === 'issued' ? '#1976ED' : '#FFFFFF',
              color: activeTab === 'issued' ? '#FFFFFF' : '#333333',
              borderColor: activeTab === 'issued' ? '#1976ED' : '#E9E9E9',
              fontWeight: 600
            }}
          >
            Issued Books & Fines ({issuedBooks.length})
          </button>
        </div>

        {activeTab === 'inventory' ? (
          <div className="table-responsive">
            <table className="alnoor-table">
              <thead>
                <tr>
                  <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                  <th style={{ width: '180px' }}>ISBN</th>
                  <th>BOOK TITLE</th>
                  <th>AUTHOR</th>
                  <th>CATEGORY</th>
                  <th style={{ textAlign: 'center' }}>COPIES (AVAIL/TOTAL)</th>
                  <th style={{ width: '140px', textAlign: 'center' }}>RACK LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {books.map((b, idx) => (
                  <tr key={b.id}>
                    <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                      {idx + 1}
                    </td>
                    <td style={{ fontWeight: 600, color: '#1976ED' }}>{b.isbn}</td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>{b.title}</td>
                    <td style={{ color: '#555555' }}>{b.author}</td>
                    <td>
                      <span style={{ backgroundColor: '#F4F6FD', padding: '4px 10px', borderRadius: '4px', fontSize: '13px' }}>
                        {b.category}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>
                      <span style={{ color: '#10B981' }}>{b.availableCopies}</span> / {b.totalCopies}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="date-badge" style={{ backgroundColor: '#172A55' }}>
                        {b.rackLocation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="alnoor-table">
              <thead>
                <tr>
                  <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                  <th>BOOK TITLE</th>
                  <th>BORROWER NAME</th>
                  <th>BORROWER ID</th>
                  <th>ISSUE DATE</th>
                  <th>DUE DATE</th>
                  <th style={{ textAlign: 'center' }}>STATUS</th>
                  <th style={{ textAlign: 'center' }}>FINE AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {issuedBooks.map((ib, idx) => (
                  <tr key={ib.id}>
                    <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                      {idx + 1}
                    </td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>{ib.bookTitle}</td>
                    <td>{ib.borrowerName} ({ib.borrowerType})</td>
                    <td style={{ fontWeight: 600, color: '#1976ED' }}>{ib.borrowerId}</td>
                    <td>{ib.issueDate}</td>
                    <td>
                      <span className="date-badge" style={{ backgroundColor: ib.status === 'Overdue' ? '#FF525F' : '#1976ED' }}>
                        {ib.dueDate}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`status-badge ${ib.status === 'Issued' ? 'approved' : ib.status === 'Overdue' ? 'rejected' : 'pending'}`}>
                        {ib.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 600, color: ib.fine > 0 ? '#FF525F' : '#10B981' }}>
                      {ib.fine > 0 ? `₹${ib.fine}` : 'Nil'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </ManagementCard>
    </div>
  );
};
