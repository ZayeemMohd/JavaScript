let h3 = document.querySelector('h3')
let container = document.querySelector('.color-container')
let generateBtn = document.querySelector('.Generate-color')


generateBtn.addEventListener('click',()=>{
    let ranColor = randomColor();
    h3.innerText = ranColor;
    container.style.backgroundColor = ranColor;

})

function randomColor(){
    var a = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    var c = Math.floor(Math.random()*256)

    var color = `RGB(${a},${b},${c})`
    return color;
}