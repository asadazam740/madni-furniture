# 🚀 Setup & Development Guide

## Complete Setup Instructions

### Step 1: Initial Setup (First Time)

#### A. Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download **LTS version** (recommended)
3. Run the installer and follow prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

#### B. Install Project Dependencies
```bash
npm install
```

This will install all required packages including:
- React 18.3
- React Router 6
- Vite 6

#### C. Setup Environment File
```bash
# Copy example to local env
cp .env.example .env.local
```

Edit `.env.local` and set values:
```env
VITE_ADMIN_SECRET=my_admin_password_12345
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
```

---

### Step 2: Running the Application

#### Development Mode
```bash
npm run dev
```

Output:
```
  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Open http://localhost:5173 in your browser.

#### Production Build
```bash
npm run build
npm run preview
```

---

### Step 3: Using the Application

#### 🏠 Public Features (No Login Required)

**Home Page** (`/`)
- View featured furniture
- Learn about the store
- See key features

**Catalog** (`/catalog`)
- Search products
- Filter by category
- Sort by name or price
- Click to view details

**Product Details** (`/product/:id`)
- Full product information
- Specifications and features
- Related products
- Action buttons

**About** (`/about`)
- Company story
- Core values
- Awards and recognition

**Contact** (`/contact`)
- Contact form
- Phone & email
- Business hours
- Social links

#### 🔐 Authentication

**Login Page** (`/login`)

Option 1: Regular User
```
Email: demo@furniture.com
Password: any_password_here
```

Option 2: Admin User
```
Email: admin@furniture.com
Password: [Use VITE_ADMIN_SECRET from .env.local]
```

Option 3: Guest Access
- Click "Continue as Guest"
- Access public pages without login

#### 🎛️ Admin Dashboard (`/admin/dashboard`)

**Dashboard Overview**
- View statistics
- Quick action buttons
- Recent products list

**Manage Products** (`/admin/products`)
1. View all products in table format
2. Search products by name
3. Sort by name, price, or newest
4. Click "Edit" to modify
5. Click "Delete" to remove (confirm twice)

**Add New Product** (`/admin/products/new`)
1. Enter product name
2. Select category
3. Set price
4. Write description
5. Upload image (file or URL)
6. Check "Featured" if needed
7. Click "Add Product"

**Edit Product** (`/admin/products/edit/:id`)
- Same form as add
- Pre-filled with current data
- Click "Update Product"

**Image Upload** (`/admin/upload`)
1. **Drag & drop** images onto zone
2. Or click "Choose Files" button
3. View uploaded images
4. Click "Copy URL" to get image links
5. Use URLs in product form

---

## 📁 Project Files Overview

### Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with routing |
| `src/context/AuthContext.jsx` | User authentication |
| `src/context/ProductContext.jsx` | Product management |
| `src/pages/Home.jsx` | Landing page |
| `src/pages/Catalog.jsx` | Product listing |
| `src/pages/admin/Dashboard.jsx` | Admin overview |
| `.env.example` | Environment template |
| `.env.local` | Your local secrets (created) |

### Folder Structure

```
src/
├── components/        # Reusable UI components
├── context/          # Global state management
├── pages/            # Full page components
│   └── admin/        # Admin pages
├── styles/           # CSS files
│   ├── App.css       # Global styles
│   ├── pages.css     # Page styles
│   └── admin.css     # Admin styles
└── assets/           # Images, fonts (if any)
```

---

## 🎮 Common Tasks

### Task: Add a New Product

1. Navigate to `/admin/dashboard`
2. Click "Add New Product" button
3. Fill in form fields:
   - **Name**: "Modern Sectional Sofa"
   - **Category**: Select "Seating"
   - **Price**: 2499
   - **Description**: "Comfortable 3-piece sectional..."
   - **Image**: Upload or paste URL
   - **Featured**: Check if you want it on home page
4. Click "Add Product" button
5. Product appears in catalog immediately

### Task: Upload and Use an Image

1. Go to `/admin/upload`
2. Drag image onto the upload zone
3. Or click "Choose Files" and select image
4. Image appears in "Uploaded Images" grid
5. Click "Copy URL" on image card
6. Paste URL into product image field

### Task: Find and Edit a Product

1. Go to `/admin/products`
2. Use search box to find product
3. Or scroll through table
4. Click "Edit" button
5. Modify any fields
6. Click "Update Product"
7. Changes save immediately

### Task: Delete a Product

1. Go to `/admin/products`
2. Find product in table
3. Click "Delete" button (turns red)
4. Click "Confirm" to delete
5. Product removed from system

---

## 💾 Data Storage

### Where is Data Stored?

**Currently**: Browser localStorage
- Data saved locally in your browser
- Persists between sessions
- Lost if browser data is cleared

**To Clear Data**:
```
Chrome: Ctrl+Shift+Delete → Clear browsing data
Firefox: Ctrl+Shift+Delete → Clear recent history
Safari: Cmd+Y → Clear history
```

### Default Products

The app comes with 6 sample products:
1. Modern Sofa ($1,299)
2. Dining Table ($899)
3. Executive Desk ($749)
4. Accent Chair ($549)
5. Bed Frame ($1,199)
6. Bookshelf ($399)

---

## 🐛 Troubleshooting

### Issue: "Port 5173 already in use"

**Solution**: Use a different port
```bash
npm run dev -- --port 3000
```

### Issue: Images not showing

**Checklist**:
- [ ] Is image URL valid? Try in new tab
- [ ] Is format supported? (JPG, PNG, WebP)
- [ ] Is file under 5MB?
- [ ] Does URL have CORS enabled?
- [ ] Try refreshing browser (Ctrl+R)

### Issue: Admin access denied

**Checklist**:
- [ ] Using correct admin secret?
- [ ] Check `.env.local` for VITE_ADMIN_SECRET
- [ ] Using admin secret as PASSWORD (not email)
- [ ] Is value set correctly in .env.local?

### Issue: Lost all my products!

**Potential causes**:
- [ ] Cleared browser cache/localStorage
- [ ] Using private/incognito window
- [ ] Different browser than before
- [ ] localStorage disabled in browser

**Recovery**:
- Switch back to original browser
- Or restore from browser history if recent

### Issue: npm install fails

**Solution**:
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 🔐 Security Tips

### Protecting Your Data

1. **Don't share `.env.local`**
   - Contains sensitive information
   - Never commit to version control
   - Each developer needs own copy

2. **Use strong admin secret**
   - At least 12 characters
   - Mix of letters, numbers, symbols
   - Example: `F@rn1tur3_Adm1n_2024!`

3. **Backup important products**
   - Export data before major changes
   - Browser data can be lost
   - Consider using Supabase backup

### Environment Variable Best Practices

```env
# ❌ DON'T DO THIS
VITE_ADMIN_SECRET=admin123
VITE_SUPABASE_KEY=public_key

