
// Array to store tasks
let tasks = [];

// DOM Elements
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const todoList = document.querySelector('#todoList');

// Function to display all tasks
function renderTasks() {
  todoList.innerHTML = ''; // Clear existing tasks
  tasks.forEach((task, index) => {
    // Create a task element
    const taskItem = `
      <li>
        <span>${task}</span>
        <div>
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>
      </li>
    `;
    todoList.innerHTML += taskItem; // Add task to the list
  });
}

// Add a new task
function addTask() {
  const newTask = taskInput.value.trim(); // Get input value
  if (newTask) {
    tasks.push(newTask); // Add task to the array
    taskInput.value = ''; // Clear input field
    renderTasks(); // Update the list
  }
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove task from the array
  renderTasks(); // Update the list
}

// Edit a task
function editTask(index) {
  const taskText = tasks[index];
  const listItem = todoList.children[index];

  // Replace task display with an input field and buttons
  listItem.innerHTML = `
    <input type="text" value="${taskText}" id="editInput${index}">
    <button onclick="saveTask(${index})">Save</button>
    <button onclick="renderTasks()">Cancel</button>
  `;
}

// Save the edited task
function saveTask(index) {
  const updatedTask = document.querySelector(`#editInput${index}`).value.trim();
  if (updatedTask) {
    tasks[index] = updatedTask; // Update the task in the array
    renderTasks(); // Update the list
  }
}

// Event Listeners
addTaskBtn.addEventListener('click', addTask);

// Initial rendering of tasks
renderTasks();
