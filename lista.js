/*FUNÇÃO ESTÁTICA DELETAR */
function BotaoDeletar(){ 
const botao_deletar =  document.createElement('button') //cria o botão

botao_deletar.classList.add("btn", "btn-outline-danger") //tipo do botao
botao_deletar.innerHTML = "Deletar" //Texto no botão
botao_deletar.type = "button" 
botao_deletar.addEventListener("click", DeletarItem)

return botao_deletar
}

/*FUNÇÃO ESTÁTICA EDITAR */
function BotaoEditar(){
const botao_editar =  document.createElement('button') //cria o botao

botao_editar.classList.add("btn", "btn-outline-warning") //Tipo do botão
botao_editar.innerHTML = "Editar" //Texto no botão
botao_editar.type = "button" 
botao_editar.addEventListener("click", EditarItem) 

return botao_editar
}

/*FUNÇÃO ESTÁTICA SALVAR */
function BotaoSalvar(){ 
const botao_salvar =  document.createElement('button') //cria o botao

botao_salvar.classList.add("btn", "btn-outline-primary") //Tipo do botão
botao_salvar.innerHTML = "Salvar Modificações" //Texto no botão
botao_salvar.type = "button" 
botao_salvar.addEventListener("click", SavarItem) 

return botao_salvar
}


/*****FUNÇÕES DENTRO DAS OUTRAS FUNÇÕES, POIS AS ACIMAS FORAM PARA A CRIAÇÃO ESTÁTICA*****/

/*FUNÇÃO PARA QUE O DELETE FUNCIONE*/
function DeletarItem(){
console.log(this.parentElement) //elemento pai
this.parentElement.remove() //remover o rolê
}

/*FUNÇÃO PARA QUE O EDITAR FUNCIONE*/
function EditarItem(){
    const item = this.parentElement// elemento pai 
    const edição = document.createElement("input") //entrada de informação
    item.innerHTML = '' //retorno
    item.appendChild(edição) //anexar o input 
    item.appendChild(BotaoDeletar()) //anexar o botão deletar
    item.appendChild(BotaoSalvar()) //anexa o botão savar
    edição.select() 
}

/*FUNÇÃO PARA QUE O SALVAR FUNCIONE*/
function SavarItem(){
    const novo_item = this.parentElement.firstChild
    const item = this.parentElement 
    item.innerHTML = novo_item.value //retorno
    item.appendChild(BotaoDeletar()) //anexa o botão Deletar
    item.appendChild(BotaoEditar()) //anexa o botao Editar
}

/*****FUNÇÃO PARA ENCAIXAR TODAS AS FUNÇÕES*****/


function Submit(){ //Função supermacy
    const lista = document.querySelector('[data-task]') 
    const valor = document.querySelector('[data-form-input]') 
    const novo_item = document.createElement("li") //elemento de item de lista
    novo_item.className = "list-group-item";
    novo_item.innerHTML = valor.value //retorno
    novo_item.appendChild(BotaoDeletar()) 
    novo_item.appendChild(BotaoEditar())
    lista.appendChild (novo_item) 
    document.getElementById("item").value = ""

}
