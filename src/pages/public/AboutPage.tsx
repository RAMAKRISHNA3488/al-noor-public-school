import React from 'react';
import {
  Award,
  BookOpen,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Target,
  Heart,
  Lightbulb,
  GraduationCap
} from 'lucide-react';
import { PublicNavbar } from '../../components/layout/PublicNavbar';
import { PublicFooter } from '../../components/layout/PublicFooter';
import { useSchool } from '../../context/SchoolContext';

export const AboutPage: React.FC = () => {
  const { setCurrentView } = useSchool();

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <PublicNavbar activePage="about" />

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
            top: '-60px',
            right: '-60px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 165, 46, 0.18) 0%, transparent 70%)',
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
            <span>Discover Our Heritage & Mission</span>
          </div>

          <h1 style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.25, marginBottom: '18px', letterSpacing: '-0.5px' }}>
            Empowering Minds with <span style={{ color: '#FFA52E' }}>Excellence</span> & Wisdom
          </h1>
          <p style={{ fontSize: '16.5px', color: '#C5C9D2', maxWidth: '760px', margin: '0 auto', lineHeight: 1.65 }}>
            Since 2005, Meridian Public School has stood as a beacon of academic rigor, character building, and inclusive leadership in modern schooling.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {/* Vision */}
            <div
              className="analytics-card landing-interactive-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '36px 32px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 30px rgba(27, 34, 56, 0.05)',
                cursor: 'default'
              }}
            >
              <div
                className="card-icon-animated"
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: '#EBF3FE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Target size={26} color="#1976ED" />
              </div>
              <h2 style={{ fontSize: '22px', color: '#172A55', fontWeight: 700, marginBottom: '12px' }}>
                Our Vision
              </h2>
              <p style={{ fontSize: '14.5px', color: '#555555', lineHeight: 1.7 }}>
                To nurture enlightened global citizens who champion ethical leadership, academic brilliance, and innovative problem-solving, guided by unwavering moral rectitude and scientific curiosity.
              </p>
            </div>

            {/* Mission */}
            <div
              className="analytics-card landing-interactive-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '36px 32px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 30px rgba(27, 34, 56, 0.05)',
                cursor: 'default'
              }}
            >
              <div
                className="card-icon-animated"
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: '#FFF6E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Lightbulb size={26} color="#FFA52E" />
              </div>
              <h2 style={{ fontSize: '22px', color: '#172A55', fontWeight: 700, marginBottom: '12px' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '14.5px', color: '#555555', lineHeight: 1.7 }}>
                Deliver state-of-the-art CBSE curriculum blended with STEM laboratories, digital ERP governance, sportsmanship, and values-based mentorship in an inspiring, safe, and nurturing environment.
              </p>
            </div>

            {/* Core Values */}
            <div
              className="analytics-card landing-interactive-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '36px 32px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 30px rgba(27, 34, 56, 0.05)',
                cursor: 'default'
              }}
            >
              <div
                className="card-icon-animated"
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: '#ECFDF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Heart size={26} color="#10B981" />
              </div>
              <h2 style={{ fontSize: '22px', color: '#172A55', fontWeight: 700, marginBottom: '12px' }}>
                Core Values
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#555555' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#10B981" />
                  <strong>Integrity:</strong> Honesty in every action
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#10B981" />
                  <strong>Excellence:</strong> Relentless pursuit of quality
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#10B981" />
                  <strong>Inclusivity:</strong> Valuing every child's talent
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#10B981" />
                  <strong>Empathy:</strong> Community service and compassion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Principal Desk */}
      <section style={{ padding: '80px 32px', backgroundColor: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ color: '#1976ED', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              From the Principal's Desk
            </div>
            <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 700, lineHeight: 1.3, marginBottom: '20px' }}>
              "Education that Transcends the Classroom into Life"
            </h2>
            <p style={{ fontSize: '15px', color: '#555555', lineHeight: 1.7, marginBottom: '16px' }}>
              Welcome to Meridian Public School. For over two decades, our campus has flourished as a nurturing sanctuary where every young student discovers their unique voice, passion, and purpose.
            </p>
            <p style={{ fontSize: '15px', color: '#555555', lineHeight: 1.7, marginBottom: '24px' }}>
              We believe true education is neither rote memorization nor mere grades; it is the harmonious convergence of critical acumen, moral courage, and compassionate civic responsibility.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => setCurrentView('contact')}
                className="btn-primary-pill"
                style={{ height: '42px', padding: '0 24px', fontSize: '14px' }}
              >
                <span>Schedule a Campus Visit</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#F8FAFE',
              borderRadius: '20px',
              padding: '36px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 12px 36px rgba(27, 34, 56, 0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '22px' }}>
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=260"
                alt="Principal Dr. A. K. Rahman"
                style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #1976ED' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', color: '#172A55', fontWeight: 700 }}>Dr. A. K. Rahman</h3>
                <p style={{ fontSize: '13.5px', color: '#1976ED', fontWeight: 600 }}>Principal & Academic Director</p>
                <p style={{ fontSize: '12px', color: '#888888', marginTop: '2px' }}>Ph.D. in Educational Pedagogy, M.Sc.</p>
              </div>
            </div>
            <div style={{ borderLeft: '3px solid #FFA52E', paddingLeft: '16px', fontStyle: 'italic', color: '#444444', fontSize: '14px', lineHeight: 1.65 }}>
              "Our graduates do not simply adapt to the modern world; they illuminate it with knowledge, empathy, and integrity."
            </div>
          </div>
        </div>
      </section>

      {/* School Milestones Timeline */}
      <section style={{ padding: '80px 32px', backgroundColor: '#F4F6FD' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#FFA52E', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Two Decades of Excellence
          </div>
          <h2 style={{ fontSize: '32px', color: '#172A55', fontWeight: 700, marginBottom: '40px' }}>
            Our Journey & Milestones
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', textAlign: 'left' }}>
            {[
              { year: '2005', title: 'Foundation', desc: 'Inaugurated with 120 students and 12 dedicated faculty members.' },
              { year: '2012', title: 'CBSE Affiliation', desc: 'Accredited by Central Board of Secondary Education with top grade.' },
              { year: '2019', title: 'STEM & Robotics Hub', desc: 'Introduced 3D printing, AI lab, and smart digital classrooms.' },
              { year: '2026', title: 'Digital ERP Era', desc: 'Serving 1,248 students with fully integrated real-time school management.' }
            ].map((m, i) => (
              <div
                key={i}
                className="analytics-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '24px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#EBF3FE',
                    color: '#1976ED',
                    fontWeight: 700,
                    fontSize: '13px',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    marginBottom: '12px'
                  }}
                >
                  {m.year}
                </span>
                <h3 style={{ fontSize: '17px', color: '#172A55', fontWeight: 700, marginBottom: '8px' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.55 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
