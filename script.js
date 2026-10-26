"use strict";

document.documentElement.classList.add("js-enabled");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = menuToggle
  ? document.getElementById(menuToggle.getAttribute("aria-controls"))
  : null;

if (menuToggle && navigation) {
  const mobileLayout = window.matchMedia("(max-width: 760px)");
  const menuLabel = menuToggle.querySelector(".menu-toggle-label");
  menuToggle.hidden = false;

  const setMenuOpen = (isOpen, returnFocus = false) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    if (menuLabel) {
      menuLabel.textContent = isOpen ? "Close menu" : "Menu";
    }
    navigation.classList.toggle("is-open", isOpen);

    if (returnFocus) {
      menuToggle.focus();
    }
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobileLayout.matches) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false, true);
    }
  });

  mobileLayout.addEventListener("change", (event) => {
    if (!event.matches) {
      setMenuOpen(false);
    }
  });
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const status = document.getElementById("contact-form-status");
  contactForm.hidden = false;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      status.textContent = "Please complete each field and enter a valid email address.";
      return;
    }

    status.textContent =
      "Your message has not been sent or stored. Please email dnp67@njit.edu directly.";
  });
}
