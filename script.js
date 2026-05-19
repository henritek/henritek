/* ─── Número do WhatsApp ─── */
const PHONE_NUMBER = "5511984677216";

/* ─── Formata número para exibição: (11) 98467-7216 ─── */
const ddd    = PHONE_NUMBER.slice(2, 4);           // "11"
const parte1 = PHONE_NUMBER.slice(4, 9);           // "98467"
const parte2 = PHONE_NUMBER.slice(9);              // "7216"
const fmtNumber = `(${ddd}) ${parte1}-${parte2}`; // "(11) 98467-7216"

/* ─── Aplica href e texto nos botões do WhatsApp ─── */
const whatsappButtons = document.querySelectorAll(".redirect-to-whatsapp");

whatsappButtons.forEach(btn => {
  btn.href   = `https://wa.me/${PHONE_NUMBER}`;
  btn.target = "_blank";
  btn.rel    = "noopener noreferrer";
});

/* ─── Menu Hamburger ─── */
const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

/* ─── Animação de fade-in ao rolar a página ─── */
const fadeEls = document.querySelectorAll(
  ".service-card, .vantagem-card, .testimonial-card, .about-item"
);

fadeEls.forEach(el => el.classList.add("fade-in"));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach(el => observer.observe(el));