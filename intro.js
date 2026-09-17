function addTask() {
    const task=document.getElementById('task').value;


    if(task=="")
    {
        alert("Please enter a task");
        return;
    }


    document.getElementById("taskList").innerHTML +=
    `
    <div class="task">
        <span>${task}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    </div>
    `;
    document.getElementById('task').value="";


}


function completeTask(button) {
    const task=button.parentElement;
    task.style.background="green";
    task.style.textDecoration="line-through";
}


function deleteTask(button) {
    button.parentElement.remove();
}


