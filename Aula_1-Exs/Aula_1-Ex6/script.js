function calcular() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let resultado = '';

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor, insira números válidos.';
    } else {
        const maior = Math.max(num1, num2);
        const menor = Math.min(num1, num2);
        resultado = `O maior número é: ${maior} <br> O menor número é: ${menor}`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}