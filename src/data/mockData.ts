import {
  Notice,
  Holiday,
  LeaveRecord,
  Complaint,
  RolePermission,
  ChessRecord,
  Student,
  Staff,
  AttendanceRecord,
  ClassRoutine,
  SyllabusItem,
  HomeworkItem,
  Book,
  IssuedBook,
  VehicleRoute,
  DriverMapping,
  NotificationItem,
  AuditLogItem,
  SystemSetting
} from '../types';

export const initialNotices: Notice[] = [
  {
    id: 1,
    date: '2026-03-15',
    notice: 'Annual Sports Meet 2026 Registration Open for Grades 5 to 12',
    document: 'sports_meet_schedule.pdf',
    audience: 'School-wide',
    expiryDate: '2026-03-25',
    content: 'All students are invited to register for athletic tracks, football, basketball, and badminton events. Forms available in the sports room.'
  },
  {
    id: 2,
    date: '2026-03-10',
    notice: 'Final Examination Timetable and Revision Schedule for Session 2025-26',
    document: 'final_exam_timetable.pdf',
    audience: 'Students',
    expiryDate: '2026-04-10',
    content: 'Please find attached the official exam schedule. Practical exams commence from March 20th, followed by theory exams.'
  },
  {
    id: 3,
    date: '2026-03-05',
    notice: 'Parent-Teacher Meeting (PTM) for Grades 9 and 10 on Saturday',
    document: 'ptm_circular_march.pdf',
    audience: 'Parents',
    expiryDate: '2026-03-20',
    content: 'Parents are requested to meet the class coordinators between 9:00 AM and 1:00 PM to review third-quarter performance.'
  },
  {
    id: 4,
    date: '2026-02-28',
    notice: 'State Level Science and Robotics Exhibition 2026 Guidelines',
    document: 'science_exhibition_2026.pdf',
    audience: 'School-wide',
    expiryDate: '2026-03-30',
    content: 'Projects must be submitted to the Physics and Computer Science laboratories before March 18th for internal evaluation.'
  },
  {
    id: 5,
    date: '2026-02-20',
    notice: 'Summer Uniform Transition Circular & School Store Timings',
    document: 'uniform_guidelines.pdf',
    audience: 'School-wide',
    expiryDate: '2026-04-01',
    content: 'Students are to switch to summer dress uniforms starting April 1st. Store is open Monday through Friday 10 AM to 3 PM.'
  }
];

export const initialHolidays: Holiday[] = [
  {
    id: 1,
    date: '2026-03-25',
    purpose: 'Eid-ul-Fitr Celebration',
    type: 'Religious',
    academicYear: '2025-2026'
  },
  {
    id: 2,
    date: '2026-04-14',
    purpose: 'Dr. B.R. Ambedkar Jayanti',
    type: 'National',
    academicYear: '2025-2026'
  },
  {
    id: 3,
    date: '2026-05-01',
    purpose: 'International Workers Day / May Day',
    type: 'National',
    academicYear: '2025-2026'
  },
  {
    id: 4,
    date: '2026-06-01',
    purpose: 'Summer Vacation Break Commences',
    type: 'School',
    academicYear: '2025-2026'
  },
  {
    id: 5,
    date: '2026-08-15',
    purpose: 'Independence Day Observance & Flag Hoisting',
    type: 'National',
    academicYear: '2026-2027'
  },
  {
    id: 6,
    date: '2026-10-02',
    purpose: 'Gandhi Jayanti',
    type: 'National',
    academicYear: '2026-2027'
  }
];

