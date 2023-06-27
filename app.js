const toggleMenu = document.querySelector(".toggle-menu");
console.log("hello ", toggleMenu);

toggleMenu.addEventListener("click", function () {
  const headerNav = document.querySelector(".header-nav");
  headerNav.classList.toggle("header-nav-active");
});
