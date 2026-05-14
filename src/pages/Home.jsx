import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import PhotoMarquee from '../components/PhotoMarquee'
import heroImg from '../assets/home.jpg'

const WHY = [
  {
    num: '01',
    title: 'Fully Insured & Bonded',
    desc: 'Complete peace of mind. Every clean is covered so your business is always protected.',
  },
  {
    num: '02',
    title: 'Locally Owned & Operated',
    desc: 'Proudly serving Cuyahoga and Lorain County with a team that treats your space like our own.',
  },
  {
    num: '03',
    title: 'Flexible Scheduling',
    desc: 'We work around your hours — evenings, weekends, and early mornings available.',
  },
  {
    num: '04',
    title: 'Satisfaction Guaranteed',
    desc: "Not happy with something? We'll come back and make it right — no questions asked.",
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="hero-frame">
        <div className="hero-card">
          <div className="hero-image">
            <img
              src={heroImg}
              alt="Clean commercial space"
            />
            <div className="hero-image-overlay" />
            <div className="hero-image-caption">
              <span>Cuyahoga &amp; Lorain County</span>
              <p>Commercial Cleaning &amp; Window Washing</p>
            </div>
          </div>

          <div className="hero-content">
            <p className="hero-eyebrow">Professional Cleaning Services</p>
            <div className="hero-title">
              <span className="display">Professional Commercial</span>
              <span className="display">Cleaning for Every Space</span>
            </div>
            <p className="hero-desc">
              Expert cleaning and window washing for offices, churches,
              dealerships, medical offices, restaurants, and property management
              companies across Northeast Ohio.
            </p>
            <Link to="/contact" className="btn-dark">Get a Free Quote</Link>
          </div>
        </div>
      </div>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="sec-dark">
        <p className="sec-label">What We Offer</p>
        <h2>
          <span className="sec-display">Our</span>
          <span className="sec-script">Services</span>
        </h2>

        <div className="preview-grid">
          <div className="preview-card">
            <div className="preview-icon">✦</div>
            <p className="preview-name">Commercial Cleaning</p>
            <p className="preview-desc">
              Comprehensive interior cleaning programs tailored to your facility.
              We service offices, churches, car dealerships, medical and dental
              offices, apartment buildings, property management companies, and
              restaurants — delivering a consistently spotless environment for
              your staff and customers.
            </p>
            <Link to="/services" className="btn-outline-light">Learn More</Link>
          </div>

          <div className="preview-card">
            <div className="preview-icon">◈</div>
            <p className="preview-name">Commercial Window Washing</p>
            <p className="preview-desc">
              Professional exterior and interior window washing that leaves every
              pane streak-free and crystal clear. First impressions matter —
              clean windows signal a professional, well-maintained business to
              every client who walks through your door.
            </p>
            <Link to="/services" className="btn-outline-light">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="sec-light">
        <p className="sec-label">Why Choose Us</p>
        <h2>
          <span className="sec-display">The Echelon</span>
          <span className="sec-script">Difference</span>
        </h2>

        <div className="why-grid">
          {WHY.map(({ num, title, desc }) => (
            <div key={num} className="why-card">
              <span className="why-num">{num}</span>
              <p className="why-title">{title}</p>
              <p className="why-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <PhotoMarquee />

      <CtaBanner
        heading="Ready for a Cleaner Space?"
        body="Serving Cuyahoga & Lorain County. Contact us today for a free walkthrough and custom quote — no obligation."
        label="Get a Free Quote"
      />
    </>
  )
}
