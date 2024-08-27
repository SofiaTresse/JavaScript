let contador = 0;

document.getElementById("Clique").addEventListener("click", function() {
    contador++;
    document.getElementById("contador").innerText = contador;
});