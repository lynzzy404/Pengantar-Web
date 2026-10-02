/* ============ QUICK JUMP (filter) + LIVE SEARCH — index.html ============ */

(function () {
    var inputCari = document.getElementById('cari-pertemuan');
    var pesan = document.getElementById('pesan-cari');
    var tombolJump = document.querySelectorAll('.tombol-angka');
    var semuaKartu = document.querySelectorAll('.kartu');

    // Penanda quick jump: tombol yang kartunya tersedia diberi titik hijau
    // (sinkron otomatis dari class .kartu — tidak perlu ditulis manual di HTML)
    tombolJump.forEach(function (tombol) {
        var kartu = document.getElementById(tombol.dataset.target);
        if (kartu && kartu.classList.contains('tersedia')) {
            tombol.classList.add('ada');
            tombol.setAttribute('aria-label',
                'Pertemuan ' + tombol.dataset.target.replace('pertemuan-', '') + ' (tersedia)');
        }
    });

    function terapkanFilter() {
        var q = inputCari.value.trim().toLowerCase();
        var murniAngka = /^\d+$/.test(q); // "6" hanya cocokkan nomor, bukan substring
        var adaHasil = false;

        semuaKartu.forEach(function (kartu) {
            var nomor = kartu.id.replace('pertemuan-', ''); // "6"
            var teks = (kartu.dataset.title + ' ' + kartu.textContent).toLowerCase();
            var cocok = q === ''
                || (murniAngka
                    ? nomor === q || nomor.padStart(2, '0') === q // "6" atau "06"
                    : teks.indexOf(q) !== -1);

            kartu.hidden = !cocok;
            if (cocok) adaHasil = true;

            // Accordion TIDAK auto-open: biarkan user membuka manual
        });

        // Sinkronkan tombol: aktif = nomor yang sedang difilter
        tombolJump.forEach(function (tombol) {
            var nomor = tombol.dataset.target.replace('pertemuan-', '');
            tombol.classList.toggle('aktif',
                murniAngka && (nomor === q || nomor.padStart(2, '0') === q));
        });

        pesan.hidden = adaHasil;
    }

    // Quick Jump = filter: klik nomor -> hanya kartu itu tampil (seperti live search);
    // klik tombol yang sama lagi -> tampilkan semua
    tombolJump.forEach(function (tombol) {
        tombol.addEventListener('click', function () {
            var nomor = tombol.dataset.target.replace('pertemuan-', '');
            inputCari.value = (inputCari.value.trim() === nomor) ? '' : nomor;
            terapkanFilter();
        });
    });

    // Live Search: filter kartu tiap ketikan (keyword ATAU nomor pertemuan)
    inputCari.addEventListener('input', terapkanFilter);
})();
