// Get the checkbox element
const checkbox = document.getElementById('myCheckbox');

// Define a boolean variable
let isChecked = false;

// Function to handle the checkbox change event
function handleCheckboxChange() {
  isChecked = checkbox.checked;
  console.log('Checkbox is checked:', isChecked);

  // Toggle visibility of work projects
  workProjects.forEach(project => {
    if (isChecked) {
      project.classList.add('is-hidden');
    } else {
      project.classList.remove('is-hidden');
    }
  });

  // Toggle visibility of hobby projects
  hobbyProjects.forEach(project => {
    if (isChecked) {
      project.classList.remove('is-hidden');
    } else {
      project.classList.add('is-hidden');
    }
  });
}

// Attach the event listener to the checkbox
checkbox.addEventListener('change', handleCheckboxChange);

// Get the project elements
const workProjects = document.querySelectorAll('.work-project');
const hobbyProjects = document.querySelectorAll('.hobby-project');

document.addEventListener("DOMContentLoaded", function() {
  var navItems = document.querySelectorAll(".slide-down");
  var toggle = document.querySelectorAll(".slide-down-toggle");
  var intro_section = document.querySelectorAll(".intro-section");

  function fadeInFromTop() {
    navItems.forEach(function(item, index) {
      setTimeout(function() {
        item.classList.add("slide-down-show");
      }, index * 200);
    });
    toggle.forEach(function(item, index) {
      setTimeout(function() {
        item.classList.add("slide-down-toggle-show");
      }, index * 200);
    });
    intro_section.forEach(function(item, index) {
      setTimeout(function() {
        item.classList.add("fade-in");
      }, index * 200);
    });
  }

  fadeInFromTop();
});
