// Sumber fakta: CV ERWIN FIRMANSYAH 2.pdf.
// Ubah konten portofolio di sini agar seluruh bagian halaman tetap konsisten.
const profil = {
  identitas: {
    nama: 'Erwin Firmansyah',
    namaDepan: 'Erwin',
    // Simpan foto di public, lalu ubah menjadi '/foto-erwin.jpg'.
    foto: '/profil.jpeg',
    lokasi: 'Sumenep',
    email: 'erwinfirmansyahh17@gmail.com',
    telepon: '081999600171',
  },
  ringkasan: {
    singkat: 'Lulusan Teknik Informatika dengan minat pada Data Science, Data Analyst, Networking, dan pengembangan web.',
    utama: 'Lulusan Teknik Informatika Universitas Trunojoyo Madura dengan IPK 3,67. Saya mengembangkan model berbasis citra dan mengintegrasikannya ke aplikasi web serta Android.',
    lanjutan: 'Pengalaman sebagai Ketua Umum BEM Fakultas Teknik mengasah kemampuan analitis, komunikasi, dan kepemimpinan saya. Saya juga berpengalaman membangun aplikasi web serta memberikan dukungan teknis IT dan Networking.',
  },
  sorotan: [
    { nilai: '3,67', label: 'IPK Teknik Informatika' },
    { nilai: '2026', label: 'Tahun kelulusan' },
    { nilai: '2025/26', label: 'Ketua Umum BEM FT' },
  ],
  pengalaman: [
    {
      peran: 'Teknisi Perakitan dan Instalasi',
      organisasi: 'Freelance Technician',
      periode: 'Juli 2026 — Sekarang',
      poin: [
        'Merakit dan memasang Smart TV bantuan pemerintah di sekolah SD, SMP, dan SMA wilayah Sumenep.',
        'Mengonfigurasi sistem, memasang aplikasi pembelajaran, dan menguji jaringan agar perangkat siap digunakan.',
        'Menyelesaikan pemasangan 3 unit per sekolah tepat waktu dan memastikan seluruh perangkat berfungsi.',
      ],
    },
    {
      peran: 'Web Developer',
      organisasi: 'Dinas Pertanian Kabupaten Bangkalan · Magang',
      periode: 'Januari — Februari 2025',
      poin: [
        'Merancang dan membangun aplikasi web e-commerce dari front-end hingga back-end sesuai kebutuhan instansi.',
        'Menyusun dokumentasi arsitektur kode, modul database, dan panduan pengguna untuk pemeliharaan sistem.',
        'Berkoordinasi dengan pembimbing dan tim untuk mencapai target pengembangan.',
      ],
    },
    {
      peran: 'Tim Survei Lapangan',
      organisasi: 'Poltracking Indonesia',
      periode: 'Oktober 2024',
      poin: [
        'Mewawancarai responden di Kabupaten Tuban dan memverifikasi data melalui perangkat digital.',
        'Memenuhi kuota survei harian dengan menjaga ketelitian pengumpulan data.',
      ],
    },
    {
      peran: 'Teknisi IT',
      organisasi: 'Badan Keuangan dan Aset Daerah Kabupaten Sumenep · Magang',
      periode: 'Februari — April 2021',
      poin: [
        'Menangani masalah perangkat keras, PC, printer, instalasi kabel LAN, serta pemeriksaan komputer dan jaringan.',
        'Memberikan dukungan teknis kepada staf untuk menjaga kelancaran operasional IT.',
      ],
    },
  ],
  pendidikan: [
    { institusi: 'Universitas Trunodjoyo Madura', jurusan: 'S1 Teknik Informatika', periode: 'Agustus 2022 — Juli 2026', ipk: '3,67' },
    { institusi: 'SMK Negeri 1 Sumenep', jurusan: 'Teknik Komputer dan Jaringan', periode: '2019 — 2022' },
  ],
  organisasi: [
    { peran: 'Ketua Umum', organisasi: 'BEM Fakultas Teknik UTM', periode: '2025/2026', ringkasan: 'Memimpin organisasi tingkat fakultas, mengawasi program kerja dan anggaran, serta mewakili mahasiswa dalam koordinasi dengan kampus dan mitra.' },
    { peran: 'Kepala Departemen Advokesma', organisasi: 'BEM Fakultas Teknik UTM', periode: '2024/2025', ringkasan: 'Memimpin layanan dan advokasi mahasiswa serta menjembatani aspirasi kepada pimpinan fakultas.' },
    { peran: 'Anggota PSDM', organisasi: 'BEM Fakultas Teknik UTM', periode: '2023/2024', ringkasan: 'Berkontribusi pada pelatihan, kaderisasi, dan pengembangan kemampuan mahasiswa baru.' },
    { peran: 'Koordinator Sie Acara', organisasi: 'PKKMB Fakultas Teknik', periode: '2024', ringkasan: 'Memimpin penyusunan dan pelaksanaan acara untuk sekitar 800 peserta.' },
    { peran: 'Tim IT', organisasi: 'KPUM Fakultas Teknik', periode: '2023', ringkasan: 'Mengelola dan memvalidasi data pemilih serta merekap hasil pemungutan suara elektronik.' },
  ],
  // Isi website dengan URL website karya; gunakan string kosong jika belum tersedia.
  karya: [
    { kategori: 'PENGEMBANGAN WEB', tahun: '2026', judul: 'Projeka', website: 'https://www.projeka.my.id/',gambar: '/project/projeka.png', deskripsi: 'Sistem Joki Website, programming, design, data, serta joki mahasiswa untuk skripsi, makalah, proposal, dan tugas kuliah.', konteks: 'Freelance' },
    { kategori: 'HAK CIPTA', tahun: '2026', judul: 'Smart Breeding-V0.1', website: '',gambar: '/project/smartbreeding.png', deskripsi: 'Sistem deteksi bibit unggul sapi berbasis citra 2D. Menggunakan model YOLOv8 untuk mendeteksi ciri fisik bibit unggul. Tercatat sebagai karya tulis ilmiah dengan hak cipta.', konteks: 'Kemenkumham RI · Universitas Trunojoyo Madura' },
    { kategori: 'DATA SCIENCE', tahun: '2026', judul: 'Klasifikasi Citra LSD', website: 'https://ta-skripsi-erwin.streamlit.app/', gambar: '/project/klasifikasi_lsd.png', deskripsi: 'Sistem klasifikasi citra Lumpy Skin Disease menggunakan teknik deep learning metode VGG19 dengan fitur Triple Attention Mechanism yang disegmentasi U2-Net.', konteks: 'Tugas Akhir Skripsi' },
    { kategori: 'PENGEMBANGAN WEB', tahun: '2025', judul: 'E-Commerce Pertanian', website: '', gambar: '/project/ecomkp.png', deskripsi: 'Aplikasi web yang dikembangkan dari front-end hingga back-end dalam program magang.', konteks: 'Dinas Pertanian Kabupaten Bangkalan' },
    { kategori: 'PENGEMBANGAN WEB', tahun: '2025', judul: 'TeknoMart', website: '', gambar: '/project/teknomart.png', deskripsi: 'Sistem e-commerce untuk penjualan produk teknologi. Menggunakan teknologi web modern dan database yang efisien.', konteks: 'Proyek mandiri' },
  ],
  keahlian: [
    { kategori: 'Data Science & AI', daftar: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision'] },
    { kategori: 'Web & Database', daftar: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'] },
    { kategori: 'IT & Produktivitas', daftar: ['IT Troubleshooting', 'LAN Networking', 'Microsoft Office', 'Administrasi Data'] },
    { kategori: 'Kolaborasi', daftar: ['Leadership', 'Analytical Thinking', 'Teamwork', 'Time Management', 'Public Speaking', 'Problem Solving'] },
  ],
  sertifikasi: [
    { penyelenggara: 'DQLab', program: ['Data Science Fundamental', 'Python Fundamental for Data Science', 'R Fundamental for Data Science', 'Fundamental SQL Using SELECT Statement'] },
    { penyelenggara: 'Cisco Packet Tracer', program: ['CCNAv7: Switching, Routing, and Wireless Essentials'] },
    { penyelenggara: 'Pelatihan kepemimpinan', program: ['Latihan Keterampilan Manajemen Mahasiswa Tingkat Menengah', 'Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar'] },
  ],
  linkMedia: [
    { platform: 'GitHub', url: 'https://github.com/erwinfirmansyah17' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/erwin-firmansyah-7a0b4b1b9/' },
  ]
  }

export default profil
