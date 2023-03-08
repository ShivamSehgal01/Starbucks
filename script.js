let btn = document.getElementById("menu-btn");
let nav = document.getElementById("menu");
let rotate = document.querySelectorAll("#svg-btn");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

function rotateSvgFirst() {
  rotate[0].classList.toggle("rotate-svg-up");
}

function rotateSvgSecond() {
  rotate[1].classList.toggle("rotate-svg-up");
}

function rotateSvgThird() {
  rotate[2].classList.toggle("rotate-svg-up");
}

function rotateSvgFourth() {
  rotate[3].classList.toggle("rotate-svg-up");
}

function rotateSvgFifth() {
  rotate[4].classList.toggle("rotate-svg-up");
}

btn.addEventListener("click", navToggle);

rotate[0].addEventListener("click", rotateSvgFirst);
rotate[1].addEventListener("click", rotateSvgSecond);
rotate[2].addEventListener("click", rotateSvgThird);
rotate[3].addEventListener("click", rotateSvgFourth);
rotate[4].addEventListener("click", rotateSvgFifth);
