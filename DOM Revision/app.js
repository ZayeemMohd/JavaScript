// let smallImges = document.getElementsByClassName('oldImg');

// for(img of smallImges){
//     img.src = "assets/spiderman_img.png"
// }

// document.getEleme[]

// let para = document.querySelector("p");
// console.dir(para)

// let img = document.querySelector('#mainImg');
// console.dir(img)

// let oldImg = document.querySelector(".oldImg");
// console.dir(oldImg)

// let oldImages = document.querySelectorAll(".oldImg")
// console.log(oldImages)

// let a = document.querySelectorAll('div a');
// console.dir(a)


// let img = document.getElementById("mainImg");

// console.dir(img)

// let links = document.querySelectorAll('.box a');

// for(link of links){
//     link.style.color = 'red';
// }

// // selecting elements or targeting elements
// let body = document.querySelector('body')
// let box = document.querySelector('.box')


// // creating elements
// let newh1 = document.createElement('h1')
// let btn = document.createElement('button')
// let expBtn = document.createElement('button')


// // adding elements
// box.appendChild(newh1)
// box.appendChild(btn)
// body.prepend(expBtn)



// // performing operations
// newh1.innerText = 'Hello world';
// btn.innerText = 'click'
// expBtn.append('Experiment Button')


//selecting Elements

//     let body = document.querySelector('body');
    

// // creating elements

//     let redP = document.createElement('p');
//     let blueH3 = document.createElement('h3');
//     let adiv = document.createElement('div');
//     let inH1 = document.createElement('h1');
//     let meTooP = document.createElement('p');
//     let inp = document.createElement('input');
//     let subBtn = document.createElement("button");
//     let heading = document.createElement('h1')
//     let para = document.createElement('p')


// // adding elements

//     body.append(redP);
//     body.append(blueH3);
//     body.insertAdjacentElement('beforeend',adiv);
//     adiv.prepend(inH1)
//     adiv.append(meTooP)
//     body.append(inp);
//     inp.insertAdjacentElement('afterend',subBtn);
//     body.insertAdjacentElement('afterbegin',heading)
//     heading.insertAdjacentElement('afterend',para);

// // performing operations

//     redP.innerText = "Hey I'm red!"
//     redP.style.color = 'red'

//     blueH3.innerText = "I'm a blue h3"
//     blueH3.style.color = 'blue'

//     adiv.style.border = "1px solid black"
//     adiv.style.backgroundColor = 'pink'
//     adiv.style.margin = '20px auto'

//     inH1.innerText = "I'm in a div"
//     meTooP.innerText = "ME TOO!"

//     inp.setAttribute('placeholder','username')

//     subBtn.append('Click me');
//     subBtn.setAttribute('id','btn');

//     let woIcBTN = document.querySelector('#btn');
//     woIcBTN.style.backgroundColor = 'blue';
//     woIcBTN.style.color = 'white';

//     heading.innerHTML = 'DOM Practice';
//     heading.style.textDecoration = 'underline';
//     heading.style.color = 'purple'

//     para.innerHTML = 'Hello world <b>Practice</b> karo!'

let img = document.querySelector(".oldImg");

    let leftArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click',()=>{
        img.setAttribute('src',"")
    })