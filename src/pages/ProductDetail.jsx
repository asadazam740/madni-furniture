import { useParams, useNavigate, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import '../styles/pages.css'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getProductById, products } = useProducts()
  const product = getProductById(parseInt(id))

  if (!product) {
    return (
      <div className="page product-detail-page">
        <div className="container">
          <div className="not-found">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/catalog" className="btn btn-primary">Back to Catalog</Link>
          </div>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="page product-detail-page">
      <div className="container">
        <Link to="/catalog" className="back-link">← Back to Catalog</Link>

        <div className="product-detail">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} className="product-image" />
            {product.featured && <span className="featured-badge">Featured</span>}
          </div>

          <div className="product-info-section">
            <div className="product-category">{product.category}</div>
            <h1>{product.name}</h1>
            
            <div className="product-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">(245 reviews)</span>
            </div>

            <div className="product-price">
              <span className="price">${product.price.toLocaleString()}</span>
              <span className="availability in-stock">In Stock</span>
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                <li>Premium materials and craftsmanship</li>
                <li>Modern ergonomic design</li>
                <li>Easy assembly and installation</li>
                <li>Durable construction</li>
                <li>5-year warranty included</li>
              </ul>
            </div>

            <div className="product-actions">
              <button className="btn btn-primary btn-lg">Add to Cart</button>
              <button className="btn btn-secondary">💬 Contact Seller</button>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">SKU:</span>
                <span>FUR-{product.id}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Shipping:</span>
                <span>Free shipping on orders over $500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="section related-products">
            <h2>Related Products</h2>
            <div className="products-grid">
              {relatedProducts.map(p => (
                <div key={p.id} className="product-card">
                  <img src={p.image} alt={p.name} />
                  <div className="product-info">
                    <h3>{p.name}</h3>
                    <p className="product-category">{p.category}</p>
                    <div className="product-footer">
                      <span className="price">${p.price}</span>
                      <Link to={`/product/${p.id}`} className="btn btn-small">View</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
