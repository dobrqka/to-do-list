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

export const theList = (aList) => {
  const toDoList = document.querySelector(".list");
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
  aList.forEach((item) => {
    const newDom = document.createElement("div");
    newDom.textContent = item.name;
    toDoList.appendChild(newDom);
  });
};
