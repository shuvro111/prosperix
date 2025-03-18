const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
const header = document.querySelector(".header");
const toggleMenu = () => {
  mobileMenuToggle.classList.toggle("active");
  header.classList.toggle("active");
};

mobileMenuToggle.addEventListener("click", toggleMenu);
