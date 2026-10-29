import React, { useState } from 'react';
import { BookOpen, Download, CheckCircle, FileText } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';

export const SyllabusPage: React.FC = () => {
  const { syllabusList } = useSchool();
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  const filtered = selectedSubject === 'All'
    ? syllabusList
    : syllabusList.filter(s => s.subject === selectedSubject);

  return (
    <div>
      <ManagementCard title="Academic Syllabus & Curriculum Tracker">
        <div style={{ display: 'flex', gap: '8px', padding: '16px 28px', borderBottom: '1px solid #E9E9E9' }}>
          {['All', 'Mathematics', 'Physics', 'Chemistry'].map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className="page-btn"
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                backgroundColor: selectedSubject === sub ? '#1976ED' : '#FFFFFF',
                color: selectedSubject === sub ? '#FFFFFF' : '#333333',
                borderColor: selectedSubject === sub ? '#1976ED' : '#E9E9E9',
                fontWeight: 600
              }}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="table-responsive">
          <table className="alnoor-table">
            <thead>
              <tr>
                <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                <th style={{ width: '160px' }}>SUBJECT</th>
                <th>UNIT / CHAPTER</th>
                <th>TOPIC DETAILS</th>
                <th style={{ width: '180px' }}>COMPLETION</th>
                <th style={{ width: '140px', textAlign: 'center' }}>SYLLABUS PDF</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, idx) => (
                <tr key={item.id}>
                  <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                    {idx + 1}
                  </td>
                  <td style={{ fontWeight: 600, color: '#172A55' }}>
                    {item.subject}
                  </td>
                  <td style={{ fontWeight: 600, color: '#1976ED' }}>
                    {item.unit}
                  </td>
                  <td style={{ color: '#333333', fontSize: '14px' }}>
                    {item.title}
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ flex: 1, height: '8px', backgroundColor: '#F1F1F1', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                          style={{
                            width: `${item.completion}%`,
                            height: '100%',
                            backgroundColor: item.completion === 100 ? '#10B981' : '#1976ED',
                            borderRadius: '4px'
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#172A55', minWidth: '35px' }}>
                        {item.completion}%
                      </span>
                    </div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      className="btn-blue-rect sm"
                      onClick={() => alert(`Downloading official syllabus guide: ${item.documentUrl}`)}
                      title="Download Curriculum Document"
                    >
                      <Download size={14} style={{ marginRight: '4px' }} /> PDF
                    </button>
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
