let input = document.getElementById('input')
let btn = document.getElementById('add')
let list = document.getElementById('Todo')

let todos = []
window.onload =()=>{
    todos = JSON.parse(localStorage.getItem('todos'))
    todos.forEach(todo=>addList(todo))
}

btn.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addList(input.value)
    input.value = ''
})

function addList(todo){
    let para = document.createElement('p')
    para.innerHTML = todo
    list.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        para.style.textDecorationColor = '#ff0134'
        removeList(todo)
    })
    para.addEventListener('dblclick',()=>{
        list.removeChild(para)
        removeList(todo)
    })
}

function removeList(todo){
    let index = todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}