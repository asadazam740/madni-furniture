import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useProducts } from '../../context/ProductContext'
import '../../styles/admin.css'

export default function AdminDashboard() {
  const { isAdmin, user } = useAuth()
  const { products, getCategories } = useProducts()

  if (!isAdmin) {
    return <Navigate to="/login" />
  }

  const categories = getCategories()
  const totalProducts = products.length
  const featuredProducts = products.filter(p => p.featured).length

  return (
    <div className="admin-page">
      <div className="admin-container">
        <h1>Admin Dashboard</h1>
        <p className="admin-welcome">Welcome, {user?.name}</p>

        <div className="dashboard-grid">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-content">
              <h3>Total Products</h3>
              <p className="stat-number">{totalProducts}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3>Featured Items</h3>
              <p className="stat-number">{featuredProducts}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📂</div>
            <div className="stat-content">
              <h3>Categories</h3>
              <p className="stat-number">{categories.length}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>Status</h3>
              <p className="stat-number">Active</p>
            </div>
          </div>
        </div>

        <div className="dashboard-sections">
          <section className="dashboard-section">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <a href="/admin/products" className="btn btn-primary">
                📋 Manage Products
              </a>
              <a href="/admin/products/new" className="btn btn-primary">
                ➕ Add New Product
              </a>
              <a href="/admin/upload" className="btn btn-primary">
                📸 Image Upload
              </a>
              <a href="/admin/categories" className="btn btn-secondary">
                📂 Manage Categories
              </a>
            </div>
          </section>

          <section className="dashboard-section">
            <h2>Recent Products</h2>
            {products.length > 0 ? (
              <div className="recent-products-list">
                {products.slice(-5).reverse().map(product => (
                  <div key={product.id} className="product-list-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-list-info">
                      <h4>{product.name}</h4>
                      <p>{product.category}</p>
                    </div>
                    <span className="product-price">${product.price}</span>
                    <a href={`/admin/products/edit/${product.id}`} className="btn btn-small">Edit</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>No products yet. <a href="/admin/products/new">Add one now</a></p>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
