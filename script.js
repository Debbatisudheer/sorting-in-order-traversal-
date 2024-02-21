// Sample iPhone data
var iphones = [
    { brand: "Apple", model: "iPhone X", price: 1000, stars: 5, reviews: 6004, image: "iphone x.jpg" },
    { brand: "Apple", model: "iPhone 11", price: 1100, stars: 4, reviews: 4500, image: "iphone 11.png" },
    { brand: "Apple", model: "iPhone SE", price: 600, stars: 3, reviews: 3000, image: "iphone se.jpg" },
    { brand: "Apple", model: "iPhone 12", price: 1200, stars: 5, reviews: 8000, image: "iphonw 12.jpg" },
    { brand: "Apple", model: "iPhone 12 Pro", price: 1300, stars: 5, reviews: 7000, image: "iphone 12 pro.png" },
    { brand: "Apple", model: "iPhone 12 Mini", price: 1000, stars: 4, reviews: 5500, image: "iphone 12 mini.jpg" },
    { brand: "Apple", model: "iPhone 13", price: 1300, stars: 5, reviews: 9000, image: "iphone 13.jpeg" },
    { brand: "Apple", model: "iPhone 13 Pro", price: 1400, stars: 5, reviews: 7500, image: "iphone 13 pro.webp" },
    { brand: "Apple", model: "iPhone 13 Mini", price: 1100, stars: 4, reviews: 6000, image: "iphone 13 mini.jpg" },
    { brand: "Apple", model: "iPhone SE 2", price: 700, stars: 3, reviews: 3500, image: "iphone se 2.jpg" }
];

// Function to sort iPhones based on selected option and display them
function sortAndDisplay() {
    var sortOption = document.getElementById("sortSelect").value;

    var sortedIPhones = iphones.slice(); // Create a copy of the original array

    // Sort iPhones based on selected option
    if (sortOption === 'stars') {
        sortedIPhones.sort(function(a, b) {
            return b.stars - a.stars;
        });
    } else if (sortOption === 'price_low_to_high') {
        sortedIPhones.sort(function(a, b) {
            return a.price - b.price;
        });
    } else if (sortOption === 'price_high_to_low') {
        sortedIPhones.sort(function(a, b) {
            return b.price - a.price;
        });
    }

    displayIPhones(sortedIPhones);
}

// Function to display sorted iPhones
function displayIPhones(sortedIPhones) {
    var iphoneListDiv = document.getElementById("iphoneList");
    iphoneListDiv.innerHTML = ""; // Clear previous content

    sortedIPhones.forEach(function(iphone) {
        var iphoneInfo = document.createElement("div");
        iphoneInfo.classList.add("iphone");

        // Create img element for the iPhone image
        var image = document.createElement("img");
        image.src = iphone.image;
        image.width = 100; // Set the width of the image (adjust as needed)
        image.height = 100; // Set the height of the image (adjust as needed)
        iphoneInfo.appendChild(image);

        // Add model, price, stars, and reviews information
        iphoneInfo.innerHTML += "<p>Model: " + iphone.model + "</p>";
        iphoneInfo.innerHTML += "<p>Price: ₹" + iphone.price.toFixed(2) + "</p>";
        iphoneInfo.innerHTML += "<p> ";
        for (var i = 0; i < iphone.stars; i++) {
            iphoneInfo.innerHTML += "★";
        }
        iphoneInfo.innerHTML += "</p>";
        iphoneInfo.innerHTML += "<p>Reviews: " + iphone.reviews + "</p>";

           // Create Buy Now button
        var buyButton = document.createElement("button");
        buyButton.textContent = "Buy Now";
        buyButton.classList.add("buy-button"); // Add a class to style the button
        buyButton.addEventListener("click", function() {
            alert("Thank you for your purchase! VISIT AGAIN"); // Display a message when the button is clicked
        });
        iphoneInfo.appendChild(buyButton);

        iphoneListDiv.appendChild(iphoneInfo);
    });
}

// Add event listener to the Sort button
document.getElementById("sortButton").addEventListener("click", sortAndDisplay);

// Initial display
sortAndDisplay();
