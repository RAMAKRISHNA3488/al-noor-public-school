import React, { useState, useMemo } from 'react';
import { Plus, Edit2, Trash2, Eye, User, Phone, Calendar, Award } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { Student } from '../types';
import { ManagementCard } from '../components/common/ManagementCard';
import { TableControls } from '../components/table/TableControls';
import { Pagination } from '../components/table/Pagination';
import { Modal } from '../components/common/Modal';
import { ConfirmDialog } from '../components/common/ConfirmDialog';

export const StudentZonePage: React.FC = () => {
  const { students, addStudent, updateStudent, deleteStudent } = useSchool();

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [viewingStudent, setViewingStudent] = useState<Student | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // Form Fields
  const [admissionNo, setAdmissionNo] = useState('');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('Grade 10');
  const [section, setSection] = useState('A');
  const [guardianName, setGuardianName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('2010-01-01');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');

  const filteredStudents = useMemo(() => {
    return students.filter(s =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.admissionNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.guardianName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [students, searchTerm]);

  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredStudents.slice(start, start + entriesPerPage);
  }, [filteredStudents, currentPage, entriesPerPage]);

  const handleOpenAdd = () => {
    setEditingStudent(null);
    setAdmissionNo(`ANPS-2025-${String(students.length + 1).padStart(3, '0')}`);
    setStudentName('');
    setGrade('Grade 10');
    setSection('A');
    setGuardianName('');
    setPhone('+91 98765 ');
    setDob('2010-01-01');
    setGender('Male');
    setIsFormOpen(true);
  };

  const handleOpenEdit = (student: Student) => {
    setEditingStudent(student);
    setAdmissionNo(student.admissionNo);
    setStudentName(student.name);
    setGrade(student.grade);
    setSection(student.section);
    setGuardianName(student.guardianName);
    setPhone(student.phone);
    setDob(student.dob);
    setGender(student.gender);
    setIsFormOpen(true);
  };

  const handleSaveStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !admissionNo.trim()) return;

    if (editingStudent) {
      updateStudent({
        ...editingStudent,
        admissionNo,
        name: studentName,
        grade,
        section,
        guardianName,
        phone,
        dob,
        gender
      });
    } else {
      addStudent({
        admissionNo,
        name: studentName,
        grade,
        section,
        guardianName,
        phone,
        dob,
        gender,
        status: 'Active',
        attendanceRate: 95.0
      });
    }

    setIsFormOpen(false);
  };

  return (
    <div>
      <ManagementCard
        title="Student Zone — Directory"
        actions={
          <button onClick={handleOpenAdd} className="btn-primary-pill">
            <Plus size={18} strokeWidth={2.5} />
            <span>Add Student</span>
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
                <th style={{ width: '150px' }}>ADMISSION NO</th>
                <th>STUDENT NAME</th>
                <th>CLASS & SEC</th>
                <th>GUARDIAN</th>
                <th>PHONE</th>
                <th style={{ textAlign: 'center' }}>ATTENDANCE</th>
                <th style={{ textAlign: 'center' }}>STATUS</th>
                <th style={{ width: '130px', textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedStudents.length === 0 ? (
                <tr>
                  <td colSpan={9} style={{ textAlign: 'center', padding: '36px', color: '#888888' }}>
                    No students found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                paginatedStudents.map((item, index) => {
                  const rowNumber = (currentPage - 1) * entriesPerPage + index + 1;

                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {rowNumber}
                      </td>
                      <td style={{ fontWeight: 600, color: '#1976ED' }}>
                        {item.admissionNo}
                      </td>
                      <td style={{ fontWeight: 600, color: '#172A55' }}>
                        {item.name}
                      </td>
                      <td>
                        {item.grade} - {item.section}
                      </td>
                      <td style={{ color: '#555555' }}>
                        {item.guardianName}
                      </td>
                      <td style={{ color: '#555555', fontSize: '14px' }}>
                        {item.phone}
                      </td>
                      <td style={{ textAlign: 'center', fontWeight: 600, color: item.attendanceRate > 90 ? '#10B981' : '#F59E0B' }}>
                        {item.attendanceRate}%
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={`status-badge ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <button
                            onClick={() => setViewingStudent(item)}
                            className="action-icon-btn edit"
                            title="View Student Profile"
                          >
                            <Eye size={17} />
                          </button>
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="action-icon-btn edit"
                            title="Edit Student"
                          >
                            <Edit2 size={17} />
                          </button>
                          <button
                            onClick={() => setDeletingId(item.id)}
                            className="action-icon-btn delete"
                            title="Delete Student"
                          >
                            <Trash2 size={17} />
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
          totalEntries={filteredStudents.length}
          entriesPerPage={entriesPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </ManagementCard>

      {/* Add / Edit Student Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingStudent ? 'Edit Student Details' : 'Student Admission Form'}
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
              form="student-form"
              className="btn-primary-pill"
              style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
            >
              {editingStudent ? 'Update Profile' : 'Complete Admission'}
            </button>
          </>
        }
      >
        <form id="student-form" onSubmit={handleSaveStudent}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Admission Number *</label>
              <input
                type="text"
                required
                value={admissionNo}
                onChange={e => setAdmissionNo(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                required
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
                placeholder="Student full name"
                className="form-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Grade / Class</label>
              <select
                value={grade}
                onChange={e => setGrade(e.target.value)}
                className="form-select"
              >
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Section</label>
              <select
                value={section}
                onChange={e => setSection(e.target.value)}
                className="form-select"
              >
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Guardian Name</label>
              <input
                type="text"
                value={guardianName}
                onChange={e => setGuardianName(e.target.value)}
                placeholder="Parent / Guardian"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Contact Phone</label>
              <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={e => setDob(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select
                value={gender}
                onChange={e => setGender(e.target.value as any)}
                className="form-select"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </form>
      </Modal>

      {/* View Student Profile Modal */}
      {viewingStudent && (
        <Modal
          isOpen={!!viewingStudent}
          onClose={() => setViewingStudent(null)}
          title="Student Profile & Academic Summary"
          maxWidth="600px"
          footer={
            <button
              onClick={() => setViewingStudent(null)}
              className="btn-primary-pill"
              style={{ height: '40px', padding: '0 24px', fontSize: '14px' }}
            >
              Done
            </button>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#F8FAFE', padding: '16px', borderRadius: '10px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#1976ED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <User size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', color: '#172A55', fontWeight: 700 }}>{viewingStudent.name}</h3>
                <span style={{ fontSize: '13px', color: '#1976ED', fontWeight: 600 }}>{viewingStudent.admissionNo}</span>
                <span style={{ margin: '0 8px', color: '#CCCCCC' }}>•</span>
                <span style={{ fontSize: '13px', color: '#555555' }}>{viewingStudent.grade} - {viewingStudent.section}</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '14px' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#888888', display: 'block' }}>Guardian Name</span>
                <strong>{viewingStudent.guardianName}</strong>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: '#888888', display: 'block' }}>Contact Phone</span>
                <strong>{viewingStudent.phone}</strong>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: '#888888', display: 'block' }}>Date of Birth</span>
                <strong>{viewingStudent.dob}</strong>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: '#888888', display: 'block' }}>Overall Attendance</span>
                <strong style={{ color: '#10B981' }}>{viewingStudent.attendanceRate}% (Good Standing)</strong>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={() => {
          if (deletingId !== null) deleteStudent(deletingId);
        }}
        title="Remove Student"
        message="Are you sure you want to withdraw this student record from the system?"
      />
    </div>
  );
};
