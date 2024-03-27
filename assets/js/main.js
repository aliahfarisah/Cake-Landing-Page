const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When click on each nav-link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// Swiper
let swiperTestimonial = new Swiper(".testimonial-slider", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    700: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

// Show Scroll Up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        "nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true, //Animations repeat
});

sr.reveal(`.home-img, .footer-logo, .footer-data`);
sr.reveal(`.home-data`, { origin: "bottom" });
sr.reveal(`.about-data, .newsletter-img`, { origin: "left" });
sr.reveal(`.about-img, .newsletter-data`, { origin: "right" });
sr.reveal(`.popular-card`, { interval: 100 });
