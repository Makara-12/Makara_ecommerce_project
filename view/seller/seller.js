// get data
let demo_diload = document.querySelector('#form-dialog');
// let sing_in = document.querySelector('.sell');
let demo_btn_create = document.querySelector('.creatBtn')
let table = document.querySelector('#my-table');
let dom_btn_save_create = document.querySelector('#createEditButton');

// let dom_photo_product = document.getElementById('photo-product');
// let dom_product_name = document.getElementById('product-name');
// let dom_description = document.getElementById('descriptions');
// let dom_price = document.getElementById('prices');
// console.log(dom_price)


// let dataTables = [
//     {
//         name: "giovanni",
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
// let indexRuning = 0;
// let questionToEdit = null;

// show and hide element
function show(element){
    element.style.display = "block";
};

function hide(element){
    element.style.display = "none";
};

//  LOCAL STORAGE ---------------------------------------------------------
function saveProducts() { 
        localStorage.setItem("dataTables", JSON.stringify(dataTables));
}

function loadProducts() {
    let dataTablesStorage = JSON.parse(localStorage.getItem("dataTables"));
    if (dataTablesStorage !== null) {
        dataTables = dataTablesStorage;
    }
};

// loop table
function creatTable(){
    loadProducts()
    saveProducts()

    // if (dom_photo_product.value === '' || dom_product_name.value === '' || dom_description.value === '' || dom_price.value === ''){
    //     // confirm('need to input all')
    // }else{
        document.querySelector('#body-table').remove();
        dom_tables = document.createElement("tbody");
        dom_tables.id = "body-table";
        table.appendChild(dom_tables);

        for(let index = 0; index < dataTables.length; index++){
    
            let dataTable = dataTables[index];
    
            let td1 = document.createElement('td');
            td1.id = 'idu';
    
            td1.textContent = index+1;
            td1.setAttribute("index",index)
          
            let td2 = document.createElement('td');
            td2.id = 'name';
            // tr.className = "tr-table";
            td2.textContent = dataTable.name;
           
    
            let td3 = document.createElement('td');
            td3.id = 'description';
            // tr.className = "tr-table";
            td3.textContent = dataTable.description;
    
            let td4 = document.createElement('td');
            td4.id = 'price';
            // tr.className = "tr-table";
            td4.textContent = dataTable.price;
    
            td5 = document.createElement('td');
            td5.id = 'actions';
            // tr.className = "tr-table";
    
            td6 = document.createElement('td');
            td6.id = 'img-product';
            // tr.className = "tr-table";
    
            let img = document.createElement('img')
            img.id = "cloth"
            img.src = dataTable.img;
            td6.appendChild(img)
           
    
            let btn1 = document.createElement("button");
            btn1.setAttribute("id","btn1");
            btn1.addEventListener('click', editdDataTale);
            btn1.textContent = 'Edit';
    
            let btn2 = document.createElement("button");
            btn2.setAttribute("id","btn2");
            btn2.addEventListener('click', removeTable);
            btn2.textContent = 'Delete';
    
            td5.appendChild(btn1);
            td5.appendChild(btn2);
    
            let tr = document.createElement('tr');
            tr.id = index;
            tr.className = "tr-table";
    
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
        
            dom_tables.appendChild(tr);
        };
    // }
};
creatTable();

// edite table
function editdDataTale(event) {
    show(demo_diload);
    //  Get the question index
    productIndex = event.target.parentElement.parentElement.children[0].getAttribute('index');
    productIndex = parseInt(productIndex)
    let getIndexQuestion = dataTables[productIndex];

    document.getElementById("photo-product").value = getIndexQuestion.img;
    console.log( document.getElementById("photo-product").value = getIndexQuestion.img)
    document.getElementById("product-name").value = getIndexQuestion.name
    document.getElementById("descriptions").value = getIndexQuestion.description;
    document.getElementById("prices").value = getIndexQuestion.price;
 
    // Show the dialog
    dom_btn_save_create.textContent = "EDIT";
    saveProducts();
}

function removeTable(event) {
    //  Get index
    let index = event.target.parentElement.parentElement.children[0].getAttribute('index');

    // Remove question
    dataTables.splice(index, 1);

    // Save to local storage
    saveProducts();
    // Update the view
    creatTable();
};

// addQuestion
// click create
function addBtn(){
    show(demo_diload);
    clearProduct();
    productIndex = null;
    dom_btn_save_create.textContent = "Save";
};

function onCancel(e) {
    // TODO : when clicking on ADD button, hide the dialog
    hide(demo_diload);
};

// creat table
function onCreate() {
    hide(demo_diload);
    // hide(dom_questions_dialog);

    if (productIndex !== null){
        let editProduct = dataTables[productIndex];
        editProduct.img = document.getElementById("photo-product").value;
        editProduct.name = document.getElementById('product-name').value;
        editProduct.description = document.getElementById('descriptions').value;
        editProduct.price = document.getElementById('prices').value;
    }else{
        let newQuestion = {};
        newQuestion.img = document.getElementById("photo-product").value;
        newQuestion.name = document.getElementById('product-name').value;
        newQuestion.description = document.getElementById('descriptions').value;
        newQuestion.price = document.getElementById('prices').value;
        dataTables.push(newQuestion);
      }

    // 2- Save question
    saveProducts();
    // 3 - Update the view
    creatTable();
};

// clear product
function clearProduct(){
    document.getElementById('photo-product').value  = "";
    document.getElementById('product-name').value  = "";
    document.getElementById('descriptions').value  = "";
    document.getElementById('prices').value  = "";
};

saveProducts();
loadProducts();
creatTable();