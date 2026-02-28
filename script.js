// ========================================
// DataGrok Solutions - Main JavaScript
// ========================================

// Sticky Navigation
const navbar = document.getElementById('navbar');

function handleScroll() {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
let overlay = null;

function createOverlay() {
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeNav);
  }
}

function openNav() {
  navLinks.classList.add('active');
  navToggle.classList.add('active');
  createOverlay();
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navLinks.classList.remove('active');
  navToggle.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', function () {
  if (navLinks.classList.contains('active')) {
    closeNav();
  } else {
    openNav();
  }
});

// Close mobile nav when clicking a link
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeNav);
});

// Scroll Reveal Sections
const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      var offset = navbar.offsetHeight + 10;
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
