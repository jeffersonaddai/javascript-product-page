//create a grid
let largeGrid = document.createElement('div');
largeGrid.className = 'products-grid';
//Add product elements to grid
for (const product of products) {
    largeGrid.insertAdjacentElement('afterbegin', product.renderProduct());
}

//Add grid to the main
document.querySelector('#main').append(largeGrid);

// create a cart
cart = new Cart();
// Add event listeners to product's add to cart button and remove button
// To do that loop through the products in the cart
// Insert cart item to main
document.querySelector('#main').insertAdjacentElement('beforeend', cart.renderCart());
for (const product of products) {
    product.addToCartButton.addEventListener('click', () => {
        const orderQuantity = parseInt(document.querySelector(`#${product._id}quantity`).value);

        if (product._stock > 0 && orderQuantity < product._stock){
            const order = cart.findOrder(product._id)
            if (order == null) {
                cart.addToCart(product);
                document.querySelector('#cart').lastElementChild.insertAdjacentHTML('beforebegin', cart.renderCartItem());
            } else {
                cart.addToCart(product);
                document.querySelector(`#${order._id}cartItem`)
                    .lastElementChild.querySelector('span').innerText = parseInt(order.items[order.items.length - 1].quantity) + parseInt(document.querySelector(`#${order._id}cartItem`)
                        .lastElementChild.querySelector('span').innerText);
            }
            // Update the total price
            updateTotalPrice();
            updateStock(product);
        }else{
            alert(`Sorry product out of stock. Only ${product._stock} left`);

        }
    })
    document.querySelector(`#${product._id}removeBtn`).addEventListener('click', () => {
        try {
            document.querySelector(`#${cart.findOrder(product._id)._id}cartItem`).remove();
        } catch {
            alert("Item is not in cart");
        }
        cart.removeFromCart(product);
        updateTotalPrice();
        updateStock(product);
    });


}

function updateTotalPrice(cartText) {
    document.querySelector('#cartTotal').innerText = cart._totalPrice;
}
function updateStock(product) {
    document.querySelector(`#${product._id}stock`).innerText = product._stock;
}

