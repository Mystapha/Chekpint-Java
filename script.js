// Product class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to get the total number of items inside the cart
    getTotalItems() {
        let total = 0;
        this.items.forEach(item => {
            total += item.quantity;
        });
        return total;
    }

    // Method to add items to the cart
    addItem(item) {
        this.items.push(item);
    }

    // Method to remove items from the cart
    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }

    // Method to display cart items
    displayCartItems() {
        this.items.forEach((item, index) => {
            console.log(`Item ${index + 1}: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.calculateTotalPrice()}`);
        });
    }
}

// Testing
// Create products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 500);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 1);

cart.addItem(item1);
cart.addItem(item2);

// Display the cart
console.log("Cart Items:");
cart.displayCartItems();

// Remove an item from the cart
cart.removeItem(0);

// Display the updated cart
console.log("Updated Cart Items:");
cart.displayCartItems();