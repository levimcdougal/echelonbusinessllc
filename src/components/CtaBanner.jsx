import { Link } from 'react-router-dom'

export default function CtaBanner({ heading, body, label, to = '/contact' }) {
  return (
    <div className="cta-banner">
      <div className="cta-banner-text">
        <h2>{heading}</h2>
        <p>{body}</p>
      </div>
      <Link to={to} className="cta-banner-btn">{label}</Link>
    </div>
  )
}
