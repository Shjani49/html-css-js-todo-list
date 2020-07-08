// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");
// <p id="error-output"></p>
const error = document.querySelector("#error-output");
let itemArray = [];


// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterTodo);

//Functions
function addTodo(event)
{
    // Keep track of if the current submission has an error.
    let errors = false;

    // If the input is empty.
    if (todoInput.value.trim() === "")
    {
        error.innerText = "Sorry, please ensure you enter an item before attempting to add it.";
        errors = true;
    }
    // If the input already exists.
    if (itemArray.includes(todoInput.value.trim().toLowerCase()))
    {
        error.innerText = "Sorry, please ensure that the item you have entered is not already on your list.";
        errors = true;
    }
    
    // Prevent Empty List Items (Including Whitespace) and Prevent Duplicate List Items (Case Insensitive)
    if (!errors)
    {
        // Clear any errors from previous submissions if this one is valid.
        error.innerText = "";


    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    //Clicking on a "Submit" button, prevent it from submitting a form
    event.preventDefault();
    // Create <div class = "todo"> new Element
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li Element
    //<li></li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value.trim().toLowerCase(); // Grab the Todo Input value 
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
    // Clear Todo Input value
    todoInput.value = "";

    // Reset Focus To Input After Adding
    input.focus();
    }
    
}

function deleteCheck(e)
{
    const item = e.target;
    //Delete ToDo
    if(item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e)
{
    const todos = todoList.childNodes;
    //console.log(todos);
    // using forEach loops we can access individuals todo
    todos.forEach(function(todos){
        switch(e.target.value){
            case "all":
                todos.style.display = "flex"; // shows all completed and uncompleted todos 
                // I use here flex instead of box because i already set display flex for button..
                // If use box then my completed and trash button would be underneath the text..
                break;
            case "completed":
                if(todos.classList.contains("completed")) // check if we have class of completed or not
                {
                    todos.style.display = "flex"; // shows completed todos
                }
                else
                {
                    todos.style.display = "none";
                }
                break;
            case "active":
                if(!todos.classList.contains("completed")) // check the class don't contain completed todos
                {
                    todos.style.display = "flex"; 
                }
                else
                {
                    todos.style.display = "none";
                }
                break;
            
        }

    });
}
