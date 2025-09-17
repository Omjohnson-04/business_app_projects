let products = [
    {sku: "001",
    name: "Shorts",
    category: "Clothes",
    price: 20,
    inventory: 100
    },
    {sku: "002",
    name: "Smart Watch",
    category: "electronics",
    price: 60,
    inventory: 50
    },
    {sku: "003",
    name: "Purse",
    category: "Accessories",
    price: 75,
    inventory: 65
    },
    {sku: "004",
    name: "Deoderant",
    category: "Hygiene",
    price: 5,
    inventory: 150
    },
    {sku: "005",
    name: "Toothbrush",
    category: "Hygiene",
    price: 3,
    inventory: 200
    }
]

switch (products) {
    case "electronics":
        let discount = 0.20
        products.forEach(item => {item.promoPrice = (price - (price * discount))
        })
}