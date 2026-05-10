import '../styles/pages.css'

export default function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-header">
          <h1>About Us</h1>
          <p>Learn about our mission and values</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, our furniture company has been committed to providing
              high-quality, contemporary furniture that transforms houses into homes.
              What started as a small family business has grown into a trusted brand
              serving thousands of satisfied customers worldwide.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe that everyone deserves beautiful, functional furniture that
              doesn't break the bank. Our mission is to make premium furniture accessible
              while maintaining our commitment to quality, sustainability, and customer
              satisfaction.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality</h3>
                <p>We never compromise on materials or craftsmanship</p>
              </div>
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>Eco-friendly practices in production and packaging</p>
              </div>
              <div className="value-card">
                <h3>Customer First</h3>
                <p>Your satisfaction is our top priority</p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Constantly evolving designs for modern living</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Our team of designers, craftspeople, and customer service specialists
              are passionate about furniture and dedicated to helping you find the
              perfect pieces for your space.
            </p>
          </section>

          <section className="about-section">
            <h2>Awards & Recognition</h2>
            <ul>
              <li>✓ Best Furniture Design - Modern Living Awards 2023</li>
              <li>✓ Customer Choice Award - 5 years running</li>
              <li>✓ Sustainability Excellence - Green Business Initiative 2023</li>
              <li>✓ Top Rated - Industry Reviews 2024</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
