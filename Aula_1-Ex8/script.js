function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const resultado = document.getElementById('resultado');

    if (
        isNaN(nota1) || nota1 < 0 || nota1 > 10 ||
        isNaN(nota2) || nota2 < 0 || nota2 > 10 ||
        isNaN(nota3) || nota3 < 0 || nota3 > 10
    ) {
        resultado.innerHTML = "Por favor, insira notas válidas (entre 0 e 10).";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao;
    if (media >= 6) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    resultado.innerHTML = `
        <strong>Média:</strong> ${media.toFixed(2)}<br>
        <strong>Situação:</strong> ${situacao}
    `;
}