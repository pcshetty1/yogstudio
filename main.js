// js/main.js
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `New Contact from Yoga Website:
Name: ${name}
Email: ${email}
Message: ${message}`;

  // Replace with your own WhatsApp number (with country code, no "+" sign)
  const phoneNumber = "919096543582"; // Change this to your WhatsApp number

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  window.open(whatsappURL, "_blank");
});
