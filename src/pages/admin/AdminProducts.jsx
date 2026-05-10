import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useProducts } from '../../context/ProductContext'
import '../../styles/admin.css'

export default function AdminProducts() {
  const { isAdmin } = useAuth()
  const { products, deleteProduct } = useProducts()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  if (!isAdmin) {
    return <Navigate to="/login" />
  }

  let filtered = products

  if (searchTerm) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  if (sortBy === 'name') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy === 'price') {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'newest') {
    filtered = [...filtered].sort((a, b) => b.id - a.id)
  }

  const handleDelete = (id) => {
    if (deleteConfirm === id) {
      deleteProduct(id)
      setDeleteConfirm(null)
    } else {
      setDeleteConfirm(id)
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Manage Products</h1>
          <Link to="/admin/products/new" className="btn btn-primary">
            ➕ Add New Product
          </Link>
        </div>

        <div className="admin-controls">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select-input"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        <div className="admin-table-wrapper">
          {filtered.length > 0 ? (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Featured</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(product => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt={product.name} className="table-thumbnail" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>${product.price}</td>
                    <td>
                      <span className={`badge ${product.featured ? 'badge-success' : 'badge-gray'}`}>
                        {product.featured ? '✓ Yes' : 'No'}
                      </span>
                    </td>
                    <td className="table-actions">
                      <Link to={`/admin/products/edit/${product.id}`} className="btn btn-small">
                        ✎ Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className={`btn btn-small ${deleteConfirm === product.id ? 'btn-danger' : 'btn-secondary'}`}
                      >
                        {deleteConfirm === product.id ? '⚠️ Confirm' : '🗑️ Delete'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="empty-state">
              <p>No products found</p>
              <Link to="/admin/products/new" className="btn btn-primary">
                Create your first product
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
