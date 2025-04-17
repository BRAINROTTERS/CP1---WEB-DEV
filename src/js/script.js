// EXERCICIO 1 - VARIAVEIS
 //VARIÁVEL UNDEFINED
 
 let a;
 console.log
 //Aqui, a variável a foi declarada mas não foi inicializada, então o valor padrão é undefined.
 
 //VARIÁVEL VAZIA
 
 //string vazia
 let b="";
 console.log(b);
 //Isso é uma string vazia, ou seja, um texto sem conteúdo.
 
 //Null (intencionalmente vazia)
 let c = null;
 console.log(c);
 //null significa "nenhum valor", e geralmente é usado quando queremos especificar intencionalmente que algo está vazio ou ausente.
 
 //VARIAVEL COM UM VALOR DEFINIDO
 
 let d = 21;
 console.log(d);
 //Aqui, a variável d recebeu um valor numérico direto.
 
 // EXERCICIO 2 COMO USAR OPERADORES
 
 let a1= 5;
 let b2 = "5";
 
 console.log(a == b); // true
 
 let x = 10;
 let y = "10";
 
 console.log(x != y); // false
 
 
 let idade = 18;
 
 console.log(idade >= 18); // true
 console.log(idade >= 21); // false

 // EXERCICIO 2 COMO USAR OPERADORES
 
 let ab = 5;
 let bc = "5";
 
 console.log(a == b); // true
 
 let xxw = 10;
 let yw = "10";
 
 console.log(x != y); // false
 
 
 let Idade = 18;
 
 console.log(idade >= 18); // true
 console.log(idade >= 21); // false

//EXERCICIO 3 - FUNÇÕES
#include <stdio.h>

int main() {
    float peso, altura, imc;
    int faixa;

    printf("Digite o peso (kg): ");
    scanf("%f", $peso);

    printf("Digite a altura (m): ");
    scanf("%f", $altura);

    imc = peso / (altura * altura);

    // Determina a faixa com base no IMC
    if (imc < 18.5) {
        faixa = 1; // Abaixo do peso
    } else if (imc <= 24.9) {
        faixa = 2; // Peso ideal
    } else {
        faixa = 3; // Acima do peso
    }

    // Usando switch para exibir a mensagem
    switch (faixa) {
        case 1:
            printf("IMC = %.2f\nVocê está abaixo do peso.\n", imc);
            break;
        case 2:
            printf("IMC = %.2f\nVocê está no peso ideal.\n", imc);
            break;
        case 3:
            printf("IMC = %.2f\nVocê está acima do peso.\n", imc);
            break;
        default:
            printf("Erro ao calcular a faixa do IMC.\n");
    }

    return 0;
}

//exercicio 4
for (let i = 0; i < 50;i++)
    {
      console.log("o valor de i:" + i);
    }
//exercicio 5

const usuario = "admin"
const senha = 1234
if (usuario == "admin" && senha == 1234){
  console.log("usuario correto")
}else{
  console.log("usuario nao encontrado")
}

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

//Exercicio 7
 
 // Dados do aluno
 const nome = "Maria Oliveira";
 const idade1 = 20;
 const curso = "Engenharia de Software";
 const ano = 2025;
 
 // Montando o conteúdo para exibir
 const conteudo = `
   Nome: ${nome}<br>
   Idade: ${idade1}<br>
   Curso: ${curso}<br>
   Ano: ${ano}
 `;
 
 // Exibindo na tela
 document.getElementById("saida").innerHTML = conteudo;
 




//Exercicio 8:
console.log("EXERCICIO 9")
// Texto para análise
const texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";

// Função principal que executa todas as buscas
function realizarBuscas() {
    console.log("=== RESULTADOS DAS BUSCAS ===");
    console.log(`Texto analisado: "${texto}"\n`);

    // 1) Buscar a primeira posição de "em"
    const posicaoEm = texto.indexOf("em");
    console.log(`1) Primeira posição de "em": ${posicaoEm !== -1 ? posicaoEm : 'Não encontrado'}`);
    if (posicaoEm !== -1) {
        console.log(`   Contexto: "...${texto.substring(Math.max(0, posicaoEm - 5), posicaoEm + 7)}..."`);
    }

    // 2) Buscar a última posição de "ia"
    const posicaoIa = texto.lastIndexOf("ia");
    console.log(`\n2) Última posição de "ia": ${posicaoIa !== -1 ? posicaoIa : 'Não encontrado'}`);
    if (posicaoIa !== -1) {
        console.log(`   Contexto: "...${texto.substring(Math.max(0, posicaoIa - 5), posicaoIa + 7)}..."`);
    }

    // 3) Buscar a palavra "ciência" (busca exata)
    const regexCiencia = /\bciência\b/;
    const matchCiencia = texto.match(regexCiencia);
    console.log(`\n3) Palavra "ciência" encontrada? ${matchCiencia ? 'Sim' : 'Não'}`);
    if (matchCiencia) {
        console.log(`   Posição: ${texto.indexOf(matchCiencia[0])}`);
        console.log(`   Contexto: "...${texto.substring(Math.max(0, texto.indexOf(matchCiencia[0]) - 10), texto.indexOf(matchCiencia[0]) + matchCiencia[0].length + 10)}..."`);
    }

    // 4) Buscar a palavra "métodos" (busca exata)
    const regexMetodos = /\bmétodos\b/;
    const matchMetodos = texto.match(regexMetodos);
    console.log(`\n4) Palavra "métodos" encontrada? ${matchMetodos ? 'Sim' : 'Não'}`);
    if (matchMetodos) {
        console.log(`   Posição: ${texto.indexOf(matchMetodos[0])}`);
        console.log(`   Contexto: "...${texto.substring(Math.max(0, texto.indexOf(matchMetodos[0]) - 10), texto.indexOf(matchMetodos[0]) + matchMetodos[0].length + 10)}..."`);
    }
}

// Executar a função principal
realizarBuscas();

//Exercicio 9
console.log("EXERCICIO 9")
// Programa de conversão de tipos
function demonstrarConversao() {
  // 1. Declarar a variável como String
  let valor = "3.1415";
  console.log("Valor original:", valor);
  console.log("Tipo original:", typeof valor);

  // 2. Converter para float (número decimal)
  let valorConvertido = parseFloat(valor);
  console.log("\nValor convertido:", valorConvertido);
  console.log("Tipo após conversão:", typeof valorConvertido);

  // 3. Verificação adicional
  console.log("\nVerificações:");
  console.log("É NaN (Not a Number)?", isNaN(valorConvertido) ? "Sim" : "Não");
  console.log("Valor arredondado:", Math.round(valorConvertido * 100) / 100);
}

// Executar a demonstração
demonstrarConversao();