# Template Pertemuan Baru

Salin blok yang dibutuhkan, tempel ke dalam `<div class="grid-pertemuan">` di `index.html`, lalu ubah isinya.

## (A) Kartu SEDERHANA — materi sudah ada

```html
<div class="kartu tersedia" id="pertemuan-N" data-title="kata kunci topik dipisah spasi">
    <span class="status buka">Tersedia</span>
    <p class="kartu-link">Pertemuan N — Judul Topik</p>
    <span class="topik-singkat">Ringkasan topik singkat</span>
    <a class="chip klik" href="./pertemuanN/pertemuanN.html">Klik Disini</a>
</div>
```

## (B) Kartu SEGERA HADIR — materi belum ada (tanpa link)

```html
<div class="kartu soon" id="pertemuan-N" data-title="segera hadir pertemuan N">
    <span class="status tutup">Segera Hadir</span>
    <span class="kartu-link">Pertemuan N</span>
    <span class="topik-singkat">Materi belum tersedia</span>
</div>
```

## (C) Kartu dengan BANYAK SUB-MATERI — wajib pakai `<details>` (accordion)

```html
<div class="kartu tersedia kartu-detail" id="pertemuan-N" data-title="kata kunci topik">
    <span class="status buka">Tersedia</span>
    <p class="kartu-link">Pertemuan N — Judul Topik</p>
    <span class="topik-singkat">Ringkasan topik singkat</span>
    <a class="chip klik" href="./pertemuanN/pertemuanN.html">Klik Disini</a>

    <details class="akordeon-tugas">
        <summary><span>Lihat Daftar Latihan (N Modul)</span></summary>

        <div class="isi-akordeon">
            <div class="grup-akordeon">
                <h3><span class="nomor">01</span> Nama Blok Latihan</h3>

                <div class="baris-topik">
                    <span class="nama-topik">Topik 1 — Judul Topik</span>
                    <a class="chip klik" href="./pertemuanN/TUGAS/.../sebelum/topik-1.html">Klik Disini</a>
                </div>

                <!-- tambahkan baris-topik lain di sini -->
            </div>

            <!-- tambahkan grup-akordeon lain untuk blok berikutnya -->
        </div>
    </details>
</div>
```

## (D) Jangan lupa

1. Tambahkan tombol Quick Jump di `<nav class="tombol-jump">`:
   `<button type="button" class="tombol-angka" data-target="pertemuan-N">N</button>`
2. Buat folder `pertemuanN/` beserta file html-nya dulu, baru hubungkan href-nya (jangan sampai link mati).
3. `data-title` diisi kata kunci pencarian, dipisah spasi; perbarui bila topik berubah agar fitur Live Search akurat.
