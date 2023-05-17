import { Todo } from "./TodoList.js";

// Local Storage Class :

class LocalStorage {
  static saveTodoLocal(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  static getTodosLocal() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  static deleteTodoLocal(id, todos) {
    todos = todos.filter((todo) => todo.id != id);

    LocalStorage.saveTodoLocal(todos);
  }

  static checkTodoLocal(todoTitle, todoTag, todos) {
    if (todoTag.classList.contains("check-opacity")) {
      const textTodo = todoTitle.textContent;

      const todo = todos.find((todo) => todo.text === textTodo);

      todo.checked = true;

      LocalStorage.saveTodoLocal(todos);
    } else {
      const textTodo = todoTitle.textContent;

      const todo = todos.find((todo) => todo.text === textTodo);

      todo.checked = false;

      LocalStorage.saveTodoLocal(todos);
    }
  }

  static editTodoLocal(inputEdit, todoTitle, todos) {
    const todo = todos.find((todo) => todo.text === todoTitle.textContent);

    todo.text = inputEdit.value;

    LocalStorage.saveTodoLocal(todos);

    todoTitle.innerHTML = inputEdit.value;

    // Remove modal :
    Todo.removeEditModal(inputEdit);
  }
}

export default LocalStorage;
