let premiosDoDia = {
    Bicicleta_21_marchas : 600,
    TvLcd_40_polegadas : 2000,
    RadioSony : 500,
    Computador_Intel_core9 : 1500,
    PranchaDeSurf_Campeonato : 1600,
    MonitorLed_computador_LG: 1200,
    Máquina_de_Costura: 800,
    CelularIphone_10 : 2600,
    MotoHonda_500 : 7410,
    Sofá_3_lugares: 1100,
    Geladeira_FrostFree : 2900,
    MaquinaLavarRoupa_4kg: 3300,
    SecadoraDeRoupa_4kg: 1400,
    Fogão_4_bocas: 683,
    Batedeira_Simples: 550,
    Cafeteira_Simples: 400,
    Ferro_de_passar_roupa: 150,
    Aspirador_de_pó: 199,
    Purificador_de_água: 600,
    Torradeira_simples: 70 , 
}

let texto=document.getElementById('fim')
let acertou=0
let errou=0
let quase=0
let vt_ganho=0
let vt_perdido=0


const $ = document.querySelector.bind(document);
let resultadoNatela = $("#premios");
let btnVerificar = $(".verificar")
let btnEstatist = $(".invisivel")

let botao = $(".botao");

botao.addEventListener("click",()=>{
    event.preventDefault()
    let div = $(".invisivel");
    div.classList.remove("invisivel")    
})



function aparecerProduto(){
    
    let nomeProduto = $(".nome-produto")    
    const transObjectArray = Object.keys(premiosDoDia)
    console.log(transObjectArray)
    let produtoTela = Math.floor(Math.random() * transObjectArray.length)
    console.log(produtoTela)
    nomeProduto.textContent = `${transObjectArray[produtoTela]}`
    
}

function tentar_novamente(){
    aparecerProduto()
    limp()    
}




function verificadorPreco(){
    let inputValorProduto = $(".input-valor");
    let inputValor = parseInt(inputValorProduto.value);
    /* verificadorCampos(inputValor) */
    let nomesProdutos = $(".nome-produto").textContent;    
    /* let resultadoNatela = $("#premios"); */

    if(premiosDoDia[nomesProdutos] == inputValor  ||   premiosDoDia[nomesProdutos] <= inputValor >= inputValor*0.9 ) {
        
        resultadoNatela.classList.add("premios-ganhou")
        gsap.to(".premios", {duration: 2, x: 100, ease: "bounce"});
        resultadoNatela.textContent = `Parabéns acabou de ganhar ${$(".nome-produto").textContent} no valor de ${inputValor} Reais` ;
        resultadoNatela.style.color='green'
        btnVerificar.style.background='green'
        acertou++
        vt_ganho=inputValor+vt_ganho
        
    }else{
        resultadoNatela.classList.add("premios-errou")
        gsap.to(".premios", {duration: 2, x: 100, ease: "bounce"});
        resultadoNatela.style.color='red'
        resultadoNatela.textContent = `Infelizmente não foi dessa vez, ${premiosDoDia[nomesProdutos]}Reais `;
        btnVerificar.style.background='red'
        errou++
        vt_perdido=inputValor+vt_perdido
    }
    start()
    
}

function verificadorCampos(value){
    if(value !== Number){
        value.value = "";
        return alert("Por favor insira apenas numeros")
    }
}




let cont = 301;
function start(){ 
    const time = document.getElementById("time");
    if(cont > 0){
        cont -=1        
        time.innerHTML = `${cont} segundos`
        setTimeout('start();',1000);        
    }
}



function estatistica(){

texto.innerHTML= "Quantas vezes você acertou: " + acertou + ` <br> Quantas vezes você errou: ` + errou + `<br> Você ganhou em R$ ${vt_ganho} em prêmios. `

}


function limp(){
    let inputValorProduto = $(".input-valor");
    inputValorProduto.value="";
    resultadoNatela.innerHTML = ""
    inputValorProduto.focus()

    }


function fim(){
    let teste = $(".regras");
    teste.classList.add("invisivel")  
    resultadoNatela.innerHTML=""
    estatistica()
}