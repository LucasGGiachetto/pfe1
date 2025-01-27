function ordenarNumeros() {
    const numeros = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value)
    ];

    
    if (numeros.some(isNaN)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira todos os 5 números corretamente.";
        return;
    }

    const numerosOrdenados = numeros.sort((a, b) => a - b);

    document.getElementById('resultado').innerHTML = 
        `Os números em ordem crescente são: <strong>${numerosOrdenados.join(', ')}</strong>`;
}