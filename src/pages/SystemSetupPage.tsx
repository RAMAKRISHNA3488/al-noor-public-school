import React, { useState } from 'react';
import { Settings, Calendar, Layers, BookOpen, Plus } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';

export const SystemSetupPage: React.FC = () => {
  const { systemSettings } = useSchool();
  const [activeTab, setActiveTab] = useState<'sessions' | 'classes' | 'subjects'>('sessions');

  return (
    <div>
      <ManagementCard
        title="System Setup & Academic Configuration"
        actions={
          <button
            onClick={() => alert('New Academic Configuration parameter will be added.')}
            className="btn-primary-pill"
          >
            <Plus size={18} strokeWidth={2.5} />
            <span>Add Configuration</span>
          </button>
        }
      >
        <div style={{ display: 'flex', gap: '8px', padding: '16px 28px', borderBottom: '1px solid #E9E9E9' }}>
          <button
            onClick={() => setActiveTab('sessions')}
            className="page-btn"
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              backgroundColor: activeTab === 'sessions' ? '#1976ED' : '#FFFFFF',
              color: activeTab === 'sessions' ? '#FFFFFF' : '#333333',
              borderColor: activeTab === 'sessions' ? '#1976ED' : '#E9E9E9',
              fontWeight: 600
            }}
          >
            Academic Sessions
          </button>
          <button
            onClick={() => setActiveTab('classes')}
            className="page-btn"
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              backgroundColor: activeTab === 'classes' ? '#1976ED' : '#FFFFFF',
              color: activeTab === 'classes' ? '#FFFFFF' : '#333333',
              borderColor: activeTab === 'classes' ? '#1976ED' : '#E9E9E9',
              fontWeight: 600
            }}
          >
            Classes & Sections
          </button>
          <button
            onClick={() => setActiveTab('subjects')}
            className="page-btn"
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              backgroundColor: activeTab === 'subjects' ? '#1976ED' : '#FFFFFF',
              color: activeTab === 'subjects' ? '#FFFFFF' : '#333333',
              borderColor: activeTab === 'subjects' ? '#1976ED' : '#E9E9E9',
              fontWeight: 600
            }}
          >
            Subjects Catalog
          </button>
        </div>

        {activeTab === 'sessions' ? (
          <div className="table-responsive">
            <table className="alnoor-table">
              <thead>
                <tr>
                  <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                  <th>ACADEMIC YEAR</th>
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th style={{ textAlign: 'center' }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {systemSettings.academicYears.map((ay, idx) => (
                  <tr key={ay.id}>
                    <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                      {idx + 1}
                    </td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>{ay.name}</td>
                    <td>{ay.startDate}</td>
                    <td>{ay.endDate}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`status-badge ${ay.isCurrent ? 'active' : 'pending'}`}>
                        {ay.isCurrent ? 'Current Active Session' : 'Upcoming Session'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : activeTab === 'classes' ? (
          <div className="table-responsive">
            <table className="alnoor-table">
              <thead>
                <tr>
                  <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                  <th>CLASS / GRADE</th>
                  <th style={{ textAlign: 'center' }}>NUMERIC ORDER</th>
                  <th>CONFIGURED SECTIONS</th>
                </tr>
              </thead>
              <tbody>
                {systemSettings.classes.map((c, idx) => (
                  <tr key={c.id}>
                    <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                      {idx + 1}
                    </td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>{c.name}</td>
                    <td style={{ textAlign: 'center', fontWeight: 600, color: '#1976ED' }}>
                      Grade {c.numericValue}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {c.sections.map(sec => (
                          <span
                            key={sec}
                            style={{
                              backgroundColor: '#EBF3FE',
                              color: '#1976ED',
                              padding: '4px 12px',
                              borderRadius: '4px',
                              fontSize: '13px',
                              fontWeight: 600
                            }}
                          >
                            Section {sec}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="alnoor-table">
              <thead>
                <tr>
                  <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                  <th style={{ width: '160px' }}>SUBJECT CODE</th>
                  <th>SUBJECT NAME</th>
                  <th style={{ textAlign: 'center' }}>COURSE TYPE</th>
                </tr>
              </thead>
              <tbody>
                {systemSettings.subjects.map((sub, idx) => (
                  <tr key={sub.id}>
                    <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                      {idx + 1}
                    </td>
                    <td style={{ fontWeight: 600, color: '#1976ED' }}>{sub.code}</td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>{sub.name}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="status-badge approved">
                        {sub.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </ManagementCard>
    </div>
  );
};
