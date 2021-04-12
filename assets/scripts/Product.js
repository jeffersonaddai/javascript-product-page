class Product {
    constructor(
        productName,
        price,
        stock,
        imageUrl,
        description,
        id
    ){
        this._productName = productName;
        this._price = price;
        this._stock = stock;
        this._imageUrl = imageUrl;
        this._description = description;
        this._id = id;
    }

    get productName() {
        return this._productName;
    }

    get price() {
        return this._price;
    }

    get stock() {
        return this._stock;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    get description() {
        return this._description;
    }
    get htmlTemplate() {
        return this._htmlTemplate;
    }
    set htmlTemplate(html) {
        this._htmlTemplate = html;
    }
    createHtmlElements(){
        let element = document.createElement('div');
        element.className = 'grid-2';
        element.innerHTML =  `
                <div class="productArea">
                    <div class="slides-container relative">
                        <div class="slides float-right">
                            <img class="w-full" src=${this.imageUrl} alt="">
                        </div>
                    </div>
                </div>
                <div class="orderDetails">
                    <div>
                        <h1 class="text-navy-blue margin-0">${this.productName}</h1>
                    </div>
                    <div>
                        <div class="paddings uppercase text-dark-pink">
                            <p class="text-normal margin-0">Description: </p>
                        </div>
                        <p class="text-normal text-dark-grey margin-0">
                            ${this.description}
                        </p>
                    </div>
                    <div>
                        <p class="text-bold margin-0"><span>$</span>${this.price}</p>
                    </div>
                    <div>
                        <a href="${this.imageUrl}" class="margin-0">${this.imageUrl}</a>
                    </div>

                    <div class="no-paddings flex margin-y-8">
                        <li class="paddings">${this.stock}</li>
                        <li class="paddings"> in stock</li>
                    </div>
                    <div id = '${this._id}addBtn' class="button pointer vertical-center bg-navy-blue text-white margin-top-25">
                        <p class="margin-0 center-text text-xl text-bold">ADD TO CART</p>
                    </div>
                    <div id = '${this._id}removeBtn' class="pointer vertical-center bg-navy-blue text-white margin-top-25">
                        <p class="margin-0 center-text text-xl text-bold">REMOVE FROM CART</p>
                    </div>
                </div>`
        return element;
    }
    get addToCartButton(){
        return document.querySelector(`#${this._id}addBtn`)
    }

    get removeFromCartButton(){
        return document.querySelector(`#${this._id}removeBtn`)
    }

}

