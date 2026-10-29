export interface Notice {
  id: number;
  date: string;
  notice: string;
  document: string;
  content?: string;
  audience?: string;
  expiryDate?: string;
}

export interface Holiday {
  id: number;
  date: string;
  purpose: string;
  type?: 'National' | 'School' | 'Religious' | 'Festival';
  academicYear?: string;
}

export interface LeaveRecord {
  id: number;
  date: string;
  reason: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  leaveType?: 'Casual' | 'Sick' | 'Annual' | 'Maternity';
  applicantName?: string;
  applicantRole?: string;
  startDate?: string;
  endDate?: string;
}

export interface Complaint {
  id: number;
  date: string;
  topic: string;
  complaint: string;
  status: 'Resolved' | 'Pending';
  reporter?: string;
  assignedTo?: string;
  resolutionNotes?: string;
}

export interface RolePermission {
  id: number;
  role: string;
  isProtected?: boolean; // Admin is protected
  permissions: {
    module: string;
    view: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
    approve?: boolean;
    export?: boolean;
  }[];
}

export interface ChessRecord {
  id: number;
  title: string;
  white?: string;
  black?: string;
  event?: string;
  date?: string;
  result?: string;
  pgn: string;
}

export interface Student {
  id: number;
  admissionNo: string;
  name: string;
  grade: string;
  section: string;
  guardianName: string;
  phone: string;
  dob: string;
  gender: 'Male' | 'Female' | 'Other';
  status: 'Active' | 'Inactive';
  attendanceRate: number;
  avatarUrl?: string;
}

export interface Staff {
  id: number;
  employeeId: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'Active' | 'On Leave' | 'Inactive';
}

export interface AttendanceRecord {
  id: number;
  studentId: number;
  studentName: string;
  admissionNo: string;
  grade: string;
  section: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
  remarks?: string;
}

export interface ClassRoutine {
  id: number;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  grade: string;
  section: string;
  timeSlot: string;
  subject: string;
  teacher: string;
  room: string;
}

export interface SyllabusItem {
  id: number;
  grade: string;
  subject: string;
  unit: string;
  title: string;
  completion: number; // 0-100%
  documentUrl?: string;
}

export interface HomeworkItem {
  id: number;
  grade: string;
  section: string;
  subject: string;
  title: string;
  assignedDate: string;
  dueDate: string;
  status: 'Active' | 'Closed';
  description: string;
}

export interface Book {
  id: number;
  isbn: string;
  title: string;
  author: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
  rackLocation: string;
}

export interface IssuedBook {
  id: number;
  bookTitle: string;
  borrowerName: string;
  borrowerType: 'Student' | 'Staff';
  borrowerId: string;
  issueDate: string;
  dueDate: string;
  status: 'Issued' | 'Returned' | 'Overdue';
  fine: number;
}

export interface VehicleRoute {
  id: number;
  vehicleNumber: string;
  model: string;
  capacity: number;
  routeName: string;
  startPoint: string;
  endPoint: string;
  stopsCount: number;
}

export interface DriverMapping {
  id: number;
  driverName: string;
  licenseNumber: string;
  phone: string;
  assignedVehicle: string;
  assignedRoute: string;
  studentsCount: number;
}

export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'notice' | 'leave' | 'complaint' | 'system';
}

export interface AuditLogItem {
  id: number;
  timestamp: string;
  user: string;
  action: string;
  module: string;
  details: string;
  ipAddress: string;
}

export interface SystemSetting {
  academicYears: { id: number; name: string; isCurrent: boolean; startDate: string; endDate: string }[];
  classes: { id: number; name: string; numericValue: number; sections: string[] }[];
  subjects: { id: number; code: string; name: string; type: 'Theory' | 'Practical' | 'Elective' }[];
}

export interface AuthUser {
  id: number;
  name: string;
  role: 'Admin' | 'Teacher' | 'Student' | 'Parent' | 'Accountant' | 'Librarian' | 'Principal';
  username: string;
  email: string;
  avatarUrl?: string;
  studentId?: string;
  grade?: string;
  department?: string;
  phone?: string;
}

