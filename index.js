var counter = 0;

function decrease() {
  counter--;
  document.querySelector(".count").innerHTML = counter;
}

function increase() {
  counter++;
  document.querySelector(".count").innerHTML = counter;
}

function reset() {
  counter = 0;
  document.querySelector(".count").innerHTML = counter;
}
