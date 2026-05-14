import { useState } from 'react'
import Nav from '../components/Nav'

const SERVICES = [
  'Standard Clean',
  'Deep Clean',
  'Move In / Out Clean',
  'Commercial Cleaning',
  'Post-Construction Clean',
]

export default function BookNow() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: '', date: '', time: '',
    address: '', notes: '',
  })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-frame">
      <div className="main-card">

        {/* ── Left: Image ── */}
        <div className="image-panel">
          <img
            src="https://picsum.photos/seed/clean-bedroom/900/1200"
            alt="Immaculate clean bedroom"
          />
          <div className="image-panel-overlay" />
          <div className="image-panel-caption">
            <h2>Trusted by 500+ families.</h2>
            <p>Fully insured, background-checked, and satisfaction guaranteed — every visit.</p>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="content-panel">
          <Nav />

          {submitted ? (
            <div className="hero-section" style={{ textAlign: 'left' }}>
              <p className="hero-eyebrow">You're all set</p>
              <h1>
                <span className="hero-display">Booking</span>
                <span className="hero-script">Confirmed!</span>
              </h1>
              <p style={{ marginTop: 24, fontSize: 14, lineHeight: 1.75, color: '#666', maxWidth: 360 }}>
                Thank you, {form.name.split(' ')[0] || 'there'}! We'll reach out within 24 hours
                to confirm your appointment details. We can't wait to make your
                space shine.
              </p>
            </div>
          ) : (
            <>
              <div className="hero-section" style={{ flex: 'none', paddingBottom: 0 }}>
                <p className="hero-eyebrow">Schedule your visit</p>
                <h1>
                  <span className="hero-display">Book Your</span>
                  <span className="hero-script">Clean</span>
                </h1>
              </div>

              <form className="form-section" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input
                      id="name" name="name" type="text"
                      className="form-input" placeholder="Jane Smith"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="form-input" placeholder="(555) 000-0000"
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>

                  <div className="form-group full">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email" name="email" type="email"
                      className="form-input" placeholder="jane@example.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>

                  <div className="form-group full">
                    <label className="form-label" htmlFor="service">Service Type</label>
                    <select
                      id="service" name="service"
                      className="form-select"
                      value={form.service} onChange={handleChange} required
                    >
                      <option value="" disabled>Select a service…</option>
                      {SERVICES.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Preferred Date</label>
                    <input
                      id="date" name="date" type="date"
                      className="form-input"
                      value={form.date} onChange={handleChange} required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="time">Preferred Time</label>
                    <select
                      id="time" name="time"
                      className="form-select"
                      value={form.time} onChange={handleChange} required
                    >
                      <option value="" disabled>Select a time…</option>
                      <option>8:00 AM</option>
                      <option>10:00 AM</option>
                      <option>12:00 PM</option>
                      <option>2:00 PM</option>
                      <option>4:00 PM</option>
                    </select>
                  </div>

                  <div className="form-group full">
                    <label className="form-label" htmlFor="address">Property Address</label>
                    <input
                      id="address" name="address" type="text"
                      className="form-input" placeholder="123 Main St, City, State"
                      value={form.address} onChange={handleChange} required
                    />
                  </div>

                  <div className="form-group full">
                    <label className="form-label" htmlFor="notes">Special Notes</label>
                    <textarea
                      id="notes" name="notes"
                      className="form-textarea"
                      placeholder="Pets, access instructions, areas to focus on…"
                      value={form.notes} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-filled">
                    Request Booking
                  </button>
                  <p className="form-note">
                    We'll confirm within 24 hours · No payment required today
                  </p>
                </div>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  )
}
