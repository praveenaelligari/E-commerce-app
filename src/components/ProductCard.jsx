import React from 'react';
import { Heart, ShoppingBag, Plus, Minus } from 'lucide-react';

export default function ProductCard({ product, isFavorite, onToggleFavorite, cartQuantity, onUpdateQuantity }) {
  // Format as Rupees
  const formatRupees = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.discount > 0 && (
          <span className="discount-badge">{product.discount}% OFF</span>
        )}
        {product.category && (
          <span className="category-badge">{product.category}</span>
        )}
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label="Toggle Favorite"
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      </div>
      
      <div className="product-info">
        <div>
          <span className="brand-name">{product.brand}</span>
          <h3 className="product-title">{product.name}</h3>
        </div>
        
        <div className="price-container">
          <span className="price-current">{formatRupees(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="price-original">{formatRupees(product.originalPrice)}</span>
          )}
        </div>
        
        {cartQuantity > 0 ? (
          <div className="quantity-controls inline-qty mt-auto">
            <button className="qty-btn" onClick={() => onUpdateQuantity(product, -1)}><Minus size={16}/></button>
            <span className="qty-count">{cartQuantity}</span>
            <button className="qty-btn" onClick={() => onUpdateQuantity(product, 1)}><Plus size={16}/></button>
          </div>
        ) : (
          <button className="add-to-cart-btn" onClick={() => onUpdateQuantity(product, 1)}>
            <ShoppingBag size={18} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
