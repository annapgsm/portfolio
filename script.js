/* =========================================================
   1. CUSTOM CURSOR
   - Moves the custom cursor with the mouse
   - Enlarges it when hovering links/buttons
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
   2. NAV SCROLL STATE
   - Adds a border to the fixed nav after scrolling
   - Makes the nav feel more grounded against the page
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
   2. MOBILE NAV
   - Toggle mobile menu open/closed
   - Adds/removes the .active class on click
   ========================================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

/* =========================================================
   3. REVEAL ON SCROLL
   - Reveals sections/cards when they enter the viewport
   - Uses IntersectionObserver for better performance
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.1,
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
}

