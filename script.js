(() => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    });
  });

  const form = document.getElementById("contactForm");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value?.trim?.() ?? "";
      const email = document.getElementById("email")?.value?.trim?.() ?? "";
      const message = document.getElementById("message")?.value?.trim?.() ?? "";

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      alert("Thanks! Your message was submitted (demo).");
      form.reset();
    });
  }
})();
