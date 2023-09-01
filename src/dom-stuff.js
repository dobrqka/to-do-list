import { editToDo } from "./edit-todo";
import { addItem, listOfLists, newList } from "./list-stuff";
import { removeToDo } from "./removeToDo";
import { todoForm } from "./addTodo";
import Icon from "./list.png";
import Chickin from "./chickin.png";

export const domGeneration = () => {
  const mainDiv = document.querySelector(".main");
  const addTodo = document.createElement("button");
  addTodo.textContent = "+";
  addTodo.classList.add("toDoButton");
  mainDiv.appendChild(addTodo);

  const newListButton = document.createElement("button");
  // newListButton.textContent = "New List";
  const listIcon = new Image();
  listIcon.src = Icon;
  newListButton.classList.add("new-list");
  mainDiv.appendChild(newListButton);
  const allListDivs = document.createElement("div");
  allListDivs.classList.add("all-lists");
  mainDiv.appendChild(allListDivs);

  const toDoList = document.createElement("div");
  // toDoList.textContent = "Todos: ";
  toDoList.classList.add("list");
  mainDiv.appendChild(toDoList);

  const chickinIcon = new Image();
  chickinIcon.src = Chickin;
  const gitHub = document.querySelector(".github");
  gitHub.appendChild(chickinIcon);
};