export const initialLeaves: LeaveRecord[] = [
  {
    id: 1,
    date: '2026-03-12',
    reason: 'Medical treatment and hospital recovery',
    status: 'Approved',
    leaveType: 'Sick',
    applicantName: 'Tariq Mahmood (Senior Maths Teacher)',
    startDate: '2026-03-12',
    endDate: '2026-03-14'
  },
  {
    id: 2,
    date: '2026-03-18',
    reason: 'Family emergency travel to ancestral home',
    status: 'Pending',
    leaveType: 'Casual',
    applicantName: 'Fatima Zahra (Science Lab Assistant)',
    startDate: '2026-03-18',
    endDate: '2026-03-20'
  },
  {
    id: 3,
    date: '2026-02-10',
    reason: 'Attending elder sister wedding ceremony in Delhi',
    status: 'Approved',
    leaveType: 'Casual',
    applicantName: 'Zubair Ahmed (Physical Education Instructor)',
    startDate: '2026-02-10',
    endDate: '2026-02-13'
  },
  {
    id: 4,
    date: '2026-01-22',
    reason: 'Seasonal viral influenza & rest advised by physician',
    status: 'Approved',
    leaveType: 'Sick',
    applicantName: 'Ayesha Khan (English Department Head)',
    startDate: '2026-01-22',
    endDate: '2026-01-25'
  },
  {
    id: 5,
    date: '2026-03-21',
    reason: 'Attending higher education university symposium',
    status: 'Pending',
    leaveType: 'Annual',
    applicantName: 'Dr. Imran Qureshi (Physics Lecturer)',
    startDate: '2026-03-21',
    endDate: '2026-03-23'
  }
];

export const initialComplaints: Complaint[] = [
  {
    id: 1,
    date: '2026-03-11 10:30 AM',
    topic: 'School Bus Route #4 Delay',
    complaint: 'Bus #4 arrived 35 minutes late near Sector 7 bus stop, causing 14 students to miss morning prayer and first lecture.',
    status: 'Resolved',
    reporter: 'Hamza Malik (Parent of Class 8-B Student)',
    assignedTo: 'Transport Manager (Mr. Farooq)',
    resolutionNotes: 'Driver replacement was coordinated and route timing adjusted by 15 minutes to bypass peak highway intersection congestion.'
  },
  {
    id: 2,
    date: '2026-03-14 02:15 PM',
    topic: 'Grade 9 Chemistry Textbook Shortage in Library',
    complaint: 'Several grade 9 students reported all NCERT Chemistry textbook copies are issued and no reference books are available for upcoming unit tests.',
    status: 'Pending',
    reporter: 'Sanaullah (Teacher)',
    assignedTo: 'Chief Librarian (Mrs. Rizwana)',
    resolutionNotes: ''
  },
  {
    id: 3,
    date: '2026-03-02 11:45 AM',
    topic: 'Classroom 10-A Air Conditioning Failure',
    complaint: 'AC unit in Room 104 is producing rattling noise and failing to cool the classroom during afternoon sessions.',
    status: 'Resolved',
    reporter: 'Class 10-A Monitor',
    assignedTo: 'Maintenance Supervisor (Mr. Bashir)',
    resolutionNotes: 'Compressor belt replaced and filter serviced on March 3rd morning.'
  },
  {
    id: 4,
    date: '2026-03-16 09:20 AM',
    topic: 'Canteen Drinking Water Dispenser Temperature',
    complaint: 'The central water cooler filter in the main cafeteria appears blocked and needs cartridge servicing.',
    status: 'Pending',
    reporter: 'Health & Sanitation Committee',
    assignedTo: 'Estate Officer',
    resolutionNotes: ''
  }
];

