import React, { useState, useMemo } from 'react';
import { Plus, CheckCircle, MessageSquare } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { Complaint } from '../types';
import { ManagementCard } from '../components/common/ManagementCard';
import { TableControls } from '../components/table/TableControls';
import { Pagination } from '../components/table/Pagination';
import { Modal } from '../components/common/Modal';

export const ComplaintPage: React.FC = () => {
  const { complaints, makeComplaint, resolveComplaint } = useSchool();

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal states
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [resolvingComplaint, setResolvingComplaint] = useState<Complaint | null>(null);
  const [resolutionNotes, setResolutionNotes] = useState('');

  // Form Fields
  const [topic, setTopic] = useState('');
  const [reporter, setReporter] = useState('');
  const [complaintText, setComplaintText] = useState('');

  // Filter & Search
  const filteredComplaints = useMemo(() => {
    return complaints.filter(c =>
      c.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.complaint.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [complaints, searchTerm]);

  // Pagination Slice
  const paginatedComplaints = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredComplaints.slice(start, start + entriesPerPage);
  }, [filteredComplaints, currentPage, entriesPerPage]);

  const handleOpenMake = () => {
    setTopic('');
    setReporter('');
    setComplaintText('');
    setIsMakeOpen(true);
  };

  const handleSaveMake = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim() || !complaintText.trim()) return;

    const formattedDate = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).replace(',', '');

    makeComplaint({
      date: formattedDate,
      topic,
      complaint: complaintText,
      reporter: reporter || 'Anonymous Guardian / Staff'
    });

    setIsMakeOpen(false);
  };

  const handleOpenResolve = (complaint: Complaint) => {
    setResolvingComplaint(complaint);
    setResolutionNotes(complaint.resolutionNotes || '');
  };

  const handleConfirmResolve = () => {
    if (resolvingComplaint) {
      resolveComplaint(resolvingComplaint.id, resolutionNotes);
      setResolvingComplaint(null);
    }
  };

  return (
    <div>
      <ManagementCard
        title="Complaint Management"
        actions={
          <button onClick={handleOpenMake} className="btn-primary-pill">
            <Plus size={18} strokeWidth={2.5} />
            <span>Make Complaint</span>
          </button>
        }
      >
        <TableControls
          entriesPerPage={entriesPerPage}
          onEntriesChange={entries => {
            setEntriesPerPage(entries);
            setCurrentPage(1);
          }}
          searchTerm={searchTerm}
          onSearchChange={term => {
            setSearchTerm(term);
            setCurrentPage(1);
          }}
        />

        <div className="table-responsive">
          <table className="alnoor-table">
            <thead>
              <tr>
                <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                <th style={{ width: '180px' }}>DATE</th>
                <th style={{ width: '220px' }}>TOPIC</th>
                <th>COMPLAINT</th>
                <th style={{ width: '150px', textAlign: 'center' }}>STATUS</th>
                <th style={{ width: '130px', textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedComplaints.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '36px', color: '#888888' }}>
                    No complaints found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                paginatedComplaints.map((item, index) => {
                  const rowNumber = (currentPage - 1) * entriesPerPage + index + 1;
                  const isResolved = item.status === 'Resolved';

                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {rowNumber}
                      </td>
                      <td style={{ color: '#111111', fontSize: '14px', whiteSpace: 'nowrap' }}>
                        {item.date}
                      </td>
                      <td style={{ fontWeight: 600, color: '#172A55' }}>
                        <div>{item.topic}</div>
                        {item.reporter && (
                          <span style={{ fontSize: '12px', color: '#888888', fontWeight: 400 }}>
                            By: {item.reporter}
                          </span>
                        )}
                      </td>
                      <td style={{ color: '#333333', fontSize: '14px', lineHeight: 1.5, maxWidth: '420px' }}>
                        <div>{item.complaint}</div>
                        {item.resolutionNotes && (
                          <div style={{ fontSize: '12px', color: '#1976ED', marginTop: '4px', fontStyle: 'italic' }}>
                            Resolution: {item.resolutionNotes}
                          </div>
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={`status-badge ${isResolved ? 'resolved' : 'pending'}`}>
                          {item.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => handleOpenResolve(item)}
                          className="btn-blue-rect"
                          style={{
                            opacity: isResolved ? 0.75 : 1,
                            backgroundColor: isResolved ? '#6B7280' : '#1976ED'
                          }}
                          title={isResolved ? 'View or update resolution' : 'Resolve complaint'}
                        >
                          {isResolved ? 'Resolved' : 'Resolve'}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalEntries={filteredComplaints.length}
          entriesPerPage={entriesPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </ManagementCard>

      {/* Make Complaint Modal */}
      <Modal
        isOpen={isMakeOpen}
        onClose={() => setIsMakeOpen(false)}
        title="Make Complaint"
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsMakeOpen(false)}
              style={{
                padding: '9px 18px',
                borderRadius: '6px',
                border: '1px solid #E9E9E9',
                backgroundColor: '#FFFFFF',
                color: '#333333',
                fontSize: '14px',
                fontWeight: 500
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              form="make-complaint-form"
              className="btn-primary-pill"
              style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
            >
              Submit Complaint
            </button>
          </>
        }
      >
        <form id="make-complaint-form" onSubmit={handleSaveMake}>
          <div className="form-group">
            <label className="form-label">Subject / Topic *</label>
            <input
              type="text"
              required
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="e.g. School Bus Route #4 Delay"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Complainant / Reporter</label>
            <input
              type="text"
              value={reporter}
              onChange={e => setReporter(e.target.value)}
              placeholder="e.g. Parent of Class 8-B Student"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Detailed Complaint *</label>
            <textarea
              required
              value={complaintText}
              onChange={e => setComplaintText(e.target.value)}
              placeholder="Describe the issue, date, time, and circumstances..."
              className="form-textarea"
              style={{ minHeight: '110px' }}
            />
          </div>
        </form>
      </Modal>

      {/* Resolve Complaint Modal */}
      {resolvingComplaint && (
        <Modal
          isOpen={!!resolvingComplaint}
          onClose={() => setResolvingComplaint(null)}
          title="Resolve Complaint Action"
          maxWidth="560px"
          footer={
            <>
              <button
                type="button"
                onClick={() => setResolvingComplaint(null)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '6px',
                  border: '1px solid #E9E9E9',
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmResolve}
                className="btn-primary-pill"
                style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
              >
                <CheckCircle size={16} /> Mark as Resolved
              </button>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ backgroundColor: '#F8FAFE', padding: '14px', borderRadius: '8px', border: '1px solid #E9E9E9' }}>
              <div style={{ fontSize: '13px', color: '#888888', marginBottom: '4px' }}>
                Topic: <strong style={{ color: '#172A55' }}>{resolvingComplaint.topic}</strong>
              </div>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.5 }}>
                {resolvingComplaint.complaint}
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">Administrative Resolution Action / Notes *</label>
              <textarea
                value={resolutionNotes}
                onChange={e => setResolutionNotes(e.target.value)}
                placeholder="Detail what corrective steps were taken to resolve this issue..."
                className="form-textarea"
                style={{ minHeight: '90px' }}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
