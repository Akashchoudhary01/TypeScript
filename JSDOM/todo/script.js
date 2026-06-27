const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

let USERS = [];

// READ
function Render() {
    list.innerHTML = "";

    USERS.forEach((user, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${user}
            <button onclick="EditTodo(${index})">Edit</button>
            <button onclick="DeleteTodo(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

// CREATE
function AddTodo() {

    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a todo.");
        return;
    }

    USERS.push(name);

    input.value = "";

    Render();
}

// UPDATE
function EditTodo(index) {

    const newName = prompt("Update Todo", USERS[index]);

    if (newName === null) return;

    if (newName.trim() === "") {
        alert("Todo cannot be empty.");
        return;
    }

    USERS[index] = newName.trim();

    Render();
}

// DELETE
function DeleteTodo(index) {

    const isDelete = confirm("Are you sure you want to delete this todo?");

    if (isDelete) {
        USERS.splice(index, 1);
        Render();
    }
}