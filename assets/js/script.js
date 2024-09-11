// Swiper initialization for pages with swiper elements
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      autoplay: true,
      loop: true,
    });
  }

  if (document.querySelector(".testimonial-swiper")) {
    var testimonialSwiper = new Swiper(".testimonial-swiper", {
      spaceBetween: 10,
      slidesPerView: 2,
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  }

  // Category filter functionality
  if (document.querySelector(".category-btn")) {
    document.querySelectorAll(".category-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const selectedCategory = this.getAttribute("data-category");

        document.querySelectorAll(".category-btn").forEach((btn) => {
          btn.classList.remove("active");
        });

        this.classList.add("active");

        document.querySelectorAll(".col").forEach((member) => {
          if (selectedCategory === "all" || member.getAttribute("data-category") === selectedCategory) {
            member.style.display = "block";
          } else {
            member.style.display = "none";
          }
        });
      });
    });

    document.querySelectorAll(".col").forEach((member) => {
      member.style.display = "block";
    });
    document
      .querySelector('.category-btn[data-category="all"]')
      .classList.add("active");
  }
});
