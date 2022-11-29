// get data
let demo_diload = document.querySelector('#form-dialog');
// let sing_in = document.querySelector('.sell');
let demo_btn_create = document.querySelector('.creatBtn')
let table = document.querySelector('#my-table');
let dataTables = [
    {
        id: "1",
        name: "giovanni",
        description: "red",
        price: "22",

    },
    {
        id: "2",
        name: "shirt",
        description: "red",
        price: 23,

    },
    {
        id: "3",
        name: "dress",
        description: "red",
        price: "24",
    },
]
let indexRuning = 0;

// show and hide element
function show(element){
    element.style.display = "block"
}

function hide(element){
    element.style.display = "none"
}



//  LOCAL STORAGE ---------------------------------------------------------
function saveQuestions() { 
        localStorage.setItem("dataTables", JSON.stringify(dataTables));
}

function loadQuestions() {
    let dataTablesStorage = JSON.parse(localStorage.getItem("dataTables"));
    if (dataTablesStorage !== null) {
        dataTables = dataTablesStorage;
    }
}

// loop table
function creatTable(){
    // show(tables)
    // hide(demo_diload)
    dom_tables = document.querySelector('#body-table');
    dom_tables.remove()

    dom_tables = document.createElement("body-table");
    dom_tables.id = "body-table";

    table.appendChild(dom_tables);

    
    for(let index = 0; index < dataTables.length; index++){
        let dataTable = dataTables[index]
        // currencys = document.querySelector('#currency').value;

        let td1 = document.createElement('td')
        td1.id = 'idu'
        td1.textContent = dataTable.id
      
        let td2 = document.createElement('td')
        td2.id = 'name'
        td2.textContent = dataTable.name
       

        let td3 = document.createElement('td')
        td3.id = 'description'
        td3.textContent = dataTable.description


        let td4 = document.createElement('td')
        td4.id = 'price'
        td4.textContent = dataTable.price

        td5 = document.createElement('td')
        td5.id = 'actions'
       
        let editAction = document.createElement("img");
        editAction.src = "../../img/edit.svg";
        // editAction.addEventListener("click", editQuestion);
        actions.appendChild(editAction);

        let trashAction = document.createElement("img");
        trashAction.src = "../../img/trash.png";
        // trashAction.addEventListener("click", removeQuestion);
        actions.appendChild(trashAction);
        let tr = document.createElement('tr')
        tr.id = 'tr-container'

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)


        dom_tables.appendChild(tr)
        console.log(dataTables)
        
        // dom_table.appendChild(table)

    } 
}
creatTable()

// addQuestion
// click create
function clickOnCreatBtn(){
    show(demo_diload)
    questionEdit = null;
    // hide(demo_btn_create )
}
function onCancel(e) {
    // TODO : when clicking on ADD button, hide the dialog
    hide(demo_diload)
  }
// creat table
function onCreate() {
    hide(demo_diload)
    // hide(dom_questions_dialog);
    if (questionEdit !== null){
        let editQuestion = questions[questionEdit]
        editQuestion.id = document.getElementById('id').value;
        editQuestion.name = document.getElementById('name-product').value;
        editQuestion.description = document.getElementById('descriptions').value;
        editQuestion.price = document.getElementById('prices').value;
        // editQuestion.currency = document.getElementById('currency').value;
      }else{
        
        let newQuestion = {}
        // newQuestion.title = document.getElementById('title').value;
        newQuestion.id = document.getElementById('id').value;
        newQuestion.name = document.getElementById('name-product').value;
        newQuestion.description = document.getElementById('descriptions').value;
        newQuestion.price = document.getElementById('prices').value;
        dataTables.push(newQuestion);
      }

    // 2- Save question
    saveQuestions();

    // 3 - Update the view
    creatTable();
}