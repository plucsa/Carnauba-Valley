      (function () {
        const topbar = document.getElementById("siteTopbar");
        const logoImg = document.querySelector(".logo-top");
        const THRESHOLD = 40; // px para iniciar a transição

        if (!topbar) return;

        const srcWhite = logoImg?.dataset?.srcWhite;
        const srcDark = logoImg?.dataset?.srcDark || logoImg?.src;

        function updateHeader() {
          if (window.scrollY > THRESHOLD) {
            topbar.classList.add("topbar--solid");
            topbar.classList.remove("topbar--transparent");
            if (logoImg && srcDark) logoImg.src = srcDark;
          } else {
            topbar.classList.remove("topbar--solid");
            topbar.classList.add("topbar--transparent");
            if (logoImg && srcWhite) logoImg.src = srcWhite;
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