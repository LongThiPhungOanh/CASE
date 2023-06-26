
class Product{
    constructor(name, type, cost, describe, img) {
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.describe = describe;
        this.img = img;
    }
}
class ProductManager{
    constructor() {
        this.products = [];
    }
    show(elements){
        let arr = elements;
        let str = "<table class='table table-striped table-hover' style='width: 80%; margin: auto; text-align: center;'>";
        str += "<tr><th>#</th><th>Name</th><th>Type</th><th>Cost</th><th>Describe</th><th>Edit</th><th>Delete</th></tr>";
        for (let i = 0; i < arr.length; i++) {
            str += "<tr>";
            str += "<td>"+(i+1)+"</td>";
            str += "<td style='width: 1000px; height: 40px; text-align: left'>"+arr[i].name+"</td>";
            str += "<td style='width: 300px; height: 40px'>"+arr[i].type+"</td>";
            str += "<td style='width: 300px; height: 40px'>"+arr[i].cost+"</td>";
            str += "<td style='width: 300px; height: 40px'>"+arr[i].describe+"</td>";
            str += "<td><i onclick='pm.edit("+i+")' class=\"bi bi-pen\"></i></td>";
            str += "<td onclick='pm.delete("+i+")'><i class='bi bi-trash3'></i></td>";
            str += "</tr>";
        }
        str += "</table>";
        document.getElementById("screen").innerHTML = str;
        this.addKeySearch();
        localStorage.setItem("products", this.products);
    }
    add(){
        let name = document.getElementById("name").value;
        let type = document.getElementById("type").value;
        let cost = document.getElementById("name").value;
        let describe = document.getElementById("name").value;
        let product = new Product(name, type, cost, describe);
        this.products.push(product);
        alert("Success!!!")
        this.show(this.products);
        document.getElementById("fnAdd").hidden = true;
    }
    edit(idx){
        let arr = this.products;
        let str = "<table class='table table-striped table-hover' style='width: 80%; margin: auto; text-align: center'>";
        str += "<tr><th>#</th><th>Name</th><th>Type</th><th>Cost</th><th>Describe</th><th>Edit</th><th>Delete</th></tr>";
        for (let i = 0; i < arr.length; i++) {
            if(i === idx){
                str += "<tr>";
                str += "<td>" + (i + 1) + "</td>";
                str += "<td style='width: 1000px; height: 40px; text-align: left'><input id='editName' value='"+arr[i].name+"' type='text'></td>";
                str += "<td style='width: 300px; height: 40px'><input id='editType' value='"+ arr[i].type +"' type='text'></td>";
                str += "<td style='width: 300px; height: 40px'><input id='editCost' value='"+ arr[i].cost +"' type='text'></td>";
                str += "<td style='width: 300px; height: 40px'><input id='editDescribe' value='"+ arr[i].describe +"' type='text'></td>";
                str += "<td><button class=\"btn btn-success\" onclick='pm.editButton(" + i + ")'>Edit</button></td>";
                str += "<td onclick='pm.delete(" + i + ")'><i class='bi bi-trash3'></i></td>";
                str += "</tr>";
            }else {
                str += "<tr>";
                str += "<td>" + (i + 1) + "</td>";
                str += "<td style='width: 1000px; height: 40px; text-align: left'>" + arr[i].name + "</td>";
                str += "<td style='width: 300px; height: 40px'>" + arr[i].type + "</td>";
                str += "<td style='width: 300px; height: 40px'>" + arr[i].cost + "</td>";
                str += "<td style='width: 300px; height: 40px'>" + arr[i].describe + "</td>";
                str += "<td><i class=\"bi bi-pen\"></i></td>";
                str += "<td onclick='pm.delete(" + i + ")'><i class='bi bi-trash3'></i></td>";
                str += "</tr>";
            }
        }
        str += "</table>";
        document.getElementById("screen").innerHTML = str;
        this.addKeySearch();
    }

    delete(idx){
        let element = confirm("Do you want to delete ?");
        if(element){
            this.products.splice(idx, 1);
            alert("Deleted!!!");
            this.show(this.products);
        }
    }
    editButton(idx){
        let EditName = document.getElementById('editName').value
        let EditType = document.getElementById('editType').value
        let EditConst = document.getElementById('editCost').value
        let EditDescribe = document.getElementById('editDescribe').value
        this.products[idx] = new Product(EditName,EditType,EditConst,EditDescribe)
        alert("you edit complete!!!")
        this.show(this.products);
    }
    addKeySearch(){
        var arr = this.products;
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            str += "<option value='"+ arr[i].name +"'>";
        }
        document.getElementById("datalistOptions").innerHTML = str;
    }

    searchByName(){
        let name = document.getElementById("srchId").value;
        let arr = [];
        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].name === name){
                arr.push(this.products[i]);
            }
        }
        if(arr.length > 0){
            this.show(arr);
        }else {
            alert("No data found!!!");
        }
    }
    ShowAdd(){
        document.getElementById("fnAdd").hidden = false;
    }
}
var pm = new ProductManager();

pm.products.push(new Product("Chocolate Java Mint Frappuccino Blended Beverage", "water", "50000", "no describe", "https://globalassets.starbucks.com/assets/1fd99578d31f4072a52892398d8f1fa8.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Mocha Cookie Crumble Frappuccino", "water", "65000", "no describe"));
pm.products.push(new Product("Caramel Ribbon Crunch Frappuccino Blended Beverage", "water", "55000", "no describe"));
pm.products.push(new Product("Espresso Frappuccino Blended Beverage", "water", "45000", "no describe"));
pm.products.push(new Product("Mocha Frappuccino Blended Beverage", "water", "75000", "no describe"));
pm.products.push(new Product("Java Chip Frappuccino Blended Beverage", "water", "60000", "no describe"));
pm.products.push(new Product("Chocolate Mint Crème Frappuccino Blended Beverage", "water", "65000", "no describe"));
pm.products.push(new Product("Chocolate Cookie Crumble Crème Frappuccino", "water", "60000", "no describe"));
pm.products.push(new Product("Caramel Ribbon Crunch Crème Frappuccino Blended Beverage", "water", "75000", "no describe"));
pm.products.push(new Product("Caramel Ribbon Crunch Crème Frappuccino Blended Beverage", "water", "45000", "no describe"));
pm.products.push(new Product("Chai Crème Frappuccino", "water", "65000", "no describe"));
pm.products.push(new Product("Double Chocolaty Chip Crème Frappuccino Blended Beverage", "water", "60000", "no describe"));
pm.products.push(new Product("Matcha Crème Frappuccino Blended Beverage", "water", "70000", "no describe"));
pm.products.push(new Product("Vanilla Bean Crème Frappuccino Blended Crème", "water", "45000", "no describe"));
pm.products.push(new Product("White Chocolate Crème Frappuccino Blended Beverage", "water", "65000", "no describe"));

pm.products.push(new Product("Chicken, Maple Butter & Egg Sandwich", "cake", "45000", "no describe"));
pm.products.push(new Product("Bacon, Sausage & Egg Wrap", "cake", "50000", "no describe"));
pm.products.push(new Product("Impossible™ Breakfast Sandwich", "cake", "45000", "no describe"));
pm.products.push(new Product("Bacon, Gouda & Egg Sandwich", "cake", "50000", "no describe"));
pm.products.push(new Product("Double-Smoked Bacon, Cheddar & Egg Sandwich", "cake", "50000", "no describe"));
pm.products.push(new Product("Turkey Bacon, Cheddar & Egg White Sandwich", "cake", "50000", "no describe"));
pm.products.push(new Product("Sausage, Cheddar & Egg Sandwich", "cake", "50000", "no describe"));
pm.products.push(new Product("Spinach, Feta & Egg White Wrap", "cake", "50000", "no describe"));
pm.products.push(new Product("Avocado Spread", "cake", "50000", "no describe"));
pm.products.push(new Product("Kale & Mushroom Egg Bites", "cake", "50000", "no describe"));
pm.products.push(new Product("Bacon & Gruyère Egg Bites", "cake", "50000", "no describe"));
pm.products.push(new Product("Egg White & Roasted Red Pepper Egg Bites", "cake", "50000", "no describe"));
pm.show(pm.products);

