document.getElementById('numero').addEventListener('input', function() {
    const numero = parseInt(this.value);
    const resultado = document.getElementById('resultado');

    if (numero >= 0 && numero <= 1000) {
        resultado.textContent = 'Número válido!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Número inválido! Digite um número entre 0 e 1000.';
        resultado.style.color = 'red';
    }
});