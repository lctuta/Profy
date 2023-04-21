// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// Quando clicar no botão

// Executar uma ação
function cloneField() {

// Duplicar os campos. Que campos?
const newFildContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

//limpar os campos. Que campos?
const fields = newFildContainer.querySelectorAll('input')

//para cada campo, limpar
fields.forEach(function(field){
    //para o field do momento
    console.log(field)
    //pega o field do momento e limpa ele
    field.value = ""
})

// Colocar na página: onde?
document.querySelector('#schedule-items').appendChild(newFildContainer)
}