

/*  variavel global */


let jogador,vencedor  = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados = document.getElementsByClassName('quadrado');




const escolherQuadrado =(id)=>{

    if(vencedor!==null){
        return;
    }
    let quadrado  = document.getElementById(id);

    /*  seção de condição de entrada de dados */

    if(quadrado.innerHTML !=='-'){
        return
      };

    


    quadrado.innerHTML = jogador;
    quadrado.style.color = 'red';




 
    

    if(jogador === 'X'){
        jogador = 'O';
       
    }else{
        jogador= 'X';
        quadrado.style.color = 'yellow';
    }
   
    mudarJogador(jogador);
    verificarVencedor();
}


const mudarJogador = (valor)=>{
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}




mudarJogador('X');

const verificarVencedor = ()=>{
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);
    
    if(checarSequencia(quadrado1,quadrado2,quadrado3)){
    mudarCor(quadrado1,quadrado2,quadrado3);
    mudarVencedor(quadrado1);
    return;
    }
    if(checarSequencia(quadrado4,quadrado5,quadrado6)){
    mudarCor(quadrado4,quadrado5,quadrado6);
    mudarVencedor(quadrado4);
    return;
    }
    if(checarSequencia(quadrado7,quadrado8,quadrado9)){
    mudarCor(quadrado7,quadrado8,quadrado9);
    mudarVencedor(quadrado7);
    return;
    }
    if(checarSequencia(quadrado1,quadrado4,quadrado7)){
    mudarCor(quadrado1,quadrado4,quadrado7);
    mudarVencedor(quadrado1);
    return;
    }
    if(checarSequencia(quadrado2,quadrado5,quadrado8)){
    mudarCor(quadrado2,quadrado5,quadrado8);
    mudarVencedor(quadrado2);
    return;
    }
    if(checarSequencia(quadrado3,quadrado6,quadrado9)){
    mudarCor(quadrado3,quadrado6,quadrado9);
    mudarVencedor(quadrado3);
    return;
    }
    if(checarSequencia(quadrado1,quadrado5,quadrado9)){
    mudarCor(quadrado1,quadrado5,quadrado9);
    mudarVencedor(quadrado1);
    return;
    }
    if(checarSequencia(quadrado3,quadrado5,quadrado7)){
    mudarCor(quadrado3,quadrado5,quadrado7);
    mudarVencedor(quadrado3);
    return;
    }

    
}

const mudarVencedor = (quadrado)=>{
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML= vencedor;


}

 const checarSequencia = (quadrado1,quadrado2,quadrado3)=>{
    let igual = false;

    quadrado1.innerHTML !=='-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML?
    igual = true:
    igual=false;

    return igual;

};

const mudarCor = (quadrado1,quadrado2,quadrado3)=>{
    quadrado1.style.backgroundColor ='green';
    quadrado2.style.backgroundColor='green';
    quadrado3.style.backgroundColor='green';
}


const reiniciarComBotao = ()=>{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for (let i = 1; i <= quadrados.length; i++) {
        const quadrado = document.getElementById(i);
        quadrado.style.backgroundColor ='#eee';
        quadrado.style.color='#eee';
        quadrado.innerHTML = '-';
        
    }
    mudarJogador('X');
}
