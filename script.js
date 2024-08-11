document.getElementById('calcular').addEventListener('click', function() {
    // Obtendo valores dos inputs
    var homens = parseInt(document.getElementById('homens').value);
    var mulheres = parseInt(document.getElementById('mulheres').value);
    var criancas = parseInt(document.getElementById('criancas').value);

    // Tabela de consumo
    var consumo = {
        carneBovina: { homens: 500, mulheres: 300, criancas: 200 },
        frango: { homens: 200, mulheres: 200, criancas: 100 },
        linguica: { homens: 200, mulheres: 200, criancas: 200 },
        refrigerante: { homens: 300, mulheres: 400, criancas: 200 },
        cerveja: { homens: 800, mulheres: 500, criancas: 0 }
    };

    // Calculando quantidade total necessária
    var totalCarneBovina = homens * consumo.carneBovina.homens + mulheres * consumo.carneBovina.mulheres + criancas * consumo.carneBovina.criancas;
    var totalFrango = homens * consumo.frango.homens + mulheres * consumo.frango.mulheres + criancas * consumo.frango.criancas;
    var totalLinguica = homens * consumo.linguica.homens + mulheres * consumo.linguica.mulheres + criancas * consumo.linguica.criancas;
    var totalRefrigerante = homens * consumo.refrigerante.homens + mulheres * consumo.refrigerante.mulheres + criancas * consumo.refrigerante.criancas;
    var totalCerveja = homens * consumo.cerveja.homens + mulheres * consumo.cerveja.mulheres;

    // Exibindo resultado
    var resultadoHTML = `<h2>Quantidade de itens a serem comprados:</h2>
                        <p>Carne bovina: ${totalCarneBovina}g</p>
                        <p>Frango: ${totalFrango}g</p>
                        <p>Linguiça: ${totalLinguica}g</p>
                        <p>Refrigerante: ${totalRefrigerante}ml</p>
                        <p>Cerveja: ${totalCerveja}ml</p>`;

    document.getElementById('resultado').innerHTML = resultadoHTML;
});
