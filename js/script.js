
  document.addEventListener("DOMContentLoaded", () => {
    const heroTexts = document.querySelectorAll("#home p, #home h2, #home .text-lg, #home .flex.gap-4, #home .flex.gap-6 img");

    heroTexts.forEach((el, index) => {
      el.style.opacity = 0;            // start invisible
      el.style.transform = "translateY(20px)"; // start slightly below

      setTimeout(() => {
        el.style.transition = "all 0.8s ease-out";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, index * 200); // staggered by 200ms
    });
  });

