class Cart {
    //An array of products
    _orders = [];
    _totalPrice = 0;
    get products() {
        return this._products;
    }

    addToCart(product){
        const orderQuantity = parseInt(document.querySelector(`#${product._id}quantity`).value);

        if (product._stock > 0 && orderQuantity < product._stock){
               // Check if the order of tha product already exists
        const order = cart.findOrder(product._id)
        // If it doesnt exist
            if (order == null){
                // create a new order
                let order = new Order(product._id);
                order.items = [{productId: product._id, unitPrice: product.price, productName: product.productName, quantity: orderQuantity }]
                this._orders.push(order);
            }
            else{
                order.items.push({
                    productId: product._id, 
                    unitPrice: product._price, 
                    productName: product._productName, 
                    quantity: orderQuantity
                })
                // if it exists just update the quantity
                // order.items.quantity = document.querySelector(`#${product._id}quantity`).value

            }
            this.calculateTotal();
            product._stock -= orderQuantity;
            this.displayNumberOfProductsInCart();
        }
        else{
            alert("Sorry prodouct out of stock")
        }
     
    }
    
    removeFromCart(product){
        //If product exists
        //remove product from cart
        const order = this.findOrder(product._id)
        if (order !== null){
            this._orders = this._orders.filter(orderInCart =>{
                return orderInCart.items[0].productId !== product._id;
            })
            this.displayNumberOfProductsInCart()
            this.calculateTotal();
            
            product._stock += order.numberOfQuantities();
        }

    }
    findOrder(productId){
        //loop through the orders array
        for(const order of this._orders){
            if (order.items[0].productId === productId){
                return order;
            }
        }
        return null;
    }


    displayNumberOfProductsInCart(){
        document.querySelector('#numberOfProductsIncart').innerText = this._orders.length;
    }

    calculateTotal(){
        let total = 0;
        for (const order of this._orders){
            total += order.calculateTotalPrice();
        }
        this._totalPrice = total;
    }
    renderCart(){
        let cart = document.createElement('div');
        cart.id = 'cart'
        cart.innerHTML = `
        <h2>Cart <span id="numberOfProductsIncart"></span></h2>
        <ul id="cartItems" class="cd-cart-items">
        </ul>
        <div class="cd-cart-total">
        <p>Total: <span>$</span> <span id="cartTotal">${this._totalPrice}</span></p>
        </div> 
        `;
        return cart
    }
    renderCartItem(){
        let cartItem = document.createElement('div');
        for (const order of this._orders){
            cartItem.innerHTML = `

                <li id="${order._id}cartItem">
                    <div class="text-dark-grey text-bold"><span>${order.items[0].productName}</span></div>
                    <div class="cd-price">Price: <span>$</span><span>${order.items[0].unitPrice}</span></div>
                    <div class="cd-price">Quantity: <span>${order.items[0].quantity}</span></div>
                </li>`
        }
        // Add event listeners to products remove from cart button
        return cartItem.innerHTML;
    }

}
