import { useState, useEffect } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useProducts } from '../../context/ProductContext'
import '../../styles/admin.css'

export default function AdminProductForm() {
  const { isAdmin } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()
  const { getProductById, addProduct, updateProduct } = useProducts()

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    description: '',
    featured: false
  })
  const [error, setError] = useState('')
  const [imagePreview, setImagePreview] = useState('')

  const categories = ['Seating', 'Tables', 'Office', 'Bedroom', 'Storage', 'Decor']

  useEffect(() => {
    if (id) {
      const product = getProductById(parseInt(id))
      if (product) {
        setFormData(product)
        setImagePreview(product.image)
      }
    }
  }, [id, getProductById])

  if (!isAdmin) {
    return <Navigate to="/login" />
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result
        }))
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.category || !formData.price || !formData.image) {
      setError('Please fill in all required fields')
      return
    }

    try {
      if (id) {
        updateProduct(parseInt(id), formData)
      } else {
        addProduct(formData)
      }
      navigate('/admin/products')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <h1>{id ? 'Edit Product' : 'Add New Product'}</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-section">
            <h2>Product Information</h2>

            <div className="form-group">
              <label htmlFor="name">Product Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="e.g., Modern Sofa"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="price">Price ($) *</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="999"
                  step="0.01"
                  min="0"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-input"
                rows="4"
                placeholder="Product description..."
              ></textarea>
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="checkbox-input"
              />
              <label htmlFor="featured">Mark as Featured Product</label>
            </div>
          </div>

          <div className="form-section">
            <h2>Product Image</h2>

            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="image">Upload Image *</label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="file-input"
                  required={!imagePreview}
                />
                <span>Choose file or paste image URL</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Or paste image URL</label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, image: e.target.value }))
                  setImagePreview(e.target.value)
                }}
                className="form-input"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-lg">
              {id ? '💾 Update Product' : '➕ Add Product'}
            </button>
            <a href="/admin/products" className="btn btn-secondary btn-lg">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
