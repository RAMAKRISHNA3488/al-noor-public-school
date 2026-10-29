import React, { useState } from 'react';
import { ClipboardList, Plus, Calendar } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';

export const HomeworkPage: React.FC = () => {
  const { homeworkList } = useSchool();

  return (
    <div>
      <ManagementCard
        title="Homework & Assignments Management"
        actions={
          <button
            onClick={() => alert('New Homework Assignment modal will be saved to registry.')}
            className="btn-primary-pill"
          >
            <Plus size={18} strokeWidth={2.5} />
            <span>Assign Homework</span>
          </button>
        }
      >
        <div className="table-responsive">
          <table className="alnoor-table">
            <thead>
              <tr>
                <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                <th style={{ width: '130px' }}>CLASS</th>
                <th style={{ width: '140px' }}>SUBJECT</th>
                <th>ASSIGNMENT TITLE & DESCRIPTION</th>
                <th style={{ width: '140px' }}>ASSIGNED</th>
                <th style={{ width: '140px' }}>DUE DATE</th>
                <th style={{ width: '120px', textAlign: 'center' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {homeworkList.map((hw, idx) => (
                <tr key={hw.id}>
                  <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                    {idx + 1}
                  </td>
                  <td style={{ fontWeight: 600, color: '#1976ED' }}>
                    {hw.grade} - {hw.section}
                  </td>
                  <td style={{ fontWeight: 600, color: '#172A55' }}>
                    {hw.subject}
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, color: '#172A55' }}>{hw.title}</div>
                    <div style={{ fontSize: '13px', color: '#666666', marginTop: '2px' }}>{hw.description}</div>
                  </td>
                  <td style={{ color: '#555555', fontSize: '14px' }}>
                    {hw.assignedDate}
                  </td>
                  <td>
                    <span className="date-badge" style={{ backgroundColor: hw.status === 'Active' ? '#1976ED' : '#6B7280' }}>
                      {hw.dueDate}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`status-badge ${hw.status === 'Active' ? 'pending' : 'resolved'}`}>
                      {hw.status}
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
