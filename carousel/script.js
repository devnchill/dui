function carousel() {
  const leftNavBtn = document.getElementById("__left");
  const rightNavBtn = document.getElementById("__right");
  const imgRow = document.getElementById("__img_row");
  let currentPosition = 0;
  leftNavBtn.addEventListener("click", () => {
    if (currentPosition === 0) {
      currentPosition = -2500;
    }
    currentPosition += 500;
    imgRow.style.left = `${currentPosition}px`;
  });
  rightNavBtn.addEventListener("click", () => {
    if (currentPosition === -2000) {
      currentPosition = 500;
    }
    currentPosition -= 500;
    imgRow.style.left = `${currentPosition}px`;
  });
}
carousel();
