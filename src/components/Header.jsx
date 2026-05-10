import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Header.css'

function Header() {
  const { user, isAdmin, logout } = useAuth()

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <h1>🛋️ Furniture Store</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/catalog" className="nav-link">Catalog</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
          {isAdmin && (
            <>
              <Link to="/admin/dashboard" className="nav-link admin-link">
                ⚙️ Admin
              </Link>
              <button onClick={logout} className="btn btn-small">Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header