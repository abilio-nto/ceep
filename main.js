import BotaoConclui from "./componentes/concluirTarefa.js" 
import BotaoDelete from "./componentes/deletarTarefa.js" 
    const criaTarefa = (evento) =>{
    
        evento.preventDefault()
        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value;
        
    
        const tarefa = document.createElement('li');
        const conteudo = `<p class="content">${valor}</p>`
        
        
        tarefa.innerHTML = conteudo;
        tarefa.classList.add("task")
        lista.appendChild(tarefa)
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDelete())
        
        
    
        
    }
    
    
    const novaTarefa = document.querySelector('[data-form-button]')
    
    novaTarefa.addEventListener('click', criaTarefa)  
