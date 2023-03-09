const panels = document.querySelectorAll(".panel");

document.querySelector(".container").addEventListener("click", (event) => {
  if (event.target.classList.contains("panel")) {
    panels.forEach((panel) => panel.classList.remove("active"));
    event.target.classList.add("active");
  }
});
