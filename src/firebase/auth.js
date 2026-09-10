import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile 
} from "firebase/auth";
import { auth } from "./config";

/**
 * Format pesan error Firebase Auth ke Bahasa Indonesia yang ramah pengguna
 */
export function getFriendlyAuthErrorMessage(error) {
  const code = error?.code || "";
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return "Email atau kata sandi tidak cocok. Silakan coba lagi.";
    case "auth/user-not-found":
      return "Akun pengajar tidak ditemukan. Silakan buat akun baru.";
    case "auth/email-already-in-use":
      return "Alamat email ini sudah terdaftar. Silakan pilih tab Masuk.";
    case "auth/weak-password":
      return "Kata sandi terlalu pendek. Gunakan minimal 6 karakter.";
    case "auth/invalid-email":
      return "Format email tidak valid. Contoh: guru@sekolah.id";
    case "auth/network-request-failed":
      return "Gagal terhubung ke server Firebase. Periksa koneksi internet Anda.";
    case "auth/too-many-requests":
      return "Terlalu banyak percobaan gagal. Silakan tunggu beberapa saat.";
    default:
      return error?.message || "Terjadi kesalahan saat otentikasi.";
  }
}

/**
 * Login Guru dengan Email & Password
 */
export async function loginTeacherWithEmail(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Firebase Login Error:", error);
    return { success: false, error: getFriendlyAuthErrorMessage(error), rawError: error };
  }
}

/**
 * Pendaftaran Akun Guru Baru dengan Email & Password
 */
export async function registerTeacherWithEmail(email, password, displayName = "Guru AwesomeMathJ") {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
    if (displayName) {
      await updateProfile(userCredential.user, { displayName });
    }
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Firebase Registration Error:", error);
    return { success: false, error: getFriendlyAuthErrorMessage(error), rawError: error };
  }
}

/**
 * Logout Guru dari Firebase Auth
 */
export async function logoutTeacher() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Firebase SignOut Error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Berlangganan perubahan status login Firebase
 */
export function subscribeToTeacherAuth(callback) {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

/**
 * Ambil user guru aktif saat ini
 */
export function getCurrentTeacherUser() {
  return auth.currentUser;
}
