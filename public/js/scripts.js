let expressao ='';
function insert(num){
    expressao += num;
    atualizarVisor();
}
function clean(){
    
}
function back(){
    
}
function calcular(){
    
}

function atualizarVisor(){
    document.getElementById('resultado').innetText = expressao;
}

module.exports = {insert, clean, back, calcular}
