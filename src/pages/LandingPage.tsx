import React, { useState } from 'react';
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
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Crown,
  Cpu,
  Trophy,
  Library,
  MonitorPlay,
  Sparkles,
  HeartHandshake,
  Star,
  Quote,
  Download,
  FileCheck,
  Activity,
  Layers,
  Palette,
  Bus,
  Check,
  Send,
  Clock,
  Briefcase,
  HelpCircle,
  Medal,
  CheckCheck
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { PublicNavbar } from '../components/layout/PublicNavbar';
import { PublicFooter } from '../components/layout/PublicFooter';

export const LandingPage: React.FC = () => {
  const { setCurrentView, notices, holidays } = useSchool();
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [callbackNumber, setCallbackNumber] = useState('');
  const [callbackSuccess, setCallbackSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (callbackNumber.trim()) {
      setCallbackSuccess(true);
      setTimeout(() => {
        setCallbackSuccess(false);
        setCallbackNumber('');
      }, 5000);
    }
  };

  const homeFaqs = [
    {
      q: 'When do admissions begin for the 2026–2027 academic session?',
      a: 'Admissions are open now from Pre-Primary through Grade 11. Parents can complete the online application or book a campus visit with our admissions counselor.'
    },
    {
      q: 'What is the board affiliation of AL NOOR Public School?',
      a: 'AL NOOR Public School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi (Affiliation No: 2130842), incorporating experiential STEM and digital learning.'
    },
    {
      q: 'Does the school provide transport with female attendants and GPS?',
      a: 'Yes, our 24-bus fleet covers all major corridors across Delhi NCR with on-board CCTV, female conductors, speed governors, and real-time GPS tracking inside the parent ERP app.'
    },
    {
      q: 'Are merit-based scholarships available for students?',
      a: 'Yes! The Noor Merit Scholarship offers up to 100% tuition waivers for academic achievers scoring 95%+ and state/national level athletes.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* 1. Top Public Navigation Bar with Glassmorphic Blur */}
      <PublicNavbar activePage="landing" />

      {/* 2. Hero Section */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1B2238 0%, #151B2D 50%, #0E1322 100%)',
          color: '#FFFFFF',
          padding: '85px 32px 95px',
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
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px',
              letterSpacing: '-0.8px'
            }}
          >
            Nurturing Minds, Inspiring Character,<br />
            <span style={{ color: '#FFA52E' }}>Leading the Future.</span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: '#C5C9D2',
              maxWidth: '740px',
              margin: '0 auto 36px',
              lineHeight: 1.65
            }}
          >
            AL NOOR Public School provides world-class CBSE education combining intellectual distinction, moral rectitude, modern STEM robotics, and values-driven character building for students from Grade 1 to 12.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setCurrentView('contact')}
              className="btn-primary-pill"
              style={{
                height: '46px',
                padding: '0 28px',
                fontSize: '14.5px',
                backgroundColor: '#1976ED'
              }}
            >
              <span>Apply for Admission 2026–27</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setCurrentView('about')}
              className="btn-secondary-pill"
              style={{
                height: '46px',
                padding: '0 26px',
                fontSize: '14.5px'
              }}
            >
              <span>Explore School Profile</span>
            </button>
            <button
              onClick={() => setCurrentView('login')}
              style={{
                height: '46px',
                padding: '0 22px',
                borderRadius: '24px',
                fontSize: '14px',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <ShieldCheck size={16} color="#FFA52E" />
              <span>ERP Portal Login</span>
            </button>
          </div>

          {/* 4 Feature Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '20px',
              marginTop: '60px',
              textAlign: 'left'
            }}
          >
            {[
              { title: '100% Board Pass Rate', desc: 'Consistent top CBSE distinctions', icon: <GraduationCap size={22} color="#FFA52E" /> },
              { title: 'Smart STEM Classrooms', desc: 'Robotics & AI workstations', icon: <Compass size={22} color="#1976ED" /> },
              { title: 'Experienced Faculty', desc: '86+ dedicated faculty mentors', icon: <Users size={22} color="#10B981" /> },
              { title: 'Secure Transport Fleet', desc: 'GPS-enabled campus bus fleet', icon: <ShieldCheck size={22} color="#6C5CE7" /> }
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '20px',
                  backdropFilter: 'blur(6px)',
                  transition: 'transform 0.25s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ marginBottom: '10px' }}>{f.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF' }}>{f.title}</div>
                <div style={{ fontSize: '12.5px', color: '#858C9B', marginTop: '3px' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Key Statistics Strip */}
      <section style={{ backgroundColor: '#172A55', color: '#FFFFFF', padding: '36px 32px', borderBottom: '3px solid #FFA52E' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#FFA52E', lineHeight: 1 }}>21+</div>
            <div style={{ fontSize: '13px', color: '#C5C9D2', marginTop: '6px', fontWeight: 500 }}>Years of Academic Glory</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>1,248+</div>
            <div style={{ fontSize: '13px', color: '#C5C9D2', marginTop: '6px', fontWeight: 500 }}>Enrolled Scholars</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#FFA52E', lineHeight: 1 }}>100%</div>
            <div style={{ fontSize: '13px', color: '#C5C9D2', marginTop: '6px', fontWeight: 500 }}>CBSE Board Pass Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>1:18</div>
            <div style={{ fontSize: '13px', color: '#C5C9D2', marginTop: '6px', fontWeight: 500 }}>Teacher-Student Ratio</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#FFA52E', lineHeight: 1 }}>35+</div>
            <div style={{ fontSize: '13px', color: '#C5C9D2', marginTop: '6px', fontWeight: 500 }}>Inter-School Trophies</div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose AL NOOR: 6 Pillars of Distinction */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Why Choose Our Institution
            </span>
            <h2 style={{ fontSize: '34px', color: '#172A55', fontWeight: 800, marginTop: '8px' }}>
              Six Pillars of Excellence at AL NOOR
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', maxWidth: '680px', margin: '10px auto 0', lineHeight: 1.6 }}>
              We balance rigorous academics, innovative STEM laboratories, ethical values, and physical wellness to develop visionary young leaders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
            {[
              {
                title: 'Value-Based Moral Character',
                desc: 'Rooted in the light (Noor) of ethical wisdom, empathy, and social responsibility alongside standard CBSE curriculum.',
                icon: <HeartHandshake size={24} color="#10B981" />,
                bg: '#ECFDF5'
              },
              {
                title: 'Next-Gen STEM & AI Labs',
                desc: 'Hands-on experiential learning with 3D printers, Python coding, robotics competitions, and physics & chemistry discovery stations.',
                icon: <Cpu size={24} color="#1976ED" />,
                bg: '#EBF3FE'
              },
              {
                title: 'Individualized Attention (1:18)',
                desc: 'Small class batches ensure personalized mentoring, targeted remedial sessions, and deep student-teacher bonding.',
                icon: <Users size={24} color="#FFA52E" />,
                bg: '#FFF6E8'
              },
              {
                title: 'Olympic Athletics & Sports Turf',
                desc: 'FIFA-standard turf pitch, badminton complex, chess masterclasses, and certified coaches training champions in athletics.',
                icon: <Trophy size={24} color="#6C5CE7" />,
                bg: '#F3F0FF'
              },
              {
                title: '360° Safety & Real-time GPS Buses',
                desc: 'Full CCTV coverage, biometric campus gates, female attendants on all routes, and live GPS bus tracking in the parent portal.',
                icon: <Bus size={24} color="#0891B2" />,
                bg: '#E0F2FE'
              },
              {
                title: 'Transparent Digital ERP Governance',
                desc: 'Instant online attendance registers, marks cards, fee collection with thermal receipts, and real-time principal circulars.',
                icon: <ShieldCheck size={24} color="#2563EB" />,
                bg: '#DBEAFE'
              }
            ].map((pillar, i) => (
              <div
                key={i}
                className="analytics-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '28px',
                  border: '1px solid #ECEEF6'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: pillar.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '18px', color: '#172A55', fontWeight: 700, marginBottom: '8px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Board Toppers & Hall of Fame (NEW SECTION) */}
      <section style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ color: '#FFA52E', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Academic Laurels
            </span>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, marginTop: '8px' }}>
              CBSE Board Toppers & Hall of Fame
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', maxWidth: '680px', margin: '10px auto 0', lineHeight: 1.6 }}>
              Celebrating our exceptional scholars who achieved benchmark distinctions in the CBSE All-India Board Examinations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                name: 'Ayaan Malik',
                score: '98.8%',
                stream: 'Class 12 — Science (PCM)',
                rank: 'School Rank 1 (State Top 10)',
                dest: 'Admitted: IIT Delhi (Computer Science)',
                badge: 'Gold Medalist'
              },
              {
                name: 'Zoya Parveen',
                score: '98.4%',
                stream: 'Class 12 — Commerce',
                rank: 'School Rank 1 (Commerce)',
                dest: 'Admitted: SRCC Delhi (B.Com Hons)',
                badge: 'Distinction'
              },
              {
                name: 'Ibrahim Siddiqui',
                score: '97.6%',
                stream: 'Class 12 — Humanities',
                rank: 'School Rank 1 (Humanities)',
                dest: 'Admitted: St. Stephen’s College',
                badge: 'Merit Award'
              },
              {
                name: 'Maryam Khan',
                score: '99.2%',
                stream: 'Class 10 — AISSE Board',
                rank: 'Perfect 100 in Math & Science',
                dest: 'National Science Olympiad Winner',
                badge: 'Perfect Centum'
              }
            ].map((topper, i) => (
              <div
                key={i}
                className="analytics-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '28px 22px',
                  border: '1px solid #ECEEF6',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontSize: '11px',
                    fontWeight: 700,
                    backgroundColor: '#FEF3C7',
                    color: '#B45309',
                    padding: '3px 10px',
                    borderRadius: '12px'
                  }}
                >
                  {topper.badge}
                </div>

                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: '#EBF3FE',
                    border: '3px solid #1976ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}
                >
                  <Medal size={34} color="#1976ED" />
                </div>

                <div style={{ fontSize: '28px', fontWeight: 800, color: '#1976ED', lineHeight: 1 }}>
                  {topper.score}
                </div>
                <h3 style={{ fontSize: '18px', color: '#172A55', fontWeight: 700, marginTop: '8px' }}>
                  {topper.name}
                </h3>
                <p style={{ fontSize: '12.5px', color: '#FFA52E', fontWeight: 600, marginTop: '3px' }}>
                  {topper.stream}
                </p>
                <div style={{ fontSize: '12px', color: '#666666', marginTop: '6px' }}>
                  {topper.rank}
                </div>
                <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #F1F1F1', fontSize: '11.5px', color: '#10B981', fontWeight: 600 }}>
                  {topper.dest}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Welcome & Principal Desk Spotlight */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Leadership & Philosophy
            </span>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, lineHeight: 1.3, margin: '8px 0 18px' }}>
              "Illuminating Young Minds with Ethical Intellect"
            </h2>
            <p style={{ fontSize: '15px', color: '#555555', lineHeight: 1.7, marginBottom: '16px' }}>
              At AL NOOR Public School, our mission is to provide an ecosystem where scholarly rigor coexists with empathy, courage, and moral discipline. We believe that true education does not simply prepare a child for exams — it prepares them for life.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {[
                'Affiliated with Central Board of Secondary Education (CBSE), New Delhi',
                'Comprehensive STEM, Arts, Languages, and Physical Education integration',
                'Dedicated scholarship fund for meritorious and underserved children'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#222222' }}>
                  <CheckCircle2 size={17} color="#10B981" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentView('about')}
              className="btn-primary-pill"
              style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
            >
              <span>Read Full Institution Story</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px',
              border: '1px solid #ECEEF6',
              boxShadow: '0 12px 36px rgba(27, 34, 56, 0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=260"
                alt="Principal Dr. A. K. Rahman"
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #1976ED' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', color: '#172A55', fontWeight: 700 }}>Dr. A. K. Rahman</h3>
                <p style={{ fontSize: '13.5px', color: '#1976ED', fontWeight: 600 }}>Principal & Academic Director</p>
                <p style={{ fontSize: '12px', color: '#888888', marginTop: '2px' }}>Ph.D. in Educational Pedagogy, M.Sc.</p>
              </div>
            </div>
            <div style={{ borderLeft: '3px solid #FFA52E', paddingLeft: '16px', fontStyle: 'italic', color: '#444444', fontSize: '14px', lineHeight: 1.65 }}>
              "At AL NOOR, education transcends textbooks. We equip our students to navigate the complexities of the 21st century with courage, compassion, and uncompromising knowledge."
            </div>
          </div>
        </div>
      </section>

      {/* 7. Faculty Mentors & Academic Council (NEW SECTION) */}
      <section style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Distinguished Educators
            </span>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, marginTop: '8px' }}>
              Our Expert Academic Council
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', maxWidth: '680px', margin: '10px auto 0', lineHeight: 1.6 }}>
              86+ dedicated educators holding advanced degrees, continuous pedagogical certifications, and passion for mentoring youth.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              {
                name: 'Dr. Farzana Anjum',
                role: 'Head of Science & STEM Labs',
                degree: 'Ph.D. in Applied Physics, B.Ed.',
                exp: '18 Years Mentoring',
                color: '#1976ED'
              },
              {
                name: 'Prof. Naveed Akhtar',
                role: 'Head of Mathematics & Olympiads',
                degree: 'M.Sc. Mathematics, Gold Medalist',
                exp: '15 Years Mentoring',
                color: '#FFA52E'
              },
              {
                name: 'Mrs. Yasmin Begum',
                role: 'Head of Languages & Literature',
                degree: 'M.A. English & Arabic Literature',
                exp: '20 Years Mentoring',
                color: '#10B981'
              },
              {
                name: 'Coach Tariq Jamil',
                role: 'Director of Physical Education & Sports',
                degree: 'M.P.Ed., NIS Certified Athletics Coach',
                exp: '12 Years Mentoring',
                color: '#6C5CE7'
              }
            ].map((f, i) => (
              <div
                key={i}
                className="analytics-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '26px 20px',
                  border: '1px solid #ECEEF6',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#F8FAFE',
                    border: `2px solid ${f.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px'
                  }}
                >
                  <Users size={28} color={f.color} />
                </div>
                <h3 style={{ fontSize: '17px', color: '#172A55', fontWeight: 700 }}>
                  {f.name}
                </h3>
                <p style={{ fontSize: '13px', color: f.color, fontWeight: 600, marginTop: '2px' }}>
                  {f.role}
                </p>
                <p style={{ fontSize: '12px', color: '#888888', marginTop: '6px' }}>
                  {f.degree}
                </p>
                <span style={{ display: 'inline-block', marginTop: '12px', fontSize: '11.5px', fontWeight: 600, color: '#172A55', backgroundColor: '#F1F5F9', padding: '3px 12px', borderRadius: '12px' }}>
                  {f.exp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. A Day in the Life of an AL NOOR Student (NEW SECTION) */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ color: '#FFA52E', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Student Experience
            </span>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, marginTop: '8px' }}>
              A Day in the Life of an AL NOOR Scholar
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', maxWidth: '680px', margin: '10px auto 0', lineHeight: 1.6 }}>
              A purposeful blend of mindfulness, interactive inquiry, collaborative sports, and character building from sunrise to afternoon.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px' }}>
            {[
              {
                time: '07:45 AM',
                title: 'Morning Reflection',
                desc: 'Universal school assembly, national anthem, values recitation, and ethical thought of the day.',
                icon: <Clock size={20} color="#1976ED" />
              },
              {
                time: '08:30 AM',
                title: 'STEM & Robotics Lab',
                desc: 'Hands-on experiment block: writing code, 3D printing modules, and conceptual physics labs.',
                icon: <Cpu size={20} color="#FFA52E" />
              },
              {
                time: '11:00 AM',
                title: 'Organic Lunch & Chess',
                desc: 'Wholesome hot lunch in the cafeteria followed by library reading and friendly chess duels.',
                icon: <Crown size={20} color="#10B981" />
              },
              {
                time: '12:30 PM',
                title: 'Languages & Humanities',
                desc: 'Debate workshops, English phonics, second languages, and social science simulations.',
                icon: <BookOpen size={20} color="#6C5CE7" />
              },
              {
                time: '01:45 PM',
                title: 'Safe Transit & GPS Bus',
                desc: 'Departure with biometric bus attendance and live tracking on parents’ mobile dashboards.',
                icon: <Bus size={20} color="#0891B2" />
              }
            ].map((schedule, i) => (
              <div
                key={i}
                className="analytics-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '24px 20px',
                  border: '1px solid #ECEEF6'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1976ED', fontWeight: 700, fontSize: '13px', marginBottom: '10px' }}>
                  {schedule.icon}
                  <span>{schedule.time}</span>
                </div>
                <h3 style={{ fontSize: '16px', color: '#172A55', fontWeight: 700, marginBottom: '6px' }}>
                  {schedule.title}
                </h3>
                <p style={{ fontSize: '12.5px', color: '#666666', lineHeight: 1.55 }}>
                  {schedule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Scholarships & Financial Assistance (NEW SECTION) */}
      <section style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ color: '#10B981', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Accessible Quality Education
            </span>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, marginTop: '8px' }}>
              Scholarship Programs & Concessions
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', maxWidth: '680px', margin: '10px auto 0', lineHeight: 1.6 }}>
              We ensure financial circumstances never stand between a bright mind and a world-class education.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
            {[
              {
                title: 'Noor Merit Scholarship',
                benefit: 'Up to 100% Tuition Fee Waiver',
                criteria: 'Awarded to scholars with 95%+ in previous board or grade examinations and top entrance test percentiles.',
                color: '#FFA52E'
              },
              {
                title: 'Sports Laurels Excellence Award',
                benefit: '50% Tuition Fee Waiver',
                criteria: 'For student-athletes who represent state or national teams in Football, Badminton, Track, or Chess.',
                color: '#1976ED'
              },
              {
                title: 'Sibling & S.E.E.D. Concession',
                benefit: '25% Sibling Discount & Need Aid',
                criteria: 'Supporting families enrolling multiple siblings or students requiring socio-economic educational support.',
                color: '#10B981'
              }
            ].map((sch, i) => (
              <div
                key={i}
                className="analytics-card"
                style={{
                  backgroundColor: '#F8FAFE',
                  borderRadius: '16px',
                  padding: '30px',
                  borderTop: `4px solid ${sch.color}`
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 700, color: sch.color, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                  {sch.benefit}
                </span>
                <h3 style={{ fontSize: '20px', color: '#172A55', fontWeight: 700, margin: '8px 0 10px' }}>
                  {sch.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.6 }}>
                  {sch.criteria}
                </p>
                <button
                  onClick={() => setCurrentView('contact')}
                  style={{
                    marginTop: '16px',
                    fontSize: '13px',
                    color: sch.color,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Apply for Scholarship</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Student Life & Clubs Showcase */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ color: '#FFA52E', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Beyond the Classroom
            </span>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, marginTop: '8px' }}>
              Vibrant Student Life & Extracurricular Clubs
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', maxWidth: '680px', margin: '10px auto 0', lineHeight: 1.6 }}>
              Education at AL NOOR flourishes through diverse clubs, competitive mind sports, arts festivals, and community leadership guilds.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Robotics & AI Guild',
                desc: 'Students design automated rovers, participate in FIRST Lego League, and explore Arduino microcontrollers.',
                icon: <Cpu size={22} color="#1976ED" />,
                badge: 'Tech & Code'
              },
              {
                title: 'Chess Masterclass',
                desc: 'Weekly Grandmaster-led tactics workshops, inter-school tournaments, and cognitive spatial training.',
                icon: <Crown size={22} color="#FFA52E" />,
                badge: 'Mind Sports'
              },
              {
                title: 'Model United Nations (MUN)',
                desc: 'Developing diplomacy, parliamentary debate, public speaking, and geopolitical resolution drafting.',
                icon: <Award size={22} color="#10B981" />,
                badge: 'Diplomacy'
              },
              {
                title: 'Fine Arts & Calligraphy',
                desc: 'Oil painting, Islamic geometric calligraphy, ceramics, and campus mural exhibitions.',
                icon: <Palette size={22} color="#6C5CE7" />,
                badge: 'Creative Arts'
              },
              {
                title: 'Eco-Warriors Club',
                desc: 'Campus solar tree monitoring, organic hydroponic gardening, and zero-waste sustainability drives.',
                icon: <Activity size={22} color="#0891B2" />,
                badge: 'Green Earth'
              },
              {
                title: 'Athletics & Martial Arts',
                desc: 'Taekwondo belts, 400m sprint training, cricket academy, and annual sports day championships.',
                icon: <Trophy size={22} color="#D97706" />,
                badge: 'Athletics'
              }
            ].map((club, idx) => (
              <div
                key={idx}
                className="analytics-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '24px',
                  border: '1px solid #ECEEF6'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: '#F8FAFE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {club.icon}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#1976ED', backgroundColor: '#EBF3FE', padding: '3px 10px', borderRadius: '12px' }}>
                    {club.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '17px', color: '#172A55', fontWeight: 700, marginBottom: '6px' }}>
                  {club.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.55 }}>
                  {club.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Campus Facilities Spotlight */}
      <section style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ color: '#FFA52E', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>Campus Facilities</span>
              <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, marginTop: '4px' }}>State-of-the-Art Infrastructure</h2>
            </div>
            <button
              onClick={() => setCurrentView('facilities')}
              className="btn-primary-pill"
              style={{ height: '40px', fontSize: '13.5px' }}
            >
              <span>View All Facilities</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Robotics & AI Innovation Lab',
                desc: '3D printers, IoT sensors, high-spec workstations, and coding masterclasses.',
                icon: <Cpu size={24} color="#1976ED" />,
                bg: '#EBF3FE'
              },
              {
                title: 'Olympic Sports Complex',
                desc: 'FIFA-standard turf, indoor badminton courts, running track, and certified coaches.',
                icon: <Trophy size={24} color="#FFA52E" />,
                bg: '#FFF6E8'
              },
              {
                title: 'Grand Digital Library',
                desc: '25,000+ print volumes, Kindle e-readers, JSTOR research subscriptions, and quiet alcoves.',
                icon: <Library size={24} color="#10B981" />,
                bg: '#ECFDF5'
              },
              {
                title: 'Smart STEM Theatres',
                desc: 'Interactive 4K touch displays, VR simulation pods, and collaborative workstations.',
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

      {/* 12. 4-Step Admissions Journey */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Seamless Enrollment
            </span>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, marginTop: '8px' }}>
              Your 4-Step Admission Journey
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', maxWidth: '680px', margin: '10px auto 0', lineHeight: 1.6 }}>
              A transparent, hassle-free admission procedure designed to welcome your child into the AL NOOR family.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              {
                step: '01',
                title: 'Online Application',
                desc: 'Fill out the simple digital inquiry form with student details and previous academic background.'
              },
              {
                step: '02',
                title: 'Campus Interaction',
                desc: 'Attend an informal interactive session and campus walkthrough with our academic counselor.'
              },
              {
                step: '03',
                title: 'Document Verification',
                desc: 'Submit birth certificate, transfer certificate (TC), and previous report cards at the registrar office.'
              },
              {
                step: '04',
                title: 'Welcome & Induction',
                desc: 'Receive your student ID card, uniform kit, digital ERP portal credentials, and bus route mapping.'
              }
            ].map((s, idx) => (
              <div
                key={idx}
                className="analytics-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '28px 24px',
                  border: '1px solid #ECEEF6',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#FFA52E',
                    marginBottom: '10px',
                    lineHeight: 1
                  }}
                >
                  {s.step}
                </div>
                <h3 style={{ fontSize: '17px', color: '#172A55', fontWeight: 700, marginBottom: '8px' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.55 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => setCurrentView('contact')}
              className="btn-primary-pill"
              style={{ height: '46px', padding: '0 32px', fontSize: '15px' }}
            >
              <span>Start Admission Application</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 13. Parent & Alumni Testimonials */}
      <section style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ color: '#FFA52E', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Community Voices
            </span>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 800, marginTop: '8px' }}>
              What Our Parents & Alumni Say
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', maxWidth: '680px', margin: '10px auto 0', lineHeight: 1.6 }}>
              Real feedback from guardians who entrust us with their children's formative schooling.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
            {[
              {
                quote: "The harmony between cutting-edge STEM education and timeless moral values is unmatched. My daughter looks forward to school every single morning.",
                name: "Dr. Tariq Siddiqui",
                role: "Parent of Grade 9 Student",
                stars: 5
              },
              {
                quote: "The digital ERP system and live bus GPS give working parents immense peace of mind. Academic feedback from teachers is thorough and supportive.",
                name: "Fatima Zahra",
                role: "Parent of Grade 5 Scholar",
                stars: 5
              },
              {
                quote: "AL NOOR shaped my analytical foundation in the physics and robotics lab. I am currently completing my B.Tech at IIT Delhi with pride.",
                name: "Farhan Qureshi",
                role: "Alumnus (Batch of 2022) — IIT Delhi",
                stars: 5
              }
            ].map((t, i) => (
              <div
                key={i}
                className="analytics-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '30px',
                  border: '1px solid #ECEEF6',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '3px', color: '#FFA52E', marginBottom: '14px' }}>
                    {[...Array(t.stars)].map((_, s) => (
                      <Star key={s} size={16} fill="#FFA52E" />
                    ))}
                  </div>
                  <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '20px' }}>
                    "{t.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #F1F1F1', paddingTop: '14px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#172A55' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: '#888888', marginTop: '2px' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Quick Frequently Asked Questions (FAQ) */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>
              Common Queries
            </span>
            <h2 style={{ fontSize: '30px', color: '#172A55', fontWeight: 800, marginTop: '6px' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #ECEEF6',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 4px 16px rgba(27, 34, 56, 0.04)' : 'none'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      backgroundColor: isOpen ? '#F8FAFE' : '#FFFFFF',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: isOpen ? '#1976ED' : '#172A55',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '16px 20px', backgroundColor: '#FFFFFF', fontSize: '14px', color: '#555555', lineHeight: 1.65, borderTop: '1px solid #F1F1F1' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. Instant Callback Request Strip */}
      <section style={{ backgroundColor: '#172A55', color: '#FFFFFF', padding: '50px 32px' }}>
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFA52E' }}>
              Want to Learn More? Request an Instant Callback
            </h3>
            <p style={{ fontSize: '13.5px', color: '#C5C9D2', marginTop: '4px' }}>
              Our admissions team will call you within 30 minutes to answer your questions.
            </p>
          </div>

          <form onSubmit={handleCallbackSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input
              type="tel"
              required
              value={callbackNumber}
              onChange={e => setCallbackNumber(e.target.value)}
              placeholder="Enter your phone number..."
              style={{
                height: '42px',
                padding: '0 16px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: '#FFFFFF',
                color: '#111111',
                fontSize: '13.5px',
                minWidth: '240px'
              }}
            />
            <button
              type="submit"
              className="btn-primary-pill"
              style={{
                height: '42px',
                backgroundColor: '#FFA52E',
                color: '#111111',
                fontWeight: 700,
                fontSize: '13.5px'
              }}
            >
              <span>{callbackSuccess ? 'Request Sent ✓' : 'Request Callback'}</span>
              {!callbackSuccess && <Phone size={14} />}
            </button>
          </form>
        </div>
      </section>

      {/* 16. Prospectus Download Banner */}
      <section style={{ backgroundColor: '#1B2238', color: '#FFFFFF', padding: '60px 32px' }}>
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span style={{ color: '#FFA52E', fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Admissions Prospectus 2026–2027
            </span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '6px', color: '#FFFFFF' }}>
              Download Comprehensive School Brochure
            </h3>
            <p style={{ fontSize: '14px', color: '#C5C9D2', marginTop: '6px', lineHeight: 1.6 }}>
              Get detailed fee structures, bus route tables, academic curriculum outlines, scholarship requirements, and co-curricular program schedules in a single PDF.
            </p>
          </div>

          <div>
            <button
              onClick={handleDownloadBrochure}
              className="btn-primary-pill"
              style={{
                height: '46px',
                padding: '0 28px',
                fontSize: '14.5px',
                backgroundColor: '#FFA52E',
                color: '#111111',
                fontWeight: 700
              }}
            >
              <Download size={16} color="#111111" />
              <span>{downloadSuccess ? 'Prospectus Downloaded ✓' : 'Download Prospectus (PDF)'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 17. Public Footer */}
      <PublicFooter />
    </div>
  );
};
