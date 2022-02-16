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

    input_box = button.parentNode.querySelectorAll(".incorrect")
    for(let i=0; i<input_box.length; i++){
        if(input_box[i].firstElementChild !== "" && input_box[i].lastElementChild.value.match(regexUrl)){
            hasWrong++
        }
    }
    if(hasWrong < input_box.length/3){
        alert("A pergunta precisa de pelo menos uma resposta errada preenchida corretamente")
        return
    }

    let forms = button.parentNode.parentNode.querySelectorAll(".form-list")
    forms[1].classList.toggle("disabled")
    forms[2].classList.toggle("disabled")
}

function createNewQuestion(obj){
    
    obj.setAttribute("onclick", "clearForm(this)")
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

    

    console.log(obj)
}

function clearForm(obj){
    obj.setAttribute("onclick", "createNewQuestion(this)")
    obj.parentNode.parentNode.innerHTML = `
    <div class="create-label">
        <label for="">Pergunta 2</label>
        <ion-icon name="create-outline" onclick="createNewQuestion(this)"></ion-icon>
    </div>`

}