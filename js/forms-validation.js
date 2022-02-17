function redirectCreateQuizz(){
    document.querySelector(".index").classList.toggle("disabled")
    document.querySelector(".forms").classList.toggle("disabled")
}

function filledInputs(inputs, minimum){
    let filledInputs = inputs.filter(element => {
        if(element.value !== ""){
            return true
        }
    });

    if(filledInputs.length < minimum){
        return false
    }
    return true
}

function basicInfoSubmit(button){

    let regex = '^(http|https)://.+\.jpg|\.png|\.svg'

    let inputs = [...button.parentNode.querySelectorAll("input")]

    if(!filledInputs(inputs, inputs.length)){
        alert("Preencha todos os campos")
        return
    }
    if(inputs[0].value.length<20 || inputs[0].length>65){
        alert("O título deve ter entre 20 e 65 caracteres")
        inputs[0].classList.add("invalid")
        return
    }
    if(!inputs[1].value.match(regex)){
        alert("Digite a url da imagem corretamente e com o padrão https:// ou http://")
        return
    }
    if(parseInt(inputs[2].value) < 3){
        alert("O quizz precisa ter pelo menos 3 perguntas")
        return
    }
    if(parseInt(inputs[3].value) < 2){
        alert("O quizz precisa ter pelo menos 2 níveis")
        return
    }

    let forms = button.parentNode.parentNode.querySelectorAll(".form-list")
    forms[0].classList.toggle("disabled")
    forms[1].classList.toggle("disabled")
}

function questionsSubmit(button){

    let regexHexa = '^#[A-Fa-f0-9]{6}$'
    let regexUrl = '^(http|https)://.+\.jpg|\.png|\.svg'
    let hasWrong = 0

    let input_box = button.parentNode.querySelectorAll(".question")

    for(let i=0; i<input_box.length; i++){
        if(input_box[i].firstElementChild.value === "" || input_box[i].lastElementChild.value ===""){
            alert("Não deixe os campos de pergunta e de resposta correta vazios!")
            return
        }
        if(input_box[i].firstElementChild.value < 20){
            alert("O título da pergunta não pode conter menos do que 20 caracteres")
            return
        }
    
        if(!input_box[i].lastElementChild.value.match(regexHexa)){
            alert("A cor de fundo deve estar no formato hexadecimal de 6 dígitos. ex:#12f45A")
            return
        }
    }

    input_box = button.parentNode.querySelectorAll(".correct")
    for(let i=0; i<input_box.length; i++){
        if(input_box[i].firstElementChild.value === "" || input_box[i].lastElementChild.value ===""){
            alert("Não deixe os campos de pergunta e de resposta correta vazios!")
            return
        }
        if(!input_box[i].lastElementChild.value.match(regexUrl)){
            alert("Digite a url da imagem corretamente e com o padrão https:// ou http://")
            return
        }
    }

    input_box = button.parentNode.querySelectorAll("form")
    for(let i=0; i<input_box.length; i++){
        hasWrong = 0
        let wrongAnswers = input_box[i].querySelectorAll(".incorrect")
        if(wrongAnswers.length !== 0){
            for(let j=0; j<wrongAnswers.length; j++){
                if(wrongAnswers[j].firstElementChild.value !== "" && wrongAnswers[j].lastElementChild.value.match(regexUrl)){
                    hasWrong++
                }
            }
            if(hasWrong<1){
                alert("A pergunta precisa de pelo menos uma resposta errada preenchida corretamente")
                return
            }
        }

    }

    let forms = button.parentNode.parentNode.querySelectorAll(".form-list")
    forms[1].classList.toggle("disabled")
    forms[2].classList.toggle("disabled")
}

function levelSubmit(button){

    let minLevel = 0
    let regexUrl = '^(http|https)://.+\.jpg|\.png|\.svg'
    let forms_box = [...button.parentNode.querySelectorAll("form")]

    for(let i=0; i<forms_box.length; i++){
        let inputs = forms_box[i].querySelectorAll("input")
        if(parseInt(inputs.length) !== 0){
            if(inputs[0].value.length < 10){
                alert("O título do nível não pode conter menos de 10 caracteres")
                return
            }
            if(parseInt(inputs[1].value) <0 || parseInt(inputs[1].value) > 100 || inputs[1].value === ""){
                alert("A porcentagem deve estar entre 0 e 100")
                return
            }
            if(!inputs[2].value.match(regexUrl)){
                alert("Digite a url da imagem corretamente e com o padrão https:// ou http://")
                return
            }
            if(inputs[3].value.length < 30){
                alert("A descrição do nível deve conter pelo menos 30 caracteres")
                return
            }
        }
    }

    button.parentNode.classList.toggle("disabled")
    document.querySelector(".finish-form").classList.toggle("disabled")
}

function createNewLevel(obj){
    obj.setAttribute("onclick", "clearNewLevel(this)")
    obj.parentNode.parentNode.innerHTML += `
    <input type="text" placeholder="Título do nível">
    <input type="number" placeholder="% de acerto mínima" value="0">
    <input type="url" placeholder="URL da imagem do nível">
    <input type="text" placeholder="Descrição do nível">
    `
}

function clearNewLevel(obj){
    obj.setAttribute("onclick", "createNewLevel(this)")
    obj.parentNode.parentNode.innerHTML = `
    <div class="create-label">
        <label for="">Nível 2</label>
        <ion-icon name="create-outline" onclick="createNewLevel(this)"></ion-icon>
    </div>`
}

function createNewQuestion(obj){
    
    obj.setAttribute("onclick", "clearFormNewQuestion(this)")
    obj.parentNode.parentNode.innerHTML += `
    <div class="double-input-box question">
        <input type="text" placeholder="Texto da pergunta" />
        <input type="text" placeholder="Cor de fundo da pergunta" />
    </div>
    <label for="">Resposta correta</label>
    <div class="double-input-box correct">
        <input type="text" placeholder="Resposta correta" />
        <input type="url" placeholder="URL da imagem" />
    </div>
    <label for="">Respostas incorretas</label>
    <div class="double-input-box incorrect">
        <input type="text" placeholder="Resposta incorreta 1" />
        <input type="url" placeholder="URL da imagem 1" />
    </div>
    <div class="double-input-box incorrect">
        <input type="text" placeholder="Resposta incorreta 2" />
        <input type="url" placeholder="URL da imagem 2" />
    </div>
    <div class="double-input-box incorrect">
        <input type="text" placeholder="Resposta incorreta 3" />
        <input type="url" placeholder="URL da imagem 3" />
    </div>`
}

function clearFormNewQuestion(obj){
    obj.setAttribute("onclick", "createNewQuestion(this)")
    obj.parentNode.parentNode.innerHTML = `
    <div class="create-label">
        <label for="">Pergunta 2</label>
        <ion-icon name="create-outline" onclick="createNewQuestion(this)"></ion-icon>
    </div>`

}