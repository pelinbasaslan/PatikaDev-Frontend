// Add this at the beginning of the file
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Load saved todos when page loads
document.addEventListener('DOMContentLoaded', () => {
    todos.forEach(todo => {
        createTodoElement(todo);
    });
});

// Modify the newElement function
function newElement() {
    var inputValue = document.getElementById("task").value;

    if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
        $(".error").toast("show");
        return;
    }

    // Create todo object
    const todo = {
        text: inputValue,
        completed: false
    };

    // Add to todos array
    todos.push(todo);

    // Save to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // Create UI element
    createTodoElement(todo);

    // Clear input
    document.getElementById("task").value = "";
    $(".success").toast("show");
}

// Add this new function to handle creating todo elements
function createTodoElement(todo) {
    var li = document.createElement("li");
    var t = document.createTextNode(todo.text);
    li.appendChild(t);

    if (todo.completed) {
        li.classList.add("checked");
    }

    document.getElementById("list").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Modify click handler to update localStorage
    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        const text = div.textContent.slice(0, -1); // Remove × symbol
        todos = todos.filter(t => t.text !== text);
        localStorage.setItem('todos', JSON.stringify(todos));
    };
}

// Modify the list click event to update completed status
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        const text = ev.target.textContent.slice(0, -1); // Remove × symbol
        const todo = todos.find(t => t.text === text);
        if (todo) {
            todo.completed = !todo.completed;
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }
}, false);