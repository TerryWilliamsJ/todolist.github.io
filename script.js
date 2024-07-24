document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskDateInput = document.getElementById('task-date');
    const taskList = document.getElementById('task-list');

    // Initialize the date picker
    flatpickr(taskDateInput, {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const taskDate = taskDateInput.value.trim();
        if (taskText !== '') {
            addTask(taskText, taskDate);
            taskInput.value = '';
            taskDateInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    function addTask(taskText, taskDate) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span><span>${taskDate}</span>`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
