import todo, { addTodoBtn, selectOption, todoList } from "./TodoList.js";

addTodoBtn.addEventListener("click", (event) => todo.makeTodo(event));
todoList.addEventListener("click", (event) => todo.todoControl(event));
selectOption.addEventListener("change", (event) => todo.filterTodo(event));
document.addEventListener("DOMContentLoaded", todo.DOMTodos());
