
let dom_container = document.querySelector('.container');
let dom_product_buy = document.querySelector('.product-buy');
// let index=0;


let carts = [];
// let carts[index]s = [
//     {
//         name: "shoes",
//         description: "red",
//         price: "22",
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPDuKFpuuOoVQnKk3WwXLIzBuQll3EfoeKRlpMg59gw&s'

//     },
//     {
//         name: "shirt",
//         description: "red",
//         price: 23,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDi38s7ZGd2zo2pyg7RRy_VADe9qRB2611SMxsWcTJ3nTRaMHaaWvUzqf-1puZn-xSLU&usqp=CAU'


//     },
//     {
//         name: "dress",
//         description: "red",
//         price: "24",
//         img:'https://cf.shopee.ph/file/6e8a211a042b838768da1290ce5d380f'

//     },
// ];
function saveCart() { 
    localStorage.setItem("carts", JSON.stringify(carts));
}
function loadCart() {
    let listProductStorage = JSON.parse(localStorage.getItem("carts"));
    if (listProductStorage !== null) {
        carts = listProductStorage;
    }
};

// 
function displayCart(){
    loadCart()
    for(let index = 0; index< carts.length; index++){
        console.log(index)
        // creat div and class img-product-buy
        let img_product_buy = document.createElement('div');
        img_product_buy.setAttribute('class', 'img-product-buy');
        // creat div and id photo-buy
        let photo_buy = document.createElement('img');
        photo_buy.setAttribute('id', "photo-buy");
        photo_buy.src = carts[index].img;
        img_product_buy.appendChild(photo_buy)
         // creat div and class price-description
        let price_decription = document.createElement('div');
        price_decription.setAttribute('class', 'price-description');
        // create p and id name-buy
        let name_buy = document.createElement('p');
        name_buy.id = 'name-buy';
        name_buy.textContent = carts[index].name;
        price_decription.appendChild(name_buy)
        // // creat p and id description_buy
        let description_buy = document.createElement('p');
        description_buy.id = 'description-buy';
        description_buy.textContent = carts[index].description;
        price_decription.appendChild(description_buy)
        // // creat p and id price-buy
        let price_buy = document.createElement('p');
        price_buy.id = 'price-buy';
        price_buy.textContent = carts[index].price + "$";
        price_decription.appendChild(price_buy)
        // creat p and class input-delete
        let input_delete = document.createElement('div');
        input_delete.setAttribute('class', 'input-delete');
        
        // // create input and id input-number
        let  input = document.createElement("input");
        input.type = "input-number";
        input.value = 1;
        input.id = "input-number";
        input_delete.appendChild(input)
         // // create img and id img-delet
        let img_delet = document.createElement('img');
        img_delet.setAttribute('id', "img-delet");
        img_delet.src = '../../img/trash.png'
        input_delete.appendChild(img_delet)
        img_delet.addEventListener('click', removeCart)
          // // create div and class total-btn-buy
        let total_btn_buy = document.createElement('div')
        total_btn_buy.setAttribute('class', 'total-btn-buy')
        // create h2 and id total
        let h2 = document.createElement('h2');
        h2.setAttribute('id', 'total');
        h2.textContent = carts[index].price + "$";
        total_btn_buy.appendChild(h2)
        // create button and id btn-buy-now
        let btnBuy = document.createElement('button');
        btnBuy.setAttribute('id', 'btn-buy-now');
        btnBuy.textContent = 'buy now';
        total_btn_buy.appendChild(btnBuy)
         // create div and class card-buy
        let card_buy = document.createElement('div')
        card_buy.setAttribute('class', 'card-buy' );
        card_buy.id = index;
        // console.log(card_buy)
        // card_buy.textContent = index + 1;
        // card_buy.setAttribute("index", index)
        //appendChild input-delet to price-decription 
        price_decription.appendChild(input_delete)
        // append  img_product_buy and price_decription and total_btn_buy to card-buy
        card_buy.appendChild(img_product_buy)
        card_buy.appendChild(price_decription)
        card_buy.appendChild(total_btn_buy)
        // appenChild card-buy to dom-product-buy
        dom_product_buy.appendChild(card_buy);

            
    };
};

function removeCart(event){
    let indexCart = event.target.parentElement.parentElement.parentElement.id

    carts.splice(indexCart, 1)
    
    saveCart()
    
    displayCart()
    
}

function countMoney(){
  
    // console.log(document.querySelector('#input'))

    // displayCart()
}

// }
// for product of listProduct{
//     let productname = product.name;
//     p = {name:productname,amount:0};
//     for product of listProduct{
//         if (product.name === productname){
//                 p.amount +=1
//         }
//     }

// }

loadCart()
saveCart() 

displayCart();


