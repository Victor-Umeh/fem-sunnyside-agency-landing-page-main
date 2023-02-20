const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".nav__links-a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("toggle");
  navMenu.classList.toggle("active");
});

navLinks.forEach((n) => {
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});
