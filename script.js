const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearTasksBtn = document.getElementById("clearTasksBtn");

addTaskBtn.addEventListener("click", addTask);

clearTasksBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    updateTaskCount();
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    taskSpan.textContent = taskText;
    deleteBtn.textContent = "Delete";

    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    updateTaskCount();
}

function updateTaskCount() {
    taskCount.textContent = "Tasks: " + taskList.children.length;
}