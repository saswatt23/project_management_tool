function addTask() {
    event.preventDefault();

    var Name = document.getElementById("name").value;
    var taskName = document.getElementById("tname").value;
    var taskDescription = document.getElementById("tdesc").value;

    // Basic form validation to ensure all fields are filled
    if (!Name || !taskName || !taskDescription) {
        alert("Please fill in all fields before adding the task.");
        return;
    }

    var taskElement = document.createElement("table");
    taskElement.className = "task";

    var taskContent = `
        <tr>
            <th>User Name </th>
            <th>Task Name </th>
            <th>Task Description</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>${Name}</td>
            <td>${taskName}</td>
            <td>${taskDescription}</td>
            <td>
                <select>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </td>
            <td><input type="datetime-local" id="due-date"></td>
            <td><button class="delete-task">Done</button></td>
        </tr>
    `;

    taskElement.innerHTML = taskContent;

    var taskList = document.getElementById("task-list");
    taskList.appendChild(taskElement);

    document.getElementById("form").reset();

    var deleteButton = taskElement.getElementsByClassName("delete-task")[0];
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskElement);
        updateTaskCounter();
    });

    updateTaskCounter();
}

function updateTaskCounter() {
    var taskList = document.getElementById("task-list");
    var taskCount = taskList.getElementsByClassName("task").length;
    var taskCounterElement = document.getElementById("task-counter");
    taskCounterElement.innerText = `Pending Tasks (${taskCount})`;
}

document.getElementById("form").addEventListener("submit", addTask);