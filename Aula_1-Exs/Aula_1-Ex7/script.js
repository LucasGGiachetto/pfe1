function calcularReajuste() {
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        resultado.innerHTML = "Por favor, insira um salário válido.";
        return;
    }

    let percentualReajuste;
    let salarioReajustado;

    if (salarioAtual >= 1500.00 && salarioAtual < 1750.00) {
        percentualReajuste = 0.15;
    } else if (salarioAtual >= 1750.00 && salarioAtual < 2000.00) {
        percentualReajuste = 0.12;
    } else if (salarioAtual >= 2000.00 && salarioAtual < 3000.00) {
        percentualReajuste = 0.09;
    } else if (salarioAtual >= 3000.00) {
        percentualReajuste = 0.06;
    } else {
        percentualReajuste = 0; 
    }

    salarioReajustado = salarioAtual + (salarioAtual * percentualReajuste);

    resultado.innerHTML = `
        <strong>Salário Atual:</strong> R$ ${salarioAtual.toFixed(2)}<br>
        <strong>Percentual de Reajuste:</strong> ${(percentualReajuste * 100).toFixed(1)}%<br>
        <strong>Salário Reajustado:</strong> R$ ${salarioReajustado.toFixed(2)}
    `;
}