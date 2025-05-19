// Get the checkbox element
const checkbox = document.getElementById("myCheckbox");
const toggleContainer = checkbox.closest(".toggle"); // Get the toggle container

// Define initial state variables
let isChecked = false;
let isAnimating = false;

// Function to handle the checkbox change event with smooth transitions
function handleCheckboxChange() {
  if (isAnimating) return; // Prevent multiple rapid toggles during animation

  isAnimating = true;
  isChecked = checkbox.checked;
  console.log("Checkbox is checked:", isChecked);

  // Disable the toggle while animating
  toggleContainer.style.pointerEvents = "none";

  const projectsToHide = isChecked
    ? document.querySelectorAll(".work-project")
    : document.querySelectorAll(".hobby-project");
  const projectsToShow = isChecked
    ? document.querySelectorAll(".hobby-project")
    : document.querySelectorAll(".work-project");

  // First fade out the current projects
  projectsToHide.forEach((project) => {
    // Add fade-out class for animation
    project.style.opacity = "0";
    project.style.transform = "translateY(-20px)";
  });

  // After fade-out completes, hide them and show the new projects with animation
  setTimeout(() => {
    projectsToHide.forEach((project) => {
      project.classList.add("is-hidden");
    });

    projectsToShow.forEach((project, index) => {
      // Reset initial state for animation
      project.style.opacity = "0";
      project.style.transform = "translateY(20px)";
      project.classList.remove("is-hidden");

      // Stagger the animations for a cascade effect
      setTimeout(() => {
        project.style.opacity = "1";
        project.style.transform = "translateY(0)";
        project.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        // If this is the last project, mark animation as complete
        if (index === projectsToShow.length - 1) {
          setTimeout(() => {
            isAnimating = false;
            // Re-enable the toggle after animation completes
            toggleContainer.style.pointerEvents = "auto";
          }, 600); // Match the transition duration
        }
      }, index * 100); // Stagger by 100ms
    });
  }, 600); // Match the fade-out duration
}

// Add hover effects to projects for additional interactivity
function addProjectHoverEffects() {
  const allProjects = document.querySelectorAll(
    ".work-project, .hobby-project"
  );

  allProjects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      if (!project.classList.contains("is-hidden")) {
        project.style.transform = "translateY(-5px)";
        project.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
      }
    });

    project.addEventListener("mouseleave", () => {
      if (!project.classList.contains("is-hidden")) {
        project.style.transform = "translateY(0)";
        project.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }
    });
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Original animations for nav items
  var navItems = document.querySelectorAll(".slide-down");
  var toggle = document.querySelectorAll(".slide-down-toggle");
  var intro_section = document.querySelectorAll(".intro-section");

  function fadeInFromTop() {
    navItems.forEach(function (item, index) {
      setTimeout(function () {
        item.classList.add("slide-down-show");
      }, index * 200);
    });
    toggle.forEach(function (item, index) {
      setTimeout(function () {
        item.classList.add("slide-down-toggle-show");
      }, index * 200);
    });
    intro_section.forEach(function (item, index) {
      setTimeout(function () {
        item.classList.add("fade-in");
      }, index * 200);
    });
  }

  fadeInFromTop();

  // Initialize project visibility based on toggle state
  const workProjects = document.querySelectorAll(".work-project");
  const hobbyProjects = document.querySelectorAll(".hobby-project");

  // Set initial state
  isChecked = checkbox.checked;
  if (isChecked) {
    workProjects.forEach((project) => project.classList.add("is-hidden"));
  } else {
    hobbyProjects.forEach((project) => project.classList.add("is-hidden"));
  }

  // Apply initial hover effects
  addProjectHoverEffects();

  // Attach the event listener to the checkbox
  checkbox.addEventListener("change", handleCheckboxChange);

  // Prevent text selection in toggle labels
  const toggleLabels = document.querySelectorAll(".toggle-label");
  toggleLabels.forEach((label) => {
    label.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });
  });
});
