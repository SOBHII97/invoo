// Highlight the active link based on the current page
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
// JavaScript code to toggle mobile menu visibility
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}
