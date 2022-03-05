const addInput      = document.querySelector("#add-input");
const addButton     = document.querySelector("#add-button");
const taskList      = document.querySelector(".task-list");
const pendingList   = document.querySelector("#pending")
const completedList = document.querySelector("#completed")

let pendingTasks   = Array.from(document.querySelectorAll("#pending .task"));
let completedTasks = Array.from(document.querySelectorAll("#completed .task"));

addButton.addEventListener("click", createTask);

function createTask() {
    let newTask    = document.createElement("div");
    let taskCheck  = document.createElement("input");
    taskCheck.type = "checkbox";
    let taskText   = document.createElement("span");

    taskText.textContent = addInput.value;
    newTask.classList.add("task");
    newTask.appendChild(taskCheck);
    newTask.appendChild(taskText);

    pendingTasks.push(newTask);
    
    updateList(pendingTasks, pendingList);
}

function updateList (listArray, taskList) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
      }

    for(let i = 0; i < listArray.length; i++) {
        taskList.appendChild(listArray[i]);
    }
}