var menu = document.querySelector('nav ul');

document.querySelector('.menu-toggle').addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.toggle('show');
});