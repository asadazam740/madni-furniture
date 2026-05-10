import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Auto-login as guest or check for admin session
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user')
        const storedAdmin = localStorage.getItem('isAdmin')
        
        if (storedUser) {
          setUser(JSON.parse(storedUser))
          setIsAdmin(storedAdmin === 'true')
        } else {
          // Auto-login regular users as guests
          const guestUser = { id: 'guest', email: 'guest@furniture.local', name: 'Guest' }
          setUser(guestUser)
          setIsAdmin(false)
          localStorage.setItem('user', JSON.stringify(guestUser))
          localStorage.setItem('isAdmin', 'false')
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email, password) => {
    // Will be replaced with Supabase auth
    try {
      const userData = { id: '1', email, name: email.split('@')[0] }
      const adminSecret = import.meta.env.VITE_ADMIN_SECRET
      const isAdminUser = password === adminSecret

      setUser(userData)
      setIsAdmin(isAdminUser)
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('isAdmin', isAdminUser ? 'true' : 'false')
      
      return { success: true, isAdmin: isAdminUser }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    setIsAdmin(false)
    localStorage.removeItem('user')
    localStorage.removeItem('isAdmin')
  }

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
