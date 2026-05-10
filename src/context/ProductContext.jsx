import { createContext, useState, useContext, useEffect } from 'react'

const ProductContext = createContext(null)

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Modern Sofa',
    category: 'Seating',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
    description: 'Elegant modern sofa with clean lines and premium upholstery',
    featured: true
  },
  {
    id: 2,
    name: 'Dining Table',
    category: 'Tables',
    price: 899,
    image: 'https://images.unsplash.com/photo-1507370341519-ce0ac8b71feee?w=500&h=500&fit=crop',
    description: 'Spacious dining table perfect for family gatherings',
    featured: true
  },
  {
    id: 3,
    name: 'Executive Desk',
    category: 'Office',
    price: 749,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
    description: 'Professional desk with storage and ergonomic design',
    featured: false
  },
  {
    id: 4,
    name: 'Accent Chair',
    category: 'Seating',
    price: 549,
    image: 'https://images.unsplash.com/photo-1506498345457-ca4080802047?w=500&h=500&fit=crop',
    description: 'Stylish accent chair to complement any room',
    featured: true
  },
  {
    id: 5,
    name: 'Bed Frame',
    category: 'Bedroom',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1505693314967-38190b9ae38d?w=500&h=500&fit=crop',
    description: 'Premium bed frame with integrated storage',
    featured: true
  },
  {
    id: 6,
    name: 'Bookshelf',
    category: 'Storage',
    price: 399,
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=500&h=500&fit=crop',
    description: 'Contemporary bookshelf with adjustable shelves',
    featured: false
  }
]

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('products')
    return stored ? JSON.parse(stored) : DEFAULT_PRODUCTS
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addProduct = (product) => {
    try {
      const newProduct = {
        ...product,
        id: Date.now(),
        featured: product.featured || false
      }
      setProducts(prev => [...prev, newProduct])
      return { success: true, product: newProduct }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const updateProduct = (id, updates) => {
    try {
      setProducts(prev =>
        prev.map(p => p.id === id ? { ...p, ...updates } : p)
      )
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const deleteProduct = (id) => {
    try {
      setProducts(prev => prev.filter(p => p.id !== id))
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const getProductById = (id) => {
    return products.find(p => p.id === id)
  }

  const getFeaturedProducts = () => {
    return products.filter(p => p.featured)
  }

  const getProductsByCategory = (category) => {
    return products.filter(p => p.category === category)
  }

  const getCategories = () => {
    return [...new Set(products.map(p => p.category))]
  }

  return (
    <ProductContext.Provider value={{
      products,
      loading,
      error,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductById,
      getFeaturedProducts,
      getProductsByCategory,
      getCategories
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider')
  }
  return context
}