export const initialRoles: RolePermission[] = [
  {
    id: 1,
    role: 'Admin',
    isProtected: true,
    permissions: [
      { module: 'Dashboard', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'System Setup', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'Student Zone', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'Staff Management', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'Notice Management', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'Holiday Management', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'Leave Management', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'Complaint Management', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'Chess Management', view: true, create: true, update: true, delete: true, approve: true, export: true }
    ]
  },
  {
    id: 2,
    role: 'Accountant',
    isProtected: false,
    permissions: [
      { module: 'Dashboard', view: true, create: false, update: false, delete: false },
      { module: 'Fee Management', view: true, create: true, update: true, delete: false, export: true },
      { module: 'Notice Management', view: true, create: false, update: false, delete: false },
      { module: 'Reports', view: true, create: true, update: false, delete: false, export: true }
    ]
  },
  {
    id: 3,
    role: 'Student',
    isProtected: false,
    permissions: [
      { module: 'Dashboard', view: true, create: false, update: false, delete: false },
      { module: 'Syllabus', view: true, create: false, update: false, delete: false },
      { module: 'Homework', view: true, create: true, update: false, delete: false },
      { module: 'Notice Management', view: true, create: false, update: false, delete: false },
      { module: 'Chess Management', view: true, create: false, update: false, delete: false }
    ]
  },
  {
    id: 4,
    role: 'Teacher',
    isProtected: false,
    permissions: [
      { module: 'Dashboard', view: true, create: false, update: false, delete: false },
      { module: 'Student Zone', view: true, create: false, update: true, delete: false },
      { module: 'Attendance', view: true, create: true, update: true, delete: false },
      { module: 'Homework', view: true, create: true, update: true, delete: true },
      { module: 'Notice Management', view: true, create: true, update: true, delete: false },
      { module: 'Leave Management', view: true, create: true, update: false, delete: false }
    ]
  },
  {
    id: 5,
    role: 'Principal',
    isProtected: false,
    permissions: [
      { module: 'Dashboard', view: true, create: true, update: true, delete: true, approve: true, export: true },
      { module: 'Student Zone', view: true, create: true, update: true, delete: true, approve: true },
      { module: 'Staff Management', view: true, create: true, update: true, delete: true, approve: true },
      { module: 'Leave Management', view: true, create: false, update: true, delete: false, approve: true }
    ]
  },
  {
    id: 6,
    role: 'Librarian',
    isProtected: false,
    permissions: [
      { module: 'Dashboard', view: true, create: false, update: false, delete: false },
      { module: 'Library Management', view: true, create: true, update: true, delete: true, export: true }
    ]
  },
  {
    id: 7,
    role: 'Transport Manager',
    isProtected: false,
    permissions: [
      { module: 'Dashboard', view: true, create: false, update: false, delete: false },
      { module: 'Transport & Bus', view: true, create: true, update: true, delete: true, export: true }
    ]
  },
  {
    id: 8,
    role: 'HR Manager',
    isProtected: false,
    permissions: [
      { module: 'Dashboard', view: true, create: false, update: false, delete: false },
      { module: 'Staff Management', view: true, create: true, update: true, delete: true, export: true },
      { module: 'Leave Management', view: true, create: true, update: true, delete: true, approve: true }
    ]
  }
];

