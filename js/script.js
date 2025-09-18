(function () {
        const topbar = document.getElementById("siteTopbar");
        const THRESHOLD = 40; // px para iniciar a transição

        if (!topbar) return;

        function updateHeader() {
          if (window.scrollY > THRESHOLD) {
            topbar.classList.add("topbar--solid");
            topbar.classList.remove("topbar--transparent");
          } else {
            topbar.classList.remove("topbar--solid");
            topbar.classList.add("topbar--transparent");
          }
        }

        // inicializa e escuta eventos
        document.addEventListener("DOMContentLoaded", updateHeader);
        window.addEventListener("scroll", updateHeader);
        window.addEventListener("resize", updateHeader);

        // mobile toggle (preserva comportamento)
        const mobileToggle = document.getElementById("mobileToggle");
        const nav = document.getElementById("siteNav");
        if (mobileToggle && nav) {
          mobileToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
            mobileToggle.classList.toggle("active");
          });
          document.querySelectorAll("#siteNav a").forEach((a) =>
            a.addEventListener("click", () => {
              nav.classList.remove("open");
              mobileToggle.classList.remove("active");
            })
          );
        }
      })();

      // Testimonial Slider
      (function () {
        const slider = document.querySelector('.testimonial-slider');
        if (!slider) return;

        const grid = document.querySelector('.testimonials-grid');
        const items = grid.querySelectorAll('.testimonial');
        const dotsContainer = document.querySelector('.testimonial-dots');
        const dots = dotsContainer.querySelectorAll('.dot');

        let currentIndex = 0;
        const totalItems = items.length;
        const slideInterval = 5000; // 5 seconds

        function showSlide(index) {
          grid.style.transform = `translateX(-${index * 100}%)`;

          dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
          });
        }

        function nextSlide() {
          currentIndex = (currentIndex + 1) % totalItems;
          showSlide(currentIndex);
        }

        // Auto-play
        let autoPlay = setInterval(nextSlide, slideInterval);

        // Pause on hover
        slider.addEventListener('mouseenter', () => {
          clearInterval(autoPlay);
        });

        slider.addEventListener('mouseleave', () => {
          autoPlay = setInterval(nextSlide, slideInterval);
        });

        // Dots navigation
        dots.forEach((dot, i) => {
          dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
            // Reset interval
            clearInterval(autoPlay);
            autoPlay = setInterval(nextSlide, slideInterval);
          });
        });

        // Initial setup
        document.addEventListener("DOMContentLoaded", () => {
            showSlide(0);
        });
      })();