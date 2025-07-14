// Qixent Site Scripts
// --------------------
// Refined and optimized for the new one-page HTML/CSS

// Wrap everything in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (href.length > 1) {
        event.preventDefault();
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 2. IntersectionObserver for fade-in elements
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => fadeInObserver.observe(el));

  // 3. Contact form submission (placeholder)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      // TODO: Replace with real API call
      alert('Thank you! We will be in touch.');
      contactForm.reset();
    });
  }
});
