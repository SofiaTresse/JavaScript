const campoTexto = document.getElementById('campoTexto');
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
    const texto = campoTexto.value;
    resultado.textContent = texto;
});