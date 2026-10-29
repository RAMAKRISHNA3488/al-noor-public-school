import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Notice,
  Holiday,
  LeaveRecord,
  Complaint,
  RolePermission,
  ChessRecord,
  Student,
  Staff,
  ClassRoutine,
  SyllabusItem,
  HomeworkItem,
  Book,
  IssuedBook,
  VehicleRoute,
  DriverMapping,
  NotificationItem,
  AuditLogItem,
  SystemSetting,
  AuthUser
} from '../types';
import {
  initialNotices,
  initialHolidays,
  initialLeaves,
  initialComplaints,
  initialRoles,
  generateChessRecords,
  initialStudents,
  initialStaff,
  initialClassRoutines,
  initialSyllabus,
  initialHomework,
  initialBooks,
  initialIssuedBooks,
  initialVehicleRoutes,
  initialDriverMappings,
  initialSystemSettings,
  initialNotifications,
  initialAuditLogs
} from '../data/mockData';

interface SchoolContextType {
  // Application View Routing
  currentView: 'landing' | 'login' | 'dashboard';
  setCurrentView: (view: 'landing' | 'login' | 'dashboard') => void;
  currentUser: AuthUser | null;
  login: (role?: string) => void;
  logout: () => void;

  // Navigation & UI State
  activeModule: string;
  setActiveModule: (module: string) => void;
  sidebarExpanded: boolean;
  toggleSidebar: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Notices
  notices: Notice[];
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  updateNotice: (notice: Notice) => void;
  deleteNotice: (id: number) => void;

  // Holidays
  holidays: Holiday[];
  addHoliday: (holiday: Omit<Holiday, 'id'>) => void;
  updateHoliday: (holiday: Holiday) => void;
  deleteHoliday: (id: number) => void;

  // Leaves
  leaves: LeaveRecord[];
  applyLeave: (leave: Omit<LeaveRecord, 'id' | 'status'>) => void;
  updateLeaveStatus: (id: number, status: 'Approved' | 'Rejected' | 'Pending') => void;

  // Complaints
  complaints: Complaint[];
  makeComplaint: (complaint: Omit<Complaint, 'id' | 'status'>) => void;
  resolveComplaint: (id: number, notes?: string) => void;

  // Roles & Permissions
  roles: RolePermission[];
  updateRolePermissions: (roleId: number, permissions: RolePermission['permissions']) => void;

  // Chess Records
  chessRecords: ChessRecord[];
  addChessRecord: (record: Omit<ChessRecord, 'id'>) => void;
  deleteChessRecord: (id: number) => void;

  // Students
  students: Student[];
  addStudent: (student: Omit<Student, 'id'>) => void;
  updateStudent: (student: Student) => void;
  deleteStudent: (id: number) => void;

  // Staff
  staff: Staff[];
  addStaff: (staffMember: Omit<Staff, 'id'>) => void;

  // Academics, Library, Transport
  classRoutines: ClassRoutine[];
  syllabusList: SyllabusItem[];
  homeworkList: HomeworkItem[];
  books: Book[];
  issuedBooks: IssuedBook[];
  routes: VehicleRoute[];
  drivers: DriverMapping[];
  systemSettings: SystemSetting;

