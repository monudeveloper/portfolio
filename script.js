document.getElementById("header").addEventListener("click", navfunction);

function navfunction() {
  document.getElementById("line1").classList.toggle("cross");
  document.getElementById("line2").classList.toggle("cross");
  document.getElementById("line3").classList.toggle("cross");
  document.getElementById("navbar").classList.toggle("cross");
  document.getElementById("nav").classList.toggle("cross");
}

// header
function navscroll() {
  let header = document.getElementById("header");
  
  let scrollvalue = window.scrollY;
  if (scrollvalue > 150) {
    header.classList.add("nav-color");
  } else {
    header.classList.remove("nav-color");
  }
}
window.addEventListener("scroll", navscroll);

// navscroll

function navcolor() {
  let firstpg = document.getElementById("first-pg");
  let secondpg = document.getElementById("second-pg");
  let thirdpg = document.getElementById("third-pg");
  let fourthpg = document.getElementById("fourth-pg");
  let fifthpg = document.getElementById("fifth-pg");
  let scrollval = window.scrollY;

  if (scrollval <= 850) {
    firstpg.classList.add("link-color");
    secondpg.classList.remove("link-color");
    thirdpg.classList.remove("link-color");
    fourthpg.classList.remove("link-color");
  } else if (scrollval >= 850 && scrollval <= 1850) {
    secondpg.classList.add("link-color");
    firstpg.classList.remove("link-color");
    thirdpg.classList.remove("link-color");
    fourthpg.classList.remove("link-color");
  } else if (scrollval > 1850 && scrollval <= 2750) {
    thirdpg.classList.add("link-color");
    secondpg.classList.remove("link-color");
    fourthpg.classList.remove("link-color");
    fifthpg.classList.remove("link-color");
  } else if (scrollval > 2750 && scrollval <= 3650) {
    thirdpg.classList.remove("link-color");
    secondpg.classList.remove("link-color");
    fourthpg.classList.add("link-color");
    fifthpg.classList.remove("link-color");
  } else {
    fifthpg.classList.add("link-color");
    fourthpg.classList.remove("link-color");
  }
}

window.addEventListener("scroll", navcolor);
