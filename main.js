// js/main.js
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = 
  `New Inquiry from Yoga Bliss Website* 
  Name: ${name}
  Email: ${email}
  Message: ${message}
  Sent via the contact form on our website.Namaste!`;

  const phoneNumber = "919096543582";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  window.open(whatsappURL, "_blank");
});
