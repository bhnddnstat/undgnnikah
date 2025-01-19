document.addEventListener('DOMContentLoaded', () => {
  // Animate page title
  gsap.to('.page-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  });

  // Animate form groups
  gsap.to('.form-group', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power2.out'
  });

  // Animate submit button
  gsap.to('.submit-btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out'
  });

  // Handle form submission
  document.getElementById('rsvp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your RSVP!');
  });
});