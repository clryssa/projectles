const data = [
  { keyword: "Avengers: Endgame", link: "wa/index.html" },
  { keyword: "Spider-Man: No Way Home", link: "wa/index.html" },
  { keyword: "Dilan 1990", link: "wa/index.html" },
  { keyword: "Crazy Rich Asians", link: "wa/index.html" },
  { keyword: "Undercover Miss Hong", link: "wa/index.html" },
  { keyword: "Train to Busan", link: "wa/index.html" },
  { keyword: "Kingsman: The Golden Circle", link: "wa/index.html" },
  { keyword: "The Summer I Turned Pretty", link: "wa/index.html" },
  { keyword: "Encanto", link: "popular/index.html" },
  { keyword: "Enola Holmes", link: "popular/index.html" },
  { keyword: "Finding Nemo", link: "popular/index.html" },
  { keyword: "Bulan", link: "popular/index.html" },
  { keyword: "Scooby Doo", link: "popular/index.html" },
  { keyword: "Ngeri Ngeri Sedap", link: "popular/index.html" },
  { keyword: "Avatar", link: "popular/index.html" },
  { keyword: "Malice", link: "popular/index.html" }

];

// AMBIL ELEMENT
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// FUNGSI SEARCH
function cari() {
  const keyword = searchInput.value.toLowerCase().trim();

  const hasil = data.find(item =>
    item.keyword.toLowerCase().includes(keyword)
  );

  if (hasil) {
    window.location.href = hasil.link;
  } else {
    alert("Tidak ditemukan 😢");
  }
}

// ENTER
searchInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    cari();
  }
});

// KLIK IKON
searchBtn.addEventListener("click", function () {
  cari();
});