# ✅ DO THIS
VITE_ADMIN_SECRET=aK7@mP2xL9vQ4bR1sD8eF
VITE_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📦 Dependencies

### Core Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.20.0"
}
```

### Development Tools
```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^6.0.5"
}
```

### Adding New Packages
```bash
# Install new package
npm install package-name

# Save as dev dependency
npm install --save-dev package-name

# Remove package
npm uninstall package-name
```

---

## 🚀 Next Steps

### For Development
1. Familiarize yourself with project structure
2. Try adding/editing a product
3. Upload some test images
4. Explore the code in `/src`
5. Make small modifications to test

### For Production
1. Create `.env.production` with prod secrets
2. Run `npm run build` to create optimized build
3. Deploy `dist` folder to hosting
4. Setup Supabase backend (optional)
5. Configure domain and SSL

### For Supabase Integration
1. Create Supabase account at supabase.com
2. Create new project
3. Setup authentication and database
4. Update context files to use Supabase
5. Migrate data from localStorage

---

## 📚 Learning Resources

### React
- Official Docs: https://react.dev
- React Router: https://reactrouter.com
- Hooks Guide: https://react.dev/reference/react

### Vite
- Official Docs: https://vitejs.dev
- Troubleshooting: https://vitejs.dev/guide/troubleshooting.html

### Supabase (for backend)
- Docs: https://supabase.com/docs
- Auth: https://supabase.com/docs/guides/auth
- Database: https://supabase.com/docs/guides/database

### CSS & Design
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
- Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

---

## 🤝 Tips for Success

1. **Keep .env.local safe** - Never share or commit
2. **Test in different browsers** - Ensure compatibility
3. **Use browser dev tools** - Debug issues easily
4. **Check console for errors** - F12 → Console tab
5. **Backup important data** - Export before major changes
6. **Keep dependencies updated** - Run `npm update` periodically

---

## 📞 Support

If you encounter issues:

1. **Check the troubleshooting section** above
2. **Read error messages carefully** - they usually explain the problem
3. **Check browser console** - F12 → Console for JavaScript errors
4. **Verify .env.local** - Make sure all variables are set
5. **Clear cache and restart** - Often fixes mysterious issues

---

**Version**: 1.0.0  
**Last Updated**: May 2026  
**Maintained by**: Development Team
