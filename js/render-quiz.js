let quizzEscolhido;
let arrayQuestoes;
let arrayOpcoes;
let postQuestoes;
let resultadoUsuario = 0;
let arrayNiveis;
let postPergunta;
let idQuizz;
//setTimeout(()=>{        
//   exibirQuizz('teste',2583);        
//},3500); 
function exibirQuizz(id) {
    idQuizz = id;
    let banner = document.querySelector(".banner");
    postPergunta = document.querySelector(".quizz");
    for (let i = 0; i < quizzes.length; i++) {
        if (id == quizzes[i].id) {
            quizzEscolhido = quizzes[i];
        }
    }
    console.log(quizzEscolhido);
    postPergunta.innerHTML = `  
                    <div class="banner">
                    <img src=${quizzEscolhido.image}>
                    <span class="titulo-quizz">${quizzEscolhido.title}</span>
                    </div>                     
                                         
                `;

    arrayQuestoes = quizzEscolhido.questions;    
    for(let i = 0; i < arrayQuestoes.length; i++){                  
        postPergunta.innerHTML += `                     
            <div class="post-pergunta">
                <div class="faixa-pergunta" style="background-color:${arrayQuestoes[i].color};">
                    <span>
                        ${arrayQuestoes[i].title}
                    </span>
                </div>
                <div class="respostas respostasI${i}" data-value=${i}>
                
                </div> 
            </div>              
        `;
        let j=0;
        arrayOpcoes =  arrayQuestoes[i].answers;
        sortFuncao()
        postQuestoes = document.querySelector(".respostasI"+i);
        for(j = 0; j < arrayOpcoes.length; j++){
            postQuestoes.innerHTML += `                     
                <div class="resposta resposta${j}" data-boolean=${arrayOpcoes[j].isCorrectAnswer} onclick="respostaUsuario(this)">
                    <img src=${arrayOpcoes[j].image}>
                    <p>${arrayOpcoes[j].text}</p>
                </div>       
            `;            
        }            
    }
    redirectQuizzes()
}
function sortFuncao(){
    arrayOpcoes.sort( function () {
        return 0.5 - Math.random();
    });
}

let respostaEscolhida;
let filhosResposta;
let contador;
let chamarResultado = 0;
let divPai;
function respostaUsuario(div){  
    divPai = div.parentElement;
    contador = parseInt(divPai.getAttribute("data-value"));
    if(contador<arrayQuestoes.length){
        respostaEscolhida = document.querySelector(".respostasI"+contador);
        filhosResposta = respostaEscolhida.children;
        for(let i = 0; i< filhosResposta.length; i++){
            if(filhosResposta[i] == div){                 
                if(filhosResposta[i].getAttribute("data-boolean") === 'true'){
                    resultadoUsuario = resultadoUsuario + 1;
                    filhosResposta[i].classList.add("certo");
                    filhosResposta[i].setAttribute("onClick","");
                }else if(filhosResposta[i].getAttribute("data-boolean") === 'false'){
                    filhosResposta[i].classList.add("errado")
                    filhosResposta[i].setAttribute("onClick","");
                }
            }
            if(filhosResposta[i] != div){
                if(filhosResposta[i].getAttribute("data-boolean") === 'true'){
                    filhosResposta[i].classList.add("certo")
                    filhosResposta[i].classList.add("opacidade")
                    filhosResposta[i].setAttribute("onClick","");
                }else if(filhosResposta[i].getAttribute("data-boolean") === 'false'){
                    filhosResposta[i].classList.add("errado")
                    filhosResposta[i].classList.add("opacidade")
                    filhosResposta[i].setAttribute("onClick","");             
                }
            } 
        }
    
    }       
    contador++;
    chamarResultado++;
    setTimeout(()=>{        
        scrollarPagina(contador);        
     },2000);     
    if(chamarResultado == arrayQuestoes.length){
        renderizarResultado();
    }
       
}

