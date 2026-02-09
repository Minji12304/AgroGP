// scripts/main.js — script base
document.addEventListener('DOMContentLoaded', () => {
  console.log('scripts/main.js cargado');

  // Scroll suave para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Cerrar menú móvil si está abierto
        const navbarLinks = document.querySelector('.navbar-links');
        const toggle = document.querySelector('.navbar-toggle');
        if (navbarLinks && navbarLinks.classList.contains('active')) {
          navbarLinks.classList.remove('active');
          toggle.classList.remove('active');
        }
      }
    });
  });

  // Toggle móvil navbar
  const mobileToggle = document.getElementById('mobileToggle');
  const navbarLinks = document.querySelector('.navbar-links');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navbarLinks.classList.toggle('active');
    });
  }

  // Cerrar menú móvil al hacer scroll
  window.addEventListener('scroll', () => {
    if (mobileToggle && mobileToggle.classList.contains('active')) {
      mobileToggle.classList.remove('active');
      navbarLinks.classList.remove('active');
    }
  });

  // Modal Video
  const videoModal = document.getElementById('videoModal');
  const modalVideoFrame = document.getElementById('modalVideoFrame');
  const modalClose = document.querySelector('.modal-close');
  const playBtn = document.querySelector('.play-btn');
  const floatingVideo = document.querySelector('.floating-video');
  
  function openVideoModal() {
    const videoId = floatingVideo.getAttribute('data-video-id');
    if (videoId && modalVideoFrame && videoModal) {
      modalVideoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      videoModal.style.display = 'flex';
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  
  function closeVideoModal() {
    videoModal.style.display = 'none';
    videoModal.classList.remove('active');
    modalVideoFrame.src = '';
    document.body.style.overflow = 'auto';
  }
  
  if (floatingVideo) {
    floatingVideo.addEventListener('click', openVideoModal);
  }
  
  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openVideoModal();
    });
  }
  
  if (modalClose) {
    modalClose.addEventListener('click', closeVideoModal);
  }
  
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });
  }

  // ═════════════════════════════════════════════════════════════
  // MISSION TIMELINE ANIMATION
  // ═════════════════════════════════════════════════════════════
  gsap.registerPlugin(ScrollTrigger);

  const stepDisplay = document.getElementById('step-display');
  const stepDigit = document.querySelector('.step-digit');
  const missionSteps = document.querySelectorAll('.mission-step');
  
  if (missionSteps.length > 0) {
    // Animar cada paso
    missionSteps.forEach((step, index) => {
      const stepNumber = index + 1;
      const stepContent = step.querySelector('.step-content');
      
      // ScrollTrigger para cambiar número
      ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          // Animar digit
          gsap.to(stepDigit, {
            textContent: stepNumber,
            duration: 0.3,
            ease: 'power2.out',
            snap: { textContent: 1 }
          });
          
          // Animar contenido
          gsap.fromTo(stepContent, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
          );
        },
        onLeaveBack: () => {
          if (index > 0) {
            const prevStep = missionSteps[index - 1];
            const prevNumber = index;
            
            gsap.to(stepDigit, {
              textContent: prevNumber,
              duration: 0.3,
              ease: 'power2.out',
              snap: { textContent: 1 }
            });
          }
        }
      });
    });
  }

  // ═════════════════════════════════════════════════════════════
  // MINI SLIDER ABOUT SECTION
  // ═════════════════════════════════════════════════════════════
  const aboutTrack = document.querySelector('.about-floating-slider .slider-track');
  const aboutDots = document.querySelectorAll('.about-floating-slider .dot');
  let currentAboutSlide = 0;

  function updateAboutSlider(index) {
    if (!aboutTrack) return;
    currentAboutSlide = index;
    aboutTrack.style.transform = `translateX(-${index * (100 / aboutDots.length)}%)`;
    aboutDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  if (aboutTrack && aboutDots.length > 0) {
    let interval = setInterval(() => {
      currentAboutSlide = (currentAboutSlide + 1) % aboutDots.length;
      updateAboutSlider(currentAboutSlide);
    }, 4000);

    aboutDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(interval);
        updateAboutSlider(i);
      });
    });
  }
});
