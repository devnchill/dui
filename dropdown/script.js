function dropdown(dropdownButtonId, containerId) {
  const dropdownButton = document.getElementById(dropdownButtonId);
  const container = document.getElementById(containerId);
  dropdownButton.addEventListener("click", () => {
    container.classList.toggle("visible");
    dropdownButton.classList.toggle("hide");
    if (container.classList.contains("visible")) {
      container.setAttribute("display", "block");
    } else {
      container.setAttribute("display", "none");
    }
    if (dropdownButton.classList.contains("hide")) {
      dropdownButton.textContent = "hide";
    } else {
      dropdownButton.textContent = "show";
    }
  });
}
dropdown("__test", "__nav");
