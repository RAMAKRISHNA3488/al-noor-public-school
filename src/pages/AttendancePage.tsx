import React, { useState } from 'react';
import { Calendar, Check, X, Clock, AlertCircle } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';

export const AttendancePage: React.FC = () => {
  const { students } = useSchool();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedGrade, setSelectedGrade] = useState('Grade 10');
  const [selectedSection, setSelectedSection] = useState('A');

  // Local state for daily student attendance statuses
  const [attendanceMap, setAttendanceMap] = useState<Record<number, 'Present' | 'Absent' | 'Late' | 'Excused'>>({
    1: 'Present',
    2: 'Present',
    3: 'Late',
    4: 'Present',
    5: 'Absent'
  });

  const filteredStudents = students.filter(
    s => s.grade === selectedGrade && s.section === selectedSection
  );

  const setStudentStatus = (id: number, status: 'Present' | 'Absent' | 'Late' | 'Excused') => {
    setAttendanceMap(prev => ({ ...prev, [id]: status }));
  };

  const markAll = (status: 'Present' | 'Absent') => {
    const next: Record<number, 'Present' | 'Absent' | 'Late' | 'Excused'> = {};
    filteredStudents.forEach(s => {
      next[s.id] = status;
    });
    setAttendanceMap(prev => ({ ...prev, ...next }));
  };

  return (
    <div>
      <ManagementCard
        title="Daily Attendance Sheet"
        actions={
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => markAll('Present')}
              className="btn-blue-rect"
              style={{ backgroundColor: '#10B981' }}
            >
              Mark All Present
            </button>
            <button
              onClick={() => markAll('Absent')}
              className="btn-blue-rect"
              style={{ backgroundColor: '#FF525F' }}
            >
              Mark All Absent
            </button>
          </div>
        }
      >
        {/* Filters Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            padding: '16px 28px',
            backgroundColor: '#F8FAFE',
            borderBottom: '1px solid #E9E9E9'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, color: '#172A55' }}>Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="form-input"
              style={{ width: 'auto', padding: '6px 12px' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, color: '#172A55' }}>Class:</label>
            <select
              value={selectedGrade}
              onChange={e => setSelectedGrade(e.target.value)}
              className="form-select"
              style={{ width: 'auto', padding: '6px 12px' }}
            >
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, color: '#172A55' }}>Section:</label>
            <select
              value={selectedSection}
              onChange={e => setSelectedSection(e.target.value)}
              className="form-select"
              style={{ width: 'auto', padding: '6px 12px' }}
            >
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className="alnoor-table">
            <thead>
              <tr>
                <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                <th style={{ width: '160px' }}>ADMISSION NO</th>
                <th>STUDENT NAME</th>
                <th style={{ width: '140px', textAlign: 'center' }}>CURRENT STATUS</th>
                <th style={{ width: '320px', textAlign: 'center' }}>MARK ATTENDANCE</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '36px', color: '#888888' }}>
                    No students found in {selectedGrade} - {selectedSection}
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student, idx) => {
                  const status = attendanceMap[student.id] || 'Present';

                  return (
                    <tr key={student.id}>
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {idx + 1}
                      </td>
                      <td style={{ fontWeight: 600, color: '#1976ED' }}>
                        {student.admissionNo}
                      </td>
                      <td style={{ fontWeight: 600, color: '#172A55' }}>
                        {student.name}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span
                          className={`status-badge ${
                            status === 'Present' ? 'approved' :
                            status === 'Absent' ? 'rejected' :
                            status === 'Late' ? 'pending' : 'active'
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', gap: '6px' }}>
                          <button
                            onClick={() => setStudentStatus(student.id, 'Present')}
                            className="btn-blue-rect sm"
                            style={{ backgroundColor: status === 'Present' ? '#10B981' : '#E5E7EB', color: status === 'Present' ? '#FFFFFF' : '#374151' }}
                          >
                            Present
                          </button>
                          <button
                            onClick={() => setStudentStatus(student.id, 'Absent')}
                            className="btn-blue-rect sm"
                            style={{ backgroundColor: status === 'Absent' ? '#FF525F' : '#E5E7EB', color: status === 'Absent' ? '#FFFFFF' : '#374151' }}
                          >
                            Absent
                          </button>
                          <button
                            onClick={() => setStudentStatus(student.id, 'Late')}
                            className="btn-blue-rect sm"
                            style={{ backgroundColor: status === 'Late' ? '#FFA52E' : '#E5E7EB', color: status === 'Late' ? '#FFFFFF' : '#374151' }}
                          >
                            Late
                          </button>
                          <button
                            onClick={() => setStudentStatus(student.id, 'Excused')}
                            className="btn-blue-rect sm"
                            style={{ backgroundColor: status === 'Excused' ? '#6C5CE7' : '#E5E7EB', color: status === 'Excused' ? '#FFFFFF' : '#374151' }}
                          >
                            Excused
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
      </ManagementCard>
    </div>
  );
};
