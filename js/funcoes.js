function calcular(operacao){
    const n1 = (document.getElementById('n1').value)
    const n2 = (document.getElementById('n2').value)

    let resultado
    switch(operacao){
        case '+': resultado = somar(n1, n2); break;
        case '-':resultado = Subtrair(n1, n2); break;
        case '*':resultado = Multiplicar(n1, n2); break;
        case '/':resultado = Dividir(n1, n2); break;
    }

    document.getElementById('resultado').innerHTML = 'O resultado é  ' + resultado
}


function somar(n1, n2){
   return Number(n1) + Number(n2)

}
function Subtrair(n1, n2){
    return Number(n1) - Number(n2)
}
function Multiplicar(n1, n2){
    return Number(n1) * Number(n2)

}
function Dividir(n1, n2){
    
    if(n2 == 0){
        console.error('Não é possivel dividir número por 0')
        return null
    }
    else{
        return Number(n1) / Number(n2)}
}