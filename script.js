document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-btn");
  const toggleText = document.getElementById("toggle-text");

  toggleButton.addEventListener("change", function () {
    if (this.checked) {
      toggleText.innerText = "Activado";
    } else {
      toggleText.innerText = "Desactivado";
    }
  });
});

function copyText(text) {
  navigator.clipboard.writeText(text);
}
