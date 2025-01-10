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