  // Notifications & Audit
  notifications: NotificationItem[];
  markNotificationRead: (id: number) => void;
  markAllNotificationsRead: () => void;
  auditLogs: AuditLogItem[];
  addAuditLog: (action: string, module: string, details: string) => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Application View & Authentication State
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'dashboard'>(() => {
    const saved = localStorage.getItem('alnoor_view');
    return (saved as any) || 'landing';
  });

  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    const saved = localStorage.getItem('alnoor_user');
    return saved ? JSON.parse(saved) : {
      id: 1,
      name: 'Admin User',
      role: 'Admin',
      username: 'admin',
      email: 'admin@alnoor.edu'
    };
  });

  // UI State
  const [activeModule, setActiveModule] = useState<string>('notice');
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Entities state with LocalStorage caching
  const [notices, setNotices] = useState<Notice[]>(() => {
    const saved = localStorage.getItem('alnoor_notices');
    return saved ? JSON.parse(saved) : initialNotices;
  });

  const [holidays, setHolidays] = useState<Holiday[]>(() => {
    const saved = localStorage.getItem('alnoor_holidays');
    return saved ? JSON.parse(saved) : initialHolidays;
  });

  const [leaves, setLeaves] = useState<LeaveRecord[]>(() => {
    const saved = localStorage.getItem('alnoor_leaves');
    return saved ? JSON.parse(saved) : initialLeaves;
  });

  const [complaints, setComplaints] = useState<Complaint[]>(() => {
    const saved = localStorage.getItem('alnoor_complaints');
    return saved ? JSON.parse(saved) : initialComplaints;
  });

  const [roles, setRoles] = useState<RolePermission[]>(() => {
    const saved = localStorage.getItem('alnoor_roles');
    return saved ? JSON.parse(saved) : initialRoles;
  });

  const [chessRecords, setChessRecords] = useState<ChessRecord[]>(() => {
    const saved = localStorage.getItem('alnoor_chess');
    return saved ? JSON.parse(saved) : generateChessRecords();
  });

  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem('alnoor_students');
    return saved ? JSON.parse(saved) : initialStudents;
  });

  const [staff, setStaff] = useState<Staff[]>(() => {
    const saved = localStorage.getItem('alnoor_staff');
    return saved ? JSON.parse(saved) : initialStaff;
  });

  const [classRoutines] = useState<ClassRoutine[]>(initialClassRoutines);
  const [syllabusList] = useState<SyllabusItem[]>(initialSyllabus);
  const [homeworkList] = useState<HomeworkItem[]>(initialHomework);
  const [books] = useState<Book[]>(initialBooks);
  const [issuedBooks] = useState<IssuedBook[]>(initialIssuedBooks);
  const [routes] = useState<VehicleRoute[]>(initialVehicleRoutes);
  const [drivers] = useState<DriverMapping[]>(initialDriverMappings);
  const [systemSettings] = useState<SystemSetting>(initialSystemSettings);

  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(initialAuditLogs);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('alnoor_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('alnoor_holidays', JSON.stringify(holidays));
  }, [holidays]);

  useEffect(() => {
    localStorage.setItem('alnoor_leaves', JSON.stringify(leaves));
  }, [leaves]);

  useEffect(() => {
    localStorage.setItem('alnoor_complaints', JSON.stringify(complaints));
  }, [complaints]);

  useEffect(() => {
    localStorage.setItem('alnoor_roles', JSON.stringify(roles));
  }, [roles]);

  useEffect(() => {
    localStorage.setItem('alnoor_students', JSON.stringify(students));
  }, [students]);

  const toggleSidebar = () => setSidebarExpanded(prev => !prev);

  const login = (role: string = 'Admin') => {
    let name = 'Admin User';
    let email = 'admin@alnoor.edu';
    let studentId: string | undefined;
    let grade: string | undefined;
    let department: string | undefined;
    let phone: string | undefined;

    switch (role) {
      case 'Teacher':
        name = 'Prof. Tariq Mahmood';
        email = 'tariq.m@alnoor.edu';
        department = 'Senior Mathematics Department';
        phone = '+91 91234 56780';
        break;
      case 'Student':
        name = 'Zaid bin Tariq';
        email = 'zaid.tariq@student.alnoor.edu';
        studentId = 'ANPS-2024-001';
        grade = 'Grade 10 - Section A';
        break;
      case 'Parent':
        name = 'Hamza Malik (Parent)';
        email = 'hamza.malik@parent.alnoor.edu';
        studentId = 'ANPS-2024-001 (Child: Zaid bin Tariq)';
        phone = '+91 98765 43210';
        break;
      case 'Accountant':
        name = 'Farhan Akhtar (Chief Bursar)';
        email = 'accounts@alnoor.edu';
        department = 'Fee & Treasury Department';
        phone = '+91 91234 56785';
        break;
      case 'Librarian':
        name = 'Mrs. Rizwana Parveen';
        email = 'rizwana.p@alnoor.edu';
        department = 'Central Media & Library';
        phone = '+91 91234 56783';
        break;
      default:
        name = 'Admin User';
        email = 'admin@alnoor.edu';
        department = 'School Management Executive';
        break;
    }

    const user: AuthUser = {
      id: Date.now(),
      name,
      role: role as any,
      username: role.toLowerCase(),
      email,
      studentId,
      grade,
      department,
      phone
    };
    setCurrentUser(user);
    localStorage.setItem('alnoor_user', JSON.stringify(user));
    setActiveModule('dashboard');
    setCurrentView('dashboard');
    localStorage.setItem('alnoor_view', 'dashboard');
    addAuditLog('USER_LOGIN', 'Authentication', `User logged in with role: ${role}`);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('alnoor_user');
    setCurrentView('landing');
    localStorage.setItem('alnoor_view', 'landing');
    addAuditLog('USER_LOGOUT', 'Authentication', 'User logged out');
  };

  const addAuditLog = (action: string, module: string, details: string) => {
    const newLog: AuditLogItem = {
      id: Date.now(),
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      user: currentUser?.name || 'Admin User',
      action,
      module,
      details,
      ipAddress: '127.0.0.1'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // CRUD Implementations
  const addNotice = (noticeData: Omit<Notice, 'id'>) => {
    const nextId = Math.max(...notices.map(n => n.id), 0) + 1;
    const newNotice: Notice = { id: nextId, ...noticeData };
    setNotices(prev => [newNotice, ...prev]);
    addAuditLog('CREATE_NOTICE', 'Notice Management', `Created notice: "${noticeData.notice}"`);
  };

  const updateNotice = (updatedNotice: Notice) => {
    setNotices(prev => prev.map(n => n.id === updatedNotice.id ? updatedNotice : n));
    addAuditLog('UPDATE_NOTICE', 'Notice Management', `Updated notice #${updatedNotice.id}`);
  };

  const deleteNotice = (id: number) => {
    setNotices(prev => prev.filter(n => n.id !== id));
    addAuditLog('DELETE_NOTICE', 'Notice Management', `Deleted notice #${id}`);
  };

  const addHoliday = (holidayData: Omit<Holiday, 'id'>) => {
    const nextId = Math.max(...holidays.map(h => h.id), 0) + 1;
    const newHoliday: Holiday = { id: nextId, ...holidayData };
    setHolidays(prev => [...prev, newHoliday].sort((a, b) => a.date.localeCompare(b.date)));
    addAuditLog('CREATE_HOLIDAY', 'Holiday Management', `Added holiday: "${holidayData.purpose}"`);
  };

  const updateHoliday = (updatedHoliday: Holiday) => {
    setHolidays(prev => prev.map(h => h.id === updatedHoliday.id ? updatedHoliday : h));
    addAuditLog('UPDATE_HOLIDAY', 'Holiday Management', `Updated holiday #${updatedHoliday.id}`);
  };

  const deleteHoliday = (id: number) => {
    setHolidays(prev => prev.filter(h => h.id !== id));
    addAuditLog('DELETE_HOLIDAY', 'Holiday Management', `Deleted holiday #${id}`);
  };

  const applyLeave = (leaveData: Omit<LeaveRecord, 'id' | 'status'>) => {
    const nextId = Math.max(...leaves.map(l => l.id), 0) + 1;
    const newLeave: LeaveRecord = { id: nextId, status: 'Pending', ...leaveData };
    setLeaves(prev => [newLeave, ...prev]);
    addAuditLog('APPLY_LEAVE', 'Leave Management', `Applied leave for: "${leaveData.applicantName || 'Staff'}"`);
  };

  const updateLeaveStatus = (id: number, status: 'Approved' | 'Rejected' | 'Pending') => {
    setLeaves(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    addAuditLog('UPDATE_LEAVE_STATUS', 'Leave Management', `Changed leave #${id} status to ${status}`);
  };

  const makeComplaint = (complaintData: Omit<Complaint, 'id' | 'status'>) => {
    const nextId = Math.max(...complaints.map(c => c.id), 0) + 1;
    const newComplaint: Complaint = { id: nextId, status: 'Pending', ...complaintData };
    setComplaints(prev => [newComplaint, ...prev]);
    addAuditLog('CREATE_COMPLAINT', 'Complaint Management', `Logged complaint: "${complaintData.topic}"`);
  };

  const resolveComplaint = (id: number, notes?: string) => {
    setComplaints(prev => prev.map(c => c.id === id ? { ...c, status: 'Resolved', resolutionNotes: notes || c.resolutionNotes } : c));
    addAuditLog('RESOLVE_COMPLAINT', 'Complaint Management', `Resolved complaint #${id}`);
  };

  const updateRolePermissions = (roleId: number, permissions: RolePermission['permissions']) => {
    setRoles(prev => prev.map(r => r.id === roleId ? { ...r, permissions } : r));
    addAuditLog('UPDATE_PERMISSIONS', 'Role Permission', `Updated permissions for role ID #${roleId}`);
  };

  const addChessRecord = (recordData: Omit<ChessRecord, 'id'>) => {
    const nextId = Math.max(...chessRecords.map(c => c.id), 0) + 1;
    const newRecord: ChessRecord = { id: nextId, ...recordData };
    setChessRecords(prev => [newRecord, ...prev]);
    addAuditLog('ADD_CHESS_PGN', 'Chess Management', `Added PGN record: "${recordData.title}"`);
  };

  const deleteChessRecord = (id: number) => {
    setChessRecords(prev => prev.filter(c => c.id !== id));
    addAuditLog('DELETE_CHESS_PGN', 'Chess Management', `Deleted chess record #${id}`);
  };

  const addStudent = (studentData: Omit<Student, 'id'>) => {
    const nextId = Math.max(...students.map(s => s.id), 0) + 1;
    const newStudent: Student = { id: nextId, ...studentData };
    setStudents(prev => [newStudent, ...prev]);
    addAuditLog('ADD_STUDENT', 'Student Zone', `Admitted student: ${studentData.name} (${studentData.admissionNo})`);
  };

  const updateStudent = (updatedStudent: Student) => {
    setStudents(prev => prev.map(s => s.id === updatedStudent.id ? updatedStudent : s));
    addAuditLog('UPDATE_STUDENT', 'Student Zone', `Updated student profile: ${updatedStudent.name}`);
  };

  const deleteStudent = (id: number) => {
    setStudents(prev => prev.filter(s => s.id !== id));
    addAuditLog('DELETE_STUDENT', 'Student Zone', `Removed student #${id}`);
  };

  const addStaff = (staffData: Omit<Staff, 'id'>) => {
    const nextId = Math.max(...staff.map(s => s.id), 0) + 1;
    const newStaff: Staff = { id: nextId, ...staffData };
    setStaff(prev => [newStaff, ...prev]);
    addAuditLog('ADD_STAFF', 'Staff Management', `Onboarded staff member: ${staffData.name}`);
  };

  const markNotificationRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <SchoolContext.Provider
      value={{
        currentView,
        setCurrentView,
        currentUser,
        login,
        logout,
        activeModule,
        setActiveModule,
        sidebarExpanded,
        toggleSidebar,
        mobileMenuOpen,
        setMobileMenuOpen,
        notices,
        addNotice,
        updateNotice,
        deleteNotice,
        holidays,
        addHoliday,
        updateHoliday,
        deleteHoliday,
        leaves,
        applyLeave,
        updateLeaveStatus,
        complaints,
        makeComplaint,
        resolveComplaint,
        roles,
        updateRolePermissions,
        chessRecords,
        addChessRecord,
        deleteChessRecord,
        students,
        addStudent,
        updateStudent,
        deleteStudent,
        staff,
        addStaff,
        classRoutines,
        syllabusList,
        homeworkList,
        books,
        issuedBooks,
        routes,
        drivers,
        systemSettings,
        notifications,
        markNotificationRead,
        markAllNotificationsRead,
        auditLogs,
        addAuditLog
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
