let onOf = document.querySelector('input');


onOf.addEventListener('click',()=>{
    onOf.parentElement.parentElement.classList.toggle('black');
    let img = document.querySelector('img');
    console.log(img.src)
    if(img.src.match("/media/bulbOn.png")){
        img.src = "/media/bulbOff.png"
    } else {
        img.src = "/media/bulbOn.png"
    }
    console.log(img.src)
})