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
  { keyword: "Inside Out", link: "popular/index.html" },
  { keyword: "Malice", link: "popular/index.html" },
  { keyword: "Zhou Yiran", link: "aktor/index.html" },
  { keyword: "Chen Ze Yuan", link: "aktor/index.html" },
  { keyword: "Cha woo min", link: "aktor/index.html" },
  { keyword: "Song kang", link: "aktor/index.html" },
  { keyword: "Dian Sastro", link: "aktor/index.html" },
  { keyword: "Ji Chang Wook", link: "aktor/index.html" },
  { keyword: "louis partridge", link: "aktor/index.html" },
  { keyword: "milley bobby brown", link: "aktor/index.html" },
  { keyword: "Back to the Future", link: "rating/index.html" },
  { keyword: "The Little Prince", link: "rating/index.html" },
  { keyword: "Frozen 2", link: "rating/index.html" },
  { keyword: "Bumi Manusia", link: "rating/index.html" },
  { keyword: "Laskar Pelangi", link: "rating/index.html" },
  { keyword: "Sang Pemimpi", link: "rating/index.html" },
  { keyword: "Perahu Kertas", link: "rating/index.html" },
  { keyword: "Jumbo", link: "rating/index.html" }
];

// AMBIL ELEMENT
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// FUNGSI SEARCH
function cari() {
  const keyword = searchInput.value.toLowerCase().trim();

  if (keyword === "") {
    alert("Isi Dahulu😅");
    return;
  }

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