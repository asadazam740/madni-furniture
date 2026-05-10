import { useState } from 'react'
import '../styles/pages.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form will be handled with Supabase later
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="page contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3>Get in Touch</h3>
              <p>Have questions about our products or services? Reach out to us and we'll respond as soon as possible.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="icon">📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>123 Furniture Street<br/>Design City, DC 12345</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567<br/>Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>support@furniturestore.com<br/>info@furniturestore.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">🕐</span>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9AM - 6PM<br/>Saturday: 10AM - 4PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-buttons">
                  <a href="#" className="social-btn">Facebook</a>
                  <a href="#" className="social-btn">Instagram</a>
                  <a href="#" className="social-btn">Twitter</a>
                  <a href="#" className="social-btn">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
