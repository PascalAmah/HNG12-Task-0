// Loading animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").classList.add("fade-out");
    document.querySelector(".card-container").classList.add("show");
  }, 2000);
});

// Update UTC time
function updateUTCTime() {
  const now = new Date();
  document.getElementById("utc-time").textContent = now.toUTCString();
}
updateUTCTime();
setInterval(updateUTCTime, 1000);

// Copy email functionality
document
  .querySelector('[data-testid="emailAddress"]')
  .addEventListener("click", function () {
    const email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email).then(() => {
      const tooltip = this.querySelector(".tooltip");
      tooltip.textContent = "Copied!";
      setTimeout(() => {
        tooltip.textContent = "Click to Copy";
      }, 2000);
    });
  });
