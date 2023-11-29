
let addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click',()=>{
    let title = document.querySelector('#title');
    let desc = document.querySelector('#description');
    let body = document.querySelector('body')

    let newTitle = document.createElement('input');
    newTitle.classList.add("newTitles");
    newTitle.setAttribute('name','newTitles')
    newTitle.setAttribute('readonly','readonly')

    let newDesc = document.createElement('input');
    newDesc.classList.add("newDescs");
    newDesc.setAttribute('name','newDescs')
    newDesc.setAttribute('readonly','readonly')

    let edit = document.createElement('button');
    let save = document.createElement('button');
    let div = document.createElement('div')

    body.appendChild(div);
    div.append(newTitle);
    div.append(newDesc);
    div.append(edit);
    div.append(save);

    newTitle.value = title.value
    newDesc.value = desc.value
    edit.innerText = 'edit';
    save.innerText = 'save';

    title.value = '';
    desc.value = '';
})

