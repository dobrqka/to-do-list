import "./styles.css";
import { addItem } from "./list-stuff";
import { todoForm } from "./addTodo";
import { domGeneration, showList } from "./dom-stuff";
import { todoX } from "./removeToDo";

domGeneration();

document.querySelector(".toDoButton").addEventListener("click", () => {
  const defaultList = addItem(todoForm());
  showList(defaultList.items);
  todoX(defaultList.items);
  console.log(defaultList.items);

  const testButton = document.createElement("button");
  testButton.textContent = "Test";
  testButton.addEventListener("click", () => {
    console.log(defaultList.items[0]);
  });
  document.body.appendChild(testButton);
});

// fix errors when editing elements, bug with display attribute, and generation
// of a large amount of new inputs
//
// module for creating and deleting lists
// module for setting and changing the list of a todo
// dom stuff - change between lists, design, etc.