// Generate 1,064 records for Chess Management as shown in reference Screenshot 6
export const generateChessRecords = (): ChessRecord[] => {
  const famousOpenings = [
    'Ruy Lopez: Morphy Defense, Columbus Closed',
    'Sicilian Defense: Najdorf Variation, 6.Bg5',
    'Queens Gambit Declined: Tartakower Defense',
    'Kings Indian Defense: Mar del Plata Classical',
    'French Defense: Winawer Variation, Poisoned Pawn',
    'Nimzo-Indian Defense: Rubinstein System',
    'Caro-Kann Defense: Advance Variation, Tal System',
    'Italian Game: Giuoco Pianissimo with 4.c3',
    'English Opening: Four Knights System',
    'Grunfeld Defense: Russian Variation with 7.Qb3',
    'Dutch Defense: Leningrad System',
    'Slav Defense: Chebanenko Variation'
  ];

  const grandmasters = [
    'Magnus Carlsen', 'Garry Kasparov', 'Hikaru Nakamura', 'Fabiano Caruana',
    'Viswanathan Anand', 'Ding Liren', 'Alireza Firouzja', 'Anish Giri',
    'Ian Nepomniachtchi', 'Levon Aronian', 'Bobby Fischer', 'Mikhail Tal'
  ];

  const samplePGNs = [
    `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 h6 15. Bh4 Re8 16. Qd2 Nh7 17. Bxe7 Qxe7 18. Rad1 Rad8 19. a3 Ndf8 20. d5! c5 21. Nxb5 Ng6 22. g3 Bc8 23. Kh2 Rf8 24. Bc2 Qd7 25. Nc3 Qxh3+ 26. Kg1 Bg4 27. Re3 f5 28. exf5 Rxf5 29. Bxf5 Bxf5 30. Nh2 Ng5 31. Qe2 e4 32. Nxe4 Nxe4 33. Rxe4 Bxe4 34. Qxe4 Ne5 35. Re1 Rf8 36. Re3 Rf6 37. f4 Nf7 38. g4 Qh4 39. Kg2 h5 40. Rh3 1-0`,
    `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Nc7 25. Qxc7 Rc8 26. Qxe7 Nc4 27. g6 hxg6 28. fxg6 Nxa3+ 29. bxa3 Rxa3 30. gxf7+ Kh7 31. f8=N+ Rxf8 32. Bd4 Rf6 33. Bxf6 Ra1+ 34. Bxa1 Qa2+ 35. Bb2 1-0`,
    `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 c6 6. e3 Be7 7. Bd3 Nbd7 8. Qc2 O-O 9. Nge2 Re8 10. O-O Nf8 11. f3 g6 12. Rad1 Ne6 13. Bh4 b5 14. Kh1 Bb7 15. a3 a5 16. Bf2 Rc8 17. e4 b4 18. axb4 axb4 19. Na4 c5 20. dxc5 Qa5 21. e5 Nd7 22. f4 Ndxc5 23. Nxc5 Nxc5 24. Bxc5 Bxc5 25. Qb1 Qb6 26. Ng3 Be3 27. Rde1 d4 28. Be4 Ba6 29. Bd3 Bb7 30. Ne4 Bxe4 31. Bxe4 Rc5 32. Qd3 Rec8 33. h3 Qd8 34. e6 f5 35. Bf3 Qd6 36. Qb3 Kg7 37. Ra1 R8c7 38. Qxb4 Qxe6 39. Ra8 Qd6 40. Qb8 Rc1 41. Bd1 Kh6 42. Qd8 Qxd8 43. Rxd8 Rb1 44. b3 Rcc1 0-1`
  ];

  const totalEntries = 1064;
  const records: ChessRecord[] = [];

  for (let i = 1; i <= totalEntries; i++) {
    const opening = famousOpenings[(i - 1) % famousOpenings.length];
    const whiteGM = grandmasters[(i * 3) % grandmasters.length];
    const blackGM = grandmasters[(i * 7) % grandmasters.length];
    const pgn = samplePGNs[i % samplePGNs.length];
    const year = 2020 + (i % 7);
    const month = String((i % 12) + 1).padStart(2, '0');
    const day = String((i % 28) + 1).padStart(2, '0');

    records.push({
      id: i,
      title: `${opening} — ${whiteGM} vs ${blackGM}`,
      white: whiteGM,
      black: blackGM,
      event: `World Championship Masterclass #${i}`,
      date: `${year}-${month}-${day}`,
      result: i % 3 === 0 ? '1/2-1/2' : (i % 2 === 0 ? '1-0' : '0-1'),
      pgn: pgn
    });
  }

  return records;
};

export const initialStudents: Student[] = [
  {
    id: 1,
    admissionNo: 'ANPS-2024-001',
    name: 'Zaid bin Tariq',
    grade: 'Grade 10',
    section: 'A',
    guardianName: 'Tariq Al-Mansoor',
    phone: '+91 98765 43210',
    dob: '2010-04-12',
    gender: 'Male',
    status: 'Active',
    attendanceRate: 96.5
  },
  {
    id: 2,
    admissionNo: 'ANPS-2024-002',
    name: 'Maryam Fatima',
    grade: 'Grade 10',
    section: 'B',
    guardianName: 'Dr. Rashid Khan',
    phone: '+91 98765 43211',
    dob: '2010-08-25',
    gender: 'Female',
    status: 'Active',
    attendanceRate: 98.2
  },
  {
    id: 3,
    admissionNo: 'ANPS-2024-003',
    name: 'Hamza Zubair',
    grade: 'Grade 9',
    section: 'A',
    guardianName: 'Zubair Sheikh',
    phone: '+91 98765 43212',
    dob: '2011-01-15',
    gender: 'Male',
    status: 'Active',
    attendanceRate: 92.4
  },
  {
    id: 4,
    admissionNo: 'ANPS-2024-004',
    name: 'Amina Siddiqui',
    grade: 'Grade 9',
    section: 'B',
    guardianName: 'Dr. Farooq Siddiqui',
    phone: '+91 98765 43213',
    dob: '2011-05-19',
    gender: 'Female',
    status: 'Active',
    attendanceRate: 95.0
  },
  {
    id: 5,
    admissionNo: 'ANPS-2024-005',
    name: 'Bilal Mustafa',
    grade: 'Grade 8',
    section: 'A',
    guardianName: 'Mustafa Kamal',
    phone: '+91 98765 43214',
    dob: '2012-09-08',
    gender: 'Male',
    status: 'Active',
    attendanceRate: 91.0
  }
];

