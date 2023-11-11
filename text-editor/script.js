let inp = document.querySelector('input')
let para = document.querySelector('p')

inp.addEventListener('input', function(events){
    para.innerText = this.value
})



