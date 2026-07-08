import React from 'react';
import { MessageSquare, Phone, Mail, HelpCircle } from 'lucide-react';

export default function HelpSupport() {
  return (
    <div className="page-container max-w-4xl">
      <div className="help-header">
        <HelpCircle size={48} className="help-icon" />
        <h2>Help & Support</h2>
        <p>How can we help you today?</p>
      </div>

      <div className="help-grid">
        <div className="help-card">
          <MessageSquare size={32} />
          <h3>Live Chat</h3>
          <p>Chat with our support team instantly.</p>
          <button className="primary-btn outline">Start Chat</button>
        </div>

        <div className="help-card">
          <Phone size={32} />
          <h3>Call Us</h3>
          <p>Available Mon-Fri, 9am - 6pm.</p>
          <button className="primary-btn outline">+91 1800-123-4567</button>
        </div>

        <div className="help-card">
          <Mail size={32} />
          <h3>Email Support</h3>
          <p>We typically reply within 24 hours.</p>
          <button className="primary-btn outline">support@kicks.com</button>
        </div>
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>How do I track my order?</h4>
          <p>You can track your order by clicking on the tracking link sent to your registered email address.</p>
        </div>
        <div className="faq-item">
          <h4>What is your return policy?</h4>
          <p>We offer a hassle-free 30-day return policy for all unused items in their original packaging.</p>
        </div>
      </div>
    </div>
  );
}
