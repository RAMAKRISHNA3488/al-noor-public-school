import React, { useState } from 'react';
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Search,
  CheckCircle2,
  Printer,
  Download,
  Send,
  Users,
  FileText
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const AccountantDashboard: React.FC = () => {
  const { currentUser, students, setActiveModule } = useSchool();

  const [searchAdm, setSearchAdm] = useState('ANPS-2024-001');
  const [selectedStudent, setSelectedStudent] = useState<any>(students[0]);
  const [paymentMode, setPaymentMode] = useState<'Cash' | 'UPI' | 'Card' | 'Cheque'>('UPI');
  const [feeCategory, setFeeCategory] = useState('Term 4 Tuition & Transport');
  const [amount, setAmount] = useState('18500');
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [reminderSent, setReminderSent] = useState(false);

  // Recent transactions ledger
  const [recentLedger, setRecentLedger] = useState([
    { id: 'REC-901', name: 'Zaid bin Tariq', adm: 'ANPS-2024-001', grade: 'Grade 10-A', amount: '₹18,500', mode: 'UPI', date: 'Today 10:15 AM', status: 'Cleared' },
    { id: 'REC-900', name: 'Maryam Fatima', adm: 'ANPS-2024-002', grade: 'Grade 10-B', amount: '₹18,500', mode: 'Card', date: 'Today 09:40 AM', status: 'Cleared' },
    { id: 'REC-899', name: 'Hamza Zubair', adm: 'ANPS-2024-003', grade: 'Grade 9-A', amount: '₹16,000', mode: 'Cash', date: 'Today 09:12 AM', status: 'Cleared' },
    { id: 'REC-898', name: 'Bilal Mustafa', adm: 'ANPS-2024-005', grade: 'Grade 8-A', amount: '₹15,000', mode: 'Cheque', date: 'Yesterday', status: 'Processing' }
  ]);

  const handleSearch = () => {
    const found = students.find(s => s.admissionNo.toLowerCase().includes(searchAdm.toLowerCase()) || s.name.toLowerCase().includes(searchAdm.toLowerCase()));
    if (found) {
      setSelectedStudent(found);
    } else {
      alert('Student not found in register.');
    }
  };

  const handleCollectFee = (e: React.FormEvent) => {
    e.preventDefault();
    const newRec = {
      id: `REC-${Math.floor(1000 + Math.random() * 9000)}`,
      name: selectedStudent?.name || 'Zaid bin Tariq',
      adm: selectedStudent?.admissionNo || 'ANPS-2024-001',
      grade: selectedStudent?.grade || 'Grade 10-A',
      amount: `₹${Number(amount).toLocaleString()}`,
      mode: paymentMode,
      date: 'Just now',
      status: 'Cleared'
    };

    setRecentLedger([newRec, ...recentLedger]);
    setShowReceiptModal(true);
  };

  const handleSendReminders = () => {
    setReminderSent(true);
    setTimeout(() => setReminderSent(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. Bursar Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1B2238 0%, #203A43 100%)',
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
                backgroundColor: 'rgba(16, 185, 129, 0.25)',
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
              <CreditCard size={13} color="#10B981" />
              <span>Bursar & Treasury Counter</span>
            </span>
            <span style={{ color: '#CBD5E1', fontSize: '12px' }}>Register: ACCT-DEL-01</span>
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 700, margin: 0, letterSpacing: '0.2px' }}>
            Welcome, {currentUser?.name || 'Farhan Akhtar (Chief Bursar)'}!
          </h2>
          <p style={{ margin: '4px 0 0', color: '#CBD5E1', fontSize: '13px' }}>
            School Accounts Department • Session 2025–2026 Fiscal Q4
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleSendReminders}
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
              cursor: 'pointer'
            }}
          >
            <Send size={15} />
            <span>{reminderSent ? 'SMS Notices Sent' : 'Dispatch Overdue SMS Alerts'}</span>
          </button>
        </div>
      </div>

      {/* 2. Four Treasury Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Today's Collections</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#ECFDF5', padding: '8px', borderRadius: '8px', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#10B981', margin: '8px 0 2px' }}>₹1,48,500</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>42 Receipts Cleared</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Outstanding Balance</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#FFEBEF', padding: '8px', borderRadius: '8px', color: '#FF525F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><AlertCircle size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FF525F', margin: '8px 0 2px' }}>₹4,12,000</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>84 Students Overdue</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Quarter Collection Rate</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#EBF3FE', padding: '8px', borderRadius: '8px', color: '#1976ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CreditCard size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1976ED', margin: '8px 0 2px' }}>89.2%</h3>
          <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 500 }}>+5.4% over last term</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Concessions / Waivers</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#FFF5E8', padding: '8px', borderRadius: '8px', color: '#FFA52E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>₹2,10,000</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>RTE & Staff Child Quotas</span>
        </div>
      </div>

      {/* 3. Fee Collection Counter & Ledger */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' }}>
        {/* Quick Fee Collection Form */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: '0 0 14px' }}>
            Fee Collection & Receipt Generation Desk
          </h3>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
            <input
              type="text"
              placeholder="Search Student by Adm No or Name..."
              value={searchAdm}
              onChange={e => setSearchAdm(e.target.value)}
              className="filter-input"
              style={{ flex: 1 }}
            />
            <button
              onClick={handleSearch}
              className="btn-primary-pill"
              style={{ height: '38px', padding: '0 16px', fontSize: '12.5px' }}
            >
              <Search size={14} />
              <span>Search</span>
            </button>
          </div>

          {selectedStudent && (
            <form onSubmit={handleCollectFee} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ backgroundColor: '#F8FAFE', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#172A55', display: 'block' }}>{selectedStudent.name}</span>
                  <span style={{ fontSize: '11.5px', color: '#666666' }}>{selectedStudent.admissionNo} • {selectedStudent.grade}</span>
                </div>
                <span className="status-badge status-approved" style={{ fontSize: '10px' }}>Active Student</span>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Fee Component</label>
                <select
                  value={feeCategory}
                  onChange={e => setFeeCategory(e.target.value)}
                  className="filter-select"
                  style={{ width: '100%', marginTop: '4px' }}
                >
                  <option value="Term 4 Tuition & Transport">Term 4 Tuition & Transport (₹18,500)</option>
                  <option value="Annual Examination Fee">Annual Examination Fee (₹2,500)</option>
                  <option value="Computer & Science Lab Fee">Computer & Science Lab Fee (₹3,000)</option>
                  <option value="Identity Card & Library Fine">Identity Card & Library Fine (₹500)</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Amount (₹)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    className="filter-input"
                    style={{ width: '100%', marginTop: '4px' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Payment Mode</label>
                  <select
                    value={paymentMode}
                    onChange={e => setPaymentMode(e.target.value as any)}
                    className="filter-select"
                    style={{ width: '100%', marginTop: '4px' }}
                  >
                    <option value="UPI">UPI / QR Code</option>
                    <option value="Cash">Cash at Counter</option>
                    <option value="Card">Debit / Credit Card</option>
                    <option value="Cheque">Bank Cheque / DD</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary-pill"
                style={{ height: '38px', marginTop: '6px', fontSize: '13px' }}
              >
                <Printer size={14} />
                <span>Collect ₹{Number(amount).toLocaleString()} & Print Slip</span>
              </button>
            </form>
          )}
        </div>

        {/* Real-time Ledger */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Daily Cashier Ledger</h3>
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>Ledger Balanced</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {recentLedger.map((rec, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  backgroundColor: '#F9FAFC',
                  border: '1px solid #ECEEF6'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#172A55' }}>{rec.name}</span>
                    <span style={{ fontSize: '11px', color: '#888888' }}>({rec.id})</span>
                  </div>
                  <span style={{ fontSize: '11.5px', color: '#666666', marginTop: '2px', display: 'block' }}>
                    {rec.grade} • Mode: <strong>{rec.mode}</strong> • {rec.date}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#10B981' }}>{rec.amount}</span>
                  <span style={{ fontSize: '10px', color: '#888888', display: 'block' }}>{rec.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Printable Receipt Modal */}
      {showReceiptModal && (
        <div className="modal-backdrop">
          <div className="modal-content" style={{ maxWidth: '440px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>
                Meridian Official Fee Receipt
              </h3>
              <button onClick={() => setShowReceiptModal(false)} style={{ border: 'none', background: 'transparent', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ textAlign: 'center', borderBottom: '1px dashed #CCC', paddingBottom: '12px' }}>
                <h4 style={{ color: '#FFA52E', fontSize: '18px', fontWeight: 700, margin: 0 }}>MERIDIAN PUBLIC SCHOOL</h4>
                <span style={{ fontSize: '11px', color: '#666' }}>Affiliated to CBSE • Institutional Area, New Delhi</span>
                <div style={{ marginTop: '6px' }}>
                  <span style={{ backgroundColor: '#ECFDF5', color: '#10B981', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>
                    FEE RECEIPT: {recentLedger[0].id}
                  </span>
                </div>
              </div>

              <div style={{ fontSize: '12.5px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#777' }}>Student:</span>
                  <strong style={{ color: '#172A55' }}>{selectedStudent?.name}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#777' }}>Admission No:</span>
                  <span>{selectedStudent?.admissionNo}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#777' }}>Class / Section:</span>
                  <span>{selectedStudent?.grade}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#777' }}>Category:</span>
                  <span>{feeCategory}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#777' }}>Payment Mode:</span>
                  <span>{paymentMode} (Authorized)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 700, color: '#1976ED', borderTop: '1px solid #EEE', paddingTop: '8px', marginTop: '4px' }}>
                  <span>Total Amount Paid:</span>
                  <span>₹{Number(amount).toLocaleString()}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowReceiptModal(false)}
                  style={{ padding: '7px 14px', borderRadius: '6px', border: '1px solid #CCC', fontSize: '13px' }}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert('Sending print job to Thermal Slip Printer...');
                    setShowReceiptModal(false);
                  }}
                  className="btn-primary-pill"
                  style={{ height: '36px', padding: '0 16px', fontSize: '13px' }}
                >
                  <Printer size={13} />
                  <span>Print Receipt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
