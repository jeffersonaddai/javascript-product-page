//create a grid
let largeGrid = document.createElement('div');
largeGrid.className = 'products-grid';
//Add product elements to grid
for (const product of products){
    largeGrid.insertAdjacentElement('afterbegin', product.createHtmlElements());
}

//Add grid to the main
document.querySelector('#main').append(largeGrid);
// add a shadow layer
document.querySelector('#main').insertAdjacentHTML('beforeend', "<div id='cd-shadow-layer'></div>")
// create a cart
cart = new Cart();
// Add cart html to main
// Add event listeners to product's add to cart button and remove button
// loop through the products in the cart
for (const product of products){
    product.addToCartButton.addEventListener('click', () =>{
        const order = cart.findOrder(product._id)
        if (order == null){
            cart.addToCart(product);
            document.querySelector('#cart').lastElementChild.insertAdjacentHTML('beforebegin', cart.renderCartItem());
        }else{
            cart.addToCart(product);
            document.querySelector(`#${order._id}cartItem`)
            .lastElementChild.querySelector('span').innerText = parseInt(order.item.quantity) + parseInt(document.querySelector(`#${order._id}cartItem`)
            .lastElementChild.querySelector('span').innerText);
        }
    })
    document.querySelector(`#${product._id}removeBtn`).addEventListener('click', () =>{
        try{
            document.querySelector(`#${cart.findOrder(product._id)._id}cartItem`).remove();
        }catch{
            alert("Item is not in cart");
        }
        cart.removeFromCart(product._id);
    });
}

// Insert cart item to main

document.querySelector('#main').insertAdjacentElement('beforeend', cart.renderCart())
