import { useState } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Reach Out',
    desc: 'Call, text, or email us with your business name, location, and the type of service you need.',
  },
  {
    num: '02',
    title: 'Free Walkthrough & Quote',
    desc: "We'll assess your facility and provide a custom, no-obligation quote tailored to your needs.",
  },
  {
    num: '03',
    title: 'Schedule Your Clean',
    desc: 'Pick a date and time that works for your business — including evenings and weekends.',
  },
  {
    num: '04',
    title: 'Enjoy the Results',
    desc: 'Our team delivers a spotless clean, every visit. Satisfaction is always guaranteed.',
  },
]

const FAQS = [
  {
    q: 'What areas do you serve?',
    a: 'We serve commercial clients throughout Cuyahoga and Lorain County, Ohio. Not sure if we cover your area? Give us a call and we\'ll let you know.',
  },
  {
    q: 'Are you insured and bonded?',
    a: 'Yes. Echelon Business, LLC is fully insured and bonded, giving you complete peace of mind on every visit.',
  },
  {
    q: 'What types of businesses do you clean?',
    a: 'We clean offices, churches, car dealerships, dental and doctor offices, apartment buildings, properties managed by property management companies, and restaurants.',
  },
  {
    q: 'How often should I schedule commercial cleaning?',
    a: 'It depends on your facility\'s size and foot traffic. Most offices benefit from weekly or bi-weekly cleaning, while high-traffic spaces like restaurants may need daily service. We\'ll recommend a plan after your walkthrough.',
  },
  {
    q: 'Do you supply your own cleaning products and equipment?',
    a: 'Yes — we bring everything needed to complete the job. All products are professional-grade and safe for your staff and guests.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply call, text, or email us using the contact info above. We\'ll set up a free walkthrough and have a quote ready for you quickly.',
  },
]

export default function Contact() {
  const [open, setOpen] = useState(null)

  function toggle(i) {
    setOpen(open === i ? null : i)
  }

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <p className="page-header-label">Echelon Business, LLC</p>
        <h1>
          <span className="display display-white">Get In</span>
          <span className="script script-white">Touch</span>
        </h1>
        <p className="page-header-sub">
          Ready to schedule a clean or get a free quote? Reach out directly by
          phone, text, or email — we respond quickly.
        </p>
      </div>

      {/* ── CONTACT CARDS ── */}
      <section className="sec-white" style={{ paddingBottom: 0 }}>
        <p className="sec-label">Contact Us Directly</p>
        <h2>
          <span className="sec-display">Book a Service</span>
        </h2>

        <div className="contact-grid" style={{ marginTop: 48 }}>
          <div className="contact-card">
            <div className="cc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <p className="cc-type">Phone</p>
            <p className="cc-value">440-703-8286</p>
            <p className="cc-note">Call us Monday – Saturday, 8 AM – 6 PM to speak with our team directly.</p>
            <a href="tel:4407038286" className="cc-link">Call Now</a>
          </div>

          <div className="contact-card">
            <div className="cc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </div>
            <p className="cc-type">Text Us</p>
            <p className="cc-value">440-703-8286</p>
            <p className="cc-note">Prefer to text? Send us a message anytime and we'll get back to you fast.</p>
            <a href="sms:4407038286" className="cc-link">Send a Text</a>
          </div>

          <div className="contact-card">
            <div className="cc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </div>
            <p className="cc-type">Email</p>
            <p className="cc-value">echelonbusiness28@gmail.com</p>
            <p className="cc-note">Send us your facility details and we'll follow up with a custom quote.</p>
            <a href="mailto:echelonbusiness28@gmail.com" className="cc-link">Send Email</a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sec-dark">
        <p className="sec-label">The Process</p>
        <h2>
          <span className="sec-display">How It</span>
          <span className="sec-script">Works</span>
        </h2>

        <div className="steps-grid">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="step-card">
              <span className="step-num">{num}</span>
              <p className="step-title">{title}</p>
              <p className="step-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec-light">
        <p className="sec-label">FAQ</p>
        <h2>
          <span className="sec-display">Common</span>
          <span className="sec-script">Questions</span>
        </h2>

        <div className="faq-list">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <button className="faq-btn" onClick={() => toggle(i)}>
                {q}
                <span className={`faq-chevron${open === i ? ' open' : ''}`}>+</span>
              </button>
              <div className={`faq-body${open === i ? ' open' : ''}`}>
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
