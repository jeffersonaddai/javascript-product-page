class Cart {
    //An array of products
    _orders = [];
    _totalPrice = 0;
    get products() {
        return this._products;
    }

    addToCart(product){
        // Check if the order of tha product already exists
        const order = cart.findOrder(product._id)
        // If it doesnt exist
        if (order == null){
            // create a new order
            let order = new Order(product._id);
            order.item = {productId: product._id, unitPrice: product.price, productName: product.productName, quantity: document.querySelector(`#${product._id}quantity`).value}
            this._orders.push(order);
        }else{
            // if it exists just update the quantity
            order.item.quantity = document.querySelector(`#${product._id}quantity`).value
        }
        for (const order of this._orders){
            this.totalPrice += parseInt(order.item.quantity) * order.item.price;
        }
        this.displayNumberOfProductsInCart();
    }
    removeFromCart(productId){
        //If product exists
        //remove product from cart
        if (this.findOrder(productId) !== null){
            this._orders = this._orders.filter(orderInCart =>{
                return orderInCart.item.productId !== productId;
            })
            this.displayNumberOfProductsInCart()
            return true;
        }
        else return false;

    }
    findOrder(productId){
        //loop through the orders array
        for(const order of this._orders){
            if (order.item.productId === productId){
                return order;
            }
        }
        return null;
    }


    displayNumberOfProductsInCart(){
        document.querySelector('#numberOfProductsIncart').innerText = this._orders.length;
    }
    renderCart(){
        let cart = document.createElement('div');
        cart.id = 'cart'
        cart.innerHTML = `
        <h2>Cart <span id="numberOfProductsIncart"></span></h2>
        <ul id="cartItems" class="cd-cart-items">
        </ul>
        <div class="cd-cart-total">
        <p>Total: <span>$</span> <span>${this._totalPrice}</span></p>
        </div> 
        `;
        return cart
    }
    renderCartItem(){
        let cartItem = document.createElement('div');
        for (const order of this._orders){
            cartItem.innerHTML = `

                <li id="${order._id}cartItem">
                    <div class="text-dark-grey text-bold"><span>${order.item.productName}</span></div>
                    <div class="cd-price">Price: <span>$</span><span>${order.item.unitPrice}</span></div>
                    <div class="cd-price">Quantity: <span>${order.item.quantity}</span></div>
                </li>`
        }
        // Add event listeners to products remove from cart button
        return cartItem.innerHTML;
    }
}
