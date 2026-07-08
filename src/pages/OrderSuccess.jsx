import React from 'react';
import { CheckCircle, Home } from 'lucide-react';

export default function OrderSuccess({ orderDetails, setPage, clearCart }) {
  return (
    <div className="page-container page-centered">
      <div className="success-box">
        <CheckCircle size={64} className="success-icon" />
        <h2>Order Successful!</h2>
        <p>Thank you for your purchase. Your order has been placed.</p>
        
        <div className="order-details-card">
          <div className="order-info-row">
            <span>Order ID:</span>
            <strong>{orderDetails.id}</strong>
          </div>
          <div className="order-info-row">
            <span>Date:</span>
            <strong>{orderDetails.date}</strong>
          </div>
          <div className="order-info-row">
            <span>Total Paid:</span>
            <strong>₹{orderDetails.total.toLocaleString('en-IN')}</strong>
          </div>
          
          <div className="order-items-list">
            <h4>Items:</h4>
            {orderDetails.items.map(item => (
              <div key={item.id} className="order-item-mini">
                <span>{item.quantity}x {item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="primary-btn" 
          onClick={() => {
            clearCart();
            setPage('home');
          }}
        >
          <Home size={18} /> Continue Shopping
        </button>
      </div>
    </div>
  );
}
