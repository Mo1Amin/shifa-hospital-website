document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('open');
      });
  }

  // Close mobile menu on link click
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
      });
  });

  // Theme Toggle
  const themeToggleBtn = document.getElementById('themeToggle');
  const body = document.body;
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      body.classList.add(currentTheme);
      updateThemeButton(currentTheme);
  } else {
      // Set default theme based on user preference or system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
          body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark-mode');
          updateThemeButton('dark-mode');
      }
  }

  if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
          body.classList.toggle('dark-mode');
          const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
          localStorage.setItem('theme', theme);
          updateThemeButton(theme);
      });
  }

  function updateThemeButton(theme) {
      if (themeToggleBtn) {
          themeToggleBtn.innerHTML = theme === 'dark-mode' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      }
  }

  // Scroll to Top Button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');

  if (scrollToTopBtn) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
              scrollToTopBtn.classList.add('active');
          } else {
              scrollToTopBtn.classList.remove('active');
          }
      });

      scrollToTopBtn.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }

  // Stats Counter Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.stats-section');
  let animationStarted = false;

  function animateStats() {
      statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'));
          let count = 0;
          const duration = 2000; // Adjust as needed
          const step = target / (duration / 16); // Approximate frames

          function updateCount() {
              count += step;
              if (count < target) {
                  stat.textContent = Math.ceil(count);
                  requestAnimationFrame(updateCount);
              } else {
                  stat.textContent = target;
              }
          }

          updateCount();
      });
      animationStarted = true;
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && !animationStarted) {
              animateStats();
          }
      });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  if (statsSection) {
      observer.observe(statsSection);
  }
});