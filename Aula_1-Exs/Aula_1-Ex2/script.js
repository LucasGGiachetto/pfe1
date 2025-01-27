function classificarTriangulo() {
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos para os lados do triângulo.";
        return;
    }

    if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
        resultado.innerHTML = "Os valores informados não formam um triângulo.";
        return;
    }

    if (ladoA === ladoB && ladoB === ladoC) {
        resultado.innerHTML = "O triângulo é <strong>Equilátero</strong> (todos os lados iguais).";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        resultado.innerHTML = "O triângulo é <strong>Isósceles</strong> (dois lados iguais).";
    } else {
        resultado.innerHTML = "O triângulo é <strong>Escaleno</strong> (todos os lados diferentes).";
    }
}