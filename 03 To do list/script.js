let taskInput = document.getElementById("new-task");
let addButton = document.getElementsByTagName("button")[0];
let tasks = document.getElementById("tasks");

let addTask = () => {
  let listItem = createNewTaskElement(taskInput.value);
  tasks.appendChild(listItem);
  bindTaskEvents(listItem);
  taskInput.value = "";
}

let deleteTask =  function () {
  	let listItem = this.parentNode;
  	let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindTaskEvents = (taskListItem) => {
    let deleteButton = taskListItem.querySelector("button.delete");
 		deleteButton.onclick = deleteTask;
}

let createNewTaskElement = (taskString) => {
  let listItem = document.createElement("li");
  let label = document.createElement("label");
  let deleteButton = document.createElement("button");
  
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

	return listItem;
}

addButton.addEventListener("click", addTask); 

for (const i = 0; i < tasks.children.length; i ++) {
  bindTaskEvents(tasks.children[i]);
}