export const initialStaff: Staff[] = [
  {
    id: 1,
    employeeId: 'EMP-101',
    name: 'Prof. Tariq Mahmood',
    designation: 'Senior Mathematics Teacher',
    department: 'Mathematics',
    email: 'tariq.m@alnoor.edu',
    phone: '+91 91234 56780',
    joinDate: '2018-06-15',
    status: 'Active'
  },
  {
    id: 2,
    employeeId: 'EMP-102',
    name: 'Mrs. Ayesha Khan',
    designation: 'HOD English Literature',
    department: 'Languages',
    email: 'ayesha.k@alnoor.edu',
    phone: '+91 91234 56781',
    joinDate: '2017-04-10',
    status: 'Active'
  },
  {
    id: 3,
    employeeId: 'EMP-103',
    name: 'Dr. Imran Qureshi',
    designation: 'Senior Physics Lecturer',
    department: 'Science',
    email: 'imran.q@alnoor.edu',
    phone: '+91 91234 56782',
    joinDate: '2019-07-01',
    status: 'Active'
  },
  {
    id: 4,
    employeeId: 'EMP-104',
    name: 'Mrs. Rizwana Parveen',
    designation: 'Chief Librarian',
    department: 'Library Services',
    email: 'rizwana.p@alnoor.edu',
    phone: '+91 91234 56783',
    joinDate: '2016-03-20',
    status: 'Active'
  },
  {
    id: 5,
    employeeId: 'EMP-105',
    name: 'Mr. Farooq Ahmed',
    designation: 'Fleet & Transport Manager',
    department: 'Transport',
    email: 'farooq.a@alnoor.edu',
    phone: '+91 91234 56784',
    joinDate: '2020-01-15',
    status: 'Active'
  }
];

export const initialClassRoutines: ClassRoutine[] = [
  { id: 1, day: 'Monday', grade: 'Grade 10', section: 'A', timeSlot: '08:30 - 09:15 AM', subject: 'Mathematics', teacher: 'Prof. Tariq Mahmood', room: 'Room 201' },
  { id: 2, day: 'Monday', grade: 'Grade 10', section: 'A', timeSlot: '09:15 - 10:00 AM', subject: 'Physics', teacher: 'Dr. Imran Qureshi', room: 'Physics Lab' },
  { id: 3, day: 'Monday', grade: 'Grade 10', section: 'A', timeSlot: '10:15 - 11:00 AM', subject: 'English', teacher: 'Mrs. Ayesha Khan', room: 'Room 201' },
  { id: 4, day: 'Monday', grade: 'Grade 10', section: 'A', timeSlot: '11:00 - 11:45 AM', subject: 'Chemistry', teacher: 'Dr. Sameera', room: 'Chem Lab' },
  { id: 5, day: 'Tuesday', grade: 'Grade 10', section: 'A', timeSlot: '08:30 - 09:15 AM', subject: 'Biology', teacher: 'Mrs. Nida', room: 'Bio Lab' },
  { id: 6, day: 'Tuesday', grade: 'Grade 10', section: 'A', timeSlot: '09:15 - 10:00 AM', subject: 'Mathematics', teacher: 'Prof. Tariq Mahmood', room: 'Room 201' }
];

export const initialSyllabus: SyllabusItem[] = [
  { id: 1, grade: 'Grade 10', subject: 'Mathematics', unit: 'Unit 1: Real Numbers & Polynomials', title: 'Fundamental Theorem of Arithmetic & Zeros of Polynomials', completion: 100, documentUrl: 'syllabus_math_unit1.pdf' },
  { id: 2, grade: 'Grade 10', subject: 'Mathematics', unit: 'Unit 2: Quadratic Equations', title: 'Standard Form, Factorisation & Discriminant Formula', completion: 85, documentUrl: 'syllabus_math_unit2.pdf' },
  { id: 3, grade: 'Grade 10', subject: 'Physics', unit: 'Unit 1: Light - Reflection and Refraction', title: 'Spherical Mirrors, Lens Formula & Magnification', completion: 90, documentUrl: 'syllabus_phy_unit1.pdf' },
  { id: 4, grade: 'Grade 10', subject: 'Chemistry', unit: 'Unit 1: Chemical Reactions & Equations', title: 'Balancing Equations, Oxidation & Reduction', completion: 100, documentUrl: 'syllabus_chem_unit1.pdf' }
];

