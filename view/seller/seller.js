// get data
let demo_diload = document.querySelector('#form-dialog');
// let sing_in = document.querySelector('.sell');
let demo_btn_create = document.querySelector('.creatBtn')
let table = document.querySelector('#my-table');
let dom_btn_save_create = document.querySelector('#createEditButton');

let dataTables = [
    {
        name: "giovanni",
        description: "red",
        price: "22",
        // img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Flirikamatoshi.com%2Fproducts%2Fstrawberry-midi-dress&psig=AOvVaw3QldSLanmTOTBo89TnLgDt&ust=1669857643214000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMCv087e1PsCFQAAAAAdAAAAABAE'

    },
    {
        name: "shirt",
        description: "red",
        price: 23,
        // img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Flirikamatoshi.com%2Fproducts%2Fstrawberry-midi-dress&psig=AOvVaw3QldSLanmTOTBo89TnLgDt&ust=1669857643214000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMCv087e1PsCFQAAAAAdAAAAABAE'


    },
    {
        name: "dress",
        description: "red",
        price: "24",
        // img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Flirikamatoshi.com%2Fproducts%2Fstrawberry-midi-dress&psig=AOvVaw3QldSLanmTOTBo89TnLgDt&ust=1669857643214000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMCv087e1PsCFQAAAAAdAAAAABAE'

    },
];
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
function saveQuestions() { 
        localStorage.setItem("dataTables", JSON.stringify(dataTables));
}

function loadQuestions() {
    let dataTablesStorage = JSON.parse(localStorage.getItem("dataTables"));
    if (dataTablesStorage !== null) {
        dataTables = dataTablesStorage;
    }
};

// loop table
function creatTable(){
    document.querySelector('#body-table').remove();
    dom_tables = document.createElement("tbody");
    dom_tables.id = "body-table";
    table.appendChild(dom_tables);

    for(let index = 0; index < dataTables.length; index++){
        let tr = document.createElement('tr');
        tr.id = index;;

        let dataTable = dataTables[index];

        let td1 = document.createElement('td');
        td1.id = 'idu';
        tr.className = "tr-table";
        td1.textContent = index+1;
        td1.setAttribute("index",index)
      
        let td2 = document.createElement('td');
        td2.id = 'name';
        tr.className = "tr-table";
        td2.textContent = dataTable.name;
       

        let td3 = document.createElement('td');
        td3.id = 'description';
        tr.className = "tr-table";
        td3.textContent = dataTable.description;

        let td4 = document.createElement('td');
        td4.id = 'price';
        tr.className = "tr-table";
        td4.textContent = dataTable.price;

        td5 = document.createElement('td');
        td5.id = 'actions';
        tr.className = "tr-table";

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

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
    
        dom_tables.appendChild(tr);
    } ;
};
creatTable();

// edite table
function editdDataTale(event) {
    show(demo_diload);
    //  Get the question index
    let ProductIndex = event.target.parentElement.parentElement.children[0].getAttribute('index');
    ProductIndex = parseInt(ProductIndex)
    console.log(ProductIndex)
    // update the dialog with question informatin
    // let getIndexQuestion = dataTables[ProductIndex];
    // console.log(getIndexQuestion);

    // document.getElementById("product-name").value = question.name;
    // console.log(document.getElementById("product-name").value = question.name)
    // document.getElementById("descriptions").value = question.description;
    // document.getElementById("prices").value = question.price;
 
    // Show the dialog
    dom_btn_save_create.textContent = "EDIT";
    saveQuestions();
}

function removeTable(event) {
    //  Get index
    let index = event.target.parentElement.parentElement.children[0].getAttribute('index');

    // Remove question
    dataTables.splice(index, 1);

    // Save to local storage
    saveQuestions();
    // Update the view
    creatTable();
};

// addQuestion
// click create
function addBtn(){
    show(demo_diload);
    // ProductIndex = null;
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

    if (ProductIndex !== null){
        let editQuestion = ProductIndex;
        console.log(editQuestion);
        // editQuestion.name = document.getElementById('product-name').value;
        // editQuestion.description = document.getElementById('descriptions').value;
        // editQuestion.price = document.getElementById('prices').value;
     
      }else{
        let newQuestion = {};
        newQuestion.name = document.getElementById('product-name').value;
        newQuestion.description = document.getElementById('descriptions').value;
        newQuestion.price = document.getElementById('prices').value;
        dataTables.push(newQuestion);
      }

    // 2- Save question
    saveQuestions();
    // 3 - Update the view
    creatTable();
};

saveQuestions();
loadQuestions();
creatTable();