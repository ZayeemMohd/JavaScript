window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const input1 = document.querySelector("#new-description-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		const task1 = input1.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

//attribute 

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';

        

		task_input_el.value = `${task.toUpperCase()}: ${task1}`; 
        // task_input_el.innerHTML = `${task.bold()}: ${task1}`;

		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

//action buttons

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);


//re-empty
		
		input1.value = '';
		input.value = '';


		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});



// let title = document.querySelector('#title')
// let description = document.querySelector('#description')
// let addTaskBtn = document.querySelector('#addBtn')

// let outerDiv = document.querySelector('#outerDiv')

// let listTasks = [];

// addTaskBtn.addEventListener('click',function(events){

//     let titleVal = title.value;
//     let discVal = description.value;

//     let objInps = {'Title': titleVal, 'Description': discVal}

//     listTasks.push(objInps)

//     title.value = ''
//     description.value = ''

//     // let innerDiv = document.createElement('div')
//     // innerDiv.setAttribute('class','innerDiv')
//     // outerDiv.appendChild(innerDiv)

//     displayItems()

// })


// function displayItems(){
//     let items = listTasks.map(function(e){

//     let elem = `<h1>${e.Title}</h1> <h3>${e.Description}</h3>`
//     return elem
//         })


//         outerDiv.innerHTML = items.join('')
//     }



// // let title = document.querySelector('#title')
// // let description = document.querySelector('#description')
// // let addBtn = document.querySelector('#addBtn')
// // // let ul = document.querySelector('ul')
// // let outerDiv = document.querySelector('#outerDiv')

// // let listVals = []

// // for(i=0; i<listVals.length; i++){
// //     let innerDiv = document.createElement('div')
// //     innerDiv.setAttribute('class',`innerDiv${i}`)
// //     outerDiv.appendChild(innerDiv)
// //     console.log(innerDiv)
// // }


// // addBtn.addEventListener('click',function(events){

// //     let titleVal = title.value;
// //     let descVal = description.value;

// //     let objInps = {"titleVal": titleVal, "descVal" : descVal}
// //     listVals.push(objInps)
// //     console.log(listVals)


// // title.value = ""
// // description.value = ""

// // displayItems();

// // })


// // function displayItems(){
// //     let items = listVals.map(function(e){
// //         let elem = `<h1>${e.titleVal}</h1> <h3>${e.descVal}</h3>`
// //         return elem
// //     })


// // // console.log(items)
// //     outerDiv.innerHTML = items.join(',')
// // }