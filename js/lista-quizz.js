let quizzes = [];

getQuizzes();
setInterval(getQuizzes,5000);

function getQuizzes(){
    const resposta = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    resposta.then(renderizarQuizzes); 
    resposta.catch(erroQuizzes);
}
function erroQuizzes(erro){
    console.log('Deu erro ai fera');
}
function renderizarQuizzes(quizz){
    limparQuizzes();
    quizzes = quizz.data;    
    let conteudo = document.querySelector(".todos-quizzes");
    for(i = 0; i<quizzes.length; i++){
        conteudo.innerHTML += `    
                <div class="posts">
                    <img src="${quizzes[i].image}" alt="">
                    <p class="posts-titulo">${quizzes[i].title}</p>
                </div>           
        `;      
    }       
}
function limparQuizzes(){
    let divQuizzes = document.querySelector(".todos-quizzes");
    while(divQuizzes.firstChild){
        divQuizzes.removeChild(divQuizzes.firstChild);
    }   
}

    