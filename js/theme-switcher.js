document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("themeToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme")
      );
    });
  }

  // Load saved theme
  if (localStorage.getItem("theme") === "true") {
    document.body.classList.add("dark-theme");
  }

});