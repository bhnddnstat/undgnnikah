document.addEventListener('DOMContentLoaded', () => {
  // Animate page title
  gsap.to('.page-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  });

  // Animate gallery items
  gsap.to('.gallery-item', {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.1,
    ease: 'power2.out'
  });

  // Add click animation for gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      gsap.to(this, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    });
  });
});