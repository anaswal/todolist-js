const newTodo = document.getElementById("new-todo");
const addbuton = document.getElementById("add-button");
const todoTable = document.getElementById("todo-table");

const todoLists = [];

function clearTodolist() {
  while (todoTable.firstChild) {
    todoTable.removeChild(todoTable.firstChild);
  }
}

function displayTodolist() {
  clearTodolist();

  for (const todo of todoLists) {
    const tr = document.createElement("tr");

    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    todoTable.appendChild(tr);
  }
}

document.forms["todo-form"].onsubmit = (event) => {
  todoLists.push(newTodo.value);
  console.log(todoLists);
  displayTodolist();

  newTodo.value = "";
  event.preventDefault();
};
