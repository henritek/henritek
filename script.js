const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

const PHONE_NUMBER = "5511984677216"

const fmtNumber = "(11) " + PHONE_NUMBER.slice(4);

const whatsappButtons = document.querySelectorAll(".redirect-to-whatsapp");

whatsappButtons[whatsappButtons.length - 1].innerHTML = fmtNumber;

whatsappButtons.forEach(wpBtn => {
  wpBtn.href = `https://wa.me/${PHONE_NUMBER}`;
  wpBtn.target = "_blank";
});