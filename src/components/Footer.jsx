import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">Echelon Business, LLC</div>
      <p className="footer-tagline">Serving Cuyahoga &amp; Lorain County</p>
      <nav className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <p className="footer-copy">© {new Date().getFullYear()} Echelon Business, LLC. All Rights Reserved.</p>
    </footer>
  )
}
