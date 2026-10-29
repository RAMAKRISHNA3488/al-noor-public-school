import React, { useState, useMemo } from 'react';
import { Plus, Users, Mail, Phone, Calendar } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { Staff } from '../types';
import { ManagementCard } from '../components/common/ManagementCard';
import { TableControls } from '../components/table/TableControls';
import { Pagination } from '../components/table/Pagination';
import { Modal } from '../components/common/Modal';

export const StaffManagementPage: React.FC = () => {
  const { staff, addStaff } = useSchool();

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('Mathematics');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+91 91234 ');

  const filteredStaff = useMemo(() => {
    return staff.filter(s =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [staff, searchTerm]);

  const paginatedStaff = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredStaff.slice(start, start + entriesPerPage);
  }, [filteredStaff, currentPage, entriesPerPage]);

  const handleOpenAdd = () => {
    setName('');
    setDesignation('');
    setDepartment('Mathematics');
    setEmail('');
    setPhone('+91 91234 ');
    setIsAddOpen(true);
  };

  const handleSaveStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !designation.trim()) return;

    addStaff({
      employeeId: `EMP-${100 + staff.length + 1}`,
      name,
      designation,
      department,
      email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@meridian.edu`,
      phone,
      joinDate: new Date().toISOString().split('T')[0],
      status: 'Active'
    });

    setIsAddOpen(false);
  };

  return (
    <div>
      <ManagementCard
        title="Staff & HR Management"
        actions={
          <button onClick={handleOpenAdd} className="btn-primary-pill">
            <Plus size={18} strokeWidth={2.5} />
            <span>Add Staff Member</span>
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
                <th style={{ width: '130px' }}>EMP ID</th>
                <th>STAFF NAME</th>
                <th>DESIGNATION</th>
                <th>DEPARTMENT</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th style={{ textAlign: 'center' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {paginatedStaff.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center', padding: '36px', color: '#888888' }}>
                    No staff records found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                paginatedStaff.map((item, index) => {
                  const rowNumber = (currentPage - 1) * entriesPerPage + index + 1;

                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {rowNumber}
                      </td>
                      <td style={{ fontWeight: 600, color: '#1976ED' }}>
                        {item.employeeId}
                      </td>
                      <td style={{ fontWeight: 600, color: '#172A55' }}>
                        {item.name}
                      </td>
                      <td>{item.designation}</td>
                      <td>
                        <span style={{ backgroundColor: '#F4F6FD', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', color: '#172A55', fontWeight: 500 }}>
                          {item.department}
                        </span>
                      </td>
                      <td style={{ color: '#555555', fontSize: '14px' }}>{item.email}</td>
                      <td style={{ color: '#555555', fontSize: '14px' }}>{item.phone}</td>
                      <td style={{ textAlign: 'center' }}>
                        <span className="status-badge active">{item.status}</span>
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
          totalEntries={filteredStaff.length}
          entriesPerPage={entriesPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </ManagementCard>

      {/* Add Staff Modal */}
      <Modal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title="Add Staff Member"
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsAddOpen(false)}
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
              form="staff-form"
              className="btn-primary-pill"
              style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
            >
              Onboard Staff
            </button>
          </>
        }
      >
        <form id="staff-form" onSubmit={handleSaveStaff}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Prof. Tariq Mahmood"
              className="form-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Designation / Role *</label>
              <input
                type="text"
                required
                value={designation}
                onChange={e => setDesignation(e.target.value)}
                placeholder="Senior Mathematics Teacher"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Department</label>
              <select
                value={department}
                onChange={e => setDepartment(e.target.value)}
                className="form-select"
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science (Physics/Chem/Bio)</option>
                <option value="Languages">Languages & Literature</option>
                <option value="Social Studies">Social Studies</option>
                <option value="Library Services">Library Services</option>
                <option value="Transport">Transport & Logistics</option>
                <option value="Administration">Administration & Accounts</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@meridian.edu"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
