let show = document.getElementById('show');
let count = 0;
show.textContent = count;

function plusOne() {
  show.textContent = ++count;
}

function subOne() {
  show.textContent = --count;
}

let plusBtn = document.getElementById('plusBtn');
let subBtn = document.getElementById('subBtn');

plusBtn.addEventListener("mousedown", function() {
  this.style.border = '2px solid #00aaee';
});
plusBtn.addEventListener("mouseup", function() {
  this.style.border = '1px solid #000';
});
subBtn.addEventListener("mousedown", function() {
  this.style.border = '2px solid #ffaa00';
});
subBtn.addEventListener("mouseup", function() {
  this.style.border = '1px solid #000';
});