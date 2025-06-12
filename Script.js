function openForm() {
  document.getElementById("buyForm").style.display = "block";
}

function closeForm() {
  document.getElementById("buyForm").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();
  alert("Vielen Dank für deinen Kauf! Wir melden uns per E-Mail.");
  closeForm();
}
