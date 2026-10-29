import React, { useState } from 'react';
import {
  Users,
  Bus,
  CreditCard,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  AlertCircle,
  FileText,
  Download,
  Send,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const ParentDashboard: React.FC = () => {
  const {
    currentUser,
    drivers,
    routes,
    notices,
    makeComplaint,
    setActiveModule
  } = useSchool();

  const [selectedChild, setSelectedChild] = useState<'zaid' | 'maryam'>('zaid');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [feePaid, setFeePaid] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('School Bus Route Delay');
  const [inquiryText, setInquiryText] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const activeDriver = drivers[0] || {
    driverName: 'Muhammad Aslam',
    phone: '+91 94123 00111',
    assignedVehicle: 'DL-01-SB-4521',
    assignedRoute: 'Route 1: Central Town via Model Colony'
  };

  const handlePayFee = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setFeePaid(true);
      setShowPaymentModal(false);
      setPaymentSuccess(false);
    }, 1500);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryText.trim()) return;

    makeComplaint({
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      topic: inquiryTopic,
      complaint: inquiryText,
      reporter: currentUser?.name || 'Hamza Malik (Parent)'
    });

    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setShowInquiryModal(false);
      setInquiryText('');
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. Parent Banner with Child Switcher */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1B2238 0%, #2A2448 100%)',
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
                backgroundColor: 'rgba(255, 165, 46, 0.25)',
                color: '#FFA52E',
                padding: '3px 10px',
                borderRadius: '20px',
                fontSize: '11.5px',
                fontWeight: 600,
                border: '1px solid rgba(255, 165, 46, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Users size={13} color="#FFA52E" />
              <span>Parent Portal Active</span>
            </span>
            <span style={{ color: '#CBD5E1', fontSize: '12px' }}>Parent ID: PRNT-8890</span>
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 700, margin: 0, letterSpacing: '0.2px' }}>
            Welcome, {currentUser?.name || 'Hamza Malik'}!
          </h2>
          <p style={{ margin: '4px 0 0', color: '#CBD5E1', fontSize: '13px' }}>
            Connected to 2 wards at Meridian Public School. Real-time updates active.
          </p>
        </div>

        {/* Child Selector Tabs */}
        <div style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.1)', padding: '4px', borderRadius: '10px' }}>
          <button
            onClick={() => setSelectedChild('zaid')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              backgroundColor: selectedChild === 'zaid' ? '#FFFFFF' : 'transparent',
              color: selectedChild === 'zaid' ? '#1B2238' : '#CBD5E1'
            }}
          >
            Zaid bin Tariq (Grade 10-A)
          </button>
          <button
            onClick={() => setSelectedChild('maryam')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              backgroundColor: selectedChild === 'maryam' ? '#FFFFFF' : 'transparent',
              color: selectedChild === 'maryam' ? '#1B2238' : '#CBD5E1'
            }}
          >
            Maryam Fatima (Grade 8-B)
          </button>
        </div>
      </div>

      {/* 2. Key Guardian Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Today's Presence</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#ECFDF5', padding: '8px', borderRadius: '8px', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle2 size={18} /></span>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#10B981', margin: '8px 0 2px' }}>In Campus</h3>
          <span style={{ fontSize: '11.5px', color: '#888888' }}>Gate In: 07:55 AM (Morning Prayer)</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Academic Attendance</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#EBF3FE', padding: '8px', borderRadius: '8px', color: '#1976ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Calendar size={18} /></span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>
            {selectedChild === 'zaid' ? '96.5%' : '98.2%'}
          </h3>
          <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 500 }}>High Regularity Award</span>
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Term 4 Fee Status</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: feePaid ? '#ECFDF5' : '#FFF5E8', padding: '8px', borderRadius: '8px', color: feePaid ? '#10B981' : '#FFA52E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CreditCard size={18} /></span>
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: feePaid ? '#10B981' : '#FFA52E', margin: '8px 0 2px' }}>
            {feePaid ? 'Paid in Full' : '₹18,500 Due'}
          </h3>
          {feePaid ? (
            <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 500 }}>Receipt #REC-2026-904</span>
          ) : (
            <button
              onClick={() => setShowPaymentModal(true)}
              style={{ fontSize: '11.5px', color: '#1976ED', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Pay Online Now →
            </button>
          )}
        </div>

        <div className="stat-card-premium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12.5px', color: '#666666', fontWeight: 500 }}>Live School Bus</span>
            <span className="stat-icon-wrapper" style={{ backgroundColor: '#EBF3FE', padding: '8px', borderRadius: '8px', color: '#1976ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bus size={18} /></span>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#172A55', margin: '8px 0 2px' }}>Route 1 Active</h3>
          <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 500 }}>Driver: Muhammad Aslam</span>
        </div>
      </div>

      {/* 3. Live Transport Tracking & Child Progress */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' }}>
        {/* Live GPS & Bus Tracker */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Live Transport Tracker</h3>
              <span style={{ fontSize: '12px', color: '#888888' }}>Vehicle: {activeDriver.assignedVehicle} (Tata Starbus)</span>
            </div>
            <span style={{ backgroundColor: '#ECFDF5', color: '#10B981', fontSize: '11px', padding: '3px 10px', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span className="live-radar-dot" />
              GPS Live
            </span>
          </div>

          {/* Visual Route Stepper */}
          <div style={{ backgroundColor: '#F8FAFE', padding: '16px', borderRadius: '10px', marginBottom: '14px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>CAMPUS (DEPARTED)</span>
                <span style={{ fontSize: '12px', color: '#172A55', display: 'block', fontWeight: 600 }}>02:30 PM</span>
              </div>
              <div style={{ flex: 1, height: '4px', backgroundColor: '#10B981', margin: '0 8px', borderRadius: '2px' }} />
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#1976ED', fontWeight: 600 }}>CURRENT: SECTOR 7</span>
                <span style={{ fontSize: '12px', color: '#172A55', display: 'block', fontWeight: 600 }}>03:05 PM</span>
              </div>
              <div style={{ flex: 1, height: '4px', backgroundColor: '#CBD5E1', margin: '0 8px', borderRadius: '2px' }} />
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#888888', fontWeight: 600 }}>YOUR STOP (HOME)</span>
                <span style={{ fontSize: '12px', color: '#172A55', display: 'block', fontWeight: 600 }}>ETA 03:25 PM</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderRadius: '8px', backgroundColor: '#F9FAFC', border: '1px solid #ECEEF6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1976ED', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={16} />
              </div>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#172A55', display: 'block' }}>{activeDriver.driverName}</span>
                <span style={{ fontSize: '11.5px', color: '#777777' }}>Driver Phone: {activeDriver.phone}</span>
              </div>
            </div>
            <a
              href={`tel:${activeDriver.phone}`}
              style={{ backgroundColor: '#10B981', color: '#FFFFFF', padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}
            >
              Call Driver
            </a>
          </div>
        </div>

        {/* Academic Performance & Quarterly Grades */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Quarterly Academic Evaluation</h3>
              <span style={{ fontSize: '12px', color: '#888888' }}>Term 3 Official Marks Summary</span>
            </div>
            <span className="date-badge" style={{ backgroundColor: '#1976ED' }}>Grade A+ (94.2%)</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { subject: 'Mathematics (Advanced)', score: '96/100', grade: 'A+' },
              { subject: 'Physics & Optics', score: '92/100', grade: 'A' },
              { subject: 'Chemistry', score: '94/100', grade: 'A+' },
              { subject: 'English Literature', score: '88/100', grade: 'A' },
              { subject: 'Computer Applications', score: '98/100', grade: 'A+' }
            ].map((sub, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '6px', backgroundColor: '#F9FAFC', border: '1px solid #ECEEF6' }}>
                <span style={{ fontSize: '13px', color: '#333333', fontWeight: 500 }}>{sub.subject}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#172A55' }}>{sub.score}</span>
                  <span style={{ backgroundColor: '#ECFDF5', color: '#10B981', fontSize: '11px', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>{sub.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Action Row: Circulars & Raise Inquiry */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
        {/* School Circulars for Parents */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Parent Notices & Circulars</h3>
            <button onClick={() => setActiveModule('notice')} style={{ fontSize: '12px', color: '#1976ED', fontWeight: 500 }}>
              All Notices
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {notices.slice(0, 2).map(n => (
              <div key={n.id} style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#F9FAFC', border: '1px solid #ECEEF6' }}>
                <span className="date-badge" style={{ backgroundColor: '#1976ED', fontSize: '10px' }}>{n.date}</span>
                <h5 style={{ fontSize: '13px', fontWeight: 600, color: '#172A55', margin: '4px 0 2px' }}>{n.notice}</h5>
                <p style={{ fontSize: '11.5px', color: '#666666', margin: 0 }}>{n.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Communication Desk */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '22px', border: '1px solid #ECEEF6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>Direct School Helpdesk</h3>
            <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 600 }}>Response &lt; 24h</span>
          </div>

          <p style={{ fontSize: '12.5px', color: '#666666', marginBottom: '16px' }}>
            Have a question regarding bus timing, fee concession, or teacher meeting schedule? Submit an inquiry directly to school administration.
          </p>

          <button
            onClick={() => setShowInquiryModal(true)}
            className="btn-primary-pill"
            style={{ height: '38px', padding: '0 20px', fontSize: '13px' }}
          >
            <Send size={14} />
            <span>Submit Parent Inquiry / Complaint</span>
          </button>
        </div>
      </div>

      {/* Online Fee Payment Modal */}
      {showPaymentModal && (
        <div className="modal-backdrop">
          <div className="modal-content" style={{ maxWidth: '440px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>
                Meridian Online Fee Counter
              </h3>
              <button onClick={() => setShowPaymentModal(false)} style={{ border: 'none', background: 'transparent', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            {paymentSuccess ? (
              <div style={{ padding: '24px', textAlign: 'center' }}>
                <CheckCircle2 size={44} color="#10B981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ color: '#10B981', margin: 0 }}>Payment Successful!</h4>
                <p style={{ fontSize: '12.5px', color: '#666666', marginTop: '6px' }}>
                  Amount of ₹18,500 received for Zaid bin Tariq (Term 4).
                </p>
                <span style={{ fontSize: '11px', color: '#888888' }}>Transaction ID: TXN-ALNOOR-9912034</span>
              </div>
            ) : (
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ backgroundColor: '#F8FAFE', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#555555' }}>
                    <span>Student:</span>
                    <strong style={{ color: '#172A55' }}>Zaid bin Tariq (ANPS-2024-001)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#555555', marginTop: '6px' }}>
                    <span>Academic Quarter:</span>
                    <strong style={{ color: '#172A55' }}>Term 4 (Jan – Mar 2026)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 700, color: '#1976ED', marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #CCC' }}>
                    <span>Total Payable:</span>
                    <span>₹18,500</span>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Select Payment Method</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '6px' }}>
                    <div style={{ padding: '10px', borderRadius: '8px', border: '2px solid #1976ED', backgroundColor: '#F4F8FE', textAlign: 'center', cursor: 'pointer' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#1976ED' }}>UPI / GooglePay</span>
                    </div>
                    <div style={{ padding: '10px', borderRadius: '8px', border: '1px solid #CCC', textAlign: 'center', cursor: 'pointer' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#555' }}>Credit / Debit Card</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setShowPaymentModal(false)}
                    style={{ padding: '7px 14px', borderRadius: '6px', border: '1px solid #CCC', fontSize: '13px' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handlePayFee}
                    className="btn-primary-pill"
                    style={{ height: '36px', padding: '0 18px', fontSize: '13px' }}
                  >
                    <CheckCircle2 size={13} />
                    <span>Pay ₹18,500 Now</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Raise Inquiry Modal */}
      {showInquiryModal && (
        <div className="modal-backdrop">
          <div className="modal-content" style={{ maxWidth: '440px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172A55', margin: 0 }}>
                Parent Inquiry & Helpdesk
              </h3>
              <button onClick={() => setShowInquiryModal(false)} style={{ border: 'none', background: 'transparent', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            {inquirySuccess ? (
              <div style={{ padding: '24px', textAlign: 'center' }}>
                <CheckCircle2 size={40} color="#10B981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ color: '#10B981', margin: 0 }}>Inquiry Registered!</h4>
                <p style={{ fontSize: '12.5px', color: '#666666', marginTop: '6px' }}>
                  Assigned to School Administration ticket queue.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Subject / Topic</label>
                  <input
                    type="text"
                    value={inquiryTopic}
                    onChange={e => setInquiryTopic(e.target.value)}
                    className="filter-input"
                    style={{ width: '100%', marginTop: '4px' }}
                    required
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>Detailed Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your inquiry or concern clearly..."
                    value={inquiryText}
                    onChange={e => setInquiryText(e.target.value)}
                    className="filter-input"
                    style={{ width: '100%', marginTop: '4px', resize: 'vertical' }}
                    required
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setShowInquiryModal(false)}
                    style={{ padding: '7px 14px', borderRadius: '6px', border: '1px solid #CCC', fontSize: '13px' }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary-pill" style={{ height: '36px', padding: '0 16px', fontSize: '13px' }}>
                    <Send size={13} />
                    <span>Submit to Desk</span>
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
