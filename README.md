<<<<<<< HEAD
# Portofolio Erwin Firmansyah

Portofolio React dan Vite yang mengambil seluruh data personal dari [`src/profil-data.js`](src/profil-data.js). Fakta dalam berkas tersebut disusun dari `CV ERWIN FIRMANSYAH 2.pdf`.

Portofolio bertema modern space dengan palet midnight navy, biru es, ilustrasi orbit berbasis CSS, dan tipografi Space Grotesk. Konten tetap berfokus pada pengalaman, karya, dan keahlian Erwin.

## Jalankan

```bash
npm install
npm run dev
```

Untuk memeriksa hasil:

```bash
npm run lint
npm run build
```

## Perbarui konten

Ubah identitas, ringkasan, pengalaman, pendidikan, organisasi, karya, keahlian, dan pelatihan di `src/profil-data.js`. Ganti `public/erwin-firmansyah-cv.pdf` jika CV diperbarui.

## Komponen visual

Adaptasi [React Bits](https://reactbits.dev/) disimpan lokal di `src/components/react-bits/`:

| Komponen | Penggunaan |
| --- | --- |
| PillNav | Navbar responsif dan indikator section aktif |
| CardSwap | Kartu proyek di Selected Work, dengan detail tersinkron dan tombol sebelumnya, berikutnya, serta jeda |
| DriftWall | Dinding keahlian di Toolkit, dengan gerakan kolom, parallax pointer, dan tombol jeda |
| AnimatedContent | Kemunculan konten setiap section saat masuk viewport |
| DecryptedText | Label section dan identitas footer |
| SpotlightCard | Kartu sorotan, karya, pengalaman, dan keahlian |
| Magnet | Tombol utama dan tautan kembali ke atas |

Animasi menggunakan GSAP dan Motion. Parallax pada hero, profil, dan kontak menggunakan GSAP ScrollTrigger, serta dinonaktifkan pada mobile. Preferensi *reduced motion* menonaktifkan gerakan dekoratif dan pergantian kartu otomatis; kontrol kartu tetap tersedia. CardSwap dan DriftWall berhenti ketika di luar layar atau tab tersembunyi. Toolkit juga menyediakan daftar keahlian statis agar semua konten tetap mudah dibaca. Lihat [pemberitahuan lisensi](THIRD_PARTY_NOTICES.md).

### Mengganti foto hero

Simpan foto Anda, misalnya `foto-erwin.jpg`, di folder `public/`. Ubah `identitas.foto` di `src/profil-data.js` menjadi `'/foto-erwin.jpg'`. Disarankan foto potret rasio 4:5, minimal 600 × 750 piksel. Atur posisi potongan foto melalui `object-position` pada `.portrait-frame img` di `src/sections/Hero.css`. Sebelum foto diganti, situs menampilkan `public/portrait-placeholder.svg`.

## Struktur halaman

- `src/App.jsx`: susunan komponen halaman.
- `src/components/layout/`: Navbar dan Footer beserta CSS masing-masing.
- `src/sections/`: Hero, About, Projects, Experience, Background, Skills, Certifications, dan Contact. Setiap section memiliki file JSX dan CSS sendiri.
- `src/components/ui/`: SectionHeading, Parallax, dan ilustrasi SpaceArt.
- `src/App.css` dan `src/index.css`: token tema, tipografi, dan gaya bersama.

Tautan repositori mengambil data `project`, sedangkan LinkedIn mengambil data `linkMedia` dari `profil-data.js`. Formulir pengiriman pesan tidak memerlukan backend: kontak tersedia melalui email, telepon, dan LinkedIn.
=======
# myporto
>>>>>>> e0637a3a5395357ea1161a8bb18b498063c69c2b
