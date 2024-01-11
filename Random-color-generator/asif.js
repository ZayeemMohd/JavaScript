let red = document.querySelector('#box1')
let blue = document.querySelector('#box2')
let yellow = document.querySelector('#box3')
let green = document.querySelector('#box4')

let body = document.querySelector('body');

red.addEventListener('click',()=>{
    body.style.backgroundColor = "red"
})

blue.addEventListener('click',()=>{
    body.style.backgroundColor = "blue"
})

yellow.addEventListener('click',()=>{
    body.style.backgroundColor = "yellow"
})

green.addEventListener('click',()=>{
    body.style.backgroundColor = "green"
})
