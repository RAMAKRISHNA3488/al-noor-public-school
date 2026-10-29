import React, { useState } from 'react';
import {
  Cpu,
  Trophy,
  Library,
  MonitorPlay,
  Bus,
  ShieldCheck,
  HeartPulse,
  Coffee,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react';
import { PublicNavbar } from '../../components/layout/PublicNavbar';
import { PublicFooter } from '../../components/layout/PublicFooter';
import { useSchool } from '../../context/SchoolContext';

export const FacilitiesPage: React.FC = () => {
  const { setCurrentView } = useSchool();
  const [filter, setFilter] = useState<'all' | 'stem' | 'sports' | 'campus'>('all');

  const allFacilities = [
    {
      id: 1,
      category: 'stem',
      title: 'Robotics & Artificial Intelligence Lab',
      desc: 'Equipped with 3D printers, Raspberry Pi & Arduino kits, AI vision modules, and robotic arm fabrication benches.',
      icon: <Cpu size={26} color="#1976ED" />,
      tag: 'STEM & Innovation',
      color: '#1976ED',
      bg: '#EBF3FE',
      specs: ['32 High-performance CAD Workstations', 'Dual MakerBot 3D Printers', 'IoT & Sensor Prototyping Kits']
    },
    {
      id: 2,
      category: 'sports',
      title: 'Olympic-Standard Sports Complex',
      desc: 'FIFA-approved artificial turf football pitch, synthetic badminton courts, 400m athletics track, and cricket nets.',
      icon: <Trophy size={26} color="#FFA52E" />,
      tag: 'Athletics & Physical Health',
      color: '#FFA52E',
      bg: '#FFF6E8',
      specs: ['FIFA-grade Grass Turf Pitch', 'Indoor 4-court Badminton Arena', 'Professional NIS-certified Coaches']
    },
    {
      id: 3,
      category: 'campus',
      title: 'Grand Central Digital Library',
      desc: 'Houses over 25,000 print titles, kindle reading carrels, JSTOR research database access, and quiet study alcoves.',
      icon: <Library size={26} color="#10B981" />,
      tag: 'Knowledge & Research',
      color: '#10B981',
      bg: '#ECFDF5',
      specs: ['25,000+ Physical Book Catalog', 'Digital Kiosks with 50,000+ E-books', 'Automated RFID Self-Checkout']
    },
    {
      id: 4,
      category: 'stem',
      title: 'Smart STEM Theatres & Labs',
      desc: 'Interactive 4K touch displays, virtual chemistry dissection software, and Physics demonstration stages.',
      icon: <MonitorPlay size={26} color="#6C5CE7" />,
      tag: 'Digital Learning',
      color: '#6C5CE7',
      bg: '#F3F0FF',
      specs: ['75-inch Interactive Multi-touch Panels', 'Advanced Optics & Mechanics Kits', 'Fume Hoods & Bio-safety Stations']
    },
    {
      id: 5,
      category: 'campus',
      title: 'GPS-Monitored Transport Fleet',
      desc: '24 modern school buses with real-time GPS telemetry, speed governors, female attendants, and live parent app tracking.',
      icon: <Bus size={26} color="#0891B2" />,
      tag: 'Safety & Transit',
      color: '#0891B2',
      bg: '#E0F2FE',
      specs: ['Live GPS Radar in Parent App', 'On-board CCTV Cameras', 'Certified Defensive Driving Drivers']
    },
    {
      id: 6,
      category: 'campus',
      title: '24/7 Infirmary & Campus Health Centre',
      desc: 'Full-time resident medical officer, trained nurses, first aid stations, and immediate tie-up with multi-specialty hospitals.',
      icon: <HeartPulse size={26} color="#FF525F" />,
      tag: 'Health & Wellness',
      color: '#FF525F',
      bg: '#FFEBEF',
      specs: ['Full-time Licensed Nurse & Doctor', 'Automated External Defibrillator (AED)', 'Annual Comprehensive Student Health Screenings']
    },
    {
      id: 7,
      category: 'campus',
      title: 'Hygienic Multi-Cuisine Cafeteria',
      desc: 'Nutritious chef-prepared meals following strict food-safety guidelines, organic produce, and pure RO drinking water.',
      icon: <Coffee size={26} color="#D97706" />,
      tag: 'Nutrition & Dining',
      color: '#D97706',
      bg: '#FEF3C7',
      specs: ['FSSAI 5-Star Clean Dining Certified', 'Dietitian-approved Weekly Menus', 'Touchless Payment & Token System']
    },
    {
      id: 8,
      category: 'campus',
      title: 'High-Security Safe Campus',
      desc: 'Complete 360-degree biometric access control, 180+ HD CCTV cameras, fire suppression, and round-the-clock security personnel.',
      icon: <ShieldCheck size={26} color="#2563EB" />,
      tag: 'Campus Security',
      color: '#2563EB',
      bg: '#DBEAFE',
      specs: ['180+ High-definition CCTV Cameras', 'Biometric & RFID Visitor Gates', 'Earthquake-Resistant Architecture']
    }
  ];

  const filtered = filter === 'all' ? allFacilities : allFacilities.filter(f => f.category === filter);

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <PublicNavbar activePage="facilities" />

      {/* Hero Header */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1B2238 0%, #151B2D 50%, #0E1322 100%)',
          color: '#FFFFFF',
          padding: '80px 32px 90px',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div
            className="floating-badge badge-glow-pulse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 165, 46, 0.15)',
              border: '1px solid rgba(255, 165, 46, 0.4)',
              color: '#FFA52E',
              padding: '6px 18px',
              borderRadius: '24px',
              fontSize: '12.5px',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            <Sparkles size={15} />
            <span>State-of-the-Art Infrastructure</span>
          </div>

          <h1 style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.25, marginBottom: '18px', letterSpacing: '-0.5px' }}>
            World-Class Facilities for <span style={{ color: '#FFA52E' }}>Tomorrow's Leaders</span>
          </h1>
          <p style={{ fontSize: '16.5px', color: '#C5C9D2', maxWidth: '760px', margin: '0 auto', lineHeight: 1.65 }}>
            A 12-acre lush green campus architected to support holistic intellectual growth, high-performance athletics, advanced robotics, and student safety.
          </p>
        </div>
      </section>

      {/* Facilities Showcase & Filter */}
      <section style={{ padding: '60px 32px 80px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}
          >
            {[
              { id: 'all', label: 'All Facilities' },
              { id: 'stem', label: 'STEM & Robotics' },
              { id: 'sports', label: 'Athletics & Sports' },
              { id: 'campus', label: 'Campus Life & Safety' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '24px',
                  fontSize: '13.5px',
                  fontWeight: filter === tab.id ? 600 : 500,
                  backgroundColor: filter === tab.id ? '#172A55' : '#FFFFFF',
                  color: filter === tab.id ? '#FFFFFF' : '#444444',
                  border: `1px solid ${filter === tab.id ? '#172A55' : '#E2E8F0'}`,
                  boxShadow: filter === tab.id ? '0 4px 12px rgba(23, 42, 85, 0.2)' : 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '26px' }}>
            {filtered.map(f => (
              <div key={f.id} className="facility-card-premium">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                  <div
                    className="facility-icon-wrap"
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '12px',
                      backgroundColor: f.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {f.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: f.color,
                      backgroundColor: f.bg,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {f.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', color: '#172A55', fontWeight: 700, marginBottom: '8px' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#666666', lineHeight: 1.55, marginBottom: '18px' }}>
                  {f.desc}
                </p>

                <div style={{ borderTop: '1px solid #F1F1F1', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {f.specs.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#555555' }}>
                      <CheckCircle2 size={13} color="#10B981" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div
            style={{
              marginTop: '50px',
              backgroundColor: '#1B2238',
              borderRadius: '16px',
              padding: '36px',
              color: '#FFFFFF',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FFA52E' }}>Experience the Campus in Person</h3>
              <p style={{ fontSize: '14px', color: '#C5C9D2', marginTop: '4px' }}>
                Join our admissions counselor for a guided tour of our laboratories, sports pavilion, and library.
              </p>
            </div>
            <button
              onClick={() => setCurrentView('contact')}
              className="btn-primary-pill"
              style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
            >
              <span>Book a Campus Tour</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
