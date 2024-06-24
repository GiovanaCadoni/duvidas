const form = document.getElementById('form-list');
const novaTarefa = [];

let linhas= '';

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    atualizaLinha();
    atualizaTabela();
})

function atualizaLinha() {
    const nova = document.getElementById('nova-tarefa');

    if(novaTarefa.includes(nova.value)) {
        alert(`A tarefa ${nova.value} já foi inserida`)
    } else {
        novaTarefa.push(nova.value);

        linha += `<li>${nova.value}</li>`;

        linhas += linha;
    }

    nova.value = '';
}

function atualizaTabela() {
    const attTabela = document.querySelector('ul');
    attTabela.innerHTML = linhas;

    attTabela.addEventListener('click', function(e) {
        if(e.target.classList.contains('check')) {
            e.target.classList.remove('check');
        } else {
            e.target.classList.add('check');
        }
    });
}



