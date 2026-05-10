import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🛋️ Furniture Store</h3>
            <p>Premium furniture for modern living. Quality, style, and comfort in every piece.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/catalog">Catalog</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📍 123 Furniture Street</li>
              <li>Design City, DC 12345</li>
              <li>📧 support@furniturestore.com</li>
              <li>📞 +1 (555) 123-4567</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Furniture Store. All rights reserved. | <Link to="/privacy">Privacy</Link> | <Link to="/terms">Terms</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer