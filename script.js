// Select DOM elements
const taskInput = document.getElementById('new-task');
const taskDate = document.getElementById('task-date');
const taskTime = document.getElementById('task-time');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const date = taskDate.value;
    const time = taskTime.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-title">${taskText}</span>
        <span class="task-details">
            ${date ? `Date: ${date}` : ''} ${time ? `| Time: ${time}` : ''}
        </span>
        <button class="delete-btn">&times;</button>
    `;

    // Mark task as completed on click
    li.addEventListener('click', function () {
        this.classList.toggle('completed');
    });

    // Delete task on button click
    li.querySelector('.delete-btn').addEventListener('click', function (e) {
        e.stopPropagation();
        li.remove();
    });

    // Append to list
    taskList.appendChild(li);

    // Clear inputs
    taskInput.value = '';
    taskDate.value = '';
    taskTime.value = '';
}

// Add event listeners
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') addTask();
});
