// Esports Arena catalog (price per unit)
const products = [
    { id: 201, name: "Pro Mouse (wired)",   category: "gear",    price: 39.99 },
    { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
    { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
    { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
    { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
  ];
  
// Example cart (product & quantity)
const cart = [
    { productId: 202, qty: 1 },
    { productId: 203, qty: 2 },
    { productId: 204, qty: 1 },
    { productId: 205, qty: 1 }
  ];
  
// Try: "regular", "student", "member", or "vip"
const customerType = "member";

function getCategoryDiscount(category) {
    for (product in products) {
        switch (category) {
            case "gear":
                return 0.10
            case "apparel":
                return 0.15
            case "snacks":
                return 0.08
            case "access":
                return 0.05
            default: 0
        }
    }
    return category;
}
// console.log(getCategoryDiscount("gear"))

function priceAfterCategoryDiscount(product) {
    return product.price * (1 - getCategoryDiscount(product.category));
}
// console.log(priceAfterCategoryDiscount(products[1]))

function findProductById(id) {
    for (let product of products) {
        if (product.id === id) {
            return product
        }
        else {
            return null
        }
    }
    /*for (product in products) {
        let found_id = product.find(id);
        if (product.id == found_id) {
            return product.name;
        }
        else {
        return null;
        }
    }*/
}
// console.log(findProductById(203))

function lineItemTotal(cartItem) {
    for (cartItem of cart) {
        let itemItemCount = 0
        if (cartItem === findProductById(cartItem)) {
            return cartItem * priceAfterCategoryDiscount(product);
            cartItemCount ++;
        }
        if (cart.qty >= 0) {
            return cart.qty 
        }
        else {
            return 0
        }
    }
}
// console.log(lineItemTotal(cart[1]))

function orderSubtotal(cart) {
    return 
}

function customerAdjustmentRate(customerType) {
    switch (customerType) {
        case ("student"):
            return 0.03
        case ("member"):
            return 0.05
        case ("vip"):
            return 0.10
        default: 0
    }
}

function orderTotal(cart, customerType) {
    let sub = orderSubtotal(cart)
    let adj = customerAdjustmentRate(customerType)
    let final = sub * (1 - adj)
    return final
}

function formatCurrency(amount) {
    return "$" + amount.fixedTo(2)
}

function printReceipt(cart, customerType) {
    for (itemCart in cart) {

    }
}

