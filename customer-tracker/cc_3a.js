let customers = [
    {name: "Owen",
    email: "omjohnson@usf.edu",
    purchases: ["Balloons", " Labubu ", " Toilet Paper "]
    },
    {name: "Amelia",
    email: "ameliario@usf.edu",
    purchases: ["Purse", " Nail Polish", " Notebook"]
    },
    {name: "Stephen",
    email: "stephocarr@usf.edu",
    purchases: [" Bass Guitar", " Iphone", " Shirt"]
    }
    ]

customers.push({name: "William", email: "willyg@usf.edu", purchases: [" Beer", " Fortnite Battle Pass", " Mug"]})

customers.shift()

customers[2].email = "will-i-am@usf.edu"

customers[1].purchases.push(" Pencils")

customers.forEach(obj => console.log(` Name: ${obj.name} |`, ` Email: ${obj.email} |`, ` Purchases: ${obj.purchases} |`,  
    `Number of Items Purchased: ${obj.purchases.length}`));