/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

const cursor = document.getElementById("cursor");

if (cursor) {
    document.addEventListener("mousemove", (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll("a, button");

    interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(2.2)";
        });

        element.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
        });
    });
}

/* =========================================================
   NAV SCROLL STATE
   ========================================================= */

const nav = document.getElementById("nav");

if (nav) {
    const updateNavOnScroll = () => {
        nav.classList.toggle("scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", updateNavOnScroll);
    updateNavOnScroll();
}

/* =========================================================
   CAROUSEL
   ========================================================= */

const slides = document.getElementById("carouselSlides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnails = document.querySelectorAll(".carousel-thumb");

let currentSlide = 0;
const totalSlides = document.querySelectorAll(".carousel-slide").length;

function updateCarousel() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentSlide);
    });
}

function goToSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    updateCarousel();
}

if (prevBtn && nextBtn && slides) {
    prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
}

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        const index = Number(thumb.dataset.index);
        goToSlide(index);
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        goToSlide(currentSlide - 1);
    }

    if (event.key === "ArrowRight") {
        goToSlide(currentSlide + 1);
    }
});

updateCarousel();