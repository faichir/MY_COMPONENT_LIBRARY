const form = document.getElementById("verifyForm");
const errorText = document.getElementById("error");
const successText = document.getElementById("success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const location = document.getElementById("location").value.trim();
  const message = document.getElementById("message").value.trim();

  errorText.textContent = "";
  successText.textContent = "";

  if (name === "" || contact === "" || location === "" || message === "") {
    errorText.textContent = "Please fill in all fields.";
    return;
  }

  if (name.length < 3) {
    errorText.textContent = "Name is too short.";
    return;
  }

  successText.textContent =
    "Thank you " +
    name +
    "! Your request for " +
    location +
    " has been received. We will contact you on " +
    contact +
    ".";
  form.reset();
});
