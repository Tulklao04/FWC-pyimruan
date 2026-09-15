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
    $("#ft_list .todo-item").each(function() {
        items.push($(this).text());
    });
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(items)) + "; path=/; max-age=31536000";
}

function addTodo(text, save = true) {
    const $div = $("<div></div>")
        .addClass("todo-item")
        .text(text);

    $div.click(function() {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTodosToCookie();
        }
    });

    $("#ft_list").prepend($div);
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

$(document).ready(function() {
    const savedTodos = getTodosFromCookie();
    for (let i = savedTodos.length - 1; i >= 0; i--) {
        addTodo(savedTodos[i], false);
    }
});
