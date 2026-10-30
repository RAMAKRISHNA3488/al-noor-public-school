import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  Calendar,
  FileText,
  Users
} from 'lucide-react';
import { PublicNavbar } from '../../components/layout/PublicNavbar';
import { PublicFooter } from '../../components/layout/PublicFooter';
import { useSchool } from '../../context/SchoolContext';

export const AcademicsPage: React.FC = () => {
  const { setCurrentView } = useSchool();
  const [selectedWing, setSelectedWing] = useState<'primary' | 'middle' | 'secondary' | 'senior'>('primary');

  const wingDetails = {
    primary: {
      title: 'Primary Wing (Grades 1 – 5)',
      age: 'Age: 6 – 10 Years',
      lead: 'Foundational learning focused on joy, literacy, numeracy, and active curiosity.',
      subjects: ['English Language & Phonics', 'Mathematics & Mental Math', 'Environmental Studies (EVS)', 'Second Language (Hindi/Urdu)', 'Art, Music & Performing Craft', 'Physical Education & Games'],
      features: ['Play-based thematic inquiry', 'Smart interactive storytelling', 'Weekly library reading sessions', 'Zero-weight bag policy on Fridays']
    },
    middle: {
      title: 'Middle Wing (Grades 6 – 8)',
      age: 'Age: 11 – 13 Years',
      lead: 'Bridging foundational concepts with critical analytical reasoning and exploratory labs.',
      subjects: ['General Science (Physics, Chemistry, Biology)', 'Mathematics & Geometry', 'Social Science (History, Civics, Geography)', 'Computer Science & Scratch Coding', 'Third Language (Sanskrit / French)', 'Health, Wellness & Yoga'],
      features: ['Hands-on science lab sessions', 'Introductory robotics & electronics', 'Model United Nations junior club', 'Inter-house debate tournaments']
    },
    secondary: {
      title: 'Secondary Wing (Grades 9 – 10)',
      age: 'Age: 14 – 15 Years',
      lead: 'Rigorous preparation for CBSE All India Secondary School Examination (AISSE).',
      subjects: ['English Communicative', 'Mathematics (Standard / Basic)', 'Science with Practical Lab Work', 'Social Sciences & Economics', 'Information Technology (Skill Subject)', 'Physical & Health Education'],
      features: ['Board exam simulation tests', 'Remedial coaching for complex topics', 'Career counseling & aptitude mapping', 'Science exhibition and project work']
    },
    senior: {
      title: 'Senior Secondary Wing (Grades 11 – 12)',
      age: 'Age: 16 – 17 Years',
      lead: 'Specialized pre-university academic streams preparing for JEE, NEET, CUET, and CA-CPT.',
      subjects: [
        'Science Stream: Physics, Chemistry, Mathematics, Biology, Computer Science (Python)',
        'Commerce Stream: Accountancy, Business Studies, Economics, Applied Mathematics',
        'Humanities Stream: Political Science, Psychology, Sociology, History, English'
      ],
      features: ['Integrated competitive exam prep', 'College application mentorship', 'Advanced physics, chemistry & bio labs', 'Student council leadership roles']
    }
  };

  const current = wingDetails[selectedWing];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <PublicNavbar activePage="academics" />

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
        <div
          className="anim-float-slow"
          style={{
            position: 'absolute',
            top: '-70px',
            right: '-70px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(25, 118, 237, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div
          className="anim-float-reverse"
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 165, 46, 0.16) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div
            className="floating-badge badge-glow-pulse badge-pulse-glow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(25, 118, 237, 0.2)',
              border: '1px solid rgba(25, 118, 237, 0.4)',
              color: '#93C5FD',
              padding: '6px 18px',
              borderRadius: '24px',
              fontSize: '12.5px',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            <Sparkles size={15} color="#93C5FD" />
            <span>CBSE Affiliated Comprehensive Curriculum</span>
          </div>

          <h1 style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.25, marginBottom: '18px', letterSpacing: '-0.5px' }}>
            Academic Excellence & <span style={{ color: '#FFA52E' }}>Holistic Learning</span>
          </h1>
          <p style={{ fontSize: '16.5px', color: '#C5C9D2', maxWidth: '760px', margin: '0 auto', lineHeight: 1.65 }}>
            Fostering intellectual rigor, independent inquiry, and creative thinking through an enriched CBSE framework spanning Grades 1 through 12.
          </p>
        </div>
      </section>

      {/* Academic Highlights 4-Grid */}
      <section style={{ padding: '60px 32px 40px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { label: '100% Board Pass Rate', sub: 'Consistent Distinction & Top Ranks', icon: <Award size={22} color="#FFA52E" /> },
              { label: '1:18 Teacher-Student Ratio', sub: 'Individualized Attention for Every Child', icon: <Users size={22} color="#1976ED" /> },
              { label: 'Smart STEM Classrooms', sub: 'Interactive 4K Boards & Practical Labs', icon: <Compass size={22} color="#10B981" /> },
              { label: 'Continuous Evaluation', sub: 'Diagnostic Assessment & Real-time ERP Reports', icon: <FileText size={22} color="#6C5CE7" /> }
            ].map((stat, i) => (
              <div
                key={i}
                className="analytics-card landing-interactive-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '22px',
                  border: '1px solid #ECEEF6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'default'
                }}
              >
                <div
                  className="card-icon-animated"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: '#F4F6FD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#172A55', fontWeight: 700 }}>{stat.label}</h4>
                  <p style={{ fontSize: '12px', color: '#666666', marginTop: '2px' }}>{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Academic Wings Section */}
      <section style={{ padding: '60px 32px 80px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '30px', color: '#172A55', fontWeight: 700 }}>
              Academic Wings & Program Structure
            </h2>
            <p style={{ fontSize: '14.5px', color: '#666666', marginTop: '6px' }}>
              Explore detailed subject offerings, methodologies, and co-curricular programs by grade stage.
            </p>
          </div>

          {/* Wing Selector Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '32px',
              flexWrap: 'wrap'
            }}
          >
            {[
              { id: 'primary', label: 'Primary (Grades 1-5)' },
              { id: 'middle', label: 'Middle (Grades 6-8)' },
              { id: 'secondary', label: 'Secondary (Grades 9-10)' },
              { id: 'senior', label: 'Senior Secondary (Grades 11-12)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedWing(tab.id as any)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '24px',
                  fontSize: '13.5px',
                  fontWeight: selectedWing === tab.id ? 600 : 500,
                  backgroundColor: selectedWing === tab.id ? '#1976ED' : '#FFFFFF',
                  color: selectedWing === tab.id ? '#FFFFFF' : '#333333',
                  border: `1px solid ${selectedWing === tab.id ? '#1976ED' : '#DCE3F2'}`,
                  boxShadow: selectedWing === tab.id ? '0 4px 14px rgba(25, 118, 237, 0.28)' : 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Wing Content Card */}
          <div
            className="analytics-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid #ECEEF6',
              boxShadow: '0 10px 32px rgba(27, 34, 56, 0.06)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1976ED', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  {current.age}
                </span>
                <h3 style={{ fontSize: '24px', color: '#172A55', fontWeight: 700, marginTop: '4px' }}>
                  {current.title}
                </h3>
              </div>
              <button
                onClick={() => setCurrentView('contact')}
                className="btn-primary-pill"
                style={{ height: '38px', padding: '0 20px', fontSize: '13px' }}
              >
                <span>Apply for Admission</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <p style={{ fontSize: '15px', color: '#555555', lineHeight: 1.65, marginBottom: '28px' }}>
              {current.lead}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              {/* Subjects */}
              <div style={{ backgroundColor: '#F8FAFE', borderRadius: '12px', padding: '22px', border: '1px solid #E9E9E9' }}>
                <h4 style={{ fontSize: '16px', color: '#172A55', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={18} color="#1976ED" />
                  <span>Curriculum & Subjects</span>
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {current.subjects.map((sub, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#333333' }}>
                      <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div style={{ backgroundColor: '#F8FAFE', borderRadius: '12px', padding: '22px', border: '1px solid #E9E9E9' }}>
                <h4 style={{ fontSize: '16px', color: '#172A55', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} color="#FFA52E" />
                  <span>Wing Highlights & Pedagogy</span>
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {current.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#333333' }}>
                      <CheckCircle2 size={16} color="#FFA52E" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
