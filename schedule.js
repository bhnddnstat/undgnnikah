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

  // Countdown Timer
  const weddingDate = new Date('2025-02-19T18:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});