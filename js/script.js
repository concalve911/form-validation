"use strict";

const form = document.querySelector(".contact__form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  const nameInput = document.querySelector(".contact__name");
  const nameError = document.querySelector(".contact__error-name");

  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required.";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  const messageInput = document.querySelector(".contacts__input-message");
  const messageError = document.querySelector(".contact__error-message");

  if (messageInput.value.trim().length < 5) {
    messageError.textContent = "Message must be at least 5 characters long.";
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  const phoneInput = document.querySelector(".contacts__input-phone");
  const phoneError = document.querySelector(".contact__error-phone");

  const phonePattern = /^\+380\d{9}$/;

  if (!phonePattern.test(phoneInput.value.trim())) {
    phoneError.textContent = "Phone number must start with +380.";
    phoneError.style.display = "block";
    isValid = false;
  } else {
    phoneError.style.display = "none";
  }

  const emailInput = document.querySelector(".contacts__input-email");
  const emailError = document.querySelector(".contact__error-email");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Invalid email format.";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (isValid) {
    console.log({
      name: nameInput.value.trim(),
      message: messageInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
    });
  }
}
