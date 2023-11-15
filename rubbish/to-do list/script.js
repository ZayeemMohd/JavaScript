let tasks = [];

let operation = prompt("enter the operation you want to perform 1.add 2.delete 3.seeList 4.quit")

while(operation!="4"){
switch(operation){

    case "1" : tasks.push(prompt('enter the task you want to add')); alert('task added successfully!'); operation = prompt("enter the operation you want to perform 1.add 2.delete 3.seeList 4.quit")
        break;

    case "2" : let deleteItem = prompt('enter the task you want to delete');  tasks.splice(tasks.indexOf(deleteItem),1); alert("task deleted successfully!"); operation = prompt("enter the operation you want to perform 1.add 2.delete 3.seeList 4.quit");
        break; 

    case "3" : alert(`To-do list is:${tasks}`); operation = prompt("enter the operation you want to perform 1.add 2.delete 3.seeList 4.quit")
        break;
    
    default:
        alert('wrong operation You must choose from 1,2,3,4'); operation = prompt("enter the operation you want to perform 1.add 2.delete 3.seeList 4.quit")
        break;
}
}