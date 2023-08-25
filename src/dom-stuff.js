export const domGeneration = () => {
  const addTodo = document.createElement("button");
  addTodo.textContent = "+";
  addTodo.classList.add("toDoButton");
  document.body.appendChild(addTodo);

  const toDoList = document.createElement("div");
  toDoList.textContent = "Todos: ";
  toDoList.classList.add("list");
  document.body.appendChild(toDoList);
};

export const showList = (aList) => {
  const toDoList = document.querySelector(".list");
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
  aList.forEach((item) => {
    const newDom = document.createElement("div");
    newDom.textContent = item.name;
    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.setAttribute("data-index", aList.indexOf(item));
    delButton.classList.add("delete-todo");
    newDom.appendChild(delButton);
    toDoList.appendChild(newDom);
  });
};
