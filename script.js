const PHONE_NUMBER = "5511984677216";

const MESSAGE =
  "Olá! Vim pelo site da Henritek e gostaria de solicitar um orçamento.";

const encodedMessage = encodeURIComponent(MESSAGE);

const whatsappButtons = document.querySelectorAll(
  ".redirect-to-whatsapp"
);

whatsappButtons.forEach(btn => {
  btn.href =
    `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

  btn.target = "_blank";
  btn.rel = "noopener noreferrer";
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {

  hamburger.addEventListener("click", e => {
    e.stopPropagation();

    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    const expanded =
      mobileMenu.classList.contains("active");

    hamburger.setAttribute(
      "aria-expanded",
      expanded
    );
  });

  document.querySelectorAll(".mobile-menu a")
    .forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");

        hamburger.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });

  document.addEventListener("click", e => {

    const clickedOutside =
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target);

    if (clickedOutside) {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");

      hamburger.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });
}

const fadeEls = document.querySelectorAll(
  ".service-card, .vantagem-card, .testimonial-card, .about-item"
);

fadeEls.forEach(el => {
  el.classList.add("fade-in");
});

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  fadeEls.forEach(el => observer.observe(el));

} else {

  fadeEls.forEach(el => {
    el.classList.add("visible");
  });
}

const currentYear =
  new Date().getFullYear();

const footerYear =
  document.getElementById("footer-year");

if (footerYear) {
  footerYear.textContent = currentYear;
}