# Advanced Furniture E-Commerce Website 🛋️

A modern, full-featured furniture e-commerce platform built with **React + Vite**. Features a public-facing storefront and a comprehensive admin dashboard for product and image management.

## ✨ Features

### Public-Facing Website
- ✅ **Home Page** - Hero section with featured products
- ✅ **Product Catalog** - Browse all furniture with filtering and search
- ✅ **Product Details** - Individual product pages with full information
- ✅ **About Page** - Company information and values
- ✅ **Contact Page** - Contact form and information
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **User Authentication** - Login/Guest access

### Admin Dashboard
- ✅ **Dashboard Overview** - Real-time stats and quick actions
- ✅ **Product Management** - CRUD operations for products
- ✅ **Image Upload** - Drag-and-drop image uploader with preview
- ✅ **Image Gallery** - View and manage all product images
- ✅ **Admin Authentication** - Secure admin access with secret key
- ✅ **Image URL Generator** - Copy image URLs for external use

## 📁 Project Structure

```
furniture-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   └── ProductCard.jsx
│   ├── context/
│   │   ├── AuthContext.jsx          # User authentication state
│   │   └── ProductContext.jsx       # Product management state
│   ├── pages/
│   │   ├── Home.jsx                 # Hero + featured products
│   │   ├── Catalog.jsx              # Full product catalog
│   │   ├── ProductDetail.jsx        # Single product details
│   │   ├── About.jsx                # Company information
│   │   ├── Contact.jsx              # Contact & inquiry form
│   │   ├── Login.jsx                # Authentication page
│   │   └── admin/
│   │       ├── Dashboard.jsx        # Admin overview
│   │       ├── AdminProducts.jsx    # Product management table
│   │       ├── AdminProductForm.jsx # Add/edit product
│   │       └── AdminImageUpload.jsx # Image management
│   ├── styles/
│   │   ├── App.css                  # Global styles & variables
│   │   ├── pages.css                # Page component styles
│   │   └── admin.css                # Admin dashboard styles
│   ├── App.jsx                      # Main app with routing
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Root CSS
├── .env.example                     # Environment template
├── package.json                     # Dependencies
├── vite.config.js                   # Vite config
└── index.html                       # HTML template
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 16+** (Download from [nodejs.org](https://nodejs.org/))
- **npm** (comes with Node.js)

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your values:
   ```env
   VITE_ADMIN_SECRET=your_secret_admin_password_here
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🔐 Authentication Guide

### Default User Login
- **URL**: `/login`
- **Email**: Any email (e.g., `demo@furniture.com`)
- **Password**: Any password (when not admin mode)
- **Result**: Guest/User access to public pages

### Admin Access
- **URL**: `/login`
- **Email**: Any email (e.g., `admin@furniture.com`)
- **Password**: Use the value from `VITE_ADMIN_SECRET` in `.env.local`
- **Result**: Full access to admin dashboard at `/admin/dashboard`

### Admin Routes
```
/admin/dashboard          - Overview and statistics
/admin/products          - List all products
/admin/products/new      - Create new product
/admin/products/edit/:id - Edit existing product
/admin/upload            - Image upload and management
```

## 📊 Data & Storage

### Current Storage
- **localStorage** - All data persists in browser
- **Default Products** - 6 sample furniture items included
- **Images** - Stored as base64 or URLs

### Default Products
1. Modern Sofa - $1,299
2. Dining Table - $899
3. Executive Desk - $749
4. Accent Chair - $549
5. Bed Frame - $1,199
6. Bookshelf - $399

### Categories
- Seating
- Tables
- Office
- Bedroom
- Storage
- Decor

## 🎨 Styling System

### CSS Variables
```css
--color-primary: #2c3e50      /* Dark blue */
--color-secondary: #3498db    /* Bright blue */
--color-accent: #e74c3c       /* Red */
--color-success: #27ae60      /* Green */
--color-warning: #f39c12      /* Orange */
--color-danger: #e74c3c       /* Red */
--color-light: #ecf0f1        /* Light gray */
```

### Responsive Breakpoints
- **1200px+** - Desktop
- **768px - 1199px** - Tablet
- **480px - 767px** - Mobile
- **< 480px** - Small mobile

All components are fully responsive and mobile-friendly.

## 📱 Public Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page with hero and featured products |
| `/catalog` | Catalog | All products with search and filters |
| `/product/:id` | ProductDetail | Individual product page |
| `/about` | About | Company information |
| `/contact` | Contact | Contact form and info |
| `/login` | Login | User authentication |

## 🔧 Admin Features

### Product Management
- **Add Products** - Create with image, price, category
- **Edit Products** - Modify existing products
- **Delete Products** - Remove products (with confirmation)
- **Featured Products** - Mark items as featured
- **Search & Sort** - Find products quickly
- **Categories** - Organize by type

### Image Management
- **Drag & Drop Upload** - Easy file upload
- **Image Preview** - See images before use
- **URL Copy** - Quick URL copying
- **File Info** - View file size and type
- **Gallery View** - Browse all product images
- **Supported Formats** - JPG, PNG, WebP

