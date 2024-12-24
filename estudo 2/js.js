const botao = document.querySelector('.bt_clique')
3
function  clique(){
    const a1 =  document.querySelector('.n1').value
    const a2 = document.querySelector('.n2').value
    const b = document.querySelector('.p')
    const operador = document.querySelector('.op').value
    if (operador === '+') {
        const r = parseInt(a1) + parseInt (a2)
    b.innerHTML = r
    }
    else if (operador === '-') {
        const r = parseInt(a1) - parseInt (a2)
    b.innerHTML = r
    }

    else if (operador === 'x') {
        const r = parseInt(a1) * parseInt (a2)
    b.innerHTML = r
    }
    
    else b.innerHTML = 'tente novamente'
    
}
botao.addEventListener('click',clique)