// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    }
  });
});

// Active navigation link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Contact form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show success message
    const formData = new FormData(this);
    alert("Thank you for your message! We will get back to you soon.");

    // Reset form
    this.reset();
  });
}

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);

    // Reset form
    this.reset();
  });
}

// Add animation to stats numbers
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const text = target.textContent;
          const number = parseInt(text.replace(/\D/g, ""));
          const suffix = text.replace(/[0-9]/g, "");

          let current = 0;
          const increment = number / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
              target.textContent = number + suffix;
              clearInterval(timer);
            } else {
              target.textContent = Math.floor(current) + suffix;
            }
          }, 30);

          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observer.observe(stat));
}

// Call animate stats when page loads
window.addEventListener("load", animateStats);

// Add hover effect to portfolio items
const portfolioItems = document.querySelectorAll(".portfolio-item");
portfolioItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "1";
  }, 100);
});

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  const scrolled = window.pageYOffset;
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Service card hover animation
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.querySelector(".service-icon").style.transform = "rotate(360deg)";
    this.querySelector(".service-icon").style.transition =
      "transform 0.6s ease";
  });

  card.addEventListener("mouseleave", function () {
    this.querySelector(".service-icon").style.transform = "rotate(0deg)";
  });
});

console.log("NEXUS Agency Website Loaded Successfully!");
