document.addEventListener('DOMContentLoaded', () => {

  // Fungsi membuat efek glitter tetap ada
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

  // Interval untuk membuat glitter secara periodik
  setInterval(createGlitter, 100);
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
});


  // RSVP Button sparkle effect
  rsvpButton.addEventListener('click', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'button-sparkle';
    rsvpButton.appendChild(sparkle);
    
    const rect = rsvpButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.animation = 'buttonSparkle 0.8s ease-out forwards';
    
    setTimeout(() => {
      sparkle.remove();
    }, 800);
  });