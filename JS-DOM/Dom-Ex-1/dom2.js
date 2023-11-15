

let body = document.querySelector('body')
let div1 = document.createElement('div')
let heading = document.createElement('h1')
heading.innerHTML = 'DOM-MANIPULATION'

let para1 = document.createElement('p')
let para2 = document.createElement('p')
let para3 = document.createElement('p')
let para4 = document.createElement('p')

body.prepend(div1)
div1.prepend(heading)
div1.append(para1)
para1.setAttribute('id','firstP')
div1.append(para2)
para2.setAttribute('id','secondP')
div1.append(para3)
para3.setAttribute('id','thirdP')
div1.append(para4)
para4.setAttribute('id','fourthP')



console.log('\n') //----------------------------------------------------



console.log("Selecting first paragraph by querySelctors' tag ")
var paraByQueryTag = document.querySelector('p')
console.log(paraByQueryTag)


console.log("Selecting first paragraph by tagName")
var paraByTagName = document.getElementsByTagName('p')[0]
console.log(paraByTagName)

console.log('\n') //----------------------------------------------------

console.log("Selecting each paragraph by querySelectors' id ")

var para1ByQueryId = document.querySelector("#firstP")
console.dir(para1ByQueryId)

var para2ByQueryId = document.querySelector('#secondP')
console.dir(para2ByQueryId)

var para3ByQueryId = document.querySelector('#thirdP')
console.dir(para3ByQueryId)

var para4ByQueryId = document.querySelector('#fourthP')
console.dir(para4ByQueryId)

console.log("Selecting each paragraph by id ")

var para1ById = document.getElementById('firstP')
console.log(para1ById)

var para2ById = document.getElementById('secondP')
console.log(para2ById)

var para3ById = document.getElementById('thirdP')
console.log(para3ById)

var para4ById = document.getElementById('fourthP')
console.log(para4ById)

console.log('\n') //----------------------------------------------------

console.log("Getting all P as node list using querySelectorAll")

var PnodeListQuery = document.querySelectorAll('p')
console.log(PnodeListQuery)

console.log("Getting all p as node list using tagName")

var PnodeListTag = document.getElementsByTagName('p')
console.log(PnodeListTag)

console.log('\n') //----------------------------------------------------

console.log('Setting text content to paragraphs')

var firstPContent = document.querySelectorAll('p')[0]
firstPContent.innerHTML = '<i>First Paragraph</i>'
console.log(firstPContent.innerHTML)


var secondPContent = document.getElementById('secondP')
secondPContent.innerHTML = '<i>Second Paragraph</i>'
console.log(secondPContent.innerHTML)

var thirdPContent = document.getElementsByTagName('p')[2]
thirdPContent.innerHTML = '<i>Third Paragraph</i>'
console.log(thirdPContent)

var fourthPContent = document.querySelectorAll('p')[3]
fourthPContent.innerHTML = '<i>Fourth Paragraph</i>'
console.log(fourthPContent)

console.log('\n') //----------------------------------------------------

console.log('Set id and class attriute for all paragraphs')

para1ById.setAttribute('class','paragraphs') //  updated and  showed in HTML
para2ById.setAttribute('class','paragraphs')
para3ById.setAttribute('class','paragraphs')
para4ById.setAttribute('class','paragraphs')
// para4ById.class = 'paragraphs' // updated but didn't show in HTML 

console.log('\n') //----------------------------------------------------





div1.style.backgroundColor = "#222233"
div1.style.height = "580px"
div1.style.width = '650px'
div1.style.borderRadius = '20px'

div1.style.margin = "250px auto"


heading.style.textAlign =  'center'
heading.style.fontSize =  '50px'
heading.style.fontFamily =  'sans-serif'
heading.style.fontWeight =  '600'
// heading.style.textDecoration = 'underline'
// heading.style.border =  '35px' 
heading.style.paddingTop =  '35px'


for(paragraph of PnodeListQuery){
    paragraph.style.color = '#fff'
    paragraph.style.fontFamily = ''
    paragraph.style.fontSize = '50px'
    paragraph.style.fontWeight = '500'
    paragraph.style.textAlign = 'center'
    
    // paragraph.style.padding = '50px'
    // paragraph.style.margin = '0px'
    // paragraph.style.border = 'thick solid #fff'
    // paragraph.style.borderColor = 'white'
    // paragraph.style.backgroundColor = '#222233'
    // paragraph.style.marginTop = '50px'
    // paragraph.style.marginBottom = '50px'
}




setInterval(()=>{
    var r = Math.floor(Math.random()*56)+200
    var g = Math.floor(Math.random()*101)
    var b = Math.floor(Math.random()*81)+40

    console.log(r,g,b)

    div1.style.boxShadow = `0px 0px 50px rgb(${r},${g},${b})`

    heading.style.color =  `rgb(${r},${g},${b})`


},2000)