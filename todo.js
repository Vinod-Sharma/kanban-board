const btn = document.getElementById("todo-button");
const inputField = document.getElementById("todo-input");
const todoContainer = document.getElementById("todo-board");

btn.addEventListener("click", (e) => {
  const value = inputField.value;

  if (value.trim()) {
    const p = document.createElement("p");
    p.setAttribute("draggable", "true");
    p.classList.add("tasks");
    p.innerText = value;

    attachDragListner(p);

    todoContainer.appendChild(p);
  }

  inputField.value = "";
});
