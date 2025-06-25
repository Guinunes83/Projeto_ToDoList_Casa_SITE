/*Lista de ações do usuario
    [OK] Pegar texto do input
    [x] Pegar data do input
    [ok] Adicionar nova tarefa
    [ok] Deletar tarefa  
*/

function adicionarTarefa() {
    let valorInput = document.querySelector("input").value;
    let li = document.createElement("li");
    li.classList.add("tarefas");
    li.innerHTML = valorInput + '<span onclick="deletarTarefa(this)">❌</span>';
    document.querySelector("#listaTarefas").appendChild(li);
    document.querySelector("input").value = ""; // Limpa o input após adicionar a tarefa
}

function deletarTarefa(li) {
    li.parentElement.remove(li);
}