export const initialHomework: HomeworkItem[] = [
  { id: 1, grade: 'Grade 10', section: 'A', subject: 'Mathematics', title: 'Exercise 4.2 Quadratic Equations Word Problems', assignedDate: '2026-03-14', dueDate: '2026-03-18', status: 'Active', description: 'Complete problems 1 through 10 in homework register.' },
  { id: 2, grade: 'Grade 10', section: 'A', subject: 'Physics', title: 'Numerical Problems on Convex Lens Magnification', assignedDate: '2026-03-13', dueDate: '2026-03-17', status: 'Active', description: 'Draw ray diagrams for object positions between F and 2F.' },
  { id: 3, grade: 'Grade 9', section: 'B', subject: 'English', title: 'Essay Writing: The Role of Technology in Modern Education', assignedDate: '2026-03-10', dueDate: '2026-03-15', status: 'Closed', description: '300-400 words argumentative essay.' }
];

export const initialBooks: Book[] = [
  { id: 1, isbn: '978-0-19-855678-1', title: 'Higher Algebra & Coordinate Geometry', author: 'Hall & Knight', category: 'Mathematics', totalCopies: 25, availableCopies: 14, rackLocation: 'Shelf M-3' },
  { id: 2, isbn: '978-0-13-110362-7', title: 'Concepts of Physics (Vol 1 & 2)', author: 'Dr. H.C. Verma', category: 'Physics', totalCopies: 40, availableCopies: 28, rackLocation: 'Shelf P-1' },
  { id: 3, isbn: '978-0-07-063673-9', title: 'Advanced Inorganic Chemistry', author: 'Cotton & Wilkinson', category: 'Chemistry', totalCopies: 15, availableCopies: 8, rackLocation: 'Shelf C-2' },
  { id: 4, isbn: '978-0-19-953556-9', title: 'Oxford Advanced Learner Dictionary (10th Ed)', author: 'A.S. Hornby', category: 'Reference', totalCopies: 30, availableCopies: 24, rackLocation: 'Ref Desk' }
];

export const initialIssuedBooks: IssuedBook[] = [
  { id: 1, bookTitle: 'Concepts of Physics (Vol 1)', borrowerName: 'Zaid bin Tariq', borrowerType: 'Student', borrowerId: 'ANPS-2024-001', issueDate: '2026-03-01', dueDate: '2026-03-15', status: 'Issued', fine: 0 },
  { id: 2, bookTitle: 'Higher Algebra & Coordinate Geometry', borrowerName: 'Maryam Fatima', borrowerType: 'Student', borrowerId: 'ANPS-2024-002', issueDate: '2026-02-20', dueDate: '2026-03-06', status: 'Overdue', fine: 45 },
  { id: 3, bookTitle: 'Advanced Inorganic Chemistry', borrowerName: 'Prof. Tariq Mahmood', borrowerType: 'Staff', borrowerId: 'EMP-101', issueDate: '2026-02-15', dueDate: '2026-03-15', status: 'Returned', fine: 0 }
];

export const initialVehicleRoutes: VehicleRoute[] = [
  { id: 1, vehicleNumber: 'DL-01-SB-4521', model: 'Tata Starbus 40-Seater', capacity: 40, routeName: 'Route 1: Central Town via Model Colony', startPoint: 'Al-Noor Campus', endPoint: 'Civil Lines Metro Station', stopsCount: 8 },
  { id: 2, vehicleNumber: 'DL-01-SB-4522', model: 'Ashok Leyland Sunshine 32-Seater', capacity: 32, routeName: 'Route 2: Green Park & Sector 7 Link', startPoint: 'Al-Noor Campus', endPoint: 'Green Park Market', stopsCount: 6 },
  { id: 3, vehicleNumber: 'DL-01-SB-4523', model: 'Force Traveller 26-Seater', capacity: 26, routeName: 'Route 3: University Road & Noor Heights', startPoint: 'Al-Noor Campus', endPoint: 'Noor Heights Complex', stopsCount: 7 }
];

