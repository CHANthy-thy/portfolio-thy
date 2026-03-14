document.addEventListener("DOMContentLoaded", () => {

  // ==================== Smooth Scrolling ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // ==================== Back to Top Button ====================
  const backToTop = document.createElement('button');
  backToTop.textContent = "↑ Top";
  backToTop.className = "fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hidden";
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backToTop.classList.remove('hidden');
    else backToTop.classList.add('hidden');
  });

  // ==================== Hero / Intro Animation ====================
  const introElements = document.querySelectorAll(
    "#home p, #home h2, #home .text-lg, #home .flex.gap-4, #home .flex.gap-6 img"
  );

  introElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 200);
  });

  // ==================== Generic Scroll Reveal ====================
  const revealElements = document.querySelectorAll(
    "section, #skills > div.grid > div, #soft-skills > div.grid > div, #projects > div.grid > div, #contact form, #projects .bg-white"
  );

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
  });

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.style.transition = "all 0.8s ease-out";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });

});