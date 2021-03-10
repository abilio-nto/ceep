const BotaoDelete = () =>{
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = "deletar"
    botaoDeleta.classList.add("delete-button")
    botaoDeleta.addEventListener('click', deletarTarefa)
    
    return botaoDeleta;
}



const deletarTarefa = (evento) =>{

    const botaoDeletar = evento.target;

    const tarefaCompleta = botaoDeletar.parentElement;

    tarefaCompleta.remove();
   return botaoDeletar
}

export default BotaoDelete;