function scrollarPagina(contador){
    if(contador < arrayQuestoes.length && contador != 0){
        postQuestoes = document.querySelector(".respostasI"+contador);
        postQuestoes = postQuestoes.parentElement;    
        postQuestoes.scrollIntoView()  
    }
}

function renderizarResultado(){
   arrayNiveis = quizzEscolhido.levels;
   resultadoUsuario = Math.round((resultadoUsuario * 100)/arrayQuestoes.length); 
   let cont =  arrayNiveis.length - 1;
        for(let i = 1; i<arrayNiveis.length; i++){
            if(resultadoUsuario==arrayNiveis[0].minValue){
                postPergunta.innerHTML += `                     
                    <div class="resultado-final">
                        <div class="resultado">
                            <div class="faixa-resultado">
                                <span>${arrayNiveis[0].title}</span>
                            </div>
                            <div class="resultado-info">
                                <img src=${arrayNiveis[0].image}>
                                <span>${arrayNiveis[0].text}</span>
                            </div>
                        </div>
                        <div class="reiniciar">
                            <button onclick="reiniciarQuizz()">Reiniciar Quizz</button>
                            <span onclick="redirectHomeList()">Voltar para home</span>
                        </div>
                    </div>       
                `;
                break;
            }
            if(resultadoUsuario >= arrayNiveis[cont].minValue){
                postPergunta.innerHTML += `                     
                    <div class="resultado-final">
                        <div class="resultado">
                            <div class="faixa-resultado">
                                <span>${arrayNiveis[cont].title}</span>
                            </div>
                            <div class="resultado-info">
                                <img src=${arrayNiveis[cont].image}>
                                <span>${arrayNiveis[cont].text}</span>
                            </div>
                        </div>
                        <div class="reiniciar">
                            <button onclick="reiniciarQuizz()">Reiniciar Quizz</button>
                            <span onclick="redirectHomeList()">Voltar para home</span>
                        </div>
                    </div>       
                `;
                break; 
            }else{
                if(resultadoUsuario<arrayNiveis[i].minValue){
                    postPergunta.innerHTML += `                     
                        <div class="resultado-final">
                            <div class="resultado">
                                <div class="faixa-resultado">
                                    <span>${arrayNiveis[i-1].title}</span>
                                </div>
                                <div class="resultado-info">
                                    <img src=${arrayNiveis[i-1].image}>
                                    <span>${arrayNiveis[i-1].text}</span>
                                </div>
                            </div>
                            <div class="reiniciar">
                                <button onclick="reiniciarQuizz()">Reiniciar Quizz</button>
                                <span onclick="redirectHomeList()">Voltar para home</span>
                            </div>
                        </div>       
                    `; 
                break;   
                }else if(resultadoUsuario=arrayNiveis[i].minValue){
                    postPergunta.innerHTML += `                     
                        <div class="resultado-final">
                            <div class="resultado">
                                <div class="faixa-resultado">
                                    <span>${arrayNiveis[i].title}</span>
                                </div>
                                <div class="resultado-info">
                                    <img src=${arrayNiveis[i].image}>
                                    <span>${arrayNiveis[i].text}</span>
                                </div>
                            </div>
                            <div class="reiniciar">
                                <button onclick="reiniciarQuizz()">Reiniciar Quizz</button>
                                <span onclick="redirectHomeList()">Voltar para home</span>
                            </div>
                        </div>       
                    `; 
                }
                continue;
            }            
        }   
   resultadoUsuario = 0;
   chamarResultado = 0;
   setTimeout(()=>{        
        scrollarResultado();        
    },2000);   
}
function scrollarResultado(){
    let conteudoFinal = document.querySelector(".quizz");
    conteudoFinal = conteudoFinal.lastElementChild;    
    conteudoFinal.scrollIntoView() 
}

function reiniciarQuizz(){
    let reiniciaConteudo = document.querySelector(".quizz");
    reiniciaConteudo = reiniciaConteudo.firstElementChild;    
    reiniciaConteudo.scrollIntoView(); 
    exibirQuizz(idQuizz);
}
