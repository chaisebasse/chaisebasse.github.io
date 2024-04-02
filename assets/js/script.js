const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

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
