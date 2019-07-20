const nav = document.querySelector("#mainNavbar");

window.addEventListener("scroll", e => {
  if (pageYOffset > 46) {
    nav.classList.add("scrolled");
  } else if (pageYOffset < 46) {
    nav.classList.remove("scrolled");
  }
});
