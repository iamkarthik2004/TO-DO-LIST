function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${taskText}</span>
    <button class="remove-btn" onclick="removeTask(this)">Remove</button>
  `;

  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear input field
}

function removeTask(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
