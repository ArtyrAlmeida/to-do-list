const addInput      = document.querySelector("#add-input"),
      addButton     = document.querySelector("#add-button"),
      taskList      = document.querySelector(".task-list"),
      pendingList   = document.querySelector("#pending"),
      completedList = document.querySelector("#completed"),
      viewButton    = document.querySelector("#view-lists");

let pendingTasks    = Array.from(document.querySelectorAll("#pending .task")),
    completedTasks  = Array.from(document.querySelectorAll("#completed .task")),
    pendingInputs   = Array.from(document.querySelectorAll("#pending .task input")),
    completedInputs = Array.from(document.querySelectorAll("#completed .task input"));
    
addInputsEvents(pendingInputs);
addInputsEvents(completedInputs);

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
    pendingInputs = Array.from(document.querySelectorAll("#pending .task input"));
    addInputsEvents(pendingInputs);
}

function manageTask () {
    
    pendingInputs.forEach(input => {
        if(input.checked) {
            console.log("Checado");
            let index = pendingInputs.indexOf(input);
            console.log(pendingTasks[index]);
            completedTasks.push(pendingTasks[index]);
            pendingTasks.splice(index, 1);
        }
    });

    completedInputs.forEach(input => {
        if (!(input.checked)){
            console.log("Nao checado");
            let index = completedInputs.indexOf(input);
            console.log(index);
            pendingTasks.push(completedTasks[index]);
            completedTasks.splice(index, 1);
        }
    })

    updateList(pendingTasks, pendingList);
    updateList(completedTasks, completedList);

    pendingInputs = Array.from(document.querySelectorAll("#pending .task input"));
    completedInputs = Array.from(document.querySelectorAll("#completed .task input"));
    addInputsEvents(pendingInputs);
    addInputsEvents(completedInputs);
}

function updateList (listArray, taskList) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
      }

    for(let i = 0; i < listArray.length; i++) {
        taskList.appendChild(listArray[i]);
    }
}

function addInputsEvents (inputsList) {
    inputsList.forEach((checkbox) => {
        checkbox.removeEventListener("click", manageTask);
    })

    inputsList.forEach((checkbox) => {
        checkbox.addEventListener("click", manageTask);
    });
}