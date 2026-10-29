import React, { useState, useMemo } from 'react';
import { Plus, Edit2, Trash2, Eye, FileText, Download } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { Notice } from '../types';
import { ManagementCard } from '../components/common/ManagementCard';
import { TableControls } from '../components/table/TableControls';
import { Pagination } from '../components/table/Pagination';
import { Modal } from '../components/common/Modal';
import { ConfirmDialog } from '../components/common/ConfirmDialog';

export const NoticePage: React.FC = () => {
  const { notices, addNotice, updateNotice, deleteNotice } = useSchool();

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [viewingNotice, setViewingNotice] = useState<Notice | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // Form Fields
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeDate, setNoticeDate] = useState('');
  const [noticeDoc, setNoticeDoc] = useState('');
  const [noticeAudience, setNoticeAudience] = useState('School-wide');
  const [noticeContent, setNoticeContent] = useState('');

  // Filter & Search
  const filteredNotices = useMemo(() => {
    return notices.filter(n =>
      n.notice.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.date.includes(searchTerm) ||
      n.document.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [notices, searchTerm]);

  // Pagination Slice
  const paginatedNotices = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredNotices.slice(start, start + entriesPerPage);
  }, [filteredNotices, currentPage, entriesPerPage]);

  const handleOpenAdd = () => {
    setEditingNotice(null);
    setNoticeTitle('');
    setNoticeDate(new Date().toISOString().split('T')[0]);
    setNoticeDoc('official_notice.pdf');
    setNoticeAudience('School-wide');
    setNoticeContent('');
    setIsFormOpen(true);
  };

  const handleOpenEdit = (notice: Notice) => {
    setEditingNotice(notice);
    setNoticeTitle(notice.notice);
    setNoticeDate(notice.date);
    setNoticeDoc(notice.document);
    setNoticeAudience(notice.audience || 'School-wide');
    setNoticeContent(notice.content || '');
    setIsFormOpen(true);
  };

  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeTitle.trim() || !noticeDate) return;

    if (editingNotice) {
      updateNotice({
        ...editingNotice,
        notice: noticeTitle,
        date: noticeDate,
        document: noticeDoc || 'notice_document.pdf',
        audience: noticeAudience,
        content: noticeContent
      });
    } else {
      addNotice({
        notice: noticeTitle,
        date: noticeDate,
        document: noticeDoc || 'notice_document.pdf',
        audience: noticeAudience,
        content: noticeContent
      });
    }

    setIsFormOpen(false);
  };

  return (
    <div>
      <ManagementCard
        title="Notice Management"
        actions={
          <button onClick={handleOpenAdd} className="btn-primary-pill">
            <Plus size={18} strokeWidth={2.5} />
            <span>Add Notice</span>
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
                <th>NOTICE</th>
                <th style={{ width: '180px', textAlign: 'center' }}>DOCUMENT</th>
                <th style={{ width: '120px', textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedNotices.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '36px', color: '#888888' }}>
                    No notices found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                paginatedNotices.map((item, index) => {
                  const rowNumber = (currentPage - 1) * entriesPerPage + index + 1;

                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {rowNumber}
                      </td>
                      <td>
                        <span className="date-badge">{item.date}</span>
                      </td>
                      <td style={{ fontWeight: 500, color: '#172A55' }}>
                        <div>{item.notice}</div>
                        {item.audience && (
                          <span style={{ fontSize: '12px', color: '#888888', marginTop: '2px', display: 'inline-block' }}>
                            Audience: {item.audience}
                          </span>
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => setViewingNotice(item)}
                          className="btn-blue-rect"
                          title="View official notice document"
                        >
                          View Notice
                        </button>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="action-icon-btn edit"
                            title="Edit Notice"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => setDeletingId(item.id)}
                            className="action-icon-btn delete"
                            title="Delete Notice"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
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
          totalEntries={filteredNotices.length}
          entriesPerPage={entriesPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </ManagementCard>

      {/* Add / Edit Notice Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingNotice ? 'Edit Notice' : 'Add Notice'}
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
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
              form="notice-form"
              className="btn-primary-pill"
              style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
            >
              {editingNotice ? 'Update Notice' : 'Save Notice'}
            </button>
          </>
        }
      >
        <form id="notice-form" onSubmit={handleSaveNotice}>
          <div className="form-group">
            <label className="form-label">Notice Subject / Title *</label>
            <input
              type="text"
              required
              value={noticeTitle}
              onChange={e => setNoticeTitle(e.target.value)}
              placeholder="e.g. Annual Sports Meet 2026 Schedule"
              className="form-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Publication Date *</label>
              <input
                type="date"
                required
                value={noticeDate}
                onChange={e => setNoticeDate(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Target Audience</label>
              <select
                value={noticeAudience}
                onChange={e => setNoticeAudience(e.target.value)}
                className="form-select"
              >
                <option value="School-wide">School-wide (All)</option>
                <option value="Students">Students Only</option>
                <option value="Teachers">Teachers & Staff</option>
                <option value="Parents">Parents</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Attached Document (PDF)</label>
            <input
              type="text"
              value={noticeDoc}
              onChange={e => setNoticeDoc(e.target.value)}
              placeholder="filename.pdf"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Notice Body / Description</label>
            <textarea
              value={noticeContent}
              onChange={e => setNoticeContent(e.target.value)}
              placeholder="Detailed notification announcement..."
              className="form-textarea"
            />
          </div>
        </form>
      </Modal>

      {/* View Notice Modal */}
      {viewingNotice && (
        <Modal
          isOpen={!!viewingNotice}
          onClose={() => setViewingNotice(null)}
          title="Official Document Viewer"
          maxWidth="680px"
          footer={
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: '#666666' }}>
                Attachment: <strong>{viewingNotice.document}</strong>
              </span>
              <button
                onClick={() => setViewingNotice(null)}
                className="btn-primary-pill"
                style={{ height: '38px', padding: '0 20px', fontSize: '14px' }}
              >
                Done
              </button>
            </div>
          }
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E9E9E9',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            {/* Document Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #FFA52E', paddingBottom: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src="/logo.svg" alt="Meridian Public School Logo" style={{ width: '48px', height: '48px' }} />
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1B2238' }}>MERIDIAN PUBLIC SCHOOL</h3>
                  <p style={{ fontSize: '12px', color: '#888888' }}>Affiliated to Central Board of Education</p>
                </div>
              </div>
              <span className="date-badge">{viewingNotice.date}</span>
            </div>

            <h4 style={{ fontSize: '17px', color: '#172A55', fontWeight: 600, marginBottom: '12px' }}>
              {viewingNotice.notice}
            </h4>

            <div style={{ backgroundColor: '#F8FAFE', padding: '16px', borderRadius: '6px', border: '1px solid #ECEEF6', marginBottom: '16px' }}>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.6 }}>
                {viewingNotice.content || 'This circular is issued for all concerned students and faculty. Please adhere to the stated instructions and dates accordingly. For further queries, reach out to the administrative office.'}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1976ED', fontSize: '13px' }}>
                <FileText size={16} />
                <span>Verified Digital Document: {viewingNotice.document}</span>
              </div>
              <span style={{ fontSize: '12px', color: '#888888', fontStyle: 'italic' }}>
                Signed by: Office of the Principal
              </span>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={() => {
          if (deletingId !== null) deleteNotice(deletingId);
        }}
        title="Delete Notice"
        message="Are you sure you want to delete this notice? This action cannot be undone."
      />
    </div>
  );
};
