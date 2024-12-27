function carousel() {
  const navDots = document.querySelectorAll("#__nav_dots button");
  const leftNavBtn = document.getElementById("__left");
  const rightNavBtn = document.getElementById("__right");
  const imgRow = document.getElementById("__img_row");
  const images = Array.from(imgRow.children);

  let currentPosition = 0; 
  const imageWidth = 500; 

  function updateActiveDot() {
    const activeIndex = Math.abs(currentPosition) / imageWidth; // Calculate active image index
    navDots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function leftScroll() {
    if (currentPosition === 0) {
      currentPosition = -(images.length - 1) * imageWidth;
    } else {
      currentPosition += imageWidth;
    }
    imgRow.style.left = `${currentPosition}px`;
    updateActiveDot();
  }

  function rightScroll() {
    if (currentPosition === -(images.length - 1) * imageWidth) {
      currentPosition = 0;
    } else {
      currentPosition -= imageWidth;
    }
    imgRow.style.left = `${currentPosition}px`;
    updateActiveDot();
  }

  leftNavBtn.addEventListener("click", leftScroll);
  rightNavBtn.addEventListener("click", rightScroll);

  navDots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      navDots.forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
      currentPosition = -index * imageWidth; 
      imgRow.style.left = `${currentPosition}px`;
    });
  });

  
  updateActiveDot();

  
  setInterval(rightScroll, 5000);
}

carousel();
