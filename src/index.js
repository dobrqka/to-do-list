import "./styles.css";
import { addItem, createList, listOfLists, addToList } from "./list-stuff";
import { todoForm, setPriority } from "./addTodo";
import {
  domGeneration,
  showList,
  showAllLists,
  setList,
  listGeneration,
  newToDoModal,
} from "./dom-stuff";
import { removeToDo } from "./removeToDo";

domGeneration();

document.querySelector(".toDoButton").addEventListener("click", () => {
  newToDoModal();

  // const testButton = document.createElement("button");
  // testButton.textContent = "Test";
  // testButton.addEventListener("click", () => {
  //   console.log(listOfLists);
  // });
  // document.body.appendChild(testButton);
});

document.querySelector(".new-list").addEventListener("click", () => {
  const newList = createList(prompt("Name of list?"));
  newList.addList();
  showAllLists();
  console.log(listOfLists);
});

// module for changing the list of a todo
// dom stuff - design and details
