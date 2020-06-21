//variables for all the buttons and taskleft
var addButton = document.getElementById("add-item");
var ul = document.getElementById("todo-list-items");
var tasksLeft = document.querySelector("#task-left b");

//add click events to perform tasks
addButton.addEventListener("click", addTodoToList);
ul.addEventListener("click", removeTodoFromList);

// function for adding item to the list
function addTodoToList() {
  // receive text value from the input box
  var val = document.getElementById("todo-data");

  //check if input box is empty
  if (val.value != "") {
    //create li element to add text from input
    var todoItem = document.createElement("li");
    //add html content to list item
    var liContent = `<span>${val.value}</span> <button class="unchecked"><i class="far fa-check-square"></i></button> <button class="remove-button"><i class="far fa-trash-alt"></i></button>`;
    // set html of the li
    todoItem.innerHTML = liContent;

    //append the li to the ul
    ul.appendChild(todoItem);

    //keep count of tasks
    tasksLeft.innerText++;

    //  set input box to empty string
    val.value = "";
  }
}

//function for completely removing item from the list
function removeTodoFromList(e) {
  //get the target item
  var item = e.target;

  //   if the target item is trash button then remove Element
  if (item.getAttribute("class") === "remove-button") {
    item.parentElement.remove();
    tasksLeft.innerText--;
  }

  //if the target button is selecting task button, then check or uncheck it as per the current set class
  if (item.getAttribute("class") === "unchecked") {
    //toggle with class
    item.classList.remove("unchecked");
    item.classList.add("checked");

    //style the list item different from other items in the list
    item.style.background = "rgb(0, 128, 58)";
    item.parentElement.style.textDecoration = "line-through";
    item.parentElement.style.color = "rgba(128, 128, 128, 0.780)";
  } else if (item.getAttribute("class") === "checked") {
    //   toggle with class
    item.classList.remove("checked");
    item.classList.add("unchecked");

    //unset the styling
    item.style.background = "rgb(0, 132, 255)";
    item.parentElement.style.textDecoration = "unset";
    item.parentElement.style.color = "unset";
  }
}
