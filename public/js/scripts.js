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
    
}

function atualizarVisor(){
    document.getElementById('resultado').innetText = expressao;
}

module.exports = {insert, clean, back, calcular}
