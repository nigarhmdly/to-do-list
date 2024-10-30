function addTodo() {
    const input = document.getElementById("todoinput");
    const todoText = input.value.trim();
    const todoList = document.getElementById("todolist");

    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        todoList.removeChild(todoItem);
    };

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    input.value = "";
}
