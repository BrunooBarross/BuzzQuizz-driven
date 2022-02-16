function basicInfoSubmit(button){

    let regex = '^(http|https)://.+\.jpg|\.png|\.svg'

    let inputs = [...button.parentNode.querySelectorAll("input")]

    let filledInputs = inputs.filter(element => {
        if(element.value !== ""){
            return true
        }
    });

    if(filledInputs.length < inputs.length){
        alert("Preencha todos os campos")
        return
    }
    if(inputs[0].value.length<20 || filledInputs[0].value.length>65){
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

    alert("deu certo")
}