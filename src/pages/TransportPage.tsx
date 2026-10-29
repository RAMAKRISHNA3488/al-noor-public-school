import React, { useState } from 'react';
import { Bus, Navigation, Plus, Phone } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ManagementCard } from '../components/common/ManagementCard';

export const TransportPage: React.FC = () => {
  const { routes, drivers } = useSchool();
  const [activeTab, setActiveTab] = useState<'routes' | 'drivers'>('routes');

  return (
    <div>
      <ManagementCard
        title="Transport & Bus Management"
        actions={
          <button
            onClick={() => alert('New Fleet Registration modal will be launched.')}
            className="btn-primary-pill"
          >
            <Plus size={18} strokeWidth={2.5} />
            <span>Add Vehicle / Route</span>
          </button>
        }
      >
        <div style={{ display: 'flex', gap: '8px', padding: '16px 28px', borderBottom: '1px solid #E9E9E9' }}>
          <button
            onClick={() => setActiveTab('routes')}
            className="page-btn"
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              backgroundColor: activeTab === 'routes' ? '#1976ED' : '#FFFFFF',
              color: activeTab === 'routes' ? '#FFFFFF' : '#333333',
              borderColor: activeTab === 'routes' ? '#1976ED' : '#E9E9E9',
              fontWeight: 600
            }}
          >
            Vehicles & Routes ({routes.length})
          </button>
          <button
            onClick={() => setActiveTab('drivers')}
            className="page-btn"
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              backgroundColor: activeTab === 'drivers' ? '#1976ED' : '#FFFFFF',
              color: activeTab === 'drivers' ? '#FFFFFF' : '#333333',
              borderColor: activeTab === 'drivers' ? '#1976ED' : '#E9E9E9',
              fontWeight: 600
            }}
          >
            Driver Mapping ({drivers.length})
          </button>
        </div>

        {activeTab === 'routes' ? (
          <div className="table-responsive">
            <table className="alnoor-table">
              <thead>
                <tr>
                  <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                  <th style={{ width: '160px' }}>VEHICLE NO</th>
                  <th>MODEL / VEHICLE TYPE</th>
                  <th style={{ textAlign: 'center' }}>CAPACITY</th>
                  <th>ROUTE NAME</th>
                  <th>START POINT & DESTINATION</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>STOPS</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r, idx) => (
                  <tr key={r.id}>
                    <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                      {idx + 1}
                    </td>
                    <td style={{ fontWeight: 600, color: '#1976ED' }}>{r.vehicleNumber}</td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>{r.model}</td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>{r.capacity} seats</td>
                    <td style={{ color: '#172A55', fontWeight: 500 }}>{r.routeName}</td>
                    <td style={{ fontSize: '13px', color: '#555555' }}>
                      {r.startPoint} ➔ {r.endPoint}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="date-badge" style={{ backgroundColor: '#172A55' }}>
                        {r.stopsCount} stops
                      </span>
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
                  <th>DRIVER NAME</th>
                  <th>LICENSE NUMBER</th>
                  <th>PHONE CONTACT</th>
                  <th>ASSIGNED VEHICLE</th>
                  <th>ASSIGNED ROUTE</th>
                  <th style={{ textAlign: 'center' }}>PASSENGERS</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((d, idx) => (
                  <tr key={d.id}>
                    <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                      {idx + 1}
                    </td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>{d.driverName}</td>
                    <td style={{ fontWeight: 500, color: '#555555' }}>{d.licenseNumber}</td>
                    <td style={{ color: '#1976ED', fontWeight: 500 }}>{d.phone}</td>
                    <td style={{ fontWeight: 600, color: '#172A55' }}>{d.assignedVehicle}</td>
                    <td style={{ color: '#555555' }}>{d.assignedRoute}</td>
                    <td style={{ textAlign: 'center', fontWeight: 600, color: '#10B981' }}>
                      {d.studentsCount} students
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
