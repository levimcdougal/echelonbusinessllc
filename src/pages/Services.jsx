import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import ser1Img from '../assets/ser1.jpg'
import ser2Img from '../assets/ser2.jpg'

const CLIENTS = [
  'Offices', 'Churches', 'Car Dealerships',
  'Dentist Offices', "Doctor's Offices",
  'Apartment Buildings', 'Property Management Companies', 'Restaurants',
]

export default function Services() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <p className="page-header-label">Echelon Business, LLC</p>
        <h1>
          <span className="display display-white">Our Cleaning</span>
          <span className="script script-white">Services</span>
        </h1>
        <p className="page-header-sub">
          Professional commercial cleaning and window washing for businesses
          across Cuyahoga and Lorain County. Every space, every time.
        </p>
      </div>

      {/* ── SERVICE BLOCKS ── */}
      <section className="sec-white">

        {/* Commercial Cleaning */}
        <div className="service-block">
          <div className="sb-body">
            <p className="sb-num">01</p>
            <p className="sb-name">Commercial Cleaning</p>
            <p className="sb-desc">
              We provide thorough, reliable commercial cleaning programs built
              around your schedule and your facility's unique needs. Whether you
              need daily maintenance, weekly deep cleans, or a one-time refresh,
              our team delivers consistently spotless results — so your staff
              works in a clean environment and your clients are always impressed.
            </p>
            <p className="sb-desc">
              All cleaning is performed using professional-grade, safe products.
              We are fully insured and bonded, and every member of our team is
              background-checked and trained to the highest standards.
            </p>
            <p className="sb-clients-label">Who We Serve</p>
            <div className="sb-tags">
              {CLIENTS.map(c => (
                <span key={c} className="sb-tag">{c}</span>
              ))}
            </div>
            <Link to="/contact" className="btn-outline">Request a Quote</Link>
          </div>
          <div className="sb-image">
            <img
              src={ser1Img}
              alt="Commercial cleaning service"
            />
          </div>
        </div>

        {/* Window Washing */}
        <div className="service-block reverse">
          <div className="sb-body">
            <p className="sb-num">02</p>
            <p className="sb-name">Professional Commercial Window Washing</p>
            <p className="sb-desc">
              Crystal-clear windows are one of the most visible signals of a
              well-maintained, professional business. Our commercial window
              washing service handles interior and exterior glass of all sizes —
              from storefront windows and office towers to dealership showroom
              glass and church windows.
            </p>
            <p className="sb-desc">
              We work safely at height using proper equipment and techniques,
              delivering a streak-free finish every visit. Flexible scheduling
              ensures minimal disruption to your business operations.
            </p>
            <p className="sb-clients-label">Who We Serve</p>
            <div className="sb-tags">
              {['Offices', 'Storefronts', 'Car Dealerships', 'Churches',
                'Apartment Buildings', 'Restaurants', 'Medical Facilities'].map(c => (
                <span key={c} className="sb-tag">{c}</span>
              ))}
            </div>
            <Link to="/contact" className="btn-outline">Request a Quote</Link>
          </div>
          <div className="sb-image">
            <img
              src={ser2Img}
              alt="Professional window washing"
            />
          </div>
        </div>

      </section>

      <CtaBanner
        heading="Let's Build Your Cleaning Plan"
        body="Every facility is different. Tell us about your space and we'll put together a custom cleaning program that fits your schedule and budget."
        label="Contact Us Today"
      />
    </>
  )
}
