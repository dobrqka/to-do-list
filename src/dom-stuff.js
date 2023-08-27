import { editToDo } from "./edit-todo";

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
  toDoList.textContent = "Todos: ";
  aList.forEach((item) => {
    const newDom = document.createElement("div");
    newDom.classList.add(".todos");

    const nameDiv = document.createElement("div");
    nameDiv.textContent = item.name;
    nameDiv.classList.add("name-prop");
    nameDiv.addEventListener("click", () => {
      editToDo(nameDiv, item);
    });
    newDom.appendChild(nameDiv);

    const dueDateDiv = document.createElement("div");
    dueDateDiv.textContent = item.dueDate;
    dueDateDiv.classList.add("date-prop");
    dueDateDiv.addEventListener("click", () => {
      editToDo(dueDateDiv, item);
    });
    newDom.appendChild(dueDateDiv);

    const priorityDiv = document.createElement("div");
    priorityDiv.textContent = item.priority;
    priorityDiv.classList.add("priority-prop");
    priorityDiv.addEventListener("click", () => {
      editToDo(priorityDiv, item);
    });
    newDom.appendChild(priorityDiv);

    const notesDiv = document.createElement("div");
    notesDiv.textContent = item.notes;
    notesDiv.classList.add("notes-prop");
    notesDiv.addEventListener("click", () => {
      editToDo(notesDiv, item);
    });
    newDom.appendChild(notesDiv);

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.setAttribute("data-index", aList.indexOf(item));
    delButton.classList.add("delete-todo");
    newDom.appendChild(delButton);
    toDoList.appendChild(newDom);

    // const toDoProps = document.querySelectorAll(".todo-prop");
    // toDoProps.forEach((prop) => {
    //   prop.addEventListener("click", () => {
    //     const editProp = document.createElement("input");
    //     editProp.setAttribute("type", "text");
    //     editProp.value = prop.textContent;
    //     prop.parentElement.replaceChild(editProp, prop);
    //     editProp.addEventListener("blur", () => {
    //       const newProp = document.createElement("div");
    //       newProp.textContent = editProp.value;
    //       editProp.parentElement.replaceChild(newProp, editProp);
    //       console.log(item);
    //     });
    //   });
    // });
  });
};
