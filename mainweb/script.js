document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons()

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Parallax effect for orbs
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const orb1 = document.querySelector(".orb-1")
    const orb2 = document.querySelector(".orb-2")

    orb1.style.transform = `translateY(${scrollY * 0.1}px)`
    orb2.style.transform = `translateY(${scrollY * -0.1}px)`
  })

  // Intersection Observer for fade-in animations
  const fadeInElements = document.querySelectorAll(".feature, .testimonial")
  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
          fadeInObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  fadeInElements.forEach((element) => {
    fadeInObserver.observe(element)
  })
})

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", (e) => {  // Added event parameter
    e.stopPropagation(); // Added this line to prevent event bubbling
    mobileMenu.classList.toggle("active");
    const icon = mobileMenuToggle.querySelector("i");
    if (mobileMenu.classList.contains("active")) {
      icon.setAttribute("data-lucide", "x");
    } else {
      icon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenu.classList.remove("active");
      const icon = mobileMenuToggle.querySelector("i");
      icon.setAttribute("data-lucide", "menu");
      lucide.createIcons();
    }
  });

  // Close mobile menu when clicking on a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      const icon = mobileMenuToggle.querySelector("i");
      icon.setAttribute("data-lucide", "menu");
      lucide.createIcons();
    });
  });
}

