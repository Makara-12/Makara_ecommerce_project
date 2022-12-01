
let dom_container = document.querySelector('.container');
let dom_list_product = document.querySelector('.list-product');

function loadProducts() {
    let listProductStorage = JSON.parse(localStorage.getItem("listProducts"));
    if (listProductStorage !== null) {
        listProducts = listProductStorage;
    }
};

// 
function creatProduct(){
    loadProducts();
    // saveProducts();
    // document.querySelector('.list-product').remove();
    // list_product = document.createElement("div");
    // list_product.setAttribute('class', 'list-product');
    // dom_list_product.appendChild(list_product);

    for(let listProduct of listProducts){
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'img-product');

        let img = document.createElement('img');
        img.setAttribute('id', "product-photo");
        img.src = listProduct.img;
        div1.appendChild(img);

        let p = document.createElement('p');
        p.id = 'name';
        p.textContent = listProduct.name;

        let p1 = document.createElement('p');
        p1.id = 'description';
        p1.textContent = listProduct.description;

        let p2 = document.createElement('p');
        p2.id = 'price';
        p2.textContent = listProduct.price + "$";
 
        let btnBuy = document.createElement('button');
        btnBuy.setAttribute('class', 'btn-buy');
        btnBuy.textContent = 'buy now';

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'card-product');
        
        div2.appendChild(div1);
        div2.appendChild(p);
        div2.appendChild(p1);
        div2.appendChild(p2);
        div2.appendChild(btnBuy);
        dom_list_product .appendChild(div2);
            
    };
};

// search product
function searchProduct(event){
    input_search = document.querySelector('#search').value.toUpperCase();
    let cardProducts = document.querySelectorAll(".card-product");
    for (let index = 0; index < cardProducts.length; index++){
        let nameProduct = cardProducts[index].firstElementChild.nextElementSibling.textContent;
        let descriptionProduct = cardProducts[index].firstElementChild.nextElementSibling.nextElementSibling.textContent;
        if(nameProduct.toUpperCase().indexOf(input_search) > -1 || descriptionProduct.toLocaleUpperCase().indexOf(input_search) > -1){
            cardProducts[index].style.display = "block";
        }else{
            cardProducts[index].style.display = "none";
        }
    };
};

loadProducts();
creatProduct();
