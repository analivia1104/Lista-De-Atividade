    function DeletarItem(){ //Deletar/apagar um item da lista
    this.parentElement.remove() // remover o item
}

    function EditarItem(){ //Edição do assunto da lista
    const item_lista = this.parentElement //pegar o começo do elemento
    const texto_item  = item_lista.innerText.replace("DeletarEditar", "") // Remover o texto dos botoes apos pegar a informação
    input_element = document.querySelector('[data-form-input]') //retorna o documento do input
    input_element.value = texto_item

    /*********** */

    const botao_submit = document.querySelector('[button-submit]') //retornar o botao do submit
    botao_submit.className = 'd-none'

    const botao_edit = document.querySelector('[button-edit]')
    botao_edit.classList.remove('d-none')

}

/******* */

    function BotaoDeletar(){  //criar função estática do botao deletar
    const botao_deletar =  document.createElement('button') //cria o botão
    
    botao_deletar.classList.add("btn", "btn-outline-danger") //tipo do botao
    botao_deletar.innerHTML = "Deletar" //Texto no botão
    botao_deletar.type = "button" 
    botao_deletar.addEventListener("click", DeletarItem) //ação de que ele fará 
    
    return botao_deletar
    }
    
    function BotaoEditar(){ // criar função estática do botao editar
    const botao_editar =  document.createElement('button') //cria o botao
    
    botao_editar.classList.add("btn", "btn-outline-warning") //Tipo do botão
    botao_editar.innerHTML = "Editar" //Texto no botão
    botao_editar.type = "button" 
    botao_editar.addEventListener("click", EditarItem)  //ação que ele fará
    
    return botao_editar
    }

    function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(BotaoDeletar())
    novo_item_lista.appendChild(BotaoEditar())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}
/*Em tese, o botão salvar seria um botao para salvar informação nova do edit, porem nao foi concluida com sucesso */
    function Salvar(){
    
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(BotaoDeletar())
    novo_item_lista.appendChild(BotaoEditar())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""


}