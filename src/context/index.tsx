// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import React, { createContext, useState, ReactNode } from 'react';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   setIsAuthenticated: (auth: boolean) => void;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  resendOtp: () => Promise<void>;
  // Add other auth-related methods here
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const resendOtp = async () => {
    // Implement the actual OTP resend logic here
    console.log("OTP resent");
  };

  return (
    <AuthContext.Provider value={{ resendOtp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
