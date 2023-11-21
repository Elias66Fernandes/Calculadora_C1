let expressao ='';
function insert(num){
    expressao += num;
    atualizarVisor();
}
function clean(){
    expressao = '';
    atualizarVisor();
}
function back(){
    expressao = expressao.slice(0,-1);
    atualizarVisor();
}
function calcular(){
    try {
        const resultado = eval(expressao);
        expressao = resultado.toString();
        atualizarVisor();
    } catch (error) {
        expressao = 'Erro';
        atualizarVisor();
    } 
}

function atualizarVisor(){
    document.getElementById('resultado').innerText = expressao;
}

module.exports = {insert, clean, back, calcular}
