document.addEventListener('DOMContentLoaded', function() {
    // Initialize Glide.js slider
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000
    }).mount();

    // Category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 3; // Initial cart items

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItems++;
            cartCount.textContent = cartItems;
            // You can add more functionality here, like showing a notification
        });
    });

    // Offer buttons
    const offerButtons = document.querySelectorAll('.offer-btn');
    offerButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Offer applied!'); // Replace with actual offer logic
        });
    });

    // Bottom navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Floating cart button
    const floatingCartBtn = document.querySelector('.floating-cart-btn');
    floatingCartBtn.addEventListener('click', function() {
        alert('Cart opened!'); // Replace with actual cart opening logic
    });
});