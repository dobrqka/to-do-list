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
});

// module for deleting todos
// module for creating and deleting lists
// module for setting and changing the list of a todo
// module for changing todolist property values
// dom stuff - change between lists, design, etc.
