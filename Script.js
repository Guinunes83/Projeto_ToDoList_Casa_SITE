/*Lista de ações do usuario
    [OK] Pegar texto do input
    [x] Pegar data do input
    [ok] Adicionar nova tarefa
    [ok] Deletar tarefa  
*/

function adicionarTarefa() {
    let valorInputData = document.querySelector("#dataTarefa").value;
    let li = document.createElement("li");
    
    li.classList.add("tarefas");
    li.innerHTML = valorInput + '<span onclick="deletarTarefa(this)">❌</span>';
    document.querySelector("#listaTarefas").appendChild(li);
    document.querySelector("input").value = ""; // Limpa o input após adicionar a tarefa
}

function deletarTarefa(li) {
    li.parentElement.remove(li);
}

function adicionarCompras() {
    let valorInput = document.querySelector("#inputCompras").value;
    let li = document.createElement("li");
    li.classList.add("compras");
    li.innerHTML = valorInput + '<span onclick="deletarCompras(this)">❌</span>';
    document.querySelector("#listaCompras").appendChild(li);
    document.querySelector("#inputCompras").value = ""; // Limpa o input após adicionar a compra
}