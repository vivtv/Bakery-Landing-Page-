document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
function updateGallery(category) {
    const dessertGallery = document.getElementById('dessertGallery');
    dessertGallery.innerHTML = ''; // Clear the current gallery content

    // Define the items for each category
    const items = {
        cakes: [
            { src: 'foods/Buttercream Cake.jpeg', alt: 'Buttercream Cake' },
            { src: 'foods/Angel Strawberry Cake.jpeg', alt: 'Strawberry Cake' },
            { src: 'foods/Cheesecake.jpeg', alt: 'Macaroons' },
            { src: 'foods/Matcha cheesecake.jpeg', alt: 'Matcha Cheesecake' },
        ],
        pastry: [
            { src: 'foods/Chocolate croissant.jpeg', alt: 'Chocolate Croissant' },
            { src: 'foods/Cheesecake bar.jpeg', alt: 'Cheesecake Bar' },
            { src: 'foods/sugar cookies.jpeg', alt: 'Apple Turnover' },
            { src: 'foods/Sandwich Cookies.jpeg', alt: 'Macaroons' },
        ],
        desserts: [
            { src: 'foods/Glazed Donuts.jpeg', alt: 'Glazed Donuts' },
            { src: 'foods/cupcakes.jpeg', alt: 'Danish Pastry' },
            { src: 'foods/Macaroons.jpeg', alt: 'Macaroons' },
            { src: 'foods/Marshmallows.jpeg', alt: 'Macaroons' },
        ],
    };

    // Get the selected category's items
    const selectedItems = items[category];

    // Update the gallery with new images
    selectedItems.forEach(item => {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        dessertGallery.appendChild(img);
    });
}
// Full reviews for each card
const reviews = [
    "Perfect desserts for family moments. Loved it! The bakery was warm and inviting, and we found joy in every bite. The variety of desserts catered to all our tastes, and the staff made us feel like family too. A perfect place to create lasting memories.",
    "Green tea cake was absolutely divine! The delicate matcha flavor was balanced perfectly with the sweetness of the frosting. Every slice was moist and fresh, making it the highlight of the day. It's a must-try for anyone who loves unique flavors!",
    "Best croissant ever! Pure morning happiness with every flaky, buttery bite. The texture was perfect—crispy on the outside, soft and airy on the inside. Paired with coffee, it was the ideal way to start the day",
    "Colorful pastry that tastes as good as it looks! The vibrant design caught my eye, but the flavor sealed the deal. It was soft, rich, and had a unique sweetness that felt magical. A real treat for both the eyes and the palate.",
    "Lovely cake and even better memories. We spent hours laughing and enjoying the beautiful ambiance of the bakery. The cake was light, fluffy, and perfectly frosted—a dessert that brought everyone together in joy",
    "Delicious macarons with the sweetest smiles! The chef’s passion truly shines through in these delightful treats. Each macaron was perfectly crafted with a delicate shell and creamy filling. The combination of flavors was irresistible!"
];

// DOM Elements
const reviewCards = document.querySelectorAll(".review-card");
const modal = document.getElementById("review-modal");
const reviewText = document.getElementById("review-text");
const closeButton = document.querySelector(".close-button");

// Add click event to each review card
reviewCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        reviewText.textContent = reviews[index]; // Display corresponding review
        modal.style.display = "block"; // Show modal
    });
});

// Close the modal when clicking the close button
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
