document.getElementById('numero').addEventListener('input', function() {
    const numero = parseInt(this.value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido.';
        resultado.style.color = 'red';
        return;
    }

    if (numero < 2) {
        resultado.textContent = 'Número não é primo.';
        resultado.style.color = 'red';
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultado.textContent = 'Número é primo!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Número não é primo.';
        resultado.style.color = 'red';
    }
});