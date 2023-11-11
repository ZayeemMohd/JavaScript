let btn =  document.querySelector('button')
let h1 = document.querySelector('h1')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')



btn.addEventListener('dblclick', changeColor())

h1.addEventListener('dblclick', changeColor())

h3.addEventListener('dblclick', changeColor())

p.addEventListener('dblclick', changeColor())


function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor  = "red";
}