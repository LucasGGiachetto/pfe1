function calcularDesconto() {
    const peca = document.getElementById('peca').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(preco) || preco <= 0) {
        resultado.innerHTML = "Por favor, insira um preço válido.";
        return;
    }

    let desconto;

    switch (peca) {
        case 'camisa':
            desconto = preco * 0.20;
            break;
        case 'bermuda':
            desconto = preco * 0.10;
            break;
        case 'calca':
            desconto = preco * 0.15;
            break;
        default:
            desconto = 0;
    }

    const precoFinal = preco - desconto;

    resultado.innerHTML = `
        <strong>Peça:</strong> ${peca.charAt(0).toUpperCase() + peca.slice(1)}<br>
        <strong>Preço Original:</strong> R$ ${preco.toFixed(2)}<br>
        <strong>Desconto Aplicado:</strong> R$ ${desconto.toFixed(2)}<br>
        <strong>Preço Final:</strong> R$ ${precoFinal.toFixed(2)}
    `;
}