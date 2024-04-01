let cartItems = [];

function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        product.quantity = 1;
        cartItems.push(product);
    }

    renderCartItems();
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        const productImage = document.createElement('img');
        productImage.src = item.image;
        cartItemElement.appendChild(productImage);

        const productDetails = document.createElement('div');

        const productName = document.createElement('h3');
        productName.textContent = item.name;
        productDetails.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${item.price}`;
        productDetails.appendChild(productPrice);

        const productQuantity = document.createElement('p');
        productQuantity.textContent = `Quantity: ${item.quantity}`;
        productDetails.appendChild(productQuantity);

        cartItemElement.appendChild(productDetails);
        cartItemsContainer.appendChild(cartItemElement);
    });
}