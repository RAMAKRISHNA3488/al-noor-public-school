import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Building,
  UserCheck
} from 'lucide-react';
import { PublicNavbar } from '../../components/layout/PublicNavbar';
import { PublicFooter } from '../../components/layout/PublicFooter';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade 1',
    message: '',
    inquiryType: 'Admission Inquiry'
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is the admission procedure for the 2026–2027 academic session?',
      a: 'Admissions are open online from Pre-Primary to Grade 11. Parents can submit the online inquiry form, attend an interactive session with our academic counselor, and finalize registration upon document verification.'
    },
    {
      q: 'What curriculum does AL NOOR Public School follow?',
      a: 'We are affiliated with the Central Board of Secondary Education (CBSE), New Delhi, enriched with specialized STEM, robotics, computer coding, and co-curricular programs.'
    },
    {
      q: 'Is transport available across Delhi NCR?',
      a: 'Yes, our fleet of 24 modern GPS-tracked buses covers major residential corridors across South Delhi, West Delhi, Dwarka, Gurugram, and Noida with live parent app tracking.'
    },
    {
      q: 'What are the school operating hours?',
      a: 'Summer hours: 7:45 AM – 1:45 PM. Winter hours: 8:15 AM – 2:15 PM. Administrative and admissions offices remain open from 8:00 AM – 3:30 PM on all working weekdays.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <PublicNavbar activePage="contact" />

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
            <span>We Are Here to Assist You</span>
          </div>

          <h1 style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.25, marginBottom: '18px', letterSpacing: '-0.5px' }}>
            Contact & <span style={{ color: '#FFA52E' }}>Admissions Desk</span>
          </h1>
          <p style={{ fontSize: '16.5px', color: '#C5C9D2', maxWidth: '760px', margin: '0 auto', lineHeight: 1.65 }}>
            Reach out to our admissions team, book a guided campus walkthrough, or connect directly with our administration office.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Contact Info */}
      <section style={{ padding: '70px 32px 80px', backgroundColor: '#F8FAFE' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Left: Interactive Inquiry Form */}
          <div
            className="analytics-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid #ECEEF6',
              boxShadow: '0 8px 30px rgba(27, 34, 56, 0.05)'
            }}
          >
            <h3 style={{ fontSize: '22px', color: '#172A55', fontWeight: 700, marginBottom: '8px' }}>
              Online Admission & Inquiry Form
            </h3>
            <p style={{ fontSize: '13.5px', color: '#666666', marginBottom: '24px' }}>
              Fill out this quick form and our academic counselor will contact you within 24 hours.
            </p>

            {submitted ? (
              <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <CheckCircle2 size={42} color="#10B981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '18px', color: '#065F46', fontWeight: 700, marginBottom: '6px' }}>
                  Inquiry Submitted Successfully!
                </h4>
                <p style={{ fontSize: '13.5px', color: '#047857', lineHeight: 1.6 }}>
                  Thank you for your interest in AL NOOR Public School. Reference ID: <strong>ANPS-INQ-{Math.floor(1000 + Math.random() * 9000)}</strong>. Our admissions officer will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary-pill"
                  style={{ marginTop: '18px', height: '36px', fontSize: '13px' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label className="form-label">Parent / Guardian Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Tariq Mansoor"
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label className="form-label">Grade Applying For</label>
                    <select
                      value={formData.grade}
                      onChange={e => setFormData({ ...formData, grade: e.target.value })}
                      className="form-select"
                    >
                      <option value="Pre-Primary">Pre-Primary (Nursery / KG)</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 11 Science">Grade 11 (Science)</option>
                      <option value="Grade 11 Commerce">Grade 11 (Commerce)</option>
                      <option value="Grade 11 Humanities">Grade 11 (Humanities)</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="form-select"
                    >
                      <option value="Admission Inquiry">New Admission</option>
                      <option value="Campus Tour">Book Campus Walkthrough</option>
                      <option value="Fee Structure">Fee & Scholarship</option>
                      <option value="General Query">General Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Questions or Additional Details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the student's current school, interests, or specific requirements..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-pill"
                  style={{
                    height: '44px',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '8px'
                  }}
                >
                  <Send size={15} />
                  <span>Submit Inquiry to Admissions Office</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Campus Contacts & Hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Campus Info Card */}
            <div
              className="analytics-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '30px',
                border: '1px solid #ECEEF6',
                boxShadow: '0 8px 30px rgba(27, 34, 56, 0.05)'
              }}
            >
              <h3 style={{ fontSize: '19px', color: '#172A55', fontWeight: 700, marginBottom: '18px' }}>
                Campus Location & Hours
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13.5px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={18} color="#FFA52E" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#172A55' }}>Campus Address:</strong>
                    <p style={{ color: '#555555', marginTop: '2px', lineHeight: 1.5 }}>
                      Al-Noor Campus Road, Knowledge City, Sector 12, New Delhi 110075, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Phone size={18} color="#1976ED" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#172A55' }}>Admissions Hotline:</strong>
                    <p style={{ color: '#555555', marginTop: '2px' }}>
                      +91 11 2345 6789 / +91 98765 43210
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Mail size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#172A55' }}>Official Email:</strong>
                    <p style={{ color: '#555555', marginTop: '2px' }}>
                      admissions@alnoor.edu / info@alnoor.edu
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Clock size={18} color="#6C5CE7" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#172A55' }}>Visiting Hours:</strong>
                    <p style={{ color: '#555555', marginTop: '2px' }}>
                      Monday – Saturday: 8:00 AM – 3:30 PM (Closed on Sundays)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Extensions Card */}
            <div
              className="analytics-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '30px',
                border: '1px solid #ECEEF6',
                boxShadow: '0 8px 30px rgba(27, 34, 56, 0.05)'
              }}
            >
              <h3 style={{ fontSize: '19px', color: '#172A55', fontWeight: 700, marginBottom: '16px' }}>
                Department Help Desks
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#F8FAFE', borderRadius: '8px' }}>
                  <span style={{ fontWeight: 600, color: '#172A55' }}>Principal's Secretarial Office:</span>
                  <span style={{ color: '#1976ED' }}>Ext. 101</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#F8FAFE', borderRadius: '8px' }}>
                  <span style={{ fontWeight: 600, color: '#172A55' }}>Accounts & Fee Treasury:</span>
                  <span style={{ color: '#1976ED' }}>Ext. 104</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#F8FAFE', borderRadius: '8px' }}>
                  <span style={{ fontWeight: 600, color: '#172A55' }}>School Bus Fleet Dispatch:</span>
                  <span style={{ color: '#1976ED' }}>Ext. 109</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#F8FAFE', borderRadius: '8px' }}>
                  <span style={{ fontWeight: 600, color: '#172A55' }}>Library & Examination Cell:</span>
                  <span style={{ color: '#1976ED' }}>Ext. 112</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ padding: '60px 32px 80px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '28px', color: '#172A55', fontWeight: 700 }}>
              Frequently Asked Questions (FAQ)
            </h2>
            <p style={{ fontSize: '14px', color: '#666666', marginTop: '6px' }}>
              Quick answers to common questions about admissions, fees, and campus life.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    border: '1px solid #ECEEF6',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 4px 16px rgba(27, 34, 56, 0.05)' : 'none'
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

      <PublicFooter />
    </div>
  );
};
