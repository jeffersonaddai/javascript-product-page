class Cart {
    //An array of products
    _products = [];
    get products() {
        return this._products;
    }

    addToCart(product){
        this._products.push(product);
        this.displayNumberOfProductsInCart();
    }
    removeFromCart(productName){
        //If product exists
        //remove product from cart
        if (this.findProduct(productName) !== null){
            this._products = this._products.filter(productInCart =>{
                return productInCart.productName !== productName;
            })
            this.displayNumberOfProductsInCart()
            return true;
        }
        else return false;

    }
    findProduct(productName){
        //loop through the products array
        for(const productInCart of this._products){
            if (productInCart.productName === productName){
                return productInCart;
            }
        }
        return null;
    }
    displayNumberOfProductsInCart(){
        document.querySelector('#numberOfProductsIncart').innerText = this._products.length;
    }
    createHtmlElements(){
        const element = document.createElement("div");
        element.innerHTML = `
            <div id="next" class="pointer border-navy-blue text-bold margin-top-25 bg-white text-navy-blue vertical-center">
                CART (<span id="numberOfProductsIncart">0</span>)
            </div>
            `
        return element.firstElementChild
    }
}
