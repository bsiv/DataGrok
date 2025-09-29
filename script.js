// Section fade-in & active nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

function revealSections() {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) { section.classList.add('visible'); }
  });
}

function setActiveNav() {
  let index = sections.length;
  while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

window.addEventListener('scroll', () => { revealSections(); setActiveNav(); });

// Typing effect for hero tagline
const tagline = "Data Consultant | Transforming Data into Insights";
let i = 0;
const typingEl = document.getElementById('typing');

function typeWriter() {
  if (i < tagline.length) {
    typingEl.innerHTML += tagline.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.addEventListener('load', () => { revealSections(); setActiveNav(); typeWriter(); });