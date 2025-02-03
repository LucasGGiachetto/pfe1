function calcularDesconto(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let inss = 0;
    if (salario <= 1212) {
        inss = salario * 7.5 / 100;
        let salario_final = Number(salario - inss);
        resultado.innerHTML = `Desconto de 7,5% <br>Salário final de R$ ${salario_final.toFixed(2)}`;

    } else if (salario > 1212 && salario <= 2427.35) {
    inss = salario * 9 / 100;
    let salario_final = Number(salario - inss);
    resultado.innerHTML = `Desconto de 9% <br>Salário final de R$ ${salario_final.toFixed(2)}`;
        
    } else if (salario > 2427.36 && salario <= 3641.03) {
        inss = salario * 12 / 100;
        let salario_final = Number(salario - inss);
        resultado.innerHTML = `Desconto de 12% <br>Salário final de R$ ${salario_final.toFixed(2)}`;
    
    } else if (salario > 3641.04 && salario <= 7087.22){
        inss = salario * 14 / 100;
        let salario_final = Number(salario - inss);
        resultado.innerHTML = `Desconto de 14% <br>Salário final de R$ ${salario_final.toFixed(2)}`;
    } 
}