//create a grid
let largeGrid = document.createElement('div');
largeGrid.className = 'products-grid';
//Add product elements to grid
for (const product of products){
    addProductHtmlElements(product, largeGrid);
}

//Add grid to the main
document.querySelector('#main').append(largeGrid);

// create a cart
cart = new Cart();
// Add event listeners to product's add to cart button
// loop through the products in the cart
for (const product of products){
    product.addToCartButton.addEventListener('click', () =>{
        cart.addToCart(product);
    })
}
// Add event listeners to products remove from cart button
for (const product of products){
    product.removeFromCartButton.addEventListener('click', () =>{
        cart.removeFromCart(product.productName);
    })
}

// A function that adds html elements to a grid element
function addProductHtmlElements(product, grid){
    grid.append(product.createHtmlElements());
}