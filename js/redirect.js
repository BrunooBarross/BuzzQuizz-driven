function redirectCreateQuizz(){
    document.querySelector(".index").classList.toggle("disabled")
    document.querySelector(".forms").classList.toggle("disabled")
}

function redirectHomePage(){
    getQuizzes()
    redirectCreateQuizz()
}

function redirectQuizzes(){
    document.querySelector(".index").classList.add("disabled")
    document.querySelector(".forms").classList.add("disabled")
    let reiniciaConteudo = document.querySelector(".quizz");
    reiniciaConteudo.classList.remove("disabled")
    reiniciaConteudo = reiniciaConteudo.firstElementChild;    
    reiniciaConteudo.scrollIntoView();
}

function redirectHomeList(){
    document.querySelector(".index").classList.remove("disabled")
    document.querySelector(".quizz").classList.add("disabled")
    scrollarPaginaHome(); 
}
function scrollarPaginaHome(){
    let irParaHome = document.querySelector(".index");
    //irParaHome.classList.add("disabled")
    irParaHome = irParaHome.firstElementChild;    
    irParaHome.scrollIntoView();
}