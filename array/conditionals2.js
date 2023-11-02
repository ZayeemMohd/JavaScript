//creating the role-action object
console.log('\n')

function checkPermission(userRole, action){

    var permissions = {
        admin: ['create','read','update'],
        user: ['read','update'],
        guest: ['read']
    };

    if(permissions[userRole]){
        if(permissions[userRole].includes(action)){
            console.log("Permission granted.")
        }
        else console.log('Permission Denied!')
    } else {console.log('invalid user role!?')}

}

console.log('check permission for: admin, create')
checkPermission('admin','create')

console.log('\n')

console.log('check permission for: user, update')
checkPermission('user','update')

console.log('\n')

console.log('check permission for: guest, create')
checkPermission('guest','create')

console.log('\n')

//discount of 10% if order above $50

function calDiscountPrice(orderVal){
    if (orderVal>=50){
       var discount = orderVal/10
       return orderVal-discount
    } else {
        console.log(`None since Order value is below $50 add more ${50-orderVal} dollor worth items to avail 10% discount`)
    }
}

console.log("--- Discount Calculator ---")

console.log('\n')

console.log("Order value: $75")
console.log('Discounted price is: '+calDiscountPrice(75)); 

console.log('\n')

console.log("Order value: $35")
console.log('Discounted price is: '); calDiscountPrice(35);

console.log('\n')
