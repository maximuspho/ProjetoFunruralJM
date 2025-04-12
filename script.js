let tarefas = [];

function adicionarProdutor() {
    //busca o valor dos imput
    const inputProdutor = document.getElementById('produtor').value;
    const inputValor = document.getElementById('valor').value;
    const mensagem = document.getElementById('mensagem');

    let mensagemSucess = "Adicionado com Sucesso!!";
    mensagem.textContent = mensagemSucess;


    if (inputProdutor.trim() && inputValor !== "") {
        // Adiciona um objeto contendo produtor e valor como uma única tarefa
        tarefas.push({ produtor: inputProdutor, valor: inputValor });

        reinderizarProdutor();
        mensagem.style.color = "blue";

        document.getElementById('produtor').value = ''
        document.getElementById('valor').value = ''
    } else {
        let mensagemErro = "Os campos não podem estar Vazios!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "red";
    }
}

function reinderizarProdutor() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement('li');
        // Acessa as propriedades do objeto tarefa para exibir os dados
        novaTarefa.textContent = `Produtor: ${tarefas[i].produtor}, Valor: R$ ${tarefas[i].valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}`;
        
        let botaoRemover = document.createElement('button')
        botaoRemover.className = 'remover'
        botaoRemover.textContent = 'Excluir'
        botaoRemover.onclick = () => removerTarefa(i)
        
        let botaoEditar = document.createElement('button')
        botaoEditar.className = 'editar'
        botaoEditar.textContent = 'Editar'
        botaoEditar.onclick = () => editarTarefa(i)

        listaTarefas.appendChild(botaoEditar)
        listaTarefas.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa);
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)

    reinderizarProdutor()
}

function editarTarefa (i) {
    let tarefaEditadaProdutor = prompt('Edite o Produtor')
    let tarefaEditadaValor = prompt('Edite o Valor')
   
    if (tarefaEditadaProdutor.trim() && tarefaEditadaValor !== "") {
        tarefas[i].produtor = tarefaEditadaProdutor
        tarefas[i].valor = tarefaEditadaValor

        reinderizarProdutor()
    }
}

function limparLista() {
    tarefas.length = 0

    reinderizarProdutor()

    let mensagemLimpa = "Lista de Produtores Limpa!"
    mensagem.textContent = mensagemLimpa
    mensagem.style.color = "Cyan"
}