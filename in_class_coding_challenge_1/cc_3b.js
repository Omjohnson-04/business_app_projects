let inventory = [
    {sku: "001",
    name: "Shorts",
    price: 25,
    stock: 100
    },
    {sku: "002",
    name: "Watch",
    price: 50,
    stock: 150
    },
    {sku: "003",
    name: "Bucket",
    price: 30,
    stock: 75
    },
    {sku: "004",
    name: "Phone Case",
    price: 60,
    stock: 125
    }
]

// inventory.forEach(obj => console.log(`SKU: ${obj.sku} |`, `Name: ${obj.name} |`, `Price: ${obj.price} |`, `Stock: ${obj.stock}`));

inventory.push({sku: "005", name: "Balloons", price: 15, stock: 200})

//inventory.forEach(obj => console.log(`SKU: ${obj.sku} |`, `Name: ${obj.name} |`, `Price: ${obj.price} |`, `Stock: ${obj.stock}`));

let inventoryLast = inventory.pop()
console.log(inventoryLast)

inventory[1].price = 35
inventory[2].stock = 100

inventory.forEach(obj => console.log(`SKU: ${obj.sku} |`, `Name: ${obj.name} |`, `Price: ${obj.price} |`, `Stock: ${obj.stock}`));