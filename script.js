document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const links = document.querySelector(".nav-links");
  if (menu && links) {
    menu.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      const action = form.getAttribute("action") || "";
      if (!action || action.includes("YOUR_FORM_ENDPOINT")) {
        e.preventDefault();
        alert("The contact form is ready, but it still needs to be connected to your email/form service.");
      }
    });
  }
});
