let quizzes = [];

getQuizzes();
setInterval(getQuizzes,10000);

function getQuizzes(){
    const resposta = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    resposta.then(renderizarQuizzes); 
    resposta.catch(erroQuizzes);
}
function erroQuizzes(erro){
    console.log('Deu erro ai fera');
}
function renderizarQuizzes(quizz){
    console.log(quizzes);
    limpaQuizzes();
    quizzes = quizz.data;    
    let conteudo = document.querySelector(".todos-quizzes");
    for(i = 0; i<quizzes.length; i++){
        conteudo.innerHTML += `    
                <div class="posts">
                    <img src="${quizzes[i].image}" alt="">
                    <span class="posts-titulo">${quizzes[i].title}</span>
                </div>      
        `;      
    }
}
function limpaQuizzes(){
    let divQuizzes = document.querySelector(".todos-quizzes");
    while(divQuizzes.firstChild){
        divQuizzes.removeChild(divQuizzes.firstChild);
    }   
}
    