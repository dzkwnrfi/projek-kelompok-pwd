const cariFilm = document.querySelector("#cari-film");

if (cariFilm) {
  const pilihGenre = document.querySelector("#pilih-genre");
  const kartuFilm = document.querySelectorAll(".film-card");
  const jumlahFilm = document.querySelector("#jumlah-film");
  const filmKosong = document.querySelector("#film-kosong");
  const genreDariLink = new URLSearchParams(location.search).get("genre");

  if (["fiksi", "drama", "aksi", "animasi"].includes(genreDariLink)) {
    pilihGenre.value = genreDariLink;
  }

  function filterFilm() {
    const kata = cariFilm.value.trim().toLowerCase();
    let jumlah = 0;

    kartuFilm.forEach(kartu => {
      const sesuaiJudul = kartu.dataset.judul.includes(kata);
      const sesuaiGenre = pilihGenre.value === "semua" || kartu.dataset.genre === pilihGenre.value;
      kartu.hidden = !(sesuaiJudul && sesuaiGenre);
      if (!kartu.hidden) jumlah++;
    });

    jumlahFilm.textContent = `${jumlah} film ditemukan`;
    filmKosong.hidden = jumlah > 0;
  }

  cariFilm.addEventListener("input", filterFilm);
  pilihGenre.addEventListener("change", filterFilm);
  filterFilm();
}

const formSaran = document.querySelector("#form-saran");

if (formSaran) {
  formSaran.addEventListener("submit", event => {
    event.preventDefault();
    const nama = formSaran.elements.nama.value.trim();
    const judul = formSaran.elements.judul.value.trim();
    const alasan = formSaran.elements.alasan.value.trim();
    const pesan = document.querySelector("#pesan-form");

    if (!nama || !judul || !alasan) return;
    pesan.textContent = `Saran dari ${nama}: ${judul} — ${alasan}`;
    pesan.hidden = false;
    formSaran.reset();
  });
}
