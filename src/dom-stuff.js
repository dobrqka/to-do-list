import { editToDo } from "./edit-todo";
import { listOfLists } from "./list-stuff";

export const domGeneration = () => {
  const addTodo = document.createElement("button");
  addTodo.textContent = "+";
  addTodo.classList.add("toDoButton");
  document.body.appendChild(addTodo);

  const newListButton = document.createElement("button");
  newListButton.textContent = "New List";
  newListButton.classList.add("new-list");
  document.body.appendChild(newListButton);
  const allListDivs = document.createElement("div");
  allListDivs.classList.add("all-lists");
  document.body.appendChild(allListDivs);

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
  });
};

export const showAllLists = () => {
  const allListDivs = document.querySelector(".all-lists");
  while (allListDivs.firstChild) {
    allListDivs.removeChild(allListDivs.firstChild);
  }

  listOfLists.forEach((list) => {
    const listDiv = document.createElement("div");
    const listButton = document.createElement("button");
    listButton.textContent = list.name;
    const deleteList = document.createElement("button");
    deleteList.textContent = "X";
    const renameList = document.createElement("button");
    renameList.textContent = "Edit";

    listButton.addEventListener("click", () => {
      showList(list.items);
      console.log(listOfLists);
    });

    deleteList.addEventListener("click", () => {
      listOfLists.splice(listOfLists.indexOf(list), 1);
      allListDivs.removeChild(listDiv);
      console.log(listOfLists);
    });

    renameList.addEventListener("click", () => {
      list.name = prompt("New name?");
      listButton.textContent = list.name;
      console.log(listOfLists);
    });

    listDiv.appendChild(listButton);
    listDiv.appendChild(renameList);
    listDiv.appendChild(deleteList);
    listDiv.style.display = "inline";

    allListDivs.appendChild(listDiv);
  });
};
