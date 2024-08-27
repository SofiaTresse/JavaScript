
function contaVogais() {
   
    const vogais = 'aeiou';
    let palavra = 'sofia';
  
    let contador = 0;

    
    for (let i = 0; i < palavra.length; i++) {
        
        if (vogais.includes(palavra[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
}
console.log(contaVogais());