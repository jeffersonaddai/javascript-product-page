class Cart {
    //An array of products
    _products = [];
    get products() {
        return this._products;
    }

    addToCart(product){
        this._products.push(product);
        this.setNumberOfProductsInCart();
    }
    removeFromCart(productName){
        //If product exists
        //remove product from cart
        if (this.findProduct(productName) !== null){
            this._products = this._products.filter(productInCart =>{
                return productInCart.productName !== productName;
            })
            this.setNumberOfProductsInCart()
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
    setNumberOfProductsInCart(){
        document.querySelector('#numberOfProductsIncart').innerText = this._products.length;
    }
}
