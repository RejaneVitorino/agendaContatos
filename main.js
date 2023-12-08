const form = document.getElementById('form-dados');

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

const inputNomeCompleto = document.getElementById('nome-completo');
const inputNumeroTelefone = document.getElementById('numero-telefone');

let linha = '<tr>';
linha += `<td>${inputNomeCompleto.value}</td>`;
linha += `<td>${inputNumeroTelefone.value}</td>`;
linha += '</tr>';

linhas += linha;

const corpoTabela=document.querySelector('tbody');
corpoTabela.innerHTML=linhas;

inputNomeCompleto.value = ' ';
inputNumeroTelefone.value = ' ';

});