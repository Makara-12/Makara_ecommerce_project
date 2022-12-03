
let dom_container = document.querySelector('.container');
let dom_list_product = document.querySelector('.list-product');
let dom_span = document.querySelector('.count-cart')

function saveProductsInCart(products) { 
    localStorage.setItem("carts", JSON.stringify(products));
}

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
    let index = 0
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
        p2.textContent = "$"+ listProduct.price ;
 
        let btnBuy = document.createElement('button');
        btnBuy.setAttribute('class', 'btn-buy');
        btnBuy.textContent = 'Add cart';
        btnBuy.addEventListener('click', addCart)

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'card-product');
        // console.log(index)
        div2.setAttribute('index', index);
        
        div2.appendChild(div1);
        div2.appendChild(p);
        div2.appendChild(p1);
        div2.appendChild(p2);
        div2.appendChild(btnBuy);
        dom_list_product .appendChild(div2);
        index++;
            
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



// add card to buy page
function addCart(event){
    let indexProduct = event.target.parentElement.getAttribute('index');
    indexProduct = parseInt(indexProduct)
    let listProduct = listProducts[indexProduct]
    listProduct.qty = 1
    let cartProductStorage = JSON.parse(localStorage.getItem('carts'))
    cartProductStorage.push(listProduct)

    cartNumbers()
    saveProductsInCart(cartProductStorage)
}

function loadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumber')
    if(productNumbers){
        dom_span.textContent = productNumbers
    }
};

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumber')
    productNumbers = parseInt(productNumbers)
    if(productNumbers){
        localStorage.setItem('cartNumber', productNumbers + 1);
        dom_span.textContent = productNumbers + 1
    }else{
        listProducts.setItem('cartNumber', 1)
        dom_span.textContent = 1
    }
    // console.log(productNumber)

}
// function countCart(){
//     for (product of listProduct){
//         let productname = product.name;
//         listCounts = {name:productname,  amount:0};
//         localStorage.setItem("listCount", JSON.stringify(listCounts));
//         for(product of listProduct){
//             if (product.name === productname){
//                     p.amount +=1
//             }
//         }
//     }
// }



// function addToCart(event){
//         let productIndex = event.target.element.id;
//         if(productIndex<listProduct.lenght){
//             let myProduct = listProducts[productIndex];
//             let chartProductStorage = JSON.parse(localStorage.getItem("cart"));
//             chartProductStorage.push(myProduct);
//             saveChart(chartProductStorage)
            
//         }

// }

loadCartNumber();
loadProducts();
creatProduct();
