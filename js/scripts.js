// selectors
var todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");
const todoSpan = document.querySelector(".todo-span");
// <p id="error-output"></p>
const error = document.querySelector("#error-output");
var editButton = document.querySelector('.todo-edit');
//const dateTime = document.querySelector("#date");
// Running list of all our items.
let itemArray = [];
var tab = [], index, 
items = document.querySelectorAll("ul#list todo-list");

    // get the selected li index using array
        // populate array with li values

        for (var i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML);
        }

        // get li index onclick
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener("click", () =>  {

                index = tab.indexOf(this.innerHTML);
                console.log(this.innerHTML + "Index = " + index);
                //set the selected li value into input text
                todoInput.value = this.innerHTML;

            });
        }





// Event Listeners
todoButton.addEventListener("click", addTodo);
//todoButton.addEventListener("click", addDateTime);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterTodo);
//editButton.addEventListener("click", editTodo);




//Functions
function addTodo(event) {
    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    //Clicking on a "Submit" button, prevent it from submitting a form
    event.preventDefault();
    // Keep track of if the current submission has an error.
    let errors = false;

    // If the input is empty.
    if (todoInput.value.trim() === "") {
        error.innerText = "Sorry, please ensure you enter an item before attempting to add it.";
        errors = true;
    }
    // If the input already exists.
    if (itemArray.includes(todoInput.value.trim().toLowerCase())) {
        error.innerText = "Sorry, please ensure that the item you have entered is not already on your list.";
        errors = true;
    }

    // Prevent Empty List Items (Including Whitespace) and Prevent Duplicate List Items (Case Insensitive)
    if (!errors) {
        // Clear any errors from previous submissions if this one is valid.
        error.innerText = "";

        // Create <div class = "todo"> new Element
        //Todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        //Create li Element
        //<li></li>
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value.trim().toLowerCase(); // Grab the Todo Input value 
        newTodo.classList.add('todo-item');
        itemArray.push(todoInput.value.trim().toLowerCase());
        todoDiv.appendChild(newTodo);

        // Create span element for date and time 
        // fetch the current date and time...
        // @ Link : https://www.toptal.com/software/definitive-guide-to-datetime-manipulation#:~:text=Getting%20the%20Current%20Timestamp,passed%20since%20January%201%2C%201970 
        const newSpan = document.createElement('span');
        var start = new Date();
        newSpan.innerText = start.toLocaleString();
        newSpan.classList.add('todo-span');
        todoDiv.appendChild(newSpan);
        

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

        const editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add("edit-btn");
        todoDiv.appendChild(editButton);

        

        // Append to List
        //</div>
        todoList.appendChild(todoDiv);
        // Clear Todo Input value
        todoInput.value = "";

        // Reset Focus To Input After Adding
        todoInput.focus();

    }

}

function editTodo(e)
{
    }
function deleteCheck(e) {

    const item = e.target;
    //Delete ToDo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "complete-btn") {

        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }


}


function filterTodo(e) {

    const todos = todoList.childNodes;
    //console.log(todos);
    // using forEach loops we can access individuals todo
    todos.forEach(function (todos) {
        switch (e.target.value) {
            case "all":
                todos.style.display = "flex"; // shows all completed and uncompleted todos 
                // I use here flex instead of box because i already set display flex for button..
                // If use box then my completed and trash button would be underneath the text..
                break;
            case "completed":
                if (todos.classList.contains("completed")) // check if we have class of completed or not
                {
                    todos.style.display = "flex"; // shows completed todos
                }
                else {
                    todos.style.display = "none";
                }
                break;
            case "active":
                if (!todos.classList.contains("completed")) // check the class don't contain completed todos
                {
                    todos.style.display = "flex"; // show Active Todos

                }
                else {
                    todos.style.display = "none";
                }
                break;

        }

    });
}
/* try to hide the input when someone selects "completed" and "active"*/
/* using jQuery here we use id of element and check with user value...If user select "completed" or "active" then other activity is hide for user.*/
/* @Link : https://www.solodev.com/blog/web-design/how-to-hide-form-fields-based-upon-user-selection.stml */
$("#select").change(function () {
    if (($(this).val() == "completed") || ($(this).val() == "active")) {
        $('#input').hide();
        $('#button').hide();
        $('#error-output').hide();

    }
    else {
        $('input').show();
        $('#button').show();
        $('#error-output').show();

    }
});
$("#select").trigger("change");







/* For the White Space logic I learned from James Shopping list example */
/* I Watched few tutorials for javascript in you tube before I made this application. */