### Dashboard Stats
- Total products count
- Featured items count
- Categories count
- System status

## 🔌 Supabase Integration (Ready)

The app is prepared for Supabase integration. When ready to add backend:

1. **Install Supabase**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Setup Environment**
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Update Contexts**
   - Modify `AuthContext.jsx` for Supabase Auth
   - Update `ProductContext.jsx` for database queries
   - Implement real-time synchronization

4. **Database Schema**
   ```sql
   -- Products table
   CREATE TABLE products (
     id BIGSERIAL PRIMARY KEY,
     name VARCHAR(255),
     category VARCHAR(100),
     price DECIMAL(10,2),
     description TEXT,
     image_url TEXT,
     featured BOOLEAN,
     created_at TIMESTAMP
   );

   -- Product images table
   CREATE TABLE product_images (
     id BIGSERIAL PRIMARY KEY,
     product_id BIGINT REFERENCES products,
     image_url TEXT,
     uploaded_at TIMESTAMP
   );
   ```

## 🛠️ Component API Reference

### AuthContext
```jsx
const { 
  user,           // Current user object
  isAdmin,        // Boolean - admin status
  loading,        // Boolean - auth loading
  login,          // Function - login user
  logout,         // Function - logout user
  loginAsGuest    // Function - guest access
} = useAuth()
```

### ProductContext
```jsx
const {
  products,                    // Array of all products
  loading,                     // Boolean - loading state
  error,                       // String - error message
  addProduct(product),         // Function - add new
  updateProduct(id, updates),  // Function - update
  deleteProduct(id),           // Function - delete
  getProductById(id),          // Function - get single
  getFeaturedProducts(),       // Function - get featured
  getProductsByCategory(cat),  // Function - filter by cat
  getCategories()              // Function - get all cats
} = useProducts()
```

## ✅ Form Inputs

### Product Form
- **Name** - Required, product title
- **Category** - Required, dropdown selection
- **Price** - Required, decimal number
- **Description** - Optional, product details
- **Image** - Required, file upload or URL
- **Featured** - Optional, checkbox

### Contact Form
- **Name** - Required
- **Email** - Required, email format
- **Phone** - Optional
- **Subject** - Required
- **Message** - Required, textarea

## 🎯 To-Do Features

Consider adding these features:
- [ ] Shopping cart
- [ ] Wishlist functionality
- [ ] Product reviews/ratings
- [ ] User profiles
- [ ] Order history
- [ ] Payment integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Product recommendations
- [ ] Advanced filtering
- [ ] Product variants (size, color, etc.)
- [ ] Bulk product import/export
- [ ] Analytics dashboard

## 🐛 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Images not displaying?
1. Check image URL is valid
2. Verify CORS settings for external images
3. Check browser console for errors
4. Try refreshing the page

### Admin access denied?
1. Verify `VITE_ADMIN_SECRET` in `.env.local`
2. Use exact secret as password
3. Check browser localStorage isn't blocking auth
4. Clear cookies and try again

### Lost data after refresh?
1. Data is in browser localStorage
2. Clear browser cache: Ctrl+Shift+Delete
3. Check browser dev tools > Application > localStorage
4. Don't use private/incognito mode (clears on close)

### Build fails?
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 Environment Variables

```env
# Supabase (Optional - for backend)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_public_anon_key

# Admin Configuration
VITE_ADMIN_SECRET=super_secret_admin_password

# API Settings
VITE_API_TIMEOUT=30000
VITE_APP_NAME=Furniture Store

# Image Configuration
VITE_MAX_IMAGE_SIZE=5242880
VITE_ALLOWED_IMAGE_TYPES=image/jpeg,image/png,image/webp

# Feature Flags
VITE_ENABLE_USER_REGISTRATION=true
VITE_ENABLE_COMMENTS=true
```

## 🔒 Security Notes

⚠️ **Critical Security Reminders:**

1. **Never commit `.env` files**
   - Add to `.gitignore`
   - Use `.env.example` as template
   - Each developer needs own `.env.local`

2. **Keep admin secret safe**
   - Don't hardcode in code
   - Use strong, random secret
   - Change periodically

3. **Validate input**
   - All forms validate on client
   - Add server validation in Supabase

4. **Secure images**
   - Validate file types
   - Check file sizes
   - Scan for malware before production

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Environment on Hosting
- Set env variables in platform
- Never expose secrets
- Use `.env.production` for production settings

## 📚 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3 | UI framework |
| React Router | 6.20 | Routing |
| Vite | 6.0 | Build tool |
| CSS3 | Latest | Styling |
| LocalStorage | Native | Data storage |

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support & Resources

- **React Docs** - [react.dev](https://react.dev)
- **Vite Docs** - [vitejs.dev](https://vitejs.dev)
- **React Router** - [reactrouter.com](https://reactrouter.com)
- **Supabase Docs** - [supabase.com/docs](https://supabase.com/docs)

## 📄 License

© 2026 Furniture Store. All rights reserved.

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**Maintained by**: Development Team
