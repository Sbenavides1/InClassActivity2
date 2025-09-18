// In Class Project 4b

// Product Array
let products = [
    { sku: "001", name: "Laptop", category: "Electronics", price: 999.99, inventory: 50 },
    { sku: "002", name: "Phone Case", category: "Accessory", price: 29.99, inventory: 150 },
    { sku: "003", name: "Desk Chair", category: "Furniture", price: 89.99, inventory: 85 },
    { sku: "004", name: "Bookcase", category: "Furniture", price: 129.99, inventory: 40 },
    { sku: "005", name: "Headphones", category: "Electronics", price: 99.99, inventory: 200 }
];

// Category Discounts
for (let product of products) {
    let discount;
    switch (product.category) {
    case "Electronics":
        discount = 0.10;
        break;
    case "Furniture":
        discount = 0.15;
        break;
    case "Accessory":
        discount = 0.05;
        break;
    default:
        discount = 0.00;
        }
    }

    let promoPrice = product.price * (1-discount);
    product.promoPrice = promoPrice;

// Customer Array
let Customer = [
    { id: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.085,
        cart: [{ sku: "001", qty: 2 }, { sku: "003", qty: 1 }] },
    { id: 2, customerType: "student", couponCode: "STUDENTLIFE", taxRate: 0.085,
        cart: [{ sku: "002", qty: 3 }, { sku: "001", qty: 4 }] },
    { id: 3, customerType: "senior", couponCode: "SOMEDAY", taxRate: 0.085,
        cart: [{sku: "005", qty: 2 }, {sku: "004", qty: 1 }] },
    ]   

