async function Greet(){
    // throw "some random error"
    return "hello"
}

Greet()
.then(resolve=>console.log(resolve))
.catch(reject=>console.log(reject))
