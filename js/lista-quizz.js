let quizzes = [];
let ultimoQuizz;
let comparadorQuizz = false;
let indexInicial = 0;

getQuizzes();
setInterval(getQuizzes, 1000);

function getQuizzes() {
    const resposta = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    resposta.then(renderizarQuizzes);
    resposta.catch(erroQuizzes);
}
function erroQuizzes(erro) {
    console.log('Deu erro ai fera');
}
function renderizarQuizzes(quizz) {
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
            conteudo.insertAdjacentHTML('afterbegin', `    
                <div class="posts" onclick="exibirQuizz('${quizzes[i].id}')">
                    <img src="${quizzes[i].image}" alt="">
                    <p class="posts-titulo">${quizzes[i].title}</p>
                </div>      
            `);
        }
        ultimoQuizz = quizzes[0].id;
    }
    if (comparadorQuizz == false) {
        for (let i = 0; i < quizzes.length; i++) {
            conteudo.innerHTML += `    
                <div class="posts" onclick="exibirQuizz('${quizzes[i].id}')">
                    <img src="${quizzes[i].image}" alt="">
                    <p class="posts-titulo">${quizzes[i].title}</p>
                </div>      
        `;
        }
    }
    ultimoQuizz = quizzes[0].id;
    comparadorQuizz = true;
}
