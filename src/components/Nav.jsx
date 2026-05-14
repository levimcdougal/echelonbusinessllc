import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <nav className="site-nav">
      <Link to="/" className="nav-logo" onClick={close}>
        Echelon Business, LLC
      </Link>
      <ul className="nav-links">
        <li><Link to="/"         className={pathname === '/'         ? 'active' : ''}>Home</Link></li>
        <li><Link to="/services" className={pathname === '/services'  ? 'active' : ''}>Services</Link></li>
        <li><Link to="/contact"  className={pathname === '/contact'   ? 'active' : ''}>Contact</Link></li>
      </ul>
      <button
        className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <div className="nav-mobile-menu">
          <Link to="/"         className={pathname === '/'         ? 'active' : ''} onClick={close}>Home</Link>
          <Link to="/services" className={pathname === '/services'  ? 'active' : ''} onClick={close}>Services</Link>
          <Link to="/contact"  className={pathname === '/contact'   ? 'active' : ''} onClick={close}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
