/**
 * Initialize event listeners
 */
function init() {
  // Placeholder for future interactivity (e.g., lightbox, modals)
  const sections = document.querySelectorAll('.section-fadein');
  const reveal = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) sec.classList.add('visible');
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Animation fun sur les badges compétences
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.about-skills .list-inline-item').forEach(item => {
    item.addEventListener('click', function() {
      item.style.transform = 'scale(1.18) rotate(6deg)';
      setTimeout(() => {
        item.style.transform = '';
      }, 250);
    });
  });
});