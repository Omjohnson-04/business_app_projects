let products = [
    {name: "shorts",
    category: "apparel",
    price: 20,
    inventory: 100
    },
    {name: "watch",
    category: "electronics",
    price: 60,
    inventory: 50
    },
    {name: "lamp",
    category: "household",
    price: 75,
    inventory: 65
    },
    {name: "banana",
    category: "groceries",
    price: 5,
    inventory: 150
    },
    {name: "apple",
    category: "groceries",
    price: 3,
    inventory: 200
    }
]

for (const product of products) {
    let discount = 0

    switch (product.category) {
        case "electronics": discount = 0.20;
        break;
        case "apparel": discount = 0.15;
        break;
        case "household": discount = 0.10;
        break;
        case "groceries": discount = 0.10;
        break;
        default: discount = 0;
    }

    let promoPrice = product.price * (1 - discount);
    console.log(`Discounted price ${product.category}: ${promoPrice.toFixed(2)}`)

    let customerType = "student"

    if (customerType === "student") {
        let discount = 0.05;
        let newDiscount = promoPrice * (1 - discount);
        console.log(`Final discounted price for ${customerType}: ${newDiscount.toFixed(2)}`)
        }
        else if (customerType === "senior") {
            let discount = 0.07;
            let newDiscount = promoPrice * (1 - discount);
            console.log(`Final discounted price: ${newDiscount.toFixed(2)}`)
        }
        else {
            let discount = 0
    }
}

const customers = [
    {
        id: 1,
        type: "student",
        cart: [{name: products[0].name,
                price: parseInt(products[0].price),
                qty: 2}, 
              {name: products[4].name,
                price: products[0].price,
                qty: 5}]
    },
    {
        id: 2,
        type: "senior",
        cart: [{name: products[2].name,
                price: products[2].price,
                qty: 3}, 
                {name: products[3].name, 
                price: products[3].price,
                qty: 1}]
    },
    {
        id: 3,
        type: "senior",
        cart: [{name: products[0].name, 
                price: parseInt(products[0].price),
                qty: 4}, 
                {name: products[4].name, 
                price: products[0].price,
                qty: 3}]
    }
];

for (const customer of customers) {
    let total = 0;
    
    for (const item of customer.cart) {
        const product = products.find(p => p.name === item.name);

        if (product) {
            total += item.qty * product.price;
        }
        product.inventory -= item.qty
    console.log(`Customer id: ${customer.id}, Total: ${total}`)
    }
}

const sampleProduct = products[0];
for (const key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}

for (const prod of products) {
    console.log(`\n${prod.name}`);
    for (const [key, value] of Object.entries(prod)) {
        console.log(` ${key}: ${value}`);
    }
}