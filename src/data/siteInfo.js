/**
 * Identitas pembuat situs. Dipakai bersama oleh aplikasi (footer, halaman /tentang)
 * dan prerender (meta author, JSON-LD Person) agar mesin pencari mengaitkan nama
 * pembuat dengan situs ini.
 *
 * `sameAs`: tambahkan tautan profil resmi (Instagram, LinkedIn, YouTube, dsb.) untuk
 * memperkuat hubungan nama ↔ situs di Google.
 */
export const AUTHOR = {
  name: 'Jevon Naldo Yoshield',
  jobTitle: 'Guru Matematika & Pembina Olimpiade',
  sameAs: []
};

export const ABOUT = {
  title: 'Tentang AwesomeMathJ',
  intro: `AwesomeMathJ dibuat dan dikelola oleh ${AUTHOR.name}, guru yang mengajar murid dari Kelas 4 SD sampai Kelas 12 SMA, termasuk membina murid persiapan olimpiade matematika AMC.`,
  paragraphs: [
    'Situs ini lahir dari kebutuhan di kelas: murid perlu materi yang mudah dibuka kapan saja, soal latihan yang sesuai dengan kelasnya, dan pembahasan yang jelas langkah demi langkah.',
    'Semua materi Kurikulum Merdeka di AwesomeMathJ, yaitu Matematika Kelas 4–12 dan IPA Kelas 7–9, diselaraskan dengan Capaian Pembelajaran resmi (Keputusan Kepala BSKAP Nomor 046/H/KR/2025), sehingga soal Kelas 4 benar-benar materi Kelas 4. Setiap bab disusun rapi: daftar isi, subbab, rumus, contoh soal dengan pembahasan, kesalahan yang sering terjadi, dan latihan. Materi bisa dibaca gratis tanpa daftar akun.',
    'Untuk murid bimbingan, AwesomeMathJ juga dipakai sebagai alat mengirim PR: satu bab menjadi satu PR yang dikerjakan di HP, lalu nilai dan jawabannya langsung diterima guru.'
  ]
};
