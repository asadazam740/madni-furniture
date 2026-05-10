import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import '../styles/pages.css'

export default function Home() {
  const { getFeaturedProducts } = useProducts()
  const featured = getFeaturedProducts()

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Furniture for Modern Living</h1>
          <p>Discover our curated collection of high-quality, contemporary furniture</p>
          <Link to="/catalog" className="btn btn-primary btn-lg">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-section">
        <div className="container">
          <h2>Featured Collection</h2>
          <p className="section-subtitle">Handpicked selections for your home</p>
          <div className="products-grid">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section features-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Premium Quality</h3>
              <p>Handcrafted furniture from top designers and manufacturers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>Quick delivery to your doorstep with tracking</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>Satisfaction Guaranteed</h3>
              <p>30-day money-back guarantee on all purchases</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Shopping</h3>
              <p>Safe and secure payment processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Transform Your Space Today</h2>
          <p>Explore thousands of furniture options to match your style</p>
          <Link to="/catalog" className="btn btn-primary btn-lg">
            Browse All Products
          </Link>
        </div>
      </section>
    </div>
  )
}
