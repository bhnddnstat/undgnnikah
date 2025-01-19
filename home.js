document.addEventListener('DOMContentLoaded', () => {
  // Animate page title
  gsap.to('.page-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  });

  // Animate timeline items
  gsap.to('.timeline-item', {
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
  });

});