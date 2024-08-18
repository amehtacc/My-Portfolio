window.onscroll = function() {myFunction()};

const navbar = document.getElementById("nav");

function myFunction() {
    if(window.scrollY) {
        navbar.style.cssText = `
        background-color: rgb(9, 9, 18, 0.8);
        box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(10px);
        `;
    }
    else {
        navbar.style.cssText = `
        background-color: none;
        box-shadow: none;
        backdrop-filter: none;
        `;
    }
}