let quizzes = [];
let ultimoQuizz;
let comparadorQuizz = false;
let indexInicial = 50;

setInterval(getQuizzes,1000);

function getQuizzes(){
    const resposta = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    resposta.then(renderizarQuizzes); 
    resposta.catch(erroQuizzes);
}
function erroQuizzes(erro){
    console.log('Deu erro ai fera');
}

function renderizarQuizzes(quizz){    
    quizzes = quizz.data;    
    let conteudo = document.querySelector(".todos-quizzes");
    if(comparadorQuizz == true){
        let j = 0;
        while(j<50){
            if(ultimoQuizz == quizzes[j].id){
                indexInicial = j;
            }               
            j++;
        }       
    }   
    for(let i = 0; i<indexInicial; i++){              
        conteudo.innerHTML += `    
                <div class="posts" onclick="exibirQuizz('${quizzes[i].id}')">
                    <img src="${quizzes[i].image}" alt="">
                    <p class="posts-titulo">${quizzes[i].title}</p>
                </div>      
        `;      
    }
    ultimoQuizz = quizzes[0].id;
    comparadorQuizz = true;            
}

    