export const initialDriverMappings: DriverMapping[] = [
  { id: 1, driverName: 'Muhammad Aslam', licenseNumber: 'DL-IND-99201482', phone: '+91 94123 00111', assignedVehicle: 'DL-01-SB-4521', assignedRoute: 'Route 1: Central Town', studentsCount: 38 },
  { id: 2, driverName: 'Gurpreet Singh', licenseNumber: 'DL-IND-88129034', phone: '+91 94123 00222', assignedVehicle: 'DL-01-SB-4522', assignedRoute: 'Route 2: Green Park & Sector 7', studentsCount: 30 },
  { id: 3, driverName: 'Abdul Kareem', licenseNumber: 'DL-IND-77341902', phone: '+91 94123 00333', assignedVehicle: 'DL-01-SB-4523', assignedRoute: 'Route 3: University Road', studentsCount: 24 }
];

export const initialNotifications: NotificationItem[] = [
  { id: 1, title: 'Annual Sports Meet Notice Published', message: 'Sports schedule for grades 5-12 has been released on the board.', time: '25 mins ago', read: false, type: 'notice' },
  { id: 2, title: 'Leave Application Submitted', message: 'Prof. Tariq Mahmood applied for 3 days medical leave.', time: '1 hour ago', read: false, type: 'leave' },
  { id: 3, title: 'Bus Route Complaint Logged', message: 'Parent of Class 8-B registered a timing delay notice.', time: '3 hours ago', read: true, type: 'complaint' },
  { id: 4, title: 'System Security Audit Completed', message: 'Daily automated backup and role checks completed successfully.', time: 'Yesterday', read: true, type: 'system' }
];

export const initialAuditLogs: AuditLogItem[] = [
  { id: 1, timestamp: '2026-03-15 09:30:14', user: 'Admin (SuperAdmin)', action: 'PUBLISH_NOTICE', module: 'Notice Management', details: 'Published Annual Sports Meet Notice #1', ipAddress: '192.168.1.10' },
  { id: 2, timestamp: '2026-03-14 16:45:20', user: 'Admin (SuperAdmin)', action: 'RESOLVE_COMPLAINT', module: 'Complaint Management', details: 'Marked Complaint #1 (Bus Route) as Resolved', ipAddress: '192.168.1.10' },
  { id: 3, timestamp: '2026-03-14 11:20:05', user: 'Admin (SuperAdmin)', action: 'UPDATE_ROLE_PERMS', module: 'Role Permission', details: 'Updated module permissions for Teacher role', ipAddress: '192.168.1.10' },
  { id: 4, timestamp: '2026-03-12 14:10:33', user: 'Admin (SuperAdmin)', action: 'APPROVE_LEAVE', module: 'Leave Management', details: 'Approved Sick Leave application for Prof. Tariq Mahmood', ipAddress: '192.168.1.10' }
];

export const initialSystemSettings: SystemSetting = {
  academicYears: [
    { id: 1, name: '2025-2026', isCurrent: true, startDate: '2025-04-01', endDate: '2026-03-31' },
    { id: 2, name: '2026-2027', isCurrent: false, startDate: '2026-04-01', endDate: '2027-03-31' }
  ],
  classes: [
    { id: 1, name: 'Grade 8', numericValue: 8, sections: ['A', 'B', 'C'] },
    { id: 2, name: 'Grade 9', numericValue: 9, sections: ['A', 'B'] },
    { id: 3, name: 'Grade 10', numericValue: 10, sections: ['A', 'B'] },
    { id: 4, name: 'Grade 11', numericValue: 11, sections: ['Science', 'Commerce', 'Humanities'] },
    { id: 5, name: 'Grade 12', numericValue: 12, sections: ['Science', 'Commerce', 'Humanities'] }
  ],
  subjects: [
    { id: 1, code: 'MATH-101', name: 'Mathematics', type: 'Theory' },
    { id: 2, code: 'PHY-102', name: 'Physics', type: 'Theory' },
    { id: 3, code: 'CHEM-103', name: 'Chemistry', type: 'Theory' },
    { id: 4, code: 'BIO-104', name: 'Biology', type: 'Theory' },
    { id: 5, code: 'ENG-105', name: 'English Literature', type: 'Theory' },
    { id: 6, code: 'CS-106', name: 'Computer Science', type: 'Practical' }
  ]
};
