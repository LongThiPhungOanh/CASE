//
// class Product{
//     constructor(name, type, cost, describe) {
//         this.name = name;
//         this.type = type;
//         this.cost = cost;
//         this.describe = describe;
//     }
// }
//
// class ProductManager{
//     constructor() {
//         this.products = [];
//     }
//
//     show(){
//         let str = "<table style='width: 1000px; height: 300px'>";
//         str += "<tr><th>Name</th><th>Type</th><th>Cost</th><th>Describe</th></tr>";
//         for (let i = 0; i < this.products.length; i++) {
//             str += "<tr>"
//             str += "<td style='width: 1000px; height: 40px; text-align: left'>"+this.products[i].name+"</td>";
//             str += "<td style='width: 300px; height: 40px'>"+this.products[i].type+"</td>";
//             str += "<td style='width: 300px; height: 40px'>"+this.products[i].cost+"</td>";
//             str += "<td style='width: 300px; height: 40px'>"+this.products[i].describe+"</td>";
//             str += "</tr>";
//         }
//         str += "</table>";
//         document.getElementById("screen").innerHTML = str;
//     }
//     add(){
//         let name = document.getElementById("name").value;
//         let type = document.getElementById("type").value;
//         let cost = document.getElementById("name").value;
//         let describe = document.getElementById("name").value;
//         let product = new Product(name, type, cost, describe);
//         this.products.push(product);
//         this.show();
//     }
//     edit(idx){
//
//     }
//     delete(idx){
//
//     }
// }
//
// var pm = new ProductManager();
// pm.products.push(new Product("Chocolate Java Mint Frappuccino Blended Beverage", "water", "50000", "no describe"));
// pm.products.push(new Product("Mocha Cookie Crumble Frappuccino", "water", "65000", "no describe"));
// pm.products.push(new Product("Caramel Ribbon Crunch Frappuccino Blended Beverage", "water", "55000", "no describe"));
// pm.products.push(new Product("Espresso Frappuccino Blended Beverage", "water", "45000", "no describe"));
// pm.products.push(new Product("Mocha Frappuccino Blended Beverage", "water", "75000", "no describe"));
// pm.products.push(new Product("Java Chip Frappuccino Blended Beverage", "water", "60000", "no describe"));
// pm.products.push(new Product("Chocolate Mint Crème Frappuccino Blended Beverage", "water", "65000", "no describe"));
// pm.products.push(new Product("Chocolate Cookie Crumble Crème Frappuccino", "water", "60000", "no describe"));
// pm.products.push(new Product("Caramel Ribbon Crunch Crème Frappuccino Blended Beverage", "water", "75000", "no describe"));
// pm.products.push(new Product("Caramel Ribbon Crunch Crème Frappuccino Blended Beverage", "water", "45000", "no describe"));
// pm.products.push(new Product("Chai Crème Frappuccino", "water", "65000", "no describe"));
// pm.products.push(new Product("Double Chocolaty Chip Crème Frappuccino Blended Beverage", "water", "60000", "no describe"));
// pm.products.push(new Product("Matcha Crème Frappuccino Blended Beverage", "water", "70000", "no describe"));
// pm.products.push(new Product("Vanilla Bean Crème Frappuccino Blended Crème", "water", "45000", "no describe"));
// pm.products.push(new Product("White Chocolate Crème Frappuccino Blended Beverage", "water", "65000", "no describe"));
//
//
//
// pm.products.push(new Product("Chicken, Maple Butter & Egg Sandwich", "cake", "60000", "no describe"));
// pm.products.push(new Product("Bacon, Sausage & Egg Wrap", "cake", "45000", "no describe"));
// pm.products.push(new Product("Impossible™ Breakfast Sandwich", "cake", "50000", "no describe"));
// pm.products.push(new Product("Bacon, Gouda & Egg Sandwich", "cake", "50000", "no describe"));
// pm.products.push(new Product("Double-Smoked Bacon, Cheddar & Egg Sandwich", "cake", "50000", "no describe"));
// pm.products.push(new Product("Turkey Bacon, Cheddar & Egg White Sandwich", "cake", "50000", "no describe"));
// pm.products.push(new Product("Sausage, Cheddar & Egg Sandwich", "cake", "50000", "no describe"));
// pm.products.push(new Product("Spinach, Feta & Egg White Wrap", "cake", "50000", "no describe"));
// pm.products.push(new Product("Avocado Spread", "cake", "50000", "no describe"));
// pm.products.push(new Product("Kale & Mushroom Egg Bites", "cake", "50000", "no describe"));
// pm.products.push(new Product("Bacon & Gruyère Egg Bites", "cake", "50000", "no describe"));
// pm.products.push(new Product("Egg White & Roasted Red Pepper Egg Bites", "cake", "50000", "no describe"));
// pm.show();
