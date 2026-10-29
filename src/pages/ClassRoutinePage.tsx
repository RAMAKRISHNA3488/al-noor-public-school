import React, { useState } from 'react';
import { CalendarDays, Clock, MapPin, User, BookOpen } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';

export const ClassRoutinePage: React.FC = () => {
  const { classRoutines } = useSchool();
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedGrade, setSelectedGrade] = useState<string>('Grade 10');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const filteredRoutines = classRoutines.filter(
    r => r.day === selectedDay && r.grade === selectedGrade
  );

  return (
    <div>
      <ManagementCard title="Class Routine & Timetable Management">
        {/* Day Selector Pills */}
        <div style={{ display: 'flex', gap: '8px', padding: '16px 28px', borderBottom: '1px solid #E9E9E9', flexWrap: 'wrap' }}>
          {days.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className="page-btn"
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                backgroundColor: selectedDay === day ? '#1976ED' : '#FFFFFF',
                color: selectedDay === day ? '#FFFFFF' : '#333333',
                borderColor: selectedDay === day ? '#1976ED' : '#E9E9E9',
                fontWeight: 600
              }}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="table-responsive">
          <table className="alnoor-table">
            <thead>
              <tr>
                <th style={{ width: '80px', textAlign: 'center' }}>PERIOD</th>
                <th style={{ width: '180px' }}>TIME SLOT</th>
                <th>SUBJECT</th>
                <th>TEACHER</th>
                <th style={{ width: '140px', textAlign: 'center' }}>ROOM</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoutines.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '36px', color: '#888888' }}>
                    No routine scheduled for {selectedGrade} on {selectedDay}
                  </td>
                </tr>
              ) : (
                filteredRoutines.map((routine, idx) => (
                  <tr key={routine.id}>
                    <td style={{ textAlign: 'center', fontWeight: 700, color: '#1976ED' }}>
                      Period {idx + 1}
                    </td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={16} color="#858C9B" />
                        <span>{routine.timeSlot}</span>
                      </div>
                    </td>
                    <td style={{ fontWeight: 600, fontSize: '16px', color: '#172A55' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <BookOpen size={18} color="#FFA52E" />
                        <span>{routine.subject}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#555555' }}>
                        <User size={16} />
                        <span>{routine.teacher}</span>
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="date-badge" style={{ backgroundColor: '#172A55' }}>
                        {routine.room}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </ManagementCard>
    </div>
  );
};
