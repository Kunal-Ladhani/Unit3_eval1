document.querySelector("#add_more_product").addEventListener("click",goToProd);

function goToProd(e) {
    e.preventDefault();
    window.location.href = "index.html";
}

// to get items form local storage
var products = JSON.parse(localStorage.getItem('products')) || [];

// calling function for display
displayProd(products);

// defining display function for products
function displayProd(data) {
    data.forEach(function(elem,index) {
        let container = document.querySelector("#all_products");
        
        // creating product div
        let prod = document.createElement("div");
        prod.style.display ="flex";
        prod.style.flexDirection = "column";
        prod.style.alignItems ="center";
        prod.style.justifyContent = "center";

        // setting image in product div
        let image = document.createElement("img");
        image.setAttribute("src",elem.image);
        image.style.width = "100%";

        // setting price in product div
        let price = document.createElement("p");
        price.innerText = "$"+elem.price;

        // setting description in product div
        let desc = document.createElement("p");
        desc.innerText = elem.desc;

        // setting type in product div
        let type = document.createElement("p");
        type.innerText = elem.type;
        
        // setting rempve Button in product div
        let remButton = document.createElement("button");
        remButton.innerText = "REMOVE";
        remButton.setAttribute("id", "remove_product");
        remButton.style.width = "150px";
        remButton.addEventListener("click", function(e) {
            e.preventDefault();
            removeItem(elem,index);
        });

        // adding div to display grid
        prod.append(image,price,desc,type,remButton);
        container.append(prod);
    });
}


// remove functon in product div
function removeItem(elem,index) {
    products.splice(index,1);
    localStorage.setItem("products",JSON.stringify(products));
    window.location.reload();
}