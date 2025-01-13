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

