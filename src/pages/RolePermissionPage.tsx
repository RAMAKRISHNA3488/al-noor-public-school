import React, { useState, useMemo } from 'react';
import { Lock, Sliders } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { RolePermission } from '../types';
import { ManagementCard } from '../components/common/ManagementCard';
import { TableControls } from '../components/table/TableControls';
import { Pagination } from '../components/table/Pagination';
import { Modal } from '../components/common/Modal';

export const RolePermissionPage: React.FC = () => {
  const { roles, updateRolePermissions } = useSchool();

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal State for Permissions Matrix
  const [configuringRole, setConfiguringRole] = useState<RolePermission | null>(null);
  const [tempPermissions, setTempPermissions] = useState<RolePermission['permissions']>([]);

  // Filter & Search
  const filteredRoles = useMemo(() => {
    return roles.filter(r =>
      r.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [roles, searchTerm]);

  // Pagination Slice
  const paginatedRoles = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredRoles.slice(start, start + entriesPerPage);
  }, [filteredRoles, currentPage, entriesPerPage]);

  const handleOpenConfig = (role: RolePermission) => {
    if (role.isProtected) return;
    setConfiguringRole(role);
    setTempPermissions(JSON.parse(JSON.stringify(role.permissions)));
  };

  const handleTogglePerm = (moduleIndex: number, permKey: 'view' | 'create' | 'update' | 'delete' | 'approve' | 'export') => {
    const updated = [...tempPermissions];
    updated[moduleIndex] = {
      ...updated[moduleIndex],
      [permKey]: !updated[moduleIndex][permKey]
    };
    setTempPermissions(updated);
  };

  const handleSavePermissions = () => {
    if (configuringRole) {
      updateRolePermissions(configuringRole.id, tempPermissions);
      setConfiguringRole(null);
    }
  };

  return (
    <div>
      <ManagementCard title="Role Permission Management">
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
                <th style={{ width: '70px', textAlign: 'center' }}>#</th>
                <th>ROLE</th>
                <th style={{ width: '140px', textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRoles.length === 0 ? (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', padding: '30px', color: '#888888' }}>
                    No roles found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                paginatedRoles.map((item, index) => {
                  const rowNumber = (currentPage - 1) * entriesPerPage + index + 1;

                  return (
                    <tr key={item.id} style={{ height: '62px' }}>
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {rowNumber}
                      </td>
                      <td style={{ fontSize: '15px', fontWeight: 600, color: '#172A55' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>{item.role}</span>
                          {item.isProtected && (
                            <span
                              style={{
                                fontSize: '10px',
                                backgroundColor: '#1B2238',
                                color: '#FFFFFF',
                                padding: '2px 7px',
                                borderRadius: '8px',
                                fontWeight: 500
                              }}
                            >
                              System Protected
                            </span>
                          )}
                        </div>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {item.isProtected ? (
                          <div
                            className="action-icon-btn lock"
                            title="Protected Root Admin Role (Immutable)"
                            style={{ margin: '0 auto' }}
                          >
                            <Lock size={17} color="#111111" />
                          </div>
                        ) : (
                          <button
                            onClick={() => handleOpenConfig(item)}
                            className="action-icon-btn settings"
                            title={`Configure ${item.role} permissions`}
                            style={{ margin: '0 auto' }}
                          >
                            <Sliders size={17} />
                          </button>
                        )}
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
          totalEntries={filteredRoles.length}
          entriesPerPage={entriesPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </ManagementCard>

      {/* Role Permission Matrix Configuration Modal */}
      {configuringRole && (
        <Modal
          isOpen={!!configuringRole}
          onClose={() => setConfiguringRole(null)}
          title={`Configure Permissions — ${configuringRole.role}`}
          maxWidth="680px"
          footer={
            <>
              <button
                type="button"
                onClick={() => setConfiguringRole(null)}
                style={{
                  padding: '7px 15px',
                  borderRadius: '5px',
                  border: '1px solid #E9E9E9',
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  fontSize: '13px',
                  fontWeight: 500
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSavePermissions}
                className="btn-primary-pill"
                style={{ height: '36px', padding: '0 20px', fontSize: '13px' }}
              >
                Save Role Permissions
              </button>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ backgroundColor: '#F8FAFE', padding: '10px 14px', borderRadius: '6px', border: '1px solid #E9E9E9', fontSize: '12.5px', color: '#555555' }}>
              Assign granular access privileges for <strong>{configuringRole.role}</strong> across all school operations.
            </div>

            <div className="table-responsive" style={{ maxHeight: '340px', overflowY: 'auto' }}>
              <table className="alnoor-table" style={{ fontSize: '12.5px' }}>
                <thead>
                  <tr>
                    <th>Module</th>
                    <th style={{ textAlign: 'center' }}>View</th>
                    <th style={{ textAlign: 'center' }}>Create</th>
                    <th style={{ textAlign: 'center' }}>Update</th>
                    <th style={{ textAlign: 'center' }}>Delete</th>
                    <th style={{ textAlign: 'center' }}>Export</th>
                  </tr>
                </thead>
                <tbody>
                  {tempPermissions.map((perm, idx) => (
                    <tr key={perm.module}>
                      <td style={{ fontWeight: 600, color: '#172A55' }}>{perm.module}</td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={perm.view}
                          onChange={() => handleTogglePerm(idx, 'view')}
                          style={{ cursor: 'pointer', width: '15px', height: '15px', accentColor: '#1976ED' }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={perm.create}
                          onChange={() => handleTogglePerm(idx, 'create')}
                          style={{ cursor: 'pointer', width: '15px', height: '15px', accentColor: '#1976ED' }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={perm.update}
                          onChange={() => handleTogglePerm(idx, 'update')}
                          style={{ cursor: 'pointer', width: '15px', height: '15px', accentColor: '#1976ED' }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={perm.delete}
                          onChange={() => handleTogglePerm(idx, 'delete')}
                          style={{ cursor: 'pointer', width: '15px', height: '15px', accentColor: '#1976ED' }}
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={!!perm.export}
                          onChange={() => handleTogglePerm(idx, 'export')}
                          style={{ cursor: 'pointer', width: '15px', height: '15px', accentColor: '#1976ED' }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
