// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


// Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event)
{
    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    //Clicking on a "Submit" button, prevent it from submitting a form
    event.preventDefault();
    // Create <div class = "todo">
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    //<li></li>
    const newTodo = document.createElement('li');
    newTodo.ineerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Completed button
    //<button></button>
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    //append button to div 
    todoDiv.appendChild(completedButton);
    // Trash Button 
    //<button></button>
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    //append button to div 
    todoDiv.appendChild(trashButton);

    // Append to List
    //</div>
    todoList.appendChild(todoDiv);
}