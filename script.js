// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll Reveal Animation
const scrollElements = document.querySelectorAll(
  ".feature, .contact-form, .follow-us"
);
const scrollOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, scrollOptions);

scrollElements.forEach((element) => {
  scrollObserver.observe(element);
});

// Responsive Mobile Navigation
const navLinks = document.querySelector(".nav-links");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Form Validation
const form = document.querySelector("form");
const firstName = document.querySelector('input[name="First Name"]');
const lastName = document.querySelector('input[name="Last Name"]');
const email = document.querySelector('input[name="Email"]');

form.addEventListener("submit", (e) => {
  let valid = true;

  if (firstName.value === "") {
    valid = false;
    firstName.classList.add("error");
  } else {
    firstName.classList.remove("error");
  }

  if (lastName.value === "") {
    valid = false;
    lastName.classList.add("error");
  } else {
    lastName.classList.remove("error");
  }

  if (email.value === "" || !email.value.includes("@")) {
    valid = false;
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  if (!valid) {
    e.preventDefault();
  }
});

// Testimonials Slider
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");

  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

showSlide(slideIndex);

// Counters
const counters = document.querySelectorAll(".counter");
const speed = 200; // The lower the number, the slower the counting

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Dynamic Footer Date
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector(".footer p");
footerYear.innerText = `© ${currentYear} GenBooker. All rights reserved.`;

// Social Media Icon Hover Effect
const socialIcons = document.querySelectorAll(".social-icon");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    const iconImg = icon.querySelector("img");
    iconImg.style.transform = "scale(1.2)";
  });

  icon.addEventListener("mouseout", () => {
    const iconImg = icon.querySelector("img");
    iconImg.style.transform = "scale(1)";
  });
});

// Modal Windows for FAQ
const faqItems = document.querySelectorAll(".faq-item");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close-modal");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const question = item.querySelector(".question").textContent;
    const answer = item.querySelector(".answer").innerHTML;

    modalContent.innerHTML = `
            <h2>${question}</h2>
            <p>${answer}</p>
        `;

    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Google Maps Integration
// Replace 'your-map-embed-url' with your actual Google Maps embed URL
const mapEmbedUrl = "your-map-embed-url";
const mapContainer = document.querySelector(".map-container");
mapContainer.innerHTML = `<iframe src="${mapEmbedUrl}" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;

// Live Chat
// Replace 'your-live-chat-script-url' with the actual URL of your live chat script
const liveChatScriptUrl = "your-live-chat-script-url";
const liveChatScript = document.createElement("script");
liveChatScript.src = liveChatScriptUrl;
document.head.appendChild(liveChatScript);

// Analytics Integration
// Replace 'your-analytics-script-url' with the actual URL of your analytics script
const analyticsScriptUrl = "your-analytics-script-url";
const analyticsScript = document.createElement("script");
analyticsScript.src = analyticsScriptUrl;
document.head.appendChild(analyticsScript);

// Progressive Web App (PWA)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

// Testimonials Slider (continued from previous code)
// ... (same code as before) ...

// Interactive Buttons
const interactiveButtons = document.querySelectorAll(".cta-button");

interactiveButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#e67e22";
  });

  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#f39c12";
  });
});
