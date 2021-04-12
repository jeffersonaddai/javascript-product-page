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
    renderProduct(){
        let element = document.createElement('div');
        element.className = 'grid-2';
        element.innerHTML =  `
        <div class="card">
        <div class="card__title">
          <div class="icon">
            <a href="#"><i class="fa fa-arrow-left"></i></a>
          </div>
          <h3>New products</h3>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h1>${this._productName}</h1>
              <p class="sub">${this._productName}</p>
              <p class="price"><span>$</span>${this._price}</p>
            </div>
            <div class="image">
              <img src=${this._imageUrl} alt="">
              <div>
              <a href="${this._imageUrl}" class="margin-0">Image Url - Click to view image</a>
          </div>
            </div>
          </div>
          <div class="half">
            <div class="description">
              <p>${this._description}</p>
            </div>
            <span class="stock"><i class="fa fa-pen"></i> <span id="${this._id}stock">${this._stock}</span>In stock</span>
            <div>
            <input id="${this._id}quantity" type="number" value=1 min="1">
            </div>
            <div class="reviews">
              <ul class="stars">
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-o"></i></li>
              </ul>
              <span>(64 reviews)</span>
            </div>
          </div>
        </div>
        <div class="card__footer">
          <div class="recommend">
            <p>DESIGNED BY</p>
            <h3>Jefferson Tuffour</h3>
          </div>
          <div class="action">
            <button id = '${this._id}addBtn' type="button">Add to cart</button>
            <button id = '${this._id}removeBtn' type="button">Remove</button>
          </div>
        </div>
      </div>
        `
        
        return element;
    }
    get addToCartButton(){
        return document.querySelector(`#${this._id}addBtn`)
    }

    get removeFromCartButton(){
        return document.querySelector(`#${this._id}removeBtn`)
    }

}

