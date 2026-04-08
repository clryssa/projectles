function showPopup(title, genre, rating, img, desc,year){
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
    if (event.target === popup) {``
        closePopup();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closePopup();
    }
});