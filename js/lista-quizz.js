let quizzes = [];
let ultimoQuizz;
let comparadorQuizz = false;
let indexInicial = 0;

getQuizzes();
setInterval(getQuizzes, 5000);

function getQuizzes() {
    const resposta = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    resposta.then(renderizarQuizzes);
    resposta.catch(erroQuizzes);
}
function erroQuizzes(erro) {
    console.log('Deu erro ai fera');
}
function renderizarQuizzes(quizz) {

    let ids = JSON.parse(localStorage.getItem('ids')) || []

    quizzes = quizz.data;
    let conteudo = document.querySelector(".todos-quizzes");
    if (comparadorQuizz == true) {
        let j = 0;
        while (j < 50) {
            if (ultimoQuizz == quizzes[j].id) {
                indexInicial = j;
            }
            j++;
        }
        for (let i = indexInicial - 1; i >= 0; i--) {
            if(!ids.includes(quizzes[i].id)){
                conteudo.insertAdjacentHTML('afterbegin', `    
                    <div class="posts" onclick="exibirQuizz('${quizzes[i].id}')" data-identifier="quizz-card">
                        <img src="${quizzes[i].image}" alt="">
                        <p class="posts-titulo">${quizzes[i].title}</p>
                    </div>      
                `);
            }
        }
        ultimoQuizz = quizzes[0].id;
    }
    if (comparadorQuizz == false) {
        for (let i = 0; i < quizzes.length; i++) {
            if(!ids.includes(quizzes[i].id)){
                conteudo.innerHTML += `    
                    <div class="posts" onclick="exibirQuizz('${quizzes[i].id}')" data-identifier="quizz-card">
                        <img src="${quizzes[i].image}" alt="${quizzes[i].image}">
                        <p class="posts-titulo">${quizzes[i].title}</p>
                    </div>      
                `;
            }
        }
    }
    ultimoQuizz = quizzes[0].id;
    comparadorQuizz = true;

    renderMyQuizzes()
}

function renderMyQuizzes(){

    let myQuizzes = document.querySelector(".nav-flex")

    myQuizzes.innerHTML = ''

    let ids = JSON.parse(localStorage.getItem('ids')) || []

    for(let i=0; i<ids.length; i++){
        for(j=0; j<quizzes.length;j++){
            if(parseInt(ids[i]) === parseInt(quizzes[j].id)){
                myQuizzes.innerHTML += `
                <div class="meus-quizzes" data-identifier="quizz-card" id="${quizzes[j].id}">
                    <img src="${quizzes[j].image}" onclick="exibirQuizz('${quizzes[j].id}')"
                        alt="${quizzes[j].title}">
                    <span class="posts-titulo">${quizzes[j].title}</span>
                    <div class="options-quizz">
                        <ion-icon name="trash-outline" onclick="deleteQuizz(this)"></ion-icon>
                    </div>
                </div>`
                break
            }
        }
    }

    if(myQuizzes.querySelectorAll(".meus-quizzes").length !== 0){
        myQuizzes.parentNode.classList.remove("disabled")
        document.querySelector(".nav").classList.add("disabled")
    }

    // <ion-icon name="create-outline"></ion-icon>

}

function deleteQuizz(obj){

    let id = obj.parentNode.parentNode.id
    let keys = JSON.parse(localStorage.getItem('keys')) || []

    for(let i=0; i<keys.length; i++){

        if(id == keys[i][0]){
            let promisse = axios.delete(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`, { headers: {"Secret-Key": keys[i][1]}})
            promisse.then(()=>{
                console.log("Objeto deletado com sucesso")
                for( let j = 0; j < keys.length; j++){ 
                    if ( keys[j][0] == id) { 
                        keys.splice(j, 1); 
                    }
                
                }
                localStorage.setItem("keys", JSON.stringify(keys))
                getQuizzes()
                return
            })
        }
    }
}