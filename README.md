# AL NOOR PUBLIC SCHOOL — Complete School Management System (React.js Frontend)

## 1. Project Overview & Scope

The **AL NOOR Public School Management System** is a professional, high-fidelity school management administrative application built entirely with **React.js, TypeScript, and Vite**. 

This system faithfully replicates the exact visual design, color tokens, layout hierarchy, and styling of the AL NOOR Admin Panel reference designs while delivering rich, interactive frontend functionality across **all school operational modules**:

- Exact reproduction of the dark navy vertical sidebar (`#1B2238`), brand orange accents (`#FFA52E`), white content cards, two-tiered top header, and alternating table rows.
- **Frontend-First Architecture**: Powered by React.js with modular state management, local/browser persistence (LocalStorage / Mock Service Layer), real-time client-side search, multi-column sorting, scalable pagination, form validation, dynamic data generation, interactive modals, report exports, and an integrated interactive chessboard with PGN parsing.
- Comprehensive coverage of **all 18+ required school management modules** without omitting any section or visible control.

---

## 2. Design System & Visual Tokens (Source of Truth)

Strictly adheres to the reference screenshots with zero deviation to generic templates or unrelated styles:

### 2.1 Color Tokens

| Token / Element | Hex Code | Visual Application |
|---|---|---|
| **Sidebar Background** | `#1B2238` | Deep navy vertical sidebar |
| **Sidebar Active Item** | `#151B2D` | Darker navy active menu item with purple-blue vertical bar |
| **Sidebar Primary Text** | `#C5C9D2` | Light slate typography for navigation links |
| **Sidebar Section Headings** | `#858C9B` | Uppercase muted labels for menu categories |
| **Brand Orange** | `#FFA52E` / `#FFA62B`| Signature AL NOOR logo text accent |
| **Primary Blue Buttons** | `#1976ED` / `#1677F2`| Primary action buttons, date badges, status badges, view buttons |
| **Primary Blue Hover** | `#1265D8` | Interactive button hover state |
| **Secondary Orange Buttons** | `#FFAB40` | Secondary actions (e.g., Export Report, Pending badges) |
| **Destructive / Delete** | `#FF525F` | Red delete icon & confirmation dialog actions |
| **Edit Icon** | `#1976ED` | Primary blue table edit icon |
| **Main Page Background** | `#F4F6FD` / `#F4F6FC`| Pale blue-gray workspace background |
| **Content Card Background**| `#FFFFFF` | Crisp white cards with rounded corners and subtle drop shadows |
| **Table Alternate Row** | `#F1F1F1` | Soft alternating row background |
| **Table Border / Separator**| `#E9E9E9` | Light neutral borders and table separators |
| **Main Text** | `#111111` | Primary body typography and table text |
| **Section Titles** | `#172A55` | Dark navy page headings |
| **Header Separator** | `#EEEEEE` | Thin border separating top header rows |
| **Footer Background** | `#FFFFFF` | Bottom application footer |
| **Footer Links** | `#1976FF` | School name and attribution links |

### 2.2 Typography
- **Primary Font**: `Roboto, Arial, sans-serif` loaded via Google Fonts.
- **Brand Title**: ~28px, Bold, Orange (`#FFA52E`).
- **Main Page Headings**: ~22–24px, Medium (`#172A55`).
- **Sidebar Nav Links**: ~15–16px, Medium (`#C5C9D2`).
- **Sidebar Section Headings**: ~13–14px, Uppercase, Medium (`#858C9B`).
- **Top Header User Greeting**: ~20–22px, Medium.
- **Table Column Headings**: ~14–15px, Semibold, Uppercase (`#111111`), Letter-spacing: ~0.5–0.8px.
- **Table Data Cells**: ~15–16px, Regular, Row height: ~70–95px.
- **Buttons**: ~14–16px, Medium/Semibold, Pill-shaped (border-radius: ~28px) or rounded rectangle.

---

## 3. Application Layout & Component Structure

### 3.1 Three-Tier Dashboard Shell
1. **Left Sidebar (`~312px` desktop fixed width)**:
   - **Branding Header (~100–105px)**: AL NOOR school logo, bold orange brand name, and hamburger menu toggle.
   - **Navigation Tree**: Scrollable list with category headers, left-aligned icons, text labels, and right-aligned dropdown carets.
   - **Active Navigation Indicator**: Darker background (`#151B2D`) + thin purple-blue vertical accent on the left border.
   - **Responsive Behavior**: Collapsible on tablet; off-canvas drawer on mobile.
2. **Top Header**:
   - **Row 1 (Top Navigation)** (~82–84px high): White bar with user avatar, greeting "Hi, Admin", notifications bell with unread count badge, and profile menu.
   - **Row 2 (Admin User Strip)** (~44–46px high): Centered horizontal bar with blue circular user icon and bold "Admin User".
3. **Main Content Workspace**:
   - Background: `#F4F6FD` with ~24–36px horizontal padding.
   - **Content Card**: Rounded corners (12–14px radius), soft shadow, card title row (~80px) with right-aligned action buttons, separator, table controls, centered data table, and pagination footer.
4. **Footer** (~70–85px high):
   - White background with thin top border (`#EEEEEE`).
   - Left: `AL-Noor Public School` (blue link).
   - Right: `2026, made with ❤️ by Bigpage` (blue attribution link).

---

## 4. Complete Sidebar Navigation Hierarchy

All navigation items from the reference specification are preserved and fully linked:

```
├── Main Navigation
│   ├── Dashboard
│   └── Performance
├── SYSTEM SETUP
│   └── System Setup (Academic Years, Classes, Sections, Subjects, Class-Subject Allocation)
├── STUDENT MANAGEMENT
│   └── Student Zone (Directory, Admissions, Profiles, Documents)
├── STAFF & HR MANAGEMENT
│   ├── Staff Management (Staff Directory, Designations, Profiles)
│   ├── Holiday Management (Holidays, Exports, Policies)
│   ├── Leave Management (Leave Tracking & Approvals)
│   ├── Attendance Management (Staff Attendance)
│   └── Class Routine Management (Timetables & Schedules)
├── ACADEMIC MANAGEMENT
│   ├── Syllabus (Curriculum Distribution, Lessons)
│   ├── Homework (Assignments & Submissions)
│   └── Examinations (Schedules, Grades, Marks Entry)
├── LIBRARY MANAGEMENT
│   ├── Book Inventory (Catalog, ISBN, Copy Availability)
│   └── Issued Books (Circulation, Returns, Fines)
├── TRANSPORT & BUS MANAGEMENT
│   ├── Vehicle & Route (Vehicles, Routes, Stops)
│   └── Driver Mapping (Driver Allocations & Student Assignments)
└── GENERAL
    ├── Attendance (Student Daily Attendance)
    ├── Notice (Notice Board & Documents)
    ├── Holiday (School Holiday Calendar)
    ├── Leave (Leave Application & History)
    ├── Complaint (Feedback & Resolution)
    ├── Permission (Role Permission Management)
    └── Chess (Chess PGN Management & Interactive Board)
```

---

## 5. Detailed Module Specifications (All 18+ Modules)

### A. Notice Management (Screenshot 1 Match)
- **Title**: `Notice Management`
- **Actions**: `+ Add Notice` (Blue pill button)
- **Table Columns**: `#`, `DATE`, `NOTICE`, `DOCUMENT`, `ACTION`
- **Features**: Blue rounded date badges, "View Notice" blue rectangular action button opening real modal / document preview, blue edit icon, and red delete icon.

### B. Holiday Management (Screenshot 2 Match)
- **Title**: `Holiday Management`
- **Actions**: `Export Report` (Orange pill button with spreadsheet icon), `+ Add Holiday` (Blue pill button)
- **Table Columns**: `#`, `DATE`, `PURPOSE`, `ACTION`
- **Features**: Blue date badges, edit and delete actions, instant CSV/Excel export functionality.

### C. Leave Management (Screenshot 3 Match)
- **Title**: `Leave`
- **Actions**: `+ Apply Leave` (Blue pill button)
- **Table Columns**: `#`, `DATE`, `REASON`, `STATUS`
- **Features**: Plain text date formatting, dynamic status badges (Blue for Approved, Orange for Pending).

### D. Complaint Management (Screenshot 4 Match)
- **Title**: `Complaint Management`
- **Actions**: `+ Make Complaint` (Blue pill button)
- **Table Columns**: `#`, `DATE`, `TOPIC`, `COMPLAINT`, `STATUS`, `ACTION`
- **Features**: Status badges (Blue Resolved, Orange Pending), blue rectangular Resolve button, modal resolution workflows.

### E. Role Permission Management (Screenshot 5 Match)
- **Title**: `Role Permission Management`
- **Table Columns**: `#`, `ROLE`, `ACTION`
- **Roles**: `Admin` (black lock icon), `Accountant`, `Student`, `Teacher`, `Principal`, `Librarian`, `Transport Manager`, `HR Manager` (blue settings/list icon).

### F. Chess Management (Screenshot 6 Match)
- **Title**: `Chess Management`
- **Actions**: `+ Add PGN` (Blue pill button)
- **Table Columns**: `#`, `TITLE`, `ACTION`
- **Features**: Blue rectangular Play button, pagination supporting 1,000+ entries, interactive chessboard viewer.

### G. Extended Modules
- **Dashboard & Analytics**: Summary cards, Recharts visualizations, recent notices, upcoming holidays, and activity feeds.
- **System Setup**: Academic years, classes, sections, and subjects setup.
- **Student Zone**: Student directory, profiles, guardian information, document attachments.
- **Staff & HR Management**: Staff profiles, employee directory, and class routine schedules.
- **Academic Management**: Syllabus distribution, homework tracker, examinations.
- **Library Management**: Book inventory, issued books circulation, returns, and fines.
- **Transport & Bus Management**: Vehicle & routes, driver mapping.
- **Performance & Reports**: Academic, attendance, and fee collection reports with CSV export.
- **Notification Center & Audit Logs**: Notifications dropdown and simulated administrative audit logs.
