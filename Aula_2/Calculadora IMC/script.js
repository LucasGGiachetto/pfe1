function calculoimc() {
    // Obtém os valores de altura e peso
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let mensagem = document.getElementById('mensagem');

    // Validação dos valores de entrada
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        mensagem.innerHTML = 'Por favor, insira valores válidos para peso e altura.';
        mensagem.style.color = 'red'; 
        return;
    }

    let imc = peso / (altura * altura);

    imc = imc.toFixed(2);

    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau II (severa)';
    } else {
        classificacao = 'Obesidade grau III (mórbida)';
    }

    mensagem.innerHTML = `Seu IMC é <strong>${imc}</strong>. Classificação: <strong>${classificacao}</strong>.`;
    mensagem.style.color = 'green'; 
}