import React, { createContext, useState, useEffect } from 'react';
import { 
  subscribeToTeacherAuth, 
  loginTeacherWithEmail, 
  registerTeacherWithEmail, 
  logoutTeacher, 
  getCurrentTeacherUser 
} from '../firebase/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getCurrentTeacherUser());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToTeacherAuth((currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const result = await loginTeacherWithEmail(email, password);
    if (result.success) {
      setUser(result.user);
    }
    return result;
  };

  const register = async (email, password, displayName) => {
    const result = await registerTeacherWithEmail(email, password, displayName);
    if (result.success) {
      setUser(result.user);
    }
    return result;
  };

  const logout = async () => {
    const result = await logoutTeacher();
    if (result.success) {
      setUser(null);
    }
    return result;
  };

  const value = {
    user,
    teacherId: user?.uid || null,
    teacherEmail: user?.email || '',
    teacherName: user?.displayName || user?.email?.split('@')[0] || 'Guru',
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };

