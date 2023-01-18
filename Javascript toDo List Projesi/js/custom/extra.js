

const form = document.querySelector("#addTaskForm");

const input = document.querySelector("#txtTaskName");

const addBtn = document.querySelector("#btnAddNewTask");

const deleteAllBtn = document.querySelector("#btnDeleteAll");

const taskList = document.querySelector("#task-list");

//const items = ["Todo 1", "Todo 2", "Todo 3"];





let todos;

loadItems();

function loadItems() {

    todos = getItemsFromLocalStorage();

    todos.forEach(function (item) {
        createItem(item);
    });
}

function getItemsFromLocalStorage() {

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}

function setItemToLocalStorage(newTodo) {
    todos = getItemsFromLocalStorage();


    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}


function createItem(newTodo) {
    const li = document.createElement("li");

    li.className = "list-group-item list-group-item-secondary p-3";

    const h6 = document.createElement("h6");
    h6.className = "m-0 d-inline";
    h6.appendChild(document.createTextNode(newTodo));
    li.appendChild(h6);

    const a = document.createElement("a");
    a.className = "delete-item float-end text-white";
    a.setAttribute("href", "#");

    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);

    taskList.appendChild(li);

    


}

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addNewItem);
    taskList.addEventListener("click", deleteItem);

    deleteAllBtn.addEventListener("click", deleteAllItems);
}


function addNewItem(e) {

    if (input.value === "") {
        alert("add new item");
    } else {
        setItemToLocalStorage(input.value);
        createItem(input.value);


    }

    input.value = "";
    e.preventDefault();

}

function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (window.confirm("Silmek istediğinize emin misiniz?")) {
            e.target.parentElement.parentElement.remove();

            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }
    }

    e.preventDefault();

}


function deleteTodoFromStorage(deleteTodo){

    todos = getItemsFromLocalStorage();

    
    todos.forEach(function(todo,index){
        if(todo==deleteTodo){
            todos.splice(index,1);

        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteAllItems(e) {

    if (window.confirm("Silmek istediğinize emin misiniz?")) {
        // taskList.childNodes.forEach(function (item) {
        //     if (item.nodeType === 1) {
        //         item.remove();
        //     }
        // });

        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    e.preventDefault();
}
