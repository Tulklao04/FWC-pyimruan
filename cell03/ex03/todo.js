const ftList = document.getElementById("ft_list");

function getTodosFromCookie() {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, value] = c.split("=");
        if (key === "todos" && value) {
            try {
                return JSON.parse(decodeURIComponent(value));
            } catch (e) {
                return [];
            }
        }
    }
    return [];
}

function saveTodosToCookie() {
    const items = [];
    const elements = ftList.querySelectorAll(".todo-item");
    elements.forEach(el => items.push(el.textContent));
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(items)) + "; path=/; max-age=31536000";
}

function addTodo(text, save = true) {
    const div = document.createElement("div");
    div.className = "todo-item";
    div.textContent = text;

    div.addEventListener("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            div.remove();
            saveTodosToCookie();
        }
    });

    ftList.prepend(div);
    if (save) {
        saveTodosToCookie();
    }
}

function createTodo() {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
        addTodo(text.trim(), true);
    }
}

window.onload = function () {
    const savedTodos = getTodosFromCookie();
    for (let i = savedTodos.length - 1; i >= 0; i--) {
        addTodo(savedTodos[i], false);
    }
};