export const showList = (aList) => {
  const toDoList = document.querySelector(".list");
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
  toDoList.textContent = "Todos: ";
  aList.forEach((item) => {
    const newDom = document.createElement("div");
    newDom.classList.add("todos");

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
    dueDateDiv.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const dueDatePrompt = document.createElement("div");
      dueDatePrompt.classList.add("change-date");
      const dueDateInput = document.createElement("input");
      dueDateInput.setAttribute("type", "time");
      dueDateInput.value = "09:00";
      dueDatePrompt.appendChild(dueDateInput);
      dueDateInput.focus();
      const dueDateSelect = document.createElement("button");
      dueDateSelect.textContent = "Select";
      dueDatePrompt.appendChild(dueDateSelect);
      dueDateDiv.parentElement.appendChild(dueDatePrompt);

      dueDateSelect.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log(e.target);
        item.dueDate = dueDateInput.value; /////////// 'dueDate' for new Todo
        dueDateDiv.textContent = item.dueDate;
        console.log(item.dueDate);
        dueDatePrompt.remove();
      });
    });
    newDom.appendChild(dueDateDiv);

    const priorityDiv = document.createElement("div");
    if (item.priority == "Low") {
      priorityDiv.style.color = "rgb(0, 255, 0)";
    } else if (item.priority == "Medium") {
      priorityDiv.style.color = "rgb(247, 244, 69)";
    } else if (item.priority == "High") {
      priorityDiv.style.color = "rgb(102, 0, 0)";
    }
    priorityDiv.textContent = "Priority: " + item.priority;
    priorityDiv.classList.add("priority-prop");
    priorityDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      const changePriority = document.createElement("div");
      changePriority.classList.add("change-priority");

      const lowPriority = document.createElement("button");
      lowPriority.textContent = "Low";
      changePriority.appendChild(lowPriority);

      const mediumPriority = document.createElement("button");
      mediumPriority.textContent = "Medium";
      changePriority.appendChild(mediumPriority);

      const highPriority = document.createElement("button");
      highPriority.textContent = "High";
      changePriority.appendChild(highPriority);

      priorityDiv.appendChild(changePriority);

      lowPriority.addEventListener("click", (e) => {
        e.stopPropagation();
        item.priority = "Low";
        priorityDiv.textContent = "Priority: " + item.priority;
        priorityDiv.style.color = "rgb(0, 255, 0)";
        changePriority.remove();
      });

      mediumPriority.addEventListener("click", (e) => {
        e.stopPropagation();
        item.priority = "Medium";
        priorityDiv.textContent = "Priority: " + item.priority;
        priorityDiv.style.color = "rgb(247, 244, 69)";
        changePriority.remove();
      });

      highPriority.addEventListener("click", (e) => {
        e.stopPropagation();
        item.priority = "High";
        priorityDiv.textContent = "Priority: " + item.priority;
        priorityDiv.style.color = "rgb(102, 0, 0)";
        changePriority.remove();
      });
    });
    newDom.appendChild(priorityDiv);

    const notesDiv = document.createElement("div");
    notesDiv.classList.add("notes-div");
    const notesText = document.createElement("div");
    notesText.textContent = item.notes;
    notesText.classList.add("notes-text");
    notesText.addEventListener("click", () => {
      notesText.style.visibility = "hidden";
      const editProp = document.createElement("textarea");
      editProp.classList.add("notes-edit");
      editProp.value = notesText.textContent;
      notesText.parentElement.insertBefore(editProp, notesText.nextSibling);
      editProp.focus();
      editProp.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          notesText.textContent = editProp.value;
          notesText.parentElement.removeChild(editProp);
          // element.style.display = "block";
          notesText.style.visibility = "visible";
          item.notes = notesText.textContent;
          notesText.textContent = item.notes;
        }
      });
    });
    notesText.style.display = "none";
    newDom.appendChild(notesText);
    const notesButton = document.createElement("button");
    notesButton.classList.add("notes-button");
    notesButton.textContent = "i";
    notesButton.addEventListener("click", () => {
      if (notesText.style.display == "none") {
        notesText.style.display = "inline";
      } else {
        notesText.style.display = "none";
      }
    });

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.setAttribute("data-index", aList.indexOf(item));
    delButton.classList.add("delete-todo");

    const changeListButton = document.createElement("button");
    changeListButton.textContent = "List";
    changeListButton.classList.add("change-list");

    changeListButton.addEventListener("click", () => {
      item.list.items.splice(item.list.items.indexOf(item), 1);
      listGeneration(listOfLists);
      const selectButton = document.querySelector(".select-button");
      const listOptionsDiv = document.querySelector(".list-options");
      selectButton.addEventListener("click", (e) => {
        e.preventDefault();
        listOfLists.forEach((list) => {
          if (
            document.querySelector('input[type="radio"]:checked').value ==
            list.name
          ) {
            item.list = list;
            list.items[list.items.length] = item;
            console.log(item.list);
            listOptionsDiv.parentElement.removeChild(listOptionsDiv);
          }
        });
      });
    });

    const toDoCardBottom = document.createElement("div");
    toDoCardBottom.classList.add("todo-buttons");
    toDoCardBottom.appendChild(notesButton);
    toDoCardBottom.appendChild(notesText);
    toDoCardBottom.appendChild(changeListButton);
    toDoCardBottom.appendChild(delButton);
    toDoCardBottom.appendChild(notesDiv);
    newDom.appendChild(toDoCardBottom);
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
      removeToDo(list.items);
      console.log(listOfLists);
    });

    deleteList.addEventListener("click", () => {
      while (list.items.length > 0) {
        list.items.splice(0, 1);
      }
      showList(list.items);
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

export const listGeneration = (listOfLists) => {
  const listOptionsDiv = document.createElement("div");
  const mainDiv = document.querySelector(".main");
  listOptionsDiv.classList.add("list-options");
  listOptionsDiv.style.display = "block";
  mainDiv.appendChild(listOptionsDiv);

  listOfLists.forEach((list) => {
    const listRadio = document.createElement("input");
    listRadio.setAttribute("type", "radio");
    listRadio.setAttribute("id", list.name);
    listRadio.value = list.name;
    listRadio.setAttribute("name", "list-radio");

    const listRadioLabel = document.createElement("label");
    listRadioLabel.setAttribute("for", list.name);
    listRadioLabel.textContent = list.name;

    listOptionsDiv.appendChild(listRadioLabel);
    listOptionsDiv.appendChild(listRadio);
  });

  const selectButton = document.createElement("button");
  selectButton.classList.add("select-button");
  selectButton.textContent = "Select";
  listOptionsDiv.appendChild(selectButton);
};

export const setList = (listOfLists, newItem) => {
  listGeneration(listOfLists);

  const selectButton = document.querySelector(".select-button");
  const listOptionsDiv = document.querySelector(".list-options");
  if (listOfLists.length == 1) {
    addItem(newItem, listOfLists[0]);
    newItem.list = listOfLists[0];
    showList(listOfLists[0].items);
    removeToDo(listOfLists[0].items);
    // listOptionsDiv.style.display = "none";
    listOptionsDiv.parentElement.removeChild(listOptionsDiv);
  } else {
    selectButton.addEventListener("click", (e) => {
      e.preventDefault();
      listOfLists.forEach((list) => {
        if (
          document.querySelector('input[type="radio"]:checked').value ==
          list.name
        ) {
          addItem(newItem, list);
          newItem.list = list;
          showList(list.items);
          removeToDo(list.items);
          console.log(list.items);
        }
      });
      // listOptionsDiv.style.display = "none";
      listOptionsDiv.parentElement.removeChild(listOptionsDiv);
      console.log(listOfLists);
    });
  }
};

const priorityModal = () => {
  const priorityLow = document.createElement("input");
  priorityLow.setAttribute("type", "radio");
  priorityLow.setAttribute("name", "priority");
  priorityLow.setAttribute("id", "Low");
  priorityLow.setAttribute("value", "Low");

  const priorityLowLabel = document.createElement("label");
  priorityLowLabel.setAttribute("for", "Low");
  priorityLowLabel.textContent = "Low";

  const priorityMedium = document.createElement("input");
  priorityMedium.setAttribute("type", "radio");
  priorityMedium.setAttribute("name", "priority");
  priorityMedium.setAttribute("id", "Medium");
  priorityMedium.setAttribute("value", "Medium");

  const priorityMediumLabel = document.createElement("label");
  priorityMediumLabel.setAttribute("for", "Medium");
  priorityMediumLabel.textContent = "Medium";

  const priorityHigh = document.createElement("input");
  priorityHigh.setAttribute("type", "radio");
  priorityHigh.setAttribute("name", "priority");
  priorityHigh.setAttribute("id", "High");
  priorityHigh.setAttribute("value", "High");

  const priorityHighLabel = document.createElement("label");
  priorityHighLabel.setAttribute("for", "High");
  priorityHighLabel.textContent = "High";

  const prioritySelect = document.createElement("button");
  prioritySelect.classList.add("priority-select");
  prioritySelect.textContent = "Select";

  const priorityRadios = document.createElement("div");
  priorityRadios.classList.add("radios");

  priorityRadios.appendChild(priorityLowLabel);
  priorityRadios.appendChild(priorityLow);
  priorityRadios.appendChild(priorityMediumLabel);
  priorityRadios.appendChild(priorityMedium);
  priorityRadios.appendChild(priorityHighLabel);
  priorityRadios.appendChild(priorityHigh);
};

// when they click on the "+" button this modal shows up

export const newToDoModal = () => {
  const mainContainerDiv = document.querySelector(".main");
  if (document.querySelector(".main-modal")) {
    mainContainerDiv.removeChild(mainContainerDiv.lastChild);
  }

  const mainModalDiv = document.createElement("div");
  mainModalDiv.classList.add("main-modal");
  const heading = document.createElement("h2");
  mainModalDiv.appendChild(heading);

  mainContainerDiv.appendChild(mainModalDiv);

  heading.textContent = "What's the task?";
  const nameInput = document.createElement("input");
  nameInput.classList.add("name-input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  mainModalDiv.appendChild(nameInput);
  nameInput.focus();
  nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newItemName = nameInput.value; //////////// 'name' for new ToDo
      nameInput.parentElement.removeChild(nameInput);

      heading.textContent = "When should you do it?";
      const dueDatePrompt = document.createElement("input");
      dueDatePrompt.setAttribute("type", "time");
      dueDatePrompt.value = "09:00";
      mainModalDiv.appendChild(dueDatePrompt);
      dueDatePrompt.focus();
      const dueDateSelect = document.createElement("button");
      dueDateSelect.textContent = "Select";
      mainModalDiv.appendChild(dueDateSelect);

      dueDateSelect.addEventListener("click", () => {
        const dueDateValue = dueDatePrompt.value; /////////// 'dueDate' for new Todo
        dueDatePrompt.parentElement.removeChild(dueDatePrompt);
        dueDateSelect.parentElement.removeChild(dueDateSelect);

        heading.textContent = "Do you have any notes?";
        const notesArea = document.createElement("textarea");
        notesArea.classList.add("notes-area");
        const notesSelectButton = document.createElement("button");
        notesSelectButton.textContent = "Continue";
        mainModalDiv.appendChild(notesArea);
        mainModalDiv.appendChild(notesSelectButton);
        notesArea.focus();
        notesSelectButton.addEventListener("click", () => {
          const notesValue = notesArea.value; //////////////// 'notes' for new Todo
          notesArea.parentElement.removeChild(notesArea);
          notesSelectButton.parentElement.removeChild(notesSelectButton);

          heading.textContent = "What's the priority?";

          const setPriority = document.createElement("div");
          setPriority.classList.add("set-priority");

          const lowPriority = document.createElement("button");
          lowPriority.textContent = "Low";
          lowPriority.classList.add("priority-button");
          setPriority.appendChild(lowPriority);

          const mediumPriority = document.createElement("button");
          mediumPriority.textContent = "Medium";
          mediumPriority.classList.add("priority-button");
          setPriority.appendChild(mediumPriority);

          const highPriority = document.createElement("button");
          highPriority.textContent = "High";
          highPriority.classList.add("priority-button");
          setPriority.appendChild(highPriority);
          mainModalDiv.appendChild(setPriority);
          const priorityButtons = document.querySelectorAll(".priority-button");
          priorityButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
              e.stopPropagation();
              const priorityValue = button.textContent;
              const newItem = todoForm(
                newItemName,
                dueDateValue,
                priorityValue,
                notesValue
              );
              setList(listOfLists, newItem);
              mainModalDiv.style.display = "none";
            });
          });
        });
      });
    }
  });
};
