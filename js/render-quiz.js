let quizzEscolhido;
let arrayQuestoes;
let arrayOpcoes;
let postQuestoes;

//setTimeout(()=>{        
//   exibirQuizz('teste',2583);        
//},3500); 
function exibirQuizz(div ,id) {
    let banner = document.querySelector(".banner");
    let postPergunta = document.querySelector(".quizz");
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
                <div class="resposta resposta${j}" data-boolean=${arrayOpcoes[j].isCorrectAnswer} onclick="proximaPergunta(this)">
                    <img src=${arrayOpcoes[j].image}>
                    <p>${arrayOpcoes[j].text}</p>
                </div>       
            `;            
        }            
    }
    
}
function sortFuncao(){
    arrayOpcoes.sort( function () {
        return 0.5 - Math.random();
    });
}

let teste=1;
let respostaEscolhida;
let filhosResposta;
let contador;
let divPai;
function proximaPergunta(div){  
    divPai = div.parentElement;
    contador = divPai.getAttribute("data-value");
    if(contador<arrayQuestoes.length){
        respostaEscolhida = document.querySelector(".respostasI"+contador);
        filhosResposta = respostaEscolhida.children;
        for(let i = 0; i< filhosResposta.length; i++){
            if(filhosResposta[i] == div){                 
                if(filhosResposta[i].getAttribute("data-boolean") === 'true'){
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
    
    if(teste < arrayQuestoes.length && teste != 0){
        postQuestoes = document.querySelector(".respostasI"+teste);
        postQuestoes = postQuestoes.parentElement;    
        postQuestoes.scrollIntoView()  
        teste ++;
    }else{
        teste = 0;
    }  

}
