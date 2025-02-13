document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    document.body.querySelectorAll(".actual-content").forEach((el) => {
      el.style.display = "block";
    });
    document.body.querySelectorAll(".mobile-content").forEach((el) => {
      el.style.display = "none";
    });
  }
});
