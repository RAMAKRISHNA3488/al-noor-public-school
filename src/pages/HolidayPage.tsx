import React, { useState, useMemo } from 'react';
import { Plus, Edit2, Trash2, FileSpreadsheet } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { Holiday } from '../types';
import { ManagementCard } from '../components/common/ManagementCard';
import { TableControls } from '../components/table/TableControls';
import { Pagination } from '../components/table/Pagination';
import { Modal } from '../components/common/Modal';
import { ConfirmDialog } from '../components/common/ConfirmDialog';

export const HolidayPage: React.FC = () => {
  const { holidays, addHoliday, updateHoliday, deleteHoliday } = useSchool();

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingHoliday, setEditingHoliday] = useState<Holiday | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // Form Fields
  const [purpose, setPurpose] = useState('');
  const [holidayDate, setHolidayDate] = useState('');
  const [holidayType, setHolidayType] = useState<'National' | 'School' | 'Religious' | 'Festival'>('National');
  const [academicYear, setAcademicYear] = useState('2025-2026');

  // Filter & Search
  const filteredHolidays = useMemo(() => {
    return holidays.filter(h =>
      h.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.date.includes(searchTerm) ||
      (h.type && h.type.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [holidays, searchTerm]);

  // Pagination Slice
  const paginatedHolidays = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredHolidays.slice(start, start + entriesPerPage);
  }, [filteredHolidays, currentPage, entriesPerPage]);

  const handleOpenAdd = () => {
    setEditingHoliday(null);
    setPurpose('');
    setHolidayDate(new Date().toISOString().split('T')[0]);
    setHolidayType('National');
    setAcademicYear('2025-2026');
    setIsFormOpen(true);
  };

  const handleOpenEdit = (holiday: Holiday) => {
    setEditingHoliday(holiday);
    setPurpose(holiday.purpose);
    setHolidayDate(holiday.date);
    setHolidayType(holiday.type || 'National');
    setAcademicYear(holiday.academicYear || '2025-2026');
    setIsFormOpen(true);
  };

  const handleSaveHoliday = (e: React.FormEvent) => {
    e.preventDefault();
    if (!purpose.trim() || !holidayDate) return;

    if (editingHoliday) {
      updateHoliday({
        ...editingHoliday,
        purpose,
        date: holidayDate,
        type: holidayType,
        academicYear
      });
    } else {
      addHoliday({
        purpose,
        date: holidayDate,
        type: holidayType,
        academicYear
      });
    }

    setIsFormOpen(false);
  };

  const handleExportCSV = () => {
    const headers = ['#', 'Date', 'Purpose', 'Category', 'Academic Year'];
    const rows = holidays.map((h, i) => [
      i + 1,
      `"${h.date}"`,
      `"${h.purpose.replace(/"/g, '""')}"`,
      `"${h.type || 'General'}"`,
      `"${h.academicYear || '2025-2026'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `meridian_holidays_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <ManagementCard
        title="Holiday Management"
        actions={
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="btn-secondary-pill" title="Export Holiday Report to CSV/Excel">
              <FileSpreadsheet size={18} />
              <span>Export Report</span>
            </button>
            <button onClick={handleOpenAdd} className="btn-primary-pill">
              <Plus size={18} strokeWidth={2.5} />
              <span>Add Holiday</span>
            </button>
          </div>
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
                <th>PURPOSE</th>
                <th style={{ width: '140px', textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedHolidays.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: '36px', color: '#888888' }}>
                    No holidays found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                paginatedHolidays.map((item, index) => {
                  const rowNumber = (currentPage - 1) * entriesPerPage + index + 1;

                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {rowNumber}
                      </td>
                      <td>
                        <span className="date-badge">{item.date}</span>
                      </td>
                      <td style={{ fontWeight: 500, color: '#172A55', fontSize: '16px' }}>
                        <div>{item.purpose}</div>
                        {item.type && (
                          <span style={{ fontSize: '12px', color: '#888888', marginTop: '2px', display: 'inline-block' }}>
                            Type: {item.type} • Session: {item.academicYear || '2025-2026'}
                          </span>
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="action-icon-btn edit"
                            title="Edit Holiday"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => setDeletingId(item.id)}
                            className="action-icon-btn delete"
                            title="Delete Holiday"
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
          totalEntries={filteredHolidays.length}
          entriesPerPage={entriesPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </ManagementCard>

      {/* Add / Edit Holiday Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingHoliday ? 'Edit Holiday' : 'Add Holiday'}
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
              form="holiday-form"
              className="btn-primary-pill"
              style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
            >
              {editingHoliday ? 'Update Holiday' : 'Save Holiday'}
            </button>
          </>
        }
      >
        <form id="holiday-form" onSubmit={handleSaveHoliday}>
          <div className="form-group">
            <label className="form-label">Holiday Purpose / Name *</label>
            <input
              type="text"
              required
              value={purpose}
              onChange={e => setPurpose(e.target.value)}
              placeholder="e.g. Eid-ul-Fitr Celebration"
              className="form-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Holiday Date *</label>
              <input
                type="date"
                required
                value={holidayDate}
                onChange={e => setHolidayDate(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Holiday Category</label>
              <select
                value={holidayType}
                onChange={e => setHolidayType(e.target.value as any)}
                className="form-select"
              >
                <option value="National">National Holiday</option>
                <option value="Religious">Religious Festival</option>
                <option value="School">School Vacation</option>
                <option value="Festival">Cultural / Observance</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Academic Session</label>
            <input
              type="text"
              value={academicYear}
              onChange={e => setAcademicYear(e.target.value)}
              placeholder="2025-2026"
              className="form-input"
            />
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={() => {
          if (deletingId !== null) deleteHoliday(deletingId);
        }}
        title="Delete Holiday"
        message="Are you sure you want to remove this holiday from the official calendar?"
      />
    </div>
  );
};
