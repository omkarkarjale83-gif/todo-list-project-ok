const taskinput = document.getElementById('taskInput');
const addButton = document.getElementById('addTaskBtn');
const tasklist = document.getElementById('taskList');

addButton.addEventListener('click', function () {

    const tasktext = taskinput.value.trim();

    if (tasktext === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.className = 'task';

    li.innerHTML = `
        <span class="task-text">${tasktext}</span>
        <button class="completeBtn">Complete</button>
        <button class="deleteBtn">Delete</button>
    `;

    tasklist.appendChild(li);

    taskinput.value = '';

    const completeBtn = li.querySelector('.completeBtn');
    const deleteBtn = li.querySelector('.deleteBtn');

    completeBtn.addEventListener('click', function () {
        li.querySelector('.task-text').classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

});