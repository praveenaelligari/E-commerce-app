import React from 'react';
import { Search, Heart, ShoppingCart, Moon, Sun, User, Info } from 'lucide-react';

export default function Navbar({ 
  searchQuery, 
  onSearchChange, 
  favoritesCount, 
  cartCount, 
  isDarkMode, 
  toggleDarkMode,
  onCartClick,
  onFavoritesClick,
  setPage
}) {
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setPage('home')} style={{cursor: 'pointer'}}>KICKS.</div>
      
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search for clothes, jewelry, sneakers..." 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="nav-actions">
        <button className="icon-button" onClick={() => setPage('help')} aria-label="Help">
          <Info size={20} />
        </button>
        <button className="icon-button" onClick={() => setPage('auth')} aria-label="Login">
          <User size={20} />
        </button>
        <button className="icon-button" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="icon-button" onClick={onFavoritesClick} aria-label="Wishlist">
          <Heart size={20} />
          {favoritesCount > 0 && <span className="badge">{favoritesCount}</span>}
        </button>
        
        <button className="icon-button" onClick={onCartClick} aria-label="Cart">
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}
