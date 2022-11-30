
let dom_container = document.querySelector('.container');
let dom_list_product = document.querySelector('.list-product');


function saveProducts() { 
    localStorage.setItem("dataTables", JSON.stringify(dataTables));
}

function loadProducts() {
let dataTablesStorage = JSON.parse(localStorage.getItem("dataTables"));
if (dataTablesStorage !== null) {
    dataTables = dataTablesStorage;
}
};

// 
function creatProduct(){
    loadProducts();
    saveProducts();
    // document.querySelector('.list-product').remove();
    // list_product = document.createElement("div");
    // list_product.setAttribute('class', 'list-product');
    // dom_list_product.appendChild(list_product);

    for(let dataTable of dataTables){
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'img-product');

        let img = document.createElement('img');
        img.setAttribute('id', "product-photo");
        img.src = dataTable.img;
        div1.appendChild(img);

        let p = document.createElement('p');
        p.id = 'description';
        p.textContent = dataTable.name;

        let p1 = document.createElement('p');
        p1.id = 'price';
        p1.textContent = dataTable.price;
 
        let btnBuy = document.createElement('button');
        btnBuy.setAttribute('class', 'btn-buy');
        btnBuy.textContent = 'buy now'

        let div2 = document.createElement('div')
        div2.setAttribute('class', 'card-product')
        
        div2.appendChild(div1)
        div2.appendChild(p)
        div2.appendChild(p1)
        div2.appendChild(btnBuy)
        dom_list_product .appendChild(div2)
            
    };
};

function searchProduct(event){
    input_search = document.querySelector('#search').value.toUpperCase();

    let inputText = document.querySelector('#description')
    if(inputText.textContent.toLowerCase().includes(input_search) || inputText.textContent.toUpperCase().includes(input_search)){
        inputText.parentNode.style.display = "block"
    }else{
        inputText.parentNode.style.display = "none"
    }

    console.log(inputText)

};


creatProduct();
loadProducts();
