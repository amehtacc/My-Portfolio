window.onscroll = function () {
    scroll();
  };
  
  const navbar = document.getElementById("nav");
  
  function scroll() {
    if (window.scrollY) {
      navbar.style.cssText = `
          background-color: rgb(9, 9, 18, 0.8);
          box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          `;
      toggleBar.style.display = "none";
    } else {
      navbar.style.cssText = `
          background-color: none;
          box-shadow: none;
          backdrop-filter: none;
          `;
    }
  }
  
  const toggleBtn = document.querySelector(".openbtn");
  const toggleBar = document.querySelector("#toggle-bar");
  const closeBtn = document.querySelector(".closeBtn");
  
  toggleBtn.addEventListener("click", () => {
    toggleBar.style.cssText = `
      width: 44%;
      `;
  });
  
  closeBtn.addEventListener("click", () => {
    toggleBar.style.display = "none";
  });
  
  
  function hideToggle() {
    toggleBar.style.display = "none";
  }
  