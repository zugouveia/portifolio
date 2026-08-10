var navToggle = document.getElementById("navToggle");

var nav = document.getElementById("nav");

navToggle.addEventListener("click", function () {
  var open = nav.classList.toggle("nav-open");
  navToggle.classList.toggle("active", open);
  navToggle.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", false);
  });
});
