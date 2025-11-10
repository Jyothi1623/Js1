let count = 0;
const countValue = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const DefaultBtn = document.getElementById("Default");
function updateColor() {
  if (count > 0) {
    countValue.style.color = "green";
  } else if (count < 0) {
    countValue.style.color = "red";
  } else {
    countValue.style.color = "black";
  }
}
function incrementCount() {
  count++;
  countValue.textContent = count;
  updateColor();
}

function decrementCount() {
  count--;
  countValue.textContent = count;
  updateColor();
}

function defaultCount() {
  count = 0;
  countValue.textContent = count;
  updateColor();
}

