function updateUTCTime() {
  const now = new Date();
  const utcTimeString = now.toUTCString();
  document.getElementById("utc-time").textContent = utcTimeString;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
