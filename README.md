# Pengantar Pemrograman Web

> **Mata Kuliah:** Praktikum Pemrograman Web

## Daftar Pertemuan

| Pertemuan | Topik | Materi |
|-----------|-------|--------|
| 1 | Pengenalan HTML | Struktur dasar HTML, elemen, atribut |
| 2 | HTML Lanjutan | List, nested list, gambar |
| 3 | Tabel & Form | Tabel, form, input, validasi |
| 4 | - | - |
| 5 | - | - |
| 6 | CSS Dasar | Sintaks dasar, selector, box model, flexbox, CSS grid, responsif |
| 7 | - | - |
| 8 | - | - |
| 9 | - | - |
| 10 | - | - |
| 11 | - | - |
| 12 | - | - |
| 13 | - | - |
| 14 | - | - |
| 15 | - | - |
| 16 | - | - |

## Live Demo

🔗 [https://lynzzy404.github.io/Pengantar-Web/](https://lynzzy404.github.io/Pengantar-Web/)

## Struktur Folder

```
Pengantar-Web/
├── index.html
├── style.css      (CSS halaman utama: grid, kartu, toolbar, akordeon)
├── script.js      (Quick Jump + Live Search)
├── template.md    (template kartu pertemuan baru)
├── pertemuan1/
│   ├── pertemuan1.html
│   └── tes.jpeg
├── pertemuan2/
│   ├── pertemuan2.html
│   └── tes.jpeg
├── pertemuan3/
│   ├── pertemuan3.html
│   └── logo1.png
├── pertemuan6/
│   ├── pertemuan6.html
│   ├── style.css
│   └── TUGAS/
│       ├── 01_Latihan_Dasar/
│       │   ├── sebelum/   (6 topik: sintaks dasar, selector, box model, flexbox, grid, responsif)
│       │   └── sesudah/   (6 topik)
│       └── 02_Latihan_Dasar/
│           ├── sebelum/   (4 kasus: profil, navbar, galeri, landing)
│           └── sesudah/   (4 kasus)
└── ...
```

## Cara Menambah Pertemuan Baru

1. Buat folder `pertemuanX/`
2. Buat file `pertemuanX.html` di dalamnya
3. Salin **template kartu** dari `template.md` (varian A sederhana, B segera hadir, atau C accordion), tempel ke dalam `<div class="grid-pertemuan">`, lalu isi `id`, `data-title`, teks, dan `href`-nya
4. Tambahkan tombol Quick Jump di `<nav class="tombol-jump">`:
   `<button type="button" class="tombol-angka" data-target="pertemuan-X">X</button>`
5. Update tabel di atas
6. Commit & push
