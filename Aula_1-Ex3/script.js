document.getElementById('priceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    let newPrice;

    if (productPrice < 1000) {
        newPrice = productPrice * 1.05; // Aumento de 5%
    } else {
        newPrice = productPrice * 1.07; // Aumento de 7%
    }

    document.getElementById('result').innerText = `Nome da Mercadoria: ${productName}\nNovo Preço: R$ ${newPrice.toFixed(2)}`;
});