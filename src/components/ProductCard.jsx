import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
        {product.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="product-card-content">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description?.substring(0, 60)}...</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toLocaleString()}</span>
          <span className="product-action">View →</span>
        </div>
      </div>
    </Link>
  )
}
