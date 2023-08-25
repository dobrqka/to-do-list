import "./styles.css";
import { newList, setDefault } from "./new-list";
import { todoForm } from "./addTodo";
import { domGeneration, theList } from "./dom-stuff";

domGeneration();

document.querySelector(".toDoButton").addEventListener("click", () => {
  const defaultList = setDefault(todoForm());
  theList(defaultList.items);
  // console.log(defaultList.items);
});

// module for adding/removing a todo to/from a list
// module for changing todolist propertie values
// module for deleting todos
// module for deleting lists
// module for DOM display
// separate all functionality in different modules according to SOLID
