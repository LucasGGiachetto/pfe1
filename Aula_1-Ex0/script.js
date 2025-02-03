function reajustar() {
    let salario = Number(document.getElementById('salario').value);
    let nfilhos = Number(document.getElementById('nfilhos').value);
    let resultado = document.getElementById('resultado');
    let salario_familia = 0;
    if (salario < 2000)
        salario_familia = nfilhos * 45;
    let salario_final = Number(salario + salario_familia);
    resultado.innerHTML = `Salário família de R$ ${salario_familia.toFixed(2)} <br>Salário final de R$ ${salario_final.toFixed(2)}`;
}   