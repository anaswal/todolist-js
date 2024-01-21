const newTodo = document.getElementById("new-todo");
const addbuton = document.getElementById("add-button");
const todoTable = document.getElementById("todo-table");
const searchEvent = document.getElementById("search");

const todoLists = [];

function clearTodolist() {
  while (todoTable.firstChild) {
    todoTable.removeChild(todoTable.firstChild);
  }
}

function removeTodo(index) {
  todoLists.splice(index, 1);
  displayTodolist();
}

function addTodoList(index, todo) {
  const tr = document.createElement("tr");

  const tdButton = document.createElement("td");
  const buttonDone = document.createElement("button");
  buttonDone.textContent = "Done";
  buttonDone.onclick = () => removeTodo(index);
  tdButton.appendChild(buttonDone);
  tr.appendChild(tdButton);

  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);

  todoTable.appendChild(tr);
}

function displayTodolist() {
  clearTodolist();

  for (let i = 0; i < todoLists.length; i++) {
    const todo = todoLists[i];
    const search = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(search)) {
      addTodoList(i, todo);
    }
  }
}

document.forms["todo-form"].onsubmit = (event) => {
  todoLists.push(newTodo.value);

  displayTodolist();

  newTodo.value = "";
  event.preventDefault();
};

searchEvent.onkeydown = () => displayTodolist();
searchEvent.onkeyup = () => displayTodolist();
