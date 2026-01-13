// Mobile menu toggle
const menuBtn = document.querySelector(".menu");
const mobile = document.querySelector(".mobile");

if (menuBtn && mobile) {
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
    mobile.hidden = expanded;
  });

  // Close mobile menu after click
  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    });
  });
}

// Reveal on scroll
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

els.forEach(el => io.observe(el));

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
