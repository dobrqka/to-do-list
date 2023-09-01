import { listOptions } from "./dom-stuff";

// export const todoForm = (listOfLists) => {
//   const name = prompt("What?");
//   const dueDate = prompt("When?");
//   const priority = prompt("Priority?");
//   const notes = prompt("Any details?");
//   const list = listOptions(listOfLists);
//   return { name, dueDate, priority, notes, list };
// };

export const todoForm = () => {
  const name = prompt("What?");
  const dueDate = prompt("When?");
  const notes = prompt("Any details?");
  const priority = prompt("Priority?");
  let list;
  return { name, dueDate, priority, notes, list };
};
