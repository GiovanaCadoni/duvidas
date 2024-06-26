const form = document.getElementById('form-tarefa');
const tarefas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTarefa();
})

function  adicionaLinha() {
    const inputTarefa = document.getElementById('nova-tarefa');

    if (tarefas.includes(inputTarefa.value)) {
        alert(`A tarefa ${inputTarefa.value} já foi inserida`);
    } else (
        tarefas.push(inputTarefa.value)
    );

    let linha = `<li>${inputTarefa.value}</li>`;
    linhas = linha;
}

function atualizaTarefa() {
    const corpoTarefa = document.querySelector('ul');
    corpoTarefa.innerHTML = linhas;

    atualizaTarefa.addEventListener('click', function(e) {
        if (e.target.classList.contains('check')) {
            e.target.classList.remove('check');
        } else {
            e.target.classList.add('check');
        }
    });

}