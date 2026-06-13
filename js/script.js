/* =============================================
   PORTFOLIO — VANILLA JAVASCRIPT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Initialize Lucide Icons ----------
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // ==========================================
  // 0. PRELOADER
  // ==========================================
  const preloader = document.getElementById('preloader');

  const hidePreloader = () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      // Trigger hero entrance
      document.querySelector('.hero').classList.add('loaded');
    }, 1300);
  };

  // Handle if page already loaded
  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
  }

  // ==========================================
  // 1. NAVIGATION — Hamburger Toggle
  // ==========================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navOverlay = document.getElementById('navOverlay');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
    navOverlay.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on overlay click
  navOverlay.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navOverlay.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // ==========================================
  // 2. NAVBAR — Scroll Effects
  // ==========================================
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');
  const sections = document.querySelectorAll('.section, .hero');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Reading progress bar
    const readingProgress = document.getElementById('readingProgress');
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    readingProgress.style.width = `${Math.min(progress, 100)}%`;

    // Navbar shrink
    navbar.classList.toggle('scrolled', scrollY > 50);

    // Back to top visibility
    backToTop.classList.toggle('visible', scrollY > 400);

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once on load

  // Back to top click
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==========================================
  // 3. DARK / LIGHT MODE TOGGLE
  // ==========================================
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Apply saved theme
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ==========================================
  // 4. SCROLL ANIMATIONS — Intersection Observer
  // ==========================================
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  // ==========================================
  // 5. EXPANDABLE TIMELINE DETAILS
  // ==========================================
  const expandBtns = document.querySelectorAll('.expand-btn');

  expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      const isExpanded = details.classList.toggle('expanded');
      btn.classList.toggle('active');
      btn.setAttribute('aria-expanded', isExpanded);
      btn.querySelector('span').textContent = isExpanded ? 'Hide Details' : 'Show Details';
    });
  });

  // ==========================================
  // 6. CONTACT FORM — Client-side Validation
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  const showError = (inputId, errorId, message) => {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add('error');
    error.textContent = message;
  };

  const clearError = (inputId, errorId) => {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove('error');
    error.textContent = '';
  };

  // Real-time clearing of errors
  ['name', 'email', 'message'].forEach(field => {
    const el = document.getElementById(field);
    el.addEventListener('input', () => {
      clearError(field, `${field}Error`);
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Clear previous errors
    clearError('name', 'nameError');
    clearError('email', 'emailError');
    clearError('message', 'messageError');

    // Name validation
    if (!name) {
      showError('name', 'nameError', 'Name is required.');
      isValid = false;
    } else if (name.length < 2) {
      showError('name', 'nameError', 'Name must be at least 2 characters.');
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError('email', 'emailError', 'Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError('email', 'emailError', 'Please enter a valid email address.');
      isValid = false;
    }

    // Message validation
    if (!message) {
      showError('message', 'messageError', 'Message is required.');
      isValid = false;
    } else if (message.length < 10) {
      showError('message', 'messageError', 'Message must be at least 10 characters.');
      isValid = false;
    }

    if (isValid) {
      // Simulate form submission (no backend)
      formSuccess.classList.add('show');
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    }
  });

  // ==========================================
  // 7. TYPED TEXT ANIMATION
  // ==========================================
  const typedElement = document.getElementById('typedText');
  const phrases = [
    'Network Infrastructure Expert',
    'Fiber Optic Planning Specialist',
    'Quality Assurance Professional',
    'Telecommunications Engineer',
    'Project Coordinator'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  const typeEffect = () => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // Pause before next phrase
    }

    setTimeout(typeEffect, typeSpeed);
  };

  // Start typing after a short delay
  setTimeout(typeEffect, 1000);

  // ==========================================
  // 8. STATS COUNTER ANIMATION
  // ==========================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 1500; // ms
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target;
        }
      };

      updateCounter();
    });
  };

  // Observe stats section
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    statsObserver.observe(statsSection);
  }

});
