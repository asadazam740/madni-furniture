import './ProductCatalog.css';

const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    category: 'Living Room',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Oak Dining Table',
    category: 'Dining Room',
    price: 899,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Leather Armchair',
    category: 'Living Room',
    price: 649,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Walnut Bookshelf',
    category: 'Office',
    price: 449,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    name: 'Platform Bed',
    category: 'Bedroom',
    price: 799,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    name: 'Coffee Table',
    category: 'Living Room',
    price: 349,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&h=300&fit=crop',
  },
];

function ProductCatalog() {
  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <div className="catalog-header">
          <h2>Our Collection</h2>
          <p>Discover timeless pieces crafted for modern living</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button className="btn btn-secondary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCatalog;