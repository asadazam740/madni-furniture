import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/pages.css'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, isAdmin } = useAuth()
  const navigate = useNavigate()

  // If already admin, redirect to dashboard
  if (isAdmin) {
    return <Navigate to="/admin/dashboard" />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await login('admin@furniture.local', password)
      if (result.success && result.isAdmin) {
        navigate('/admin/dashboard')
      } else {
        setError('Invalid admin password')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page login-page">
      <div className="login-container">
        <div className="login-box">
          <h1>Admin Login</h1>
          <p className="login-subtitle">Enter admin password to access the admin panel</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">Admin Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
                placeholder="••••••••"
              />
              <small>Contact the administrator for the admin password</small>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-lg btn-full"
            >
              {loading ? 'Logging in...' : 'Login as Admin'}
            </button>
          </form>

          <div className="login-info">
            <h3>For Admin Users Only</h3>
            <p>This login is restricted to administrators only. Regular users can browse the website without logging in.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
