const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-20T00:00:00");
contadores [0].textContent = calculaTempo(tempoObjetivo);
function calculaTempo (tempoObjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo-tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor (segundos/60);
    let horas = Math.floor(minutos/60);
    let dia = Math.floor(horas/24);
}
contadores [0].textContent = calculaTempo(tempoObjetivo);


for (let i=0; i<botoes.length;i++){
    botoes[i].onclick=function(){
        for(j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}