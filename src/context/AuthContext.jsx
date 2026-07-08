import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('freshmart_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('freshmart_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('freshmart_user');
    }
  }, [user]);

  const login = (email) => {
    // Determine username from email for dummy auth
    const name = email.split('@')[0];
    setUser({ name, email });
  };

  const register = (name, email) => {
    setUser({ name, email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
