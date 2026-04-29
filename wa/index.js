const data = [
    { keyword: "Avengers: Endgame", link: "../wa/index.html" },
    { keyword: "Spider-Man: No Way Home", link: "../wa/index.html" },
    { keyword: "Dilan 1990", link: "../wa/index.html" },
    { keyword: "Crazy Rich Asians", link: "../wa/index.html" },
    { keyword: "Undercover Miss Hong", link: "../wa/index.html" },
    { keyword: "Train to Busan", link: "../wa/index.html" },
    { keyword: "Kingsman: The Golden Circle", link: "../wa/index.html" },
    { keyword: "The Summer I Turned Pretty", link: "../wa/index.html" },
    { keyword: "Encanto", link: "../popular/index.html" },
    { keyword: "Enola Holmes", link: "../popular/index.html" },
    { keyword: "Finding Nemo", link: "../popular/index.html" },
    { keyword: "Bulan", link: "../popular/index.html" },
    { keyword: "Scooby Doo", link: "../popular/index.html" },
    { keyword: "Ngeri Ngeri Sedap", link: "../popular/index.html" },
    { keyword: "Inside Out 2", link: "../popular/index.html" },
    { keyword: "Malice", link: "../popular/index.html" },
    { keyword: "Back to the Future", link: "../rating/index.html" },
    { keyword: "The Little Prince", link: "../rating/index.html" },
    { keyword: "Frozen 2", link: "../rating/index.html" },
    { keyword: "Bumi Manusia", link: "../rating/index.html" },
    { keyword: "Laskar Pelangi", link: "../rating/index.html" },
    { keyword: "Sang Pemimpi", link: "../rating/index.html" },
    { keyword: "Perahu Kertas", link: "../rating/index.html" },
    { keyword: "Jumbo", link: "../rating/index.html" }
];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function cari() {
    const keyword = searchInput.value.toLowerCase().trim();

    if (keyword === "") {
        alert("Isi Dahulu😅");
        return;
    }

    const hasil = data.find(item =>
    item.keyword.toLowerCase().replace(/[^a-z0-9]/g, "")
    .includes(keyword.replace(/[^a-z0-9]/g, ""))
);

    if (hasil) {
        window.location.href = hasil.link;
    } else {
        alert("Tidak ditemukan 😢");
    }
}

searchInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") cari();
});

searchBtn.addEventListener("click", cari);

function showPopup(title, genre, rating, img, desc, year){
    const popup = document.getElementById("popup");

    popup.style.display = "flex";

    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-genre").innerText = "Genre: " + genre;
    document.getElementById("popup-rating").innerText = "⭐ " + rating + " / 10";
    document.getElementById("popup-img").src = img;
    document.getElementById("popup-desc").innerText = desc;
    document.getElementById("popup-year").innerText = year;
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

window.addEventListener("click", function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closePopup();
    }
});