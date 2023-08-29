import "./styles.css";
import { addItem, createList, listOfLists } from "./list-stuff";
import { todoForm } from "./addTodo";
import { domGeneration, showList, showAllLists } from "./dom-stuff";
import { todoX } from "./removeToDo";

domGeneration();

document.querySelector(".toDoButton").addEventListener("click", () => {
  const defaultList = addItem(todoForm());
  showList(defaultList.items);
  todoX(defaultList.items);
  console.log(defaultList.items);

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

// module for setting and changing the list of a todo
// dom stuff - design and details
