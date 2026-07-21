function copyWifi() {
  const password = document.getElementById("wifiPassword").textContent;
  navigator.clipboard.writeText(password).then(() => {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
}
