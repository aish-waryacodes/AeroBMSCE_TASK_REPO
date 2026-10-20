// Photo slideshow for journey.html
// It changes the picture shown in <img id="slide"> every 2 seconds.

// To add or remove slideshow photos, edit this list
var photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg"
];

var currentPhoto = 0;

function showNextPhoto() {
  var slide = document.getElementById("slide");

  // If this page has no slideshow image, do nothing
  if (!slide) {
    return;
  }

  currentPhoto = currentPhoto + 1;

  // After the last photo, go back to the first one
  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  slide.src = photos[currentPhoto];
}

// Run showNextPhoto every 2000 milliseconds (2 seconds)
setInterval(showNextPhoto, 2000);