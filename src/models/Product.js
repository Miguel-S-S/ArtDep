export default class Product {
    constructor(id, name, description, price, image){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    formatPrice(){
        return `Precio: ${this.price}`;
    }
}