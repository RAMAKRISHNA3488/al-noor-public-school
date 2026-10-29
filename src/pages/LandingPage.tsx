import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Crown,
  Cpu,
  Trophy,
  Library,
  MonitorPlay,
  Sparkles
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const LandingPage: React.FC = () => {
  const { setCurrentView, notices, holidays } = useSchool();

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', fontFamily: "'Roboto', sans-serif" }}>
      {/* 1. Top Public Navigation Bar with Glassmorphic Blur */}
      <nav
        className="glass-nav"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          padding: '0 32px',
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={() => setCurrentView('landing')}>
          <img src="/logo.svg" alt="AL NOOR Logo" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
          <div>
            <div style={{ color: '#FFA52E', fontSize: '21px', fontWeight: 700, letterSpacing: '0.8px', lineHeight: 1.1 }}>
              AL NOOR
            </div>
            <div style={{ color: '#1B2238', fontSize: '10.5px', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
              PUBLIC SCHOOL
            </div>
          </div>
        </div>

        {/* Center Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', fontSize: '14px', fontWeight: 500, color: '#333333' }}>
          <a href="#about" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#1976ED'} onMouseLeave={e => e.currentTarget.style.color = '#333333'}>About Us</a>
          <a href="#academics" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#1976ED'} onMouseLeave={e => e.currentTarget.style.color = '#333333'}>Academics</a>
          <a href="#facilities" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#1976ED'} onMouseLeave={e => e.currentTarget.style.color = '#333333'}>Facilities</a>
          <a href="#notices" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#1976ED'} onMouseLeave={e => e.currentTarget.style.color = '#333333'}>Notices</a>
          <a href="#contact" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#1976ED'} onMouseLeave={e => e.currentTarget.style.color = '#333333'}>Contact</a>
        </div>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setCurrentView('login')}
            className="btn-primary-pill"
            style={{ height: '40px', padding: '0 20px', fontSize: '13.5px' }}
          >
            <span>Portal Login</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1B2238 0%, #151B2D 50%, #0E1322 100%)',
          color: '#FFFFFF',
          padding: '90px 32px 100px',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Decorative Background Rings */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 165, 46, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '10%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(25, 118, 237, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Badge */}
          <div
            className="floating-badge badge-glow-pulse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 165, 46, 0.15)',
              border: '1px solid rgba(255, 165, 46, 0.4)',
              color: '#FFA52E',
              padding: '7px 20px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '26px'
            }}
          >
            <Sparkles size={16} />
            <span>Admissions Open for Academic Session 2026–2027</span>
          </div>

          <h1
            style={{
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '20px',
              letterSpacing: '-0.5px'
            }}
          >
            Nurturing Minds, Inspiring Character,<br />
            <span style={{ color: '#FFA52E' }}>Leading the Future.</span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: '#C5C9D2',
              maxWidth: '720px',
              margin: '0 auto 36px',
              lineHeight: 1.6
            }}
          >
            AL NOOR Public School provides holistic education combining academic distinction, moral integrity, modern STEM facilities, and values-driven character building for students from Grade 1 to 12.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setCurrentView('login')}
              className="btn-primary-pill"
              style={{
                height: '46px',
                padding: '0 28px',
                fontSize: '15px',
                backgroundColor: '#1976ED'
              }}
            >
              <span>Access Admin & Student Portal</span>
              <ArrowRight size={17} />
            </button>
            <a
              href="#about"
              className="btn-secondary-pill"
              style={{
                height: '46px',
                padding: '0 26px',
                fontSize: '15px'
              }}
            >
              <span>Explore School Profile</span>
            </a>
          </div>

          {/* 4 Feature Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginTop: '65px',
              textAlign: 'left'
            }}
          >
            {[
              { title: '100% Board Pass Rate', desc: 'Consistent top CBSE rankings', icon: <GraduationCap size={22} color="#FFA52E" /> },
              { title: 'Smart STEM Classrooms', desc: 'Robotics & computer labs', icon: <Compass size={22} color="#1976ED" /> },
              { title: 'Experienced Faculty', desc: '86+ dedicated mentors', icon: <Users size={22} color="#10B981" /> },
              { title: 'Secure Transport Fleet', desc: 'GPS-enabled campus buses', icon: <ShieldCheck size={22} color="#6C5CE7" /> }
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '20px',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <div style={{ marginBottom: '10px' }}>{f.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF' }}>{f.title}</div>
                <div style={{ fontSize: '12.5px', color: '#858C9B', marginTop: '3px' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About & Leadership Section */}
      <section id="about" style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Welcome to AL NOOR Public School
            </div>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 700, lineHeight: 1.3, marginBottom: '18px' }}>
              A Legacy of Academic Excellence and Value-Based Education
            </h2>
            <p style={{ fontSize: '14.5px', color: '#555555', lineHeight: 1.7, marginBottom: '16px' }}>
              Founded with the vision to ignite the light (Noor) of knowledge and ethical wisdom, AL NOOR Public School offers a vibrant learning ecosystem. Our state-of-the-art campus fosters intellectual curiosity, critical thinking, and empathetic leadership.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              {[
                'Comprehensive CBSE Curriculum from Primary to Senior Secondary',
                'Comprehensive Chess, Athletic, & Sports Mentorship programs',
                'Fully digital ERP School Management System with transparent parent portals',
                'Scholarship programs for merit and socio-economic support'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#222222' }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Principal Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 8px 30px rgba(23, 42, 85, 0.08)',
              border: '1px solid #ECEEF6'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200"
                alt="Principal"
                style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h4 style={{ fontSize: '17px', color: '#172A55', fontWeight: 700 }}>Dr. A. K. Rahman</h4>
                <p style={{ fontSize: '12.5px', color: '#888888' }}>Principal & Academic Director</p>
              </div>
            </div>
            <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.6, fontStyle: 'italic', borderLeft: '3px solid #FFA52E', paddingLeft: '14px', marginBottom: '16px' }}>
              "At AL NOOR, education transcends textbooks. We equip our students to navigate the complexities of the 21st century with courage, compassion, and uncompromising knowledge."
            </p>
            <span className="date-badge" style={{ backgroundColor: '#172A55', fontSize: '11px' }}>Principal's Desk</span>
          </div>
        </div>
      </section>

      {/* 4. Academics & Programs */}
      <section id="academics" style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Academic Wings
          </div>
          <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 700, marginBottom: '40px' }}>
            Structured Learning for Every Growth Stage
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', textAlign: 'left' }}>
            {[
              { wing: 'Primary Wing', grades: 'Grades 1 – 5', desc: 'Foundational literacy, numeracy, creative expression, and environmental studies.', color: '#1976ED' },
              { wing: 'Middle Wing', grades: 'Grades 6 – 8', desc: 'Analytical science labs, introductory computer coding, languages, and social science.', color: '#10B981' },
              { wing: 'Secondary Wing', grades: 'Grades 9 – 10', desc: 'Rigorous CBSE board foundation, conceptual mathematics, robotics, and leadership skills.', color: '#FFA52E' },
              { wing: 'Senior Secondary', grades: 'Grades 11 – 12', desc: 'Specialized streams: Science (PCM/PCB), Commerce, and Humanities with competitive exam guidance.', color: '#6C5CE7' }
            ].map((w, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFE',
                  border: '1px solid #E9E9E9',
                  borderRadius: '12px',
                  padding: '24px',
                  borderTop: `4px solid ${w.color}`,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: w.color, textTransform: 'uppercase' }}>{w.grades}</span>
                <h3 style={{ fontSize: '18px', color: '#172A55', fontWeight: 700, margin: '6px 0 10px' }}>{w.wing}</h3>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.5 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. World-Class Facilities */}
      <section id="facilities" style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#FFA52E', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Campus Infrastructure
          </div>
          <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 700, marginBottom: '14px' }}>
            World-Class Facilities for 21st Century Excellence
          </h2>
          <p style={{ fontSize: '14.5px', color: '#666666', maxWidth: '680px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Designed to empower students beyond textbooks with immersive hands-on laboratories, sports pavilions, and state-of-the-art libraries.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', textAlign: 'left' }}>
            {[
              {
                title: 'Robotics & AI Innovation Lab',
                desc: '3D printers, IoT sensors, high-spec workstations, and coding masterclasses.',
                icon: <Cpu size={24} color="#1976ED" />,
                bg: '#EBF3FE'
              },
              {
                title: 'Olympic Sports Complex',
                desc: 'FIFA-standard turf, indoor badminton courts, running track, and professional athletics coaches.',
                icon: <Trophy size={24} color="#FFA52E" />,
                bg: '#FFF6E8'
              },
              {
                title: 'Grand Digital Library',
                desc: '25,000+ print volumes, Kindle e-readers, JSTOR research subscriptions, and quiet reading alcoves.',
                icon: <Library size={24} color="#10B981" />,
                bg: '#ECFDF5'
              },
              {
                title: 'Smart STEM Theatres',
                desc: 'Interactive 4K touch displays, VR simulation pods, and collaborative group workstations.',
                icon: <MonitorPlay size={24} color="#6C5CE7" />,
                bg: '#F3F0FF'
              }
            ].map((facility, idx) => (
              <div key={idx} className="facility-card-premium">
                <div
                  className="facility-icon-wrap"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: facility.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  {facility.icon}
                </div>
                <h3 style={{ fontSize: '17px', color: '#172A55', fontWeight: 700, marginBottom: '8px' }}>
                  {facility.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.55 }}>
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Live Notices & Announcements Preview */}
      <section id="notices" style={{ padding: '70px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <div style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>Official Circulars</div>
              <h2 style={{ fontSize: '28px', color: '#172A55', fontWeight: 700 }}>Live School Notices & Calendar</h2>
            </div>
            <button
              onClick={() => setCurrentView('login')}
              className="btn-primary-pill"
              style={{ height: '38px', fontSize: '13px' }}
            >
              <span>View All on Portal</span>
              <ExternalLink size={14} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {notices.slice(0, 3).map(n => (
              <div
                key={n.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '22px',
                  boxShadow: '0 3px 12px rgba(23, 42, 85, 0.05)',
                  border: '1px solid #ECEEF6',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="date-badge" style={{ fontSize: '11.5px', padding: '3px 10px' }}>{n.date}</span>
                    <span style={{ fontSize: '11.5px', color: '#888888' }}>{n.audience || 'School-wide'}</span>
                  </div>
                  <h4 style={{ fontSize: '15px', color: '#172A55', fontWeight: 600, lineHeight: 1.4, marginBottom: '8px' }}>
                    {n.notice}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#666666', lineHeight: 1.5 }}>
                    {n.content?.substring(0, 100)}...
                  </p>
                </div>
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11.5px', color: '#1976ED', fontWeight: 500 }}>Doc: {n.document}</span>
                  <button
                    onClick={() => setCurrentView('login')}
                    style={{ fontSize: '12.5px', color: '#1976ED', fontWeight: 600 }}
                  >
                    Read Details ➔
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact & Public Footer */}
      <footer id="contact" style={{ backgroundColor: '#1B2238', color: '#C5C9D2', padding: '60px 32px 30px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img src="/logo.svg" alt="AL NOOR Logo" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <span style={{ color: '#FFA52E', fontSize: '20px', fontWeight: 700 }}>AL NOOR PUBLIC SCHOOL</span>
            </div>
            <p style={{ fontSize: '13px', color: '#858C9B', lineHeight: 1.6 }}>
              Dedicated to academic achievement, moral values, and student empowerment since 2005.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600, marginBottom: '14px' }}>Campus Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#FFA52E" />
                <span>Al-Noor Campus Road, Sector 12, New Delhi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#1976ED" />
                <span>+91 11 2345 6789 / +91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#10B981" />
                <span>admissions@alnoor.edu / info@alnoor.edu</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600, marginBottom: '14px' }}>Quick Portals</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <button onClick={() => setCurrentView('login')} style={{ textAlign: 'left', color: '#1976FF' }}>
                Administrative Portal Login
              </button>
              <button onClick={() => setCurrentView('login')} style={{ textAlign: 'left', color: '#1976FF' }}>
                Student & Parent Portal
              </button>
              <button onClick={() => setCurrentView('login')} style={{ textAlign: 'left', color: '#1976FF' }}>
                Teacher & Staff Login
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '12.5px', color: '#858C9B' }}>
          <div>© 2026 AL NOOR Public School. All Rights Reserved.</div>
          <div>Made with ❤️ by Bigpage</div>
        </div>
      </footer>
    </div>
  );
};
