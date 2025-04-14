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
