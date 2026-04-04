const data = [
    { keyword: "dilan 1990", link: "wa/index.html" }

];

const searchInput = document.getElementById("searchInput");

// DEBUG (biar tau JS nyala)
console.log("JS NYALA 🔥");

// EVENT SAAT KETIK
searchInput.addEventListener("keyup", function (e) {
  const keyword = searchInput.value.toLowerCase().trim();

  console.log("Ketik:", keyword);

  // JALANKAN SAAT ENTER
  if (e.key === "Enter") {
    
    // CARI DATA YANG COCOK
    const hasil = dataLink.find(item =>
      keyword.includes(item.keyword)
    );

    // KALAU KETEMU
    if (hasil) {
      console.log("Pindah ke:", hasil.link);
      window.location.href = hasil.link;
    } 
    // KALAU GA ADA
    else {
      alert("Halaman tidak ditemukan 😢");
    }
  }
});