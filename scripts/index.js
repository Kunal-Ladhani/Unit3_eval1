//store the products array in localstorage as "products"

document.querySelector("#show_products").addEventListener("click",goToInv);

function goToInv(e) {
    e.preventDefault();
    window.location.href = "inventory.html";
}

var products = JSON.parse(localStorage.getItem('products')) || [];

var prodObj = {
    type : "",
    desc : "",
    price : "",
    image : "",
}

document.querySelector("#add_product").addEventListener("click",addProduct);

function addProduct(e) {
    e.preventDefault();
    let form = document.querySelector("#products");

    prodObj["type"] = form.type.value;
    prodObj["desc"] = form.desc.value;
    prodObj["price"] = form.price.value;
    prodObj["image"] = form.image.value;

    products.push(prodObj);
    console.log(products);

    localStorage.setItem("products",JSON.stringify(products));
    form.type.value = "";
    form.desc.value = "";
    form.price.value = "";
    form.image.value = "";
}