/* 
  This is your JavaScript file.

  JavaScript adds INTERACTIVITY to a web page.
  • It can listen for clicks or key presses.
  • It can change HTML or CSS after the page loads.
  • It can talk to servers to get new data.

  For now, this file is empty—you’ll write code here later
  to make buttons, menus, or other features work.
*/

// Get the current year
const currentYear = new Date().getFullYear();

// Find the span with id="year" and set its text
document.getElementById("year").textContent = currentYear;

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");

// Nav menu
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
  menuBtn.setAttribute("aria-expanded", !expanded);
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", false);
  });
});
