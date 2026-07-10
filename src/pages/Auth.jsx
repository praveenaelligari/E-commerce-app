import { useState } from 'react';
import { UserPlus, LogIn } from 'lucide-react';

export default function Auth({ setPage }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate auth
    setPage('home');
    alert(isLogin ? "Logged in successfully!" : "Registered successfully!");
  };

  return (
    <div className="page-container page-centered">
      <div className="auth-box">
        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
        <p className="auth-subtitle">
          {isLogin ? "Sign in to access your orders and wishlist." : "Join us to get the best deals!"}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}
          
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="primary-btn full-width">
            {isLogin ? <><LogIn size={18} /> Sign In</> : <><UserPlus size={18} /> Register</>}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}

