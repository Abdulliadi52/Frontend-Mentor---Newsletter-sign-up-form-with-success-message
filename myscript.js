const opens = document.getElementById("open");
const closes = document.getElementById("close");
const showContainers = document.getElementById("show-container");
const closeContainers = document.getElementById("close-container");

opens.addEventListener("click", () => {
  showContainers.classList.add("active");
  closeContainers.classList.add("active");
});
closes.addEventListener("click", () => {
  showContainers.classList.remove("active");
  closeContainers.classList.remove("active");
});