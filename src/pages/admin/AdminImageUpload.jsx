import { useState, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useProducts } from '../../context/ProductContext'
import '../../styles/admin.css'

export default function AdminImageUpload() {
  const { isAdmin } = useAuth()
  const { products } = useProducts()
  const fileInputRef = useRef(null)
  const [uploadedImages, setUploadedImages] = useState([])
  const [dragActive, setDragActive] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  if (!isAdmin) {
    return <Navigate to="/login" />
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    handleFiles(files)
  }

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setUploadedImages(prev => [...prev, {
            id: Date.now() + i,
            url: e.target.result,
            name: file.name,
            size: file.size,
            type: file.type
          }])
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleInputChange = (e) => {
    handleFiles(e.target.files)
  }

  const handleRemoveImage = (id) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id))
  }

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url)
    alert('Image URL copied!')
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <h1>Image Management</h1>

        <div className="upload-section">
          <h2>Upload Images</h2>

          <div
            className={`drag-drop-zone ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="drag-drop-content">
              <span className="upload-icon">📸</span>
              <h3>Drag & Drop Images</h3>
              <p>or click to browse files</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleInputChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn btn-primary"
              type="button"
            >
              Choose Files
            </button>
          </div>

          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${uploadProgress}%` }}>
                {uploadProgress}%
              </div>
            </div>
          )}
        </div>

        <div className="uploaded-images-section">
          <h2>Uploaded Images ({uploadedImages.length})</h2>

          {uploadedImages.length > 0 ? (
            <div className="images-grid">
              {uploadedImages.map(img => (
                <div key={img.id} className="image-card">
                  <img src={img.url} alt={img.name} className="image-thumbnail" />
                  <div className="image-info">
                    <p className="image-name" title={img.name}>{img.name}</p>
                    <p className="image-size">{(img.size / 1024).toFixed(2)} KB</p>
                  </div>
                  <div className="image-actions">
                    <button
                      onClick={() => handleCopyUrl(img.url)}
                      className="btn btn-small"
                      title="Copy URL"
                    >
                      📋 Copy URL
                    </button>
                    <button
                      onClick={() => handleRemoveImage(img.id)}
                      className="btn btn-small btn-danger"
                    >
                      🗑️ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No images uploaded yet. Upload some to get started!</p>
            </div>
          )}
        </div>

        <div className="product-images-section">
          <h2>Product Images Gallery</h2>
          <p>Current images in use by products:</p>

          {products.length > 0 ? (
            <div className="images-grid">
              {products.map(product => (
                <div key={product.id} className="image-card">
                  <img src={product.image} alt={product.name} className="image-thumbnail" />
                  <div className="image-info">
                    <p className="image-name">{product.name}</p>
                    <p className="image-size">{product.category}</p>
                  </div>
                  <div className="image-actions">
                    <button
                      onClick={() => handleCopyUrl(product.image)}
                      className="btn btn-small"
                    >
                      📋 Copy URL
                    </button>
                    <a href={`/admin/products/edit/${product.id}`} className="btn btn-small">
                      ✎ Edit
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No products with images yet.</p>
          )}
        </div>

        <div className="image-tips">
          <h3>📝 Image Upload Tips</h3>
          <ul>
            <li>Recommended image size: 500x500 pixels</li>
            <li>Maximum file size: 5MB</li>
            <li>Supported formats: JPG, PNG, WebP</li>
            <li>For best results, use high-quality product photos</li>
            <li>Images should have good lighting and clear focus</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
