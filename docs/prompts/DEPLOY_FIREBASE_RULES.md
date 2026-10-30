# Prompt untuk AI Lokal: Deploy Aturan Firestore AwesomeMathJ

Salin seluruh teks di dalam kotak di bawah ini ke AI lokal (misalnya Claude Code di laptop) yang dijalankan **di folder repo AwesomeMathJ** dan sudah terhubung ke internet.

---

```text
Kamu membantu saya men-deploy aturan keamanan Firestore untuk proyek web AwesomeMathJ.
Kerjakan langkah demi langkah, tampilkan output setiap perintah, dan BERHENTI lalu
tanya saya jika ada langkah yang gagal atau meminta pilihan yang tidak dijelaskan di sini.

KONTEKS
- Repo: AwesomeMathJ (React + Vite), sudah ada di folder kerja ini, branch main terbaru.
- Proyek Firebase: ID "awesomemathj" (lihat src/firebase/config.js).
- File aturan: firestore.rules; konfigurasi deploy: firebase.json
  ({"firestore": {"rules": "firestore.rules"}}).
- Aturan baru:
  1) Data murid (teachers/{teacherId}/students) hanya bisa dibaca/ditulis guru pemiliknya.
  2) PR (quests/{questId}): siapa pun boleh MEMBUKA satu PR lewat ID-nya (get) tanpa login,
     tetapi DAFTAR PR (list/query) hanya untuk guru pemiliknya; murid tanpa login hanya
     boleh mengubah field status, lastScore, submittedAt, answers.
  3) Koleksi lama "submissions" tidak dipakai lagi (tidak ada aturan = tertutup).
  4) Laporan soal salah (reports/{reportId}): siapa pun boleh MEMBUAT laporan tanpa login,
     tetapi hanya dengan field yang diizinkan (questionId, chapterId, context, category,
     note ≤ 500 huruf, path, questionNumber, status = "open", createdAt).
     Membaca dan menghapus laporan hanya untuk pengguna yang login (guru).

LANGKAH
1. Pastikan berada di root repo: tampilkan `git log --oneline -1` dan `cat firebase.json`.
2. Cek Firebase CLI: `npx firebase-tools --version`.
   Jika belum ada, cukup pakai `npx firebase-tools` (jangan install global tanpa izin saya).
3. Login: `npx firebase-tools login`. Saya yang akan menyelesaikan login di browser.
   Setelah itu jalankan `npx firebase-tools projects:list` dan pastikan "awesomemathj" ada.
   Jika tidak ada, BERHENTI dan beri tahu saya (mungkin saya login dengan akun Google yang salah).
4. Tampilkan aturan yang sedang aktif agar bisa dibandingkan:
   `npx firebase-tools firestore:rules:get --project awesomemathj` (jika perintah ini tidak ada
   di versi CLI, lewati dan lanjut). Lalu tampilkan isi firestore.rules dari repo.
5. Validasi tanpa deploy dulu:
   `npx firebase-tools deploy --only firestore:rules --project awesomemathj --dry-run`.
   Jika ada error kompilasi aturan, BERHENTI dan tunjukkan errornya.
6. Deploy: `npx firebase-tools deploy --only firestore:rules --project awesomemathj`.
   JANGAN deploy bagian lain (hosting, functions, indexes, storage).
7. Verifikasi di Firebase Console → Firestore Database → Rules → "Rules Playground":
   a. Simulasi `get` pada /quests/contoh-id TANPA autentikasi → harus Allowed.
   b. Simulasi `list` pada /quests TANPA autentikasi → harus Denied.
   c. Simulasi `get` pada /teachers/uid-guru/students/s1 dengan Authenticated UID "uid-lain"
      → harus Denied.
   d. Simulasi `create` pada /reports/r1 TANPA autentikasi dengan data
      {"questionId":"sd4-b2-3","category":"gambar","status":"open","createdAt":"2026-10-30T00:00:00Z"}
      → harus Allowed.
   e. Simulasi `list` pada /reports TANPA autentikasi → harus Denied.
   Jika kamu tidak bisa membuka console, beri saya petunjuk klik demi klik untuk mengecek sendiri.

PEMERIKSAAN TAMBAHAN DI FIREBASE CONSOLE (tunjukkan caranya, jangan ubah tanpa persetujuan saya)
8. Authentication → Settings → Authorized domains: pastikan "awesomemathj.vercel.app" ada.
   Jika belum ada, minta izin saya lalu tambahkan.
9. Authentication → Sign-in method:
   - "Email/Password" harus Enabled (dipakai login guru).
   - "Google" sekarang tidak dipakai lagi oleh aplikasi (login murid sudah dihapus).
     Tanyakan ke saya apakah mau dinonaktifkan; jangan menonaktifkan tanpa persetujuan.
10. (Opsional, tanya saya dulu) Authentication → Users: akun yang dulu dibuat lewat login
    Google murid bisa dihapus jika saya setuju. Jangan menghapus akun guru (yang memakai email/password).

LAPORAN AKHIR
Tulis ringkasan singkat: perintah yang berhasil, hasil 5 simulasi Rules Playground,
status authorized domain, dan hal yang menunggu keputusan saya.
```

---

## Kenapa ini perlu

Aplikasi sudah memakai aturan baru (`firestore.rules` di repo), tetapi aturan Firestore **tidak ikut ter-deploy oleh Vercel**. Aturan hanya berubah setelah perintah `firebase deploy --only firestore:rules` dijalankan dengan akun Google pemilik proyek Firebase.

Selama belum di-deploy, aturan lama masih berlaku. Akibatnya, siapa pun bisa mengambil **daftar semua PR beserta nama murid**, dan siapa pun bisa mengubah XP murid tanpa login. Selain itu, tombol **"Laporkan soal"** belum bisa mengirim laporan, karena koleksi `reports` belum diizinkan.

Aturan ini sudah diuji dengan Firestore Emulator: 13 skenario lolos, termasuk laporan dengan field tambahan, kategori asing, catatan lebih dari 500 huruf, serta daftar laporan dan PR tanpa login, yang semuanya ditolak.
