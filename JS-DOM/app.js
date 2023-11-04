// var one = document.getElementById('mainImg')
// one.id = 'notMainImg'



// for(i=1; i<4; i++){

// setTimeout(()=>{
//         document.getElementById('mainImg').src = `assets/creation_${i}.jpeg`;    
// },3000)

// console.log(document.getElementById('mainImg').src = `assets/creation_${i}.jpeg`)

// }

console.log(document.getElementById('mainImg').tagName)
console.log(document.getElementById('mainImg').id)
console.log(document.getElementById('mainImg').src)

console.log(document.getElementsByClassName('oldImg'))

var heading = document.querySelector('h1');
// heading.innerHTML = '<u>Spider Man</u>'
heading.innerHTML = `<u>${heading.innerText}</u>`


// var i = 1;

// function myLoop(){

//     setTimeout(()=>{
   
//     document.getElementById('mainImg').src = `assets/creation_${i}.jpeg`; 

//     console.log(document.getElementById('mainImg').src = `assets/creation_${i}.jpeg`)
    
//     i++

//     if(i<5){
//         myLoop()
//         if(i==4){document.getElementById('mainImg').src = `assets/spiderman_image.png`; i=1; }
//     }
    
//     },3000)

// }

// myLoop();




// var i = 1;

// function myLoop(){

//     setTimeout(()=>{
   
//     document.getElementById('mainImg').src = document.getElementsByClassName('oldImg')[i]; 

//     console.log(document.getElementById('mainImg').src = document.getElementsByClassName('oldImg')[i])
    
//     i++

//     if(i<5){
//         myLoop()
//         if(i==4){document.getElementById('mainImg').src = `assets/spiderman_image.png`; i=1; }
//     }
    
//     },3000)

// }

// myLoop();