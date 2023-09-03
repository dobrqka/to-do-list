import "./styles.css";
import { listOfLists } from "./list-stuff";
import { domGeneration, newToDoModal, createNewList } from "./dom-stuff";

domGeneration();

document.querySelector(".toDoButton").addEventListener("click", () => {
  newToDoModal();
});

document.querySelector(".new-list").addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  createNewList();
  console.log(listOfLists);
});
