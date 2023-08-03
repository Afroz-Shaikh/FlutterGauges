const indicator = document.getElementById("indicator");

// Function to update the indicator position based on scroll position
function updateIndicator() {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Get the page height
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the percentage scrolled
  const percentScrolled = (scrollPosition / pageHeight) * 100;

  // set the indicator position based on the percentage scrolled
  indicator.style.left = `${percentScrolled}%`;

  // Set the indicator width based on the percentage scrolled
  // indicator.style.width = `${percentScrolled}%`;
}

// Call the updateIndicator function on page load and scroll
window.addEventListener("load", updateIndicator);
window.addEventListener("scroll", updateIndicator);

// JavaScript to handle the mobile navbar toggle
const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

navbarBurger.addEventListener("click", (e) => {
  console.log(e.target);

  navbarMenu.classList.toggle("hidden");
});

const crossButton = document.querySelector(".cross-button");

crossButton.addEventListener("click", (e) => {
  navbarMenu.classList.toggle("hidden");
});

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// function to copy
const copyToClipboard = () => {
  const el = document.createElement("textarea");
  el.value = "flutter pub add geekyants_flutter_gauges";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

// copy button
const copyButton = document.querySelector("#copy");

copyButton.addEventListener("click", copyToClipboard);

// Show/Hide
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      } else {
        entry.target.classList.remove("animated");
      }
    });
  });
});

const hiddenElements = document.querySelectorAll(".animate");
hiddenElements.forEach((element) => observer.observe(element));
