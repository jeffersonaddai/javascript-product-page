class OrderItem extends Product{
    constructor(
        productName,
        price,
        stock,
        imageUrl,
        description,
        id
    ){
        super(
            productName,
            price,
            stock,
            imageUrl,
            description,
            id
        );
    }
}

class Order {
    _id;
    // An array of items in a particular order
    items = new OrderItem();
    constructor(id){
        this._id = id;
    }
    calculateTotalPrice(){
        let total = 0
        for(const item of this.items){
            total += parseInt(item.quantity) * parseFloat(item.unitPrice);
        }
        return total;
    }
    numberOfQuantities(){
        let total = 0;
        for(const item of this.items){
            total += parseInt(item.quantity);
        }
        return total;
    }
}