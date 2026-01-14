// Contact form basic validation
function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value || !email.value || !message.value) {
    alert("Please fill all fields.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
