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

const filterButtons = document.querySelectorAll(".filterButton");

const productCards = document.querySelectorAll(".productCard");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        productCards.forEach(function(card) {
            if (button.dataset.brand == card.dataset.brand) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        })
    })
})

productCards.forEach(function(card) {
    if (card.dataset.brand != "casio") {
        card.style.display = "none";
    }
})

filterButtons[0].classList.add("active");
