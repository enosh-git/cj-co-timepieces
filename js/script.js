function switchImage(clickedThumbnail) {
    // switch main image
    let mainImage = document.getElementById("mainImg");
    mainImage.src = clickedThumbnail.src;

    // remove active from all thumbnails
    document.querySelectorAll(".subImages img").forEach(function(img) {
        img.classList.remove("active");
    });

    // add active to clicked thumbnail
    clickedThumbnail.classList.add("active");
}

document.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    
    // only run if header exists
    if (header) {
        if (window.scrollY >= 120) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // parallax banners
    const banners = document.querySelectorAll(".aboutUsBanner");
    banners.forEach(function(banner) {
        let scrolled = window.scrollY;
        banner.style.backgroundPositionY = -(scrolled * 0.3) + "px";
    });
});

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

if (productCards.length > 0) {
    productCards.forEach(function(card) {
        if (card.dataset.brand != "casio") {
            card.style.display = "none";
        }
    })
}

if (filterButtons.length > 0) {
    filterButtons[0].classList.add("active");
}

