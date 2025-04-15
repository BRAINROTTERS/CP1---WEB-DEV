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