// Exercicio 6
function calcularMedia(notas) {
    if (notas.length !== 7) {
      console.log("Erro: É necessário informar exatamente 7 notas.");
      return;
    }
  
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
  
    let media = soma / notas.length;
    console.log("Média final: " + media.toFixed(2));
  
    if (media >= 6) {
      console.log("Parabéns! Você foi APROVADO.");
    } else {
      console.log("Infelizmente, você foi REPROVADO.");
    }
  }
  
  
  let notasDoAluno = [7.5, 6.0, 8.0, 5.5, 6.5, 7.0, 6.0];
  calcularMedia(notasDoAluno);
  