function switchImage(clickedThumbnail) {
    let mainImage = document.getElementById("mainImg");
    mainImage.src = clickedThumbnail.src;
}

document.addEventListener("scroll", function() {
    if (window.scrollY >= 120) {
        document.querySelector("header").classList.add("scrolled");
    } else {
        document.querySelector("header").classList.remove("scrolled");
    }
})