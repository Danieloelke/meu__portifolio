const elemento = document.querySelectorAll('[data-anima]');
const animacaoClass ='animacao'

function animaScroll(){
    const topoPg = window.pageYOffset + ((window.innerHeight * 3)/4);
    elemento.forEach(function(elemento){
        if(topoPg > elemento.offsetTop){
            elemento.classList.add(animacaoClass)
        }else{
            elemento.classList.remove(animacaoClass)
        }
    })
} 

if (elemento.length){
    window.addEventListener('scroll', function(){
        animaScroll()
    })
}
