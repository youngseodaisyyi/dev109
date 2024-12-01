const images = [
    { src: "./images/fish.jpg", description: "This is a fish. A fish, any of approximately 34,000 species of vertebrate animals (phylum Chordata) found in the fresh and salt waters of the world. Living species range from the primitive jawless lampreys and hagfishes through the cartilaginous sharks, skates, and rays to the abundant and diverse bony fishes. Most fish species are cold-blooded; however, one species, the opah (Lampris guttatus), is warm-blooded. The term fish is applied to a variety of vertebrates of several evolutionary lines. - Britannica" },
    { src: "./images/octopus.jpg", description: "This is an octopus. An octopus, in general, any eight-armed cephalopod mollush of the order Octopoda. The true octopuses are members of the genus Octopus, a large group of widely distributed shallow-water cephalopods. Octopuses vary greatly in size: the smallest is about 5 cm long, while the largest species, the reddish pink giant Pacific octopus, may grow up to 5.4 meters. - Britannica" },
    { src: "./images/seahorse.jpg", description: "This is a seahorse. A seahorse, any of about 50 species of marine fishes allied to pipefishes in the family Syngnathidae. Seahorses are found in shallow coastal waters in latitudes from about 52 degrees north to 45 degrees south. Their habitats include coral reefs, mangroves, sea grass beds, and estuaries. They are unique in appearance, with their horselike head, prehensile tail, independently moving eyes, and brood pouch. They have long, tubular snouts and small, toothless mouths. Their bodies are covered with consecutive rings of bony plates. The name of the genus that contains seahorses is taken from the Greek words hippos and kampos. - Britannica" },
    { src: "./images/turtle.jpg", description: "This is a sea turtle. A turtle, any of seven species of marine turtles belonging to the families Dermochelyidae (leatherback sea turtles) and Cheloniidae (green turtles, flatback sea turtles, loggerhead sea turtles, hawkbills, and ridleys). Both families are highly aquatic, and most species only appear on coastal beaches for egg laying; however, the green trutle occasionally basks in terrestrial environments. Adult sea turtles are mainly denizens of tropical and subtropical seas, but the juveniles of both families occur naturally in more temperate waters. -Britannica" },
    { src: "./images/whale.jpg", description: "This is a whale. A whale, any of the larger species of aquatic mammals belonging to the order Cetacea. The term whale can be used to reference to any cetacean including porpoises and dolphins, but in general it is applied to those more than 3 meters long. An exception is the 2.7 meter dwarf sperm whale, so called for its otherwise striking resemblance to its larger namesake. Whales are the heaviest known animals, living or fossil, reaching a maximum size in the blue whale of perhaps more than 30 meters and 200 metric tons. - Britannica" }
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
