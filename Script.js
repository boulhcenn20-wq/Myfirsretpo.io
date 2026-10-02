const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }
});


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});


const revealElements = document.querySelectorAll(
  ".service-card, .project, .about-content, .contact-section"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});
