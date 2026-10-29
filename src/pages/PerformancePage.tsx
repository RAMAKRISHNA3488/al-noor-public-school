import React, { useState } from 'react';
import { BarChart3, FileSpreadsheet, Award, Download } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';

export const PerformancePage: React.FC = () => {
  const { students } = useSchool();

  const reportData = [
    { id: 1, name: 'Zaid bin Tariq', admissionNo: 'ANPS-2024-001', grade: 'Grade 10-A', marks: '482 / 500', percentage: '96.4%', gpa: '9.8', gradeLetter: 'A+' },
    { id: 2, name: 'Maryam Fatima', admissionNo: 'ANPS-2024-002', grade: 'Grade 10-B', marks: '491 / 500', percentage: '98.2%', gpa: '10.0', gradeLetter: 'A+' },
    { id: 3, name: 'Hamza Zubair', admissionNo: 'ANPS-2024-003', grade: 'Grade 9-A', marks: '445 / 500', percentage: '89.0%', gpa: '9.0', gradeLetter: 'A' },
    { id: 4, name: 'Amina Siddiqui', admissionNo: 'ANPS-2024-004', grade: 'Grade 9-B', marks: '462 / 500', percentage: '92.4%', gpa: '9.4', gradeLetter: 'A+' },
    { id: 5, name: 'Bilal Mustafa', admissionNo: 'ANPS-2024-005', grade: 'Grade 8-A', marks: '430 / 500', percentage: '86.0%', gpa: '8.8', gradeLetter: 'A' }
  ];

  const handleExportPerformanceCSV = () => {
    const headers = ['#', 'Student Name', 'Admission No', 'Class', 'Marks', 'Percentage', 'GPA', 'Grade'];
    const rows = reportData.map((r, i) => [
      i + 1,
      `"${r.name}"`,
      `"${r.admissionNo}"`,
      `"${r.grade}"`,
      `"${r.marks}"`,
      `"${r.percentage}"`,
      `"${r.gpa}"`,
      `"${r.gradeLetter}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `meridian_student_performance_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <ManagementCard
        title="Student Performance & Academic Reports"
        actions={
          <button onClick={handleExportPerformanceCSV} className="btn-secondary-pill">
            <FileSpreadsheet size={18} />
            <span>Export Report</span>
          </button>
        }
      >
        <div className="table-responsive">
          <table className="alnoor-table">
            <thead>
              <tr>
                <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                <th>STUDENT NAME</th>
                <th style={{ width: '160px' }}>ADMISSION NO</th>
                <th>CLASS & SEC</th>
                <th style={{ textAlign: 'center' }}>TOTAL MARKS</th>
                <th style={{ textAlign: 'center' }}>PERCENTAGE</th>
                <th style={{ textAlign: 'center' }}>GPA SCORE</th>
                <th style={{ width: '120px', textAlign: 'center' }}>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, idx) => (
                <tr key={item.id}>
                  <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                    {idx + 1}
                  </td>
                  <td style={{ fontWeight: 600, color: '#172A55' }}>{item.name}</td>
                  <td style={{ fontWeight: 600, color: '#1976ED' }}>{item.admissionNo}</td>
                  <td>{item.grade}</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>{item.marks}</td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: '#10B981' }}>{item.percentage}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: '#172A55' }}>{item.gpa}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className="date-badge" style={{ backgroundColor: '#10B981' }}>
                      {item.gradeLetter}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ManagementCard>
    </div>
  );
};
