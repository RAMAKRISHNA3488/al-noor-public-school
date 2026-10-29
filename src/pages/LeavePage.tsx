import React, { useState, useMemo } from 'react';
import { Plus, Check, X, Clock } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { LeaveRecord } from '../types';
import { ManagementCard } from '../components/common/ManagementCard';
import { TableControls } from '../components/table/TableControls';
import { Pagination } from '../components/table/Pagination';
import { Modal } from '../components/common/Modal';

export const LeavePage: React.FC = () => {
  const { leaves, applyLeave, updateLeaveStatus } = useSchool();

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal states
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState<LeaveRecord | null>(null);

  // Form Fields
  const [applicantName, setApplicantName] = useState('');
  const [leaveDate, setLeaveDate] = useState(new Date().toISOString().split('T')[0]);
  const [leaveType, setLeaveType] = useState<'Casual' | 'Sick' | 'Annual' | 'Maternity'>('Sick');
  const [reason, setReason] = useState('');

  // Filter & Search
  const filteredLeaves = useMemo(() => {
    return leaves.filter(l =>
      l.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.date.includes(searchTerm) ||
      l.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (l.applicantName && l.applicantName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [leaves, searchTerm]);

  // Pagination Slice
  const paginatedLeaves = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredLeaves.slice(start, start + entriesPerPage);
  }, [filteredLeaves, currentPage, entriesPerPage]);

  const handleOpenApply = () => {
    setApplicantName('');
    setLeaveDate(new Date().toISOString().split('T')[0]);
    setLeaveType('Sick');
    setReason('');
    setIsApplyOpen(true);
  };

  const handleSaveApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) return;

    applyLeave({
      date: leaveDate,
      reason,
      leaveType,
      applicantName: applicantName.trim() || 'Staff Member',
      startDate: leaveDate,
      endDate: leaveDate
    });

    setIsApplyOpen(false);
  };

  return (
    <div>
      <ManagementCard
        title="Leave"
        actions={
          <button onClick={handleOpenApply} className="btn-primary-pill">
            <Plus size={18} strokeWidth={2.5} />
            <span>Apply Leave</span>
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
                <th style={{ width: '160px' }}>DATE</th>
                <th>REASON</th>
                <th style={{ width: '180px', textAlign: 'center' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {paginatedLeaves.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: '36px', color: '#888888' }}>
                    No leave records found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                paginatedLeaves.map((item, index) => {
                  const rowNumber = (currentPage - 1) * entriesPerPage + index + 1;
                  const statusClass = item.status.toLowerCase();

                  return (
                    <tr
                      key={item.id}
                      onClick={() => setSelectedLeave(item)}
                      style={{ cursor: 'pointer' }}
                      title="Click to view details or update status"
                    >
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {rowNumber}
                      </td>
                      <td style={{ color: '#111111', fontWeight: 500 }}>
                        {/* Reference shows plain text date */}
                        {item.date}
                      </td>
                      <td>
                        <div style={{ fontWeight: 500, color: '#172A55', fontSize: '15px' }}>
                          {item.reason}
                        </div>
                        {item.applicantName && (
                          <div style={{ fontSize: '12px', color: '#888888', marginTop: '3px' }}>
                            Applicant: {item.applicantName} {item.leaveType && `(${item.leaveType} Leave)`}
                          </div>
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={`status-badge ${statusClass}`}>
                          {item.status}
                        </span>
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
          totalEntries={filteredLeaves.length}
          entriesPerPage={entriesPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </ManagementCard>

      {/* Apply Leave Modal */}
      <Modal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        title="Apply for Leave"
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsApplyOpen(false)}
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
              form="apply-leave-form"
              className="btn-primary-pill"
              style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
            >
              Submit Application
            </button>
          </>
        }
      >
        <form id="apply-leave-form" onSubmit={handleSaveApply}>
          <div className="form-group">
            <label className="form-label">Applicant Name & Designation *</label>
            <input
              type="text"
              required
              value={applicantName}
              onChange={e => setApplicantName(e.target.value)}
              placeholder="e.g. Tariq Mahmood (Senior Maths Teacher)"
              className="form-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Effective Date *</label>
              <input
                type="date"
                required
                value={leaveDate}
                onChange={e => setLeaveDate(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Leave Category</label>
              <select
                value={leaveType}
                onChange={e => setLeaveType(e.target.value as any)}
                className="form-select"
              >
                <option value="Sick">Sick Leave</option>
                <option value="Casual">Casual Leave</option>
                <option value="Annual">Annual / Vacation Leave</option>
                <option value="Maternity">Maternity / Paternity</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Reason for Absence *</label>
            <textarea
              required
              value={reason}
              onChange={e => setReason(e.target.value)}
              placeholder="State the detailed purpose of leave..."
              className="form-textarea"
            />
          </div>
        </form>
      </Modal>

      {/* Leave Details & Admin Status Approval Modal */}
      {selectedLeave && (
        <Modal
          isOpen={!!selectedLeave}
          onClose={() => setSelectedLeave(null)}
          title="Leave Application Details"
          maxWidth="560px"
          footer={
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {selectedLeave.status !== 'Approved' && (
                  <button
                    onClick={() => {
                      updateLeaveStatus(selectedLeave.id, 'Approved');
                      setSelectedLeave(null);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#1976ED',
                      color: '#FFFFFF',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 500
                    }}
                  >
                    <Check size={16} /> Approve
                  </button>
                )}
                {selectedLeave.status !== 'Rejected' && (
                  <button
                    onClick={() => {
                      updateLeaveStatus(selectedLeave.id, 'Rejected');
                      setSelectedLeave(null);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#FF525F',
                      color: '#FFFFFF',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 500
                    }}
                  >
                    <X size={16} /> Reject
                  </button>
                )}
              </div>
              <button
                onClick={() => setSelectedLeave(null)}
                className="page-btn"
                style={{ padding: '0 16px' }}
              >
                Close
              </button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFE', padding: '12px 16px', borderRadius: '8px' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#888888', display: 'block' }}>Applicant</span>
                <strong style={{ fontSize: '15px', color: '#172A55' }}>
                  {selectedLeave.applicantName || 'Staff Member'}
                </strong>
              </div>
              <span className={`status-badge ${selectedLeave.status.toLowerCase()}`}>
                {selectedLeave.status}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px' }}>
              <div>
                <span style={{ color: '#888888', display: 'block', fontSize: '12px' }}>Leave Date</span>
                <strong>{selectedLeave.date}</strong>
              </div>
              <div>
                <span style={{ color: '#888888', display: 'block', fontSize: '12px' }}>Leave Type</span>
                <strong>{selectedLeave.leaveType || 'General'}</strong>
              </div>
            </div>

            <div>
              <span style={{ color: '#888888', display: 'block', fontSize: '12px', marginBottom: '4px' }}>
                Application Reason
              </span>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E9E9E9', padding: '12px', borderRadius: '6px', fontSize: '14px', color: '#333333', lineHeight: 1.5 }}>
                {selectedLeave.reason}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
