let bar = document.getElementById('bar');
let close = document.getElementById('close');
let navBar = document.getElementById('navbar');

bar.addEventListener("click", () => {
  navBar.classList.add('active');
});

close.addEventListener("click", () => {
  navBar.classList.remove('active');
});