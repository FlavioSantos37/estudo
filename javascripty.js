const bt = document.querySelector('.btclique')
let usuario = 'flavio'

function cliques(){
    const nome  = document.querySelector('.n').value
    const t = document.querySelector('.rs')
    if (nome === usuario){
        t.innerHTML = 'acesso liberado'
    } 
    else t.innerHTML = 'acesso negado'
      
         
}
bt.addEventListener('click',cliques)