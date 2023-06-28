
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
        str += "<tr><th>#</th><th>Name</th><th>Type</th><th>Cost</th><th>Describe</th><th>Img</th><th>Edit</th><th>Delete</th></tr>";
        for (let i = 0; i < arr.length; i++) {
            str += "<tr>";
            str += "<td>"+(i+1)+"</td>";
            str += "<td style='width: 1000px; height: 40px; text-align: left'>"+arr[i].name+"</td>";
            str += "<td style='width: 300px; height: 40px'>"+arr[i].type+"</td>";
            str += "<td style='width: 300px; height: 40px'>"+arr[i].cost+"</td>";
            str += "<td style='width: 300px; height: 40px'>"+arr[i].describe+"</td>";
            str += "<td style='width: 300px; height: 40px'>"+arr[i].img+"</td>";
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
        let img = document.getElementById("img").value
        let product = new Product(name, type, cost, describe,img);
        this.products.push(product);
        alert("Success!!!")
        this.show(this.products);
        document.getElementById("fnAdd").hidden = true;
        localStorage.setItem("products", this.products);
    }
    edit(idx){
        let arr = this.products;
        let str = "<table class='table table-striped table-hover' style='width: 80%; margin: auto; text-align: center'>";
        str += "<tr><th>#</th><th>Name</th><th>Type</th><th>Cost</th><th>Describe</th><th>Img</th><th>Edit</th><th>Delete</th></tr>";
        for (let i = 0; i < arr.length; i++) {
            if(i === idx){
                str += "<tr>";
                str += "<td>" + (i + 1) + "</td>";
                str += "<td style='width: 1000px; height: 40px; text-align: left'><input id='editName' value='"+arr[i].name+"' type='text'></td>";
                str += "<td style='width: 200px; height: 40px'><input id='editType' value='"+ arr[i].type +"' type='text'></td>";
                str += "<td style='width: 200px; height: 40px'><input id='editCost' value='"+ arr[i].cost +"' type='text'></td>";
                str += "<td style='width: 200px; height: 40px'><input id='editDescribe' value='"+ arr[i].describe +"' type='text'></td>";
                str += "<td style='width: 200px; height: 40px'><input id='img' value='"+ arr[i].img +"' type='text'></td>";
                str += "<td><button class=\"btn btn-success\" onclick='pm.editButton(" + i + ")'>Edit</button></td>";
                str += "<td onclick='pm.delete(" + i + ")'><i class='bi bi-trash3'></i></td>";
                str += "</tr>";
            }else {
                str += "<tr>";
                str += "<td>" + (i + 1) + "</td>";
                str += "<td style='width: 1000px; height: 40px; text-align: left'>" + arr[i].name + "</td>";
                str += "<td style='width: 200px; height: 40px'>" + arr[i].type + "</td>";
                str += "<td style='width: 200px; height: 40px'>" + arr[i].cost + "</td>";
                str += "<td style='width: 200px; height: 40px'>" + arr[i].describe + "</td>";
                str += "<td style='width: 200px; height: 40px'>"+ arr[i].img +"</td>";
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
        localStorage.setItem("products", this.products);
    }
    editButton(idx){
        let EditName = document.getElementById('editName').value
        let EditType = document.getElementById('editType').value
        let EditConst = document.getElementById('editCost').value
        let EditDescribe = document.getElementById('editDescribe').value
        let Img = document.getElementById('img').value
        this.products[idx] = new Product(EditName,EditType,EditConst,EditDescribe,Img)
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
        localStorage.setItem("products", this.products);
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
        localStorage.setItem("products", this.products);
    }
    ShowAdd(){
        document.getElementById("fnAdd").hidden = false;
    }
}
var pm = new ProductManager();
pm.products.push(new Product("Chocolate Java Frappuccino Blended Beverage .", "water", "50000", "no describe", "https://globalassets.starbucks.com/assets/1fd99578d31f4072a52892398d8f1fa8.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Mocha Java Mint Frappuccino Blended Beverage.", "water", "65000", "no describe", " https://globalassets.starbucks.com/assets/b8f963bfe65b4117af17d316e6bc3bc8.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Caramel Ribbon Frappuccino Blended Beverage .", "water", "55000", "no describe", "https://globalassets.starbucks.com/assets/c297d3528849499f81322d561575d94b.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Espr Java Mint Frappuccino Blended Beverage .", "water", "45000", "no describe", "https://globalassets.starbucks.com/assets/410cd92738514641bf497d4b6a18c30f.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Mocha Java Mint Frappuccino Blended Beverage.", "water", "75000", "no describe","https://globalassets.starbucks.com/assets/72b70f11fe984732af4d8e539f53ca2d.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Java Chip Mint Frappuccino Blended Beverage .", "water", "60000", "no describe"," https://globalassets.starbucks.com/assets/70198375bb0a442f8792437b5d1df972.jpg?impolicy=1by1_tight_288"));

pm.products.push(new Product("Chicken, Maple Butter & Egg Sandwich Sausage.", "cake", "45000", "no describe"," https://globalassets.starbucks.com/assets/012cdfb74d294be28ca6604768408c4b.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Bacon, Sausage & Egg Wrap & Sausage Butter  .", "cake", "50000", "no describe","https://globalassets.starbucks.com/assets/27bd607e92354742bc8cf46b23f4ce39.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Impossible™ Breakfast Sausage ", "cake", "45000", "no describe","https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Bacon, Gouda & Egg Sandwich   ", "cake", "50000", "no describe","https://globalassets.starbucks.com/assets/76909e4b00b5430faef132b2fa93e40b.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Double-Smoked Bacon, Cheddar  ", "cake", "50000", "no describe"," https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Turkey Bacon, Cheddar & Egg   ", "cake", "50000", "no describe","https://globalassets.starbucks.com/assets/b7e25a03655741869ced8dfde8c70659.jpg?impolicy=1by1_tight_288"));
pm.products.push(new Product("Egg White Roasted Red Pepper  ", "cake", "50000", "no describe","   https://globalassets.starbucks.com/assets/9e2c9538d66e4c43844b154b14b2f501.jpg?impolicy=1by1_tight_288"));
localStorage.setItem("products", this.pm);
function hoho() {
    pm.show(pm.products);
}


