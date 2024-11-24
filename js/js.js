let isDown = false;
let startX;
let scrollLeft;

document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('.navbar-nav a');

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      toggleNav();
      closeNav();
    });
  });
});

function toggleNav() {
  var nav = document.querySelector('.navbar-nav');
  var icon = document.querySelector('.hamburger i'); // Get the icon element
  nav.classList.toggle('active');
  var body = document.body;

  // Toggle a class or directly apply styles to prevent body scroll
  body.classList.toggle('no-scroll');

  // Toggle classes for the hamburger and 'X' icons
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times'); // 'X' icon
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars'); // Hamburger icon
  }
}

// Optional: Function to close the menu if you add a close button
function closeNav() {
  var nav = document.querySelector('.navbar-nav');
  nav.classList.remove('active');
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}