document.addEventListener('DOMContentLoaded', () => {
  // Animate elements using GSAP
  gsap.to('.names', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power2.out'
  });

  gsap.to('.and', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 0.6,
    ease: 'power2.out'
  });

  gsap.to('.details', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 1.2,
    ease: 'power2.out'
  });

  // Create glitter effect
  const createGlitter = () => {
    const glitterParticle = document.createElement('div');
    glitterParticle.style.position = 'absolute';
    glitterParticle.style.width = '2px';
    glitterParticle.style.height = '2px';
    glitterParticle.style.background = '#D4AF37';
    glitterParticle.style.borderRadius = '50%';
    
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const glitterContainer = document.querySelector(`.glitter.${side}`);
    
    glitterParticle.style.left = `${Math.random() * 100}%`;
    glitterParticle.style.top = '-2px';
    glitterContainer.appendChild(glitterParticle);

    gsap.to(glitterParticle, {
      y: window.innerHeight,
      duration: 3 + Math.random() * 2,
      opacity: 0,
      ease: 'none',
      onComplete: () => {
        glitterParticle.remove();
      }
    });
  };

  // Create glitter particles periodically
  setInterval(createGlitter, 100);

  // Add animation for navbar
  gsap.from('.navbar', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1.8,
    ease: 'power2.out'
  });

  // Add click animation for nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
      gsap.to(this, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".closeButton").forEach(button => {
      button.addEventListener("click", function() {
          if (window.opener) {
              window.close();
          } else {
              window.location.href = 'index.html';
          }
      });
  });



  // Animate save date button
  gsap.to('.save-date-btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.5,
    ease: 'power2.out'
  });

});