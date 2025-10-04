const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

const showMoreBtn = document.getElementById('showMoreBtn');
const extraProjects = document.getElementById('extraProjects');

showMoreBtn.addEventListener('click', () => {
  extraProjects.classList.toggle('visible-grid');
  showMoreBtn.textContent = extraProjects.classList.contains('visible-grid') ? 'Show Less Case Studies' : 'Show More Case Studies';
});
