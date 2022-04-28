const inputEl = document.getElementById('input')
const todosUl = document.getElementById('todos')
const formEl = document.getElementById('form')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
  todos.forEach((todo) => addTodo(todo))
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo()
})

function addTodo(todo) {
  let todoText = inputEl.value
  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLs()
    })
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoEl.remove()
      updateLs()
    })
    todosUl.appendChild(todoEl)
    updateLs()
    inputEl.value = ''
  }
}

function updateLs() {
  todoEl = document.querySelectorAll('li')
  const todos = []
  todoEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    })
  })
  localStorage.setItem('todos', JSON.stringify(todos))
}
