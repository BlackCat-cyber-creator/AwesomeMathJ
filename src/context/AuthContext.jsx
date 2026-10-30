import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AuthContext = createContext(null);

/**
 * Firebase (±150 KB) hanya dimuat untuk guru: saat membuka /teacher, atau bila perangkat ini
 * pernah login sebagai guru. Pengunjung publik tidak mengunduhnya sama sekali.
 */
const TEACHER_FLAG = 'amj_teacher_device';
const loadAuth = () => import('../firebase/auth');

function hasTeacherFlag() {
  try {
    return localStorage.getItem(TEACHER_FLAG) === '1';
  } catch {
    return false;
  }
}

function setTeacherFlag(on) {
  try {
    if (on) localStorage.setItem(TEACHER_FLAG, '1');
    else localStorage.removeItem(TEACHER_FLAG);
  } catch {
    // penyimpanan perangkat tidak tersedia: abaikan
  }
}

export function AuthProvider({ children }) {
  const location = useLocation();
  const needsAuth = location.pathname.startsWith('/teacher') || hasTeacherFlag();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(needsAuth);
  const [started, setStarted] = useState(false);

  if (needsAuth && !started) setStarted(true);

  useEffect(() => {
    if (!started) return undefined;
    let unsubscribe = () => {};
    let active = true;
    loadAuth().then(({ subscribeToTeacherAuth }) => {
      if (!active) return;
      unsubscribe = subscribeToTeacherAuth((currentUser) => {
        setUser(currentUser);
        setIsLoading(false);
        setTeacherFlag(Boolean(currentUser));
      });
    }).catch(() => setIsLoading(false));
    return () => {
      active = false;
      unsubscribe();
    };
  }, [started]);

  const login = async (email, password) => {
    const { loginTeacherWithEmail } = await loadAuth();
    const result = await loginTeacherWithEmail(email, password);
    if (result.success) {
      setUser(result.user);
      setTeacherFlag(true);
    }
    return result;
  };

  const register = async (email, password, displayName) => {
    const { registerTeacherWithEmail } = await loadAuth();
    const result = await registerTeacherWithEmail(email, password, displayName);
    if (result.success) {
      setUser(result.user);
      setTeacherFlag(true);
    }
    return result;
  };

  const logout = async () => {
    const { logoutTeacher } = await loadAuth();
    const result = await logoutTeacher();
    if (result.success) {
      setUser(null);
      setTeacherFlag(false);
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
