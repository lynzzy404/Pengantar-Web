/* ============ QUICK JUMP + SEGMENTED FASE FILTER — index.html ============ */

(function () {
    var semuaKartu = document.querySelectorAll('.kartu');
    var semuaGrup = document.querySelectorAll('.grup-fase');
    var tombolSeg = document.querySelectorAll('.seg-btn');
    var tombolAngka = document.querySelectorAll('.tombol-angka');
    var ctaHero = document.querySelector('.cta-utama');
    var faseAktif = 'semua';  // 'semua' | 'pra-uts' | 'pra-uas'
    var jumpAktif = null;     // id kartu pilihan quick jump, mis. 'pertemuan-7'

    function terapkanFilter() {
        semuaKartu.forEach(function (kartu) {
            var grup = kartu.closest('.grup-fase'); // sub-header Pra-UTS / Pra-UAS

            var cocokFase = faseAktif === 'semua'
                || (grup && grup.dataset.fase === faseAktif);
            var cocokJump = jumpAktif === null || kartu.id === jumpAktif;

            kartu.hidden = !(cocokFase && cocokJump);
            // Accordion TIDAK auto-open: biarkan user membuka manual
        });

        // Sembunyikan sub-header fase kalau semua kartunya tersembunyi
        semuaGrup.forEach(function (grup) {
            grup.hidden = !grup.querySelector('.kartu:not([hidden])');
        });
    }

    // Sinkronkan state segmented + tombol angka ke filter yang berlaku
    function sinkronTombol() {
        tombolSeg.forEach(function (t) {
            t.classList.toggle('aktif', t.dataset.fase === faseAktif);
        });
        tombolAngka.forEach(function (t) {
            t.classList.toggle('aktif', t.dataset.target === jumpAktif);
        });
    }

    // Quick jump: klik angka = tampilkan hanya kartu itu + scroll; klik lagi = lepas
    tombolAngka.forEach(function (tombol) {
        // Titik hijau: penanda pertemuan tersedia
        var kartu = document.getElementById(tombol.dataset.target);
        if (kartu && kartu.classList.contains('tersedia')) tombol.classList.add('ada');

        tombol.addEventListener('click', function () {
            var target = tombol.dataset.target;
            jumpAktif = jumpAktif === target ? null : target; // toggle

            if (jumpAktif) {
                // Reset filter fase supaya kartu tujuan pasti tampil
                faseAktif = 'semua';
            }
            sinkronTombol();
            terapkanFilter();

            if (jumpAktif) {
                document.getElementById(jumpAktif).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Segmented control: Semua / Pra-UTS / Pra-UAS (PRD 4.2)
    tombolSeg.forEach(function (tombol) {
        tombol.addEventListener('click', function () {
            faseAktif = tombol.dataset.fase;
            jumpAktif = null; // pindah fase melepas quick jump
            sinkronTombol();
            terapkanFilter();
        });
    });

    // CTA hero "Lanjut: Pertemuan 7 →": setel quick jump supaya state konsisten
    if (ctaHero) {
        ctaHero.addEventListener('click', function (e) {
            e.preventDefault();
            var target = this.getAttribute('href').slice(1); // '#pertemuan-7'
            jumpAktif = target;
            faseAktif = 'semua';
            sinkronTombol();
            terapkanFilter();
            document.getElementById(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
})();
