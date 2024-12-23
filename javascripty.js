const bt = document.querySelector('.btclique')
let usuario = 'flavio'

function cliques(){
    const nome  = document.querySelector('.n').value
    const t = document.querySelector('.rs')
    if (nome === usuario){
        t.innerHTML = 'Acesso Liberado'
    } 
    else t.innerHTML = 'Acesso Negado'
      
         
}
bt.addEventListener('click',cliques)