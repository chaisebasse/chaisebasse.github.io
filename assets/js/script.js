const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Function to navigate to a specific page
function navigateToPage(pageName) {
  for (let i = 0; i < pages.length; i++) {
    if (pageName === pages[i].dataset.page) {
      pages[i].classList.add("active");
      navigationLinks[i].classList.add("active");
      window.scrollTo(0, 0);
    } else {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
  }
}

// Navigation link click event listener
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    navigateToPage(this.innerHTML.toLowerCase());
  });
}

// Add event listeners to project titles in the "projects" article
const projectLinks = document.querySelectorAll(".h4.timeline-item-title");
const portfolioImages = document.querySelectorAll(".project-item img");

for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function () {
    navigateToPage("portfolio");

    // Remove highlight from all images
    portfolioImages.forEach(img => img.classList.remove("highlight"));

    // Highlight the corresponding image
    const correspondingImage = portfolioImages[i];
    correspondingImage.classList.add("highlight");

    // Remove highlight after a short delay (e.g., 1 second)
    setTimeout(() => {
      correspondingImage.classList.remove("highlight");
    }, 400); // Adjust the time in milliseconds as needed
  });
}

// Add CSS for the highlight effect
const style = document.createElement('style');
style.innerHTML = `
  .highlight {
    filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg);
    transition: filter 0.5s ease-in-out;
  }
`;
document.head.appendChild(style);

                        // LEAFLET //
// Leaflet map initialization
var map = L.map('map').setView([48.858242, 2.34], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Resize the map after a slight delay to ensure proper initialization
setTimeout(function() {
  map.invalidateSize();
}, 100);

// Handling map resizing when contact button is clicked
const contactButton = navigationLinks[navigationLinks.length - 1];
const mapModify = document.getElementById('map');

contactButton.addEventListener('click', function() {
  mapModify.classList.add('largeSize');
  // After toggling the 'largeSize' class, resize the map after a slight delay
  setTimeout(function() {
    map.invalidateSize();
  }, 100);
});
                        // LEAFLET //
