import React, { useState } from 'react';
import {
  Bell,
  Search,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { PublicNavbar } from '../../components/layout/PublicNavbar';
import { PublicFooter } from '../../components/layout/PublicFooter';
import { useSchool } from '../../context/SchoolContext';

export const PublicNoticesPage: React.FC = () => {
  const { notices, holidays, setCurrentView } = useSchool();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeNoticeModal, setActiveNoticeModal] = useState<any | null>(null);

  const filteredNotices = notices.filter(n => {
    const matchesSearch =
      n.notice.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.document.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (n.content && n.content.toLowerCase().includes(searchTerm.toLowerCase()));

    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'admission') return matchesSearch && (n.notice.toLowerCase().includes('admission') || n.notice.toLowerCase().includes('enrol'));
    if (selectedCategory === 'exam') return matchesSearch && (n.notice.toLowerCase().includes('exam') || n.notice.toLowerCase().includes('test'));
    if (selectedCategory === 'event') return matchesSearch && (n.notice.toLowerCase().includes('sports') || n.notice.toLowerCase().includes('exhibition') || n.notice.toLowerCase().includes('meet'));
    return matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <PublicNavbar activePage="notices" />

      {/* Hero Header */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1B2238 0%, #151B2D 50%, #0E1322 100%)',
          color: '#FFFFFF',
          padding: '80px 32px 90px',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div
            className="floating-badge badge-glow-pulse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 165, 46, 0.15)',
              border: '1px solid rgba(255, 165, 46, 0.4)',
              color: '#FFA52E',
              padding: '6px 18px',
              borderRadius: '24px',
              fontSize: '12.5px',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            <Bell size={15} />
            <span>Official Circulars & School Board Announcements</span>
          </div>

          <h1 style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.25, marginBottom: '18px', letterSpacing: '-0.5px' }}>
            Live School Notices & <span style={{ color: '#FFA52E' }}>Circulars</span>
          </h1>
          <p style={{ fontSize: '16.5px', color: '#C5C9D2', maxWidth: '760px', margin: '0 auto', lineHeight: 1.65 }}>
            Access all verified public notifications, examination schedules, holiday calendars, and administrative circulars for AL NOOR Public School.
          </p>
        </div>
      </section>

      {/* Controls: Search & Category */}
      <section style={{ padding: '40px 32px 20px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              padding: '18px 24px',
              border: '1px solid #ECEEF6',
              boxShadow: '0 4px 16px rgba(27, 34, 56, 0.04)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search notices by title, circular number, keyword..."
                className="filter-input"
                style={{ width: '100%', paddingLeft: '38px', height: '42px', fontSize: '13.5px' }}
              />
              <Search size={16} color="#888888" style={{ position: 'absolute', left: '12px', top: '13px' }} />
            </div>

            {/* Category Filter Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Notices' },
                { id: 'admission', label: 'Admissions' },
                { id: 'exam', label: 'Examinations' },
                { id: 'event', label: 'Events & Sports' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: selectedCategory === cat.id ? 600 : 500,
                    backgroundColor: selectedCategory === cat.id ? '#1976ED' : '#F4F6FD',
                    color: selectedCategory === cat.id ? '#FFFFFF' : '#444444',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Notice Grid & Upcoming Holidays Row */}
      <section style={{ padding: '20px 32px 80px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'start' }}>
          {/* Notices Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={{ fontSize: '20px', color: '#172A55', fontWeight: 700, marginBottom: '20px' }}>
              Official Circulars ({filteredNotices.length})
            </h3>

            {filteredNotices.length === 0 ? (
              <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', textAlign: 'center', color: '#888888', border: '1px solid #ECEEF6' }}>
                No circulars found matching your search.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {filteredNotices.map(n => (
                  <div
                    key={n.id}
                    className="analytics-card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '24px',
                      border: '1px solid #ECEEF6',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      cursor: 'pointer'
                    }}
                    onClick={() => setActiveNoticeModal(n)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <span className="date-badge" style={{ backgroundColor: '#1976ED', fontSize: '11.5px', padding: '3px 12px' }}>
                        {n.date}
                      </span>
                      <span style={{ fontSize: '12px', color: '#888888', fontWeight: 500 }}>
                        Circular Ref: {n.document}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '17px', color: '#172A55', fontWeight: 700, lineHeight: 1.4 }}>
                      {n.notice}
                    </h4>

                    <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.6 }}>
                      {n.content || 'Official school circular issued under the authority of the Academic Council and Office of the Principal.'}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F1F1', paddingTop: '12px', marginTop: '4px' }}>
                      <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>
                        Target: {n.audience || 'School-wide Notice'}
                      </span>
                      <button
                        style={{
                          fontSize: '12.5px',
                          color: '#1976ED',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>Read Circular</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upcoming Holiday Calendar Preview Column */}
          <div>
            <h3 style={{ fontSize: '20px', color: '#172A55', fontWeight: 700, marginBottom: '20px' }}>
              Academic Holidays
            </h3>

            <div
              className="analytics-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                padding: '24px',
                border: '1px solid #ECEEF6',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              {holidays.map(h => (
                <div
                  key={h.id}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: '#F8FAFE',
                    border: '1px solid #E9E9E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#172A55' }}>{h.purpose}</div>
                    <div style={{ fontSize: '11.5px', color: '#888888', marginTop: '2px' }}>{h.type || 'School Holiday'}</div>
                  </div>
                  <span className="date-badge" style={{ backgroundColor: '#FFA52E', fontSize: '11px', padding: '3px 10px' }}>
                    {h.date}
                  </span>
                </div>
              ))}

              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <button
                  onClick={() => setCurrentView('login')}
                  style={{ fontSize: '12.5px', color: '#1976ED', fontWeight: 600 }}
                >
                  Log into Portal for Full Year Calendar ➔
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Detail Modal */}
      {activeNoticeModal && (
        <div className="modal-backdrop" onClick={() => setActiveNoticeModal(null)}>
          <div
            className="modal-content"
            style={{ maxWidth: '580px', padding: '28px' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="date-badge" style={{ backgroundColor: '#1976ED' }}>
                {activeNoticeModal.date}
              </span>
              <button
                onClick={() => setActiveNoticeModal(null)}
                style={{ fontSize: '18px', color: '#888888' }}
              >
                ✕
              </button>
            </div>

            <h3 style={{ fontSize: '20px', color: '#172A55', fontWeight: 700, marginBottom: '12px' }}>
              {activeNoticeModal.notice}
            </h3>

            <div style={{ fontSize: '12.5px', color: '#888888', marginBottom: '16px' }}>
              Reference Circular: <strong>{activeNoticeModal.document}</strong> | Target: {activeNoticeModal.audience || 'All Parents & Students'}
            </div>

            <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.7, marginBottom: '24px' }}>
              {activeNoticeModal.content || 'This circular serves as formal notice to all students, faculty, and guardians of AL NOOR Public School. For any clarifications, kindly contact the administration office during campus hours.'}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => {
                  alert(`Downloading circular document: ${activeNoticeModal.document}`);
                }}
                className="btn-primary-pill"
                style={{ height: '38px', fontSize: '13px' }}
              >
                <Download size={14} />
                <span>Download PDF Copy</span>
              </button>
              <button
                onClick={() => setActiveNoticeModal(null)}
                className="btn-secondary-pill"
                style={{ height: '38px', fontSize: '13px' }}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <PublicFooter />
    </div>
  );
};
