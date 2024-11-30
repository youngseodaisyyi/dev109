const images = [
    { src: "./fish.jpg", description: "This is the description for Image 1." },
    { src: "./octopus.jpg", description: "This is the description for Image 2." },
    { src: "./seahorse.jpg", description: "This is the description for Image 3." },
    { src: "./turtle.jpg", description: "This is the description for Image 4." },
    { src: "./whale.jpg", description: "This is the description for Image 5." }
];

let currentIndex = 0; // Track the current image index

// Get elements
const imageElement = document.getElementById("carousel-image");
const descriptionElement = document.getElementById("image-description");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to update the carousel
function updateCarousel() {
    imageElement.src = images[currentIndex].src;
    descriptionElement.textContent = images[currentIndex].description;
}

// Previous button click handler
prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

// Next button click handler
nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Automatically change images every 5 seconds
setInterval(function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}, 5000);

// Initial call to display the first image
updateCarousel();
