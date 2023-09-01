export const editToDo = (element, toDoObject) => {
  // element.style.display = "none";
  element.style.visibility = "hidden";

  const editProp = document.createElement("input");
  editProp.setAttribute("type", "text");
  editProp.value = element.textContent;
  element.parentElement.insertBefore(editProp, element.nextSibling);
  editProp.style.alignSelf = "center";
  // editProp.style.display = "block";
  editProp.focus();
  editProp.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      element.textContent = editProp.value;
      element.parentElement.removeChild(editProp);
      // element.style.display = "block";
      element.style.visibility = "visible";
      if (element.classList.contains("name-prop")) {
        toDoObject.name = element.textContent;
      } else if (element.classList.contains("date-prop")) {
        toDoObject.dueDate = element.textContent;
      } else if (element.classList.contains("priority-prop")) {
        toDoObject.priority = element.textContent;
      } else if (element.classList.contains("notes-prop")) {
        toDoObject.notes = element.textContent;
      }
    }
  });
};
