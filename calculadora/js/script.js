// FAZ REFERÊNCIA AOS ELEMENTOS DOM
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('.resultado')
const adicao = document.querySelector('.adicao')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('.multiplicacao')
const divisao = document.querySelector('.divisao')

//alert(numero1)
// CRIA A FUNÇÃO CALCULAR
function calcular(){
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    if(typeof n1 === 'number' 
        && typeof n2 === 'number' ) {
          const add =  `A soma de ${n1} e ${n2} = ${n1+n2}`
          const sub =  `A soma de ${n1} e ${n2} = ${n1-n2}`
          const mult =  `A soma de ${n1} e ${n2} = ${n1*n2}`
          const div =  `A soma de ${n1} e ${n2} = ${n1/n2}`
          //alert(add)
           adicao.innerHTML = add
           subtracao.innerHTML = sub
           multiplicacao.innerHTML = div
           divisao.innerHTML = mult
        } else {
            alert('Por favor, digite um número correto')
        }
    
    //alert('Resultado: ' + resultado)
}
// ADICIONA ESCUTAR DE EVENTOS
btnCalcular.addEventListener('click', function(evento){ 
    evento.preventDefault() // TIRAR O COMPORTAMENTO PADRÃO 
    calcular()
})
