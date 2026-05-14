import img1 from '../assets/IMG1.jpg'
import img2 from '../assets/IMG2.jpg'
import img3 from '../assets/IMG3.jpg'
import img4 from '../assets/IMG4.jpg'
import img5 from '../assets/IMG5.jpg'
import img6 from '../assets/IMG6.jpg'
import img7 from '../assets/IMG7.jpg'

const IMAGES = [img1, img2, img3, img4, img5, img6, img7]

export default function PhotoMarquee() {
  const doubled = [...IMAGES, ...IMAGES]

  return (
    <section className="marquee-section">
      <div className="marquee-header">
        <p className="sec-label" style={{ color: 'var(--gray)' }}>Gallery</p>
        <h2>
          <span className="sec-display">Spaces We've</span>
          <span className="sec-script">Transformed</span>
        </h2>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((src, i) => (
            <img key={i} src={src} alt="" className="marquee-img" />
          ))}
        </div>
      </div>
    </section>
  )
}
