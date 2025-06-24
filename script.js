// Smooth scroll voor alle .topmenu links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.topmenu').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const y = target.getBoundingClientRect().top + window.pageYOffset - 20; // 20px offset voor header
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        // Hamburger menu sluiten op mobiel
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) navToggle.checked = false;
      }
    });
  });
});