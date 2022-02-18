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
    document.querySelector(".quizz").classList.toggle("disabled")
}