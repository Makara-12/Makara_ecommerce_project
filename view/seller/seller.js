// get data
let demo_diload = document.querySelector('#form-dialog');
let sing_in = document.querySelector('.sell');
let btnSignIn = document.querySelector('.sing-in')
// show and hide element
function show(element){
    element.style.display = "block"
}

function hide(element){
    element.style.display = "none"
}

// click create
function clickOnSignIn(){
    show(demo_diload)
    hide(sing_in)
}

// 