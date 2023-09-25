import { editToDo } from "./edit-todo";
import { addItem, listOfLists, createList } from "./list-stuff";
import { removeToDo } from "./removeToDo";
import { todoForm } from "./addTodo";
import Icon from "./list.png";
import Chickin from "./chickin.png";
import kebab from "./kebab.png";

export const domGeneration = () => {
  const mainDiv = document.querySelector(".main");
  const addTodo = document.createElement("button");
  addTodo.textContent = "+";
  addTodo.classList.add("toDoButton");
  mainDiv.appendChild(addTodo);

  const newListButton = document.createElement("button");
  const listIcon = new Image();
  listIcon.src = Icon;
  newListButton.classList.add("new-list");
  mainDiv.appendChild(newListButton);
  const allListDivs = document.createElement("div");
  allListDivs.classList.add("all-lists");
  mainDiv.appendChild(allListDivs);

  const toDoList = document.createElement("div");
  toDoList.classList.add("list");
  mainDiv.appendChild(toDoList);

  const chickinIcon = new Image();
  chickinIcon.src = Chickin;
  const gitHub = document.querySelector(".github");
  gitHub.appendChild(chickinIcon);

  chickinIcon.addEventListener("mouseover", () => {
    chickinIcon.style.transform = "rotate(45deg)";
  });

  chickinIcon.addEventListener("mouseout", () => {
    chickinIcon.removeAttribute("style", "transform");
  });
};

export const showList = (aList) => {
  const toDoList = document.querySelector(".list");
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
  toDoList.textContent = "To-dos: ";
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
    dueDateDiv.textContent = item.dueDate + "h";
    dueDateDiv.classList.add("date-prop");

    dueDateDiv.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (document.querySelector(".change-date")) {
        document.querySelector(".change-date").remove();
      } else {
        const dueDatePrompt = document.createElement("div");
        dueDatePrompt.classList.add("change-date");
        const dueDateInput = document.createElement("input");
        dueDateInput.setAttribute("type", "time");
        dueDateInput.value = "09:00";
        dueDatePrompt.appendChild(dueDateInput);
        const dueDateSelect = document.createElement("button");
        dueDateSelect.textContent = "Select";
        dueDatePrompt.appendChild(dueDateSelect);
        dueDateDiv.parentElement.appendChild(dueDatePrompt);
        dueDateInput.focus();

        dueDateSelect.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          console.log(e.target);
          item.dueDate = dueDateInput.value; /////////// 'dueDate' for new Todo
          dueDateDiv.textContent = item.dueDate + "h";
          console.log(item.dueDate);
          dueDatePrompt.remove();
        });
      }
    });
    newDom.appendChild(dueDateDiv);

    const priorityDiv = document.createElement("div");
    if (item.priority == "Low") {
      priorityDiv.style.backgroundColor = "lime";
    } else if (item.priority == "Mid") {
      priorityDiv.style.backgroundColor = "yellow";
    } else if (item.priority == "High") {
      priorityDiv.style.backgroundColor = "red";
    }
    priorityDiv.textContent = "Priority: " + item.priority;
    priorityDiv.classList.add("priority-prop");
    priorityDiv.addEventListener("mouseover", () => {
      priorityDiv.removeAttribute("style", "background-color");
    });
    priorityDiv.addEventListener("mouseout", () => {
      if (item.priority == "Low") {
        priorityDiv.style.backgroundColor = "lime";
      } else if (item.priority == "Mid") {
        priorityDiv.style.backgroundColor = "yellow";
      } else if (item.priority == "High") {
        priorityDiv.style.backgroundColor = "red";
      }
    });
    priorityDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      if (document.querySelector(".change-priority")) {
        document.querySelector(".change-priority").remove();
      } else {
        const changePriority = document.createElement("div");
        changePriority.classList.add("change-priority");

        const lowPriority = document.createElement("button");
        lowPriority.textContent = "Low";
        changePriority.appendChild(lowPriority);

        const mediumPriority = document.createElement("button");
        mediumPriority.textContent = "Mid";
        changePriority.appendChild(mediumPriority);

        const highPriority = document.createElement("button");
        highPriority.textContent = "High";
        changePriority.appendChild(highPriority);

        priorityDiv.appendChild(changePriority);

        lowPriority.addEventListener("click", (e) => {
          e.stopPropagation();
          item.priority = "Low";
          priorityDiv.textContent = "Priority: " + item.priority;
          priorityDiv.style.backgroundColor = "lime";
          changePriority.remove();
        });

        mediumPriority.addEventListener("click", (e) => {
          e.stopPropagation();
          item.priority = "Mid";
          priorityDiv.textContent = "Priority: " + item.priority;
          priorityDiv.style.backgroundColor = "yellow";
          changePriority.remove();
        });

        highPriority.addEventListener("click", (e) => {
          e.stopPropagation();
          item.priority = "High";
          priorityDiv.textContent = "Priority: " + item.priority;
          priorityDiv.style.backgroundColor = "red";
          changePriority.remove();
        });
      }
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
      if (document.querySelector(".list-options")) {
        document.querySelector(".list-options").remove();
      } else {
        listOfLists.forEach((list) => {
          if (list.name == item.list) {
            list.items.splice(list.items.indexOf(item), 1);
          }
        });
        // item.list.items.splice(item.list.items.indexOf(item), 1);
        listGeneration(listOfLists);
        const listOptionsDiv = document.querySelector(".list-options");
        const listButtons = document.querySelectorAll(".list-options button");
        const listSelectButtons = document.querySelectorAll(".list-name");
        listButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            listOfLists.forEach((list) => {
              if (button.textContent == list.name) {
                item.list = list;
                list.items[list.items.length] = item;
                console.log(item.list);
                listOptionsDiv.parentElement.removeChild(listOptionsDiv);
                listSelectButtons.forEach((listButton) => {
                  if (list.name == listButton.textContent) {
                    showActiveList(listButton);
                    showList(item.list.items);
                    removeToDo(item.list.items);
                  }
                });
              }
            });
          });
        });
      }
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
  const allListsHeading = document.createElement("h2");
  allListsHeading.textContent = "Lists: ";
  allListDivs.appendChild(allListsHeading);
  allListDivs.appendChild(allListsHeading);
  listOfLists.forEach((list) => {
    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");
    const listButton = document.createElement("button");
    listButton.classList.add("list-name");
    listButton.textContent = list.name;
    const deleteList = document.createElement("button");
    deleteList.classList.add("delete-list");
    deleteList.textContent = "Delete";
    const renameList = document.createElement("button");
    renameList.classList.add("edit-list");
    renameList.textContent = "Rename";

    listButton.addEventListener("mouseover", () => {
      if (listButton.style.backgroundColor === "red") {
        return;
      }
      listDiv.style.backgroundColor = "rgb(255 73 73)";
      listButton.style.backgroundColor = "rgb(255 73 73)";
      listKebab.style.backgroundColor = "rgb(255 73 73)";
    });

    listButton.addEventListener("mouseout", () => {
      if (listButton.style.backgroundColor === "red") {
        return;
      }
      listDiv.removeAttribute("style", "backgroundColor");
      listButton.removeAttribute("style", "backgroundColor");
      listKebab.removeAttribute("style", "backgroundColor");
    });

    listButton.addEventListener("click", () => {
      const allTheButtons = document.querySelectorAll(".list-name");
      allTheButtons.forEach((button) => {
        if (button.hasAttribute("style")) {
          button.removeAttribute("style", "background-color");
          button.parentElement.removeAttribute("style", "background-color");
          button.nextSibling.removeAttribute("style", "background-color");
        }
      });
      listDiv.style.backgroundColor = "red";
      listButton.style.backgroundColor = "red";
      listKebab.style.backgroundColor = "red";
      showList(list.items);
      removeToDo(list.items);
    });

    const listKebab = document.createElement("button");
    listKebab.classList.add("kebab-list");
    const listKebabImage = document.createElement("img");
    listKebabImage.src = kebab;
    listKebabImage.classList.add("kebab-icon");
    listKebab.appendChild(listKebabImage);

    listKebab.addEventListener("click", (e) => {
      e.stopPropagation();
      if (document.querySelector(".kebab-modal")) {
        document.querySelector(".kebab-modal").remove();
      } else {
        const kebabModal = document.createElement("div");
        kebabModal.classList.add("kebab-modal");
        kebabModal.appendChild(deleteList);
        kebabModal.appendChild(renameList);
        listKebab.appendChild(kebabModal);

        deleteList.addEventListener("click", () => {
          if (listOfLists.length === 1) {
            alert("You must always have at least 1 list!");
            return;
          }
          while (list.items.length > 0) {
            list.items.splice(0, 1);
          }
          showList(list.items);
          if (listOfLists.indexOf(list) === 0) {
            showList(listOfLists[listOfLists.indexOf(list) + 1].items);
            listOfLists.splice(listOfLists.indexOf(list), 1);
            showActiveList(listDiv.nextSibling.children[0]);
          } else {
            showList(listOfLists[listOfLists.indexOf(list) - 1].items);
            listOfLists.splice(listOfLists.indexOf(list), 1);
            showActiveList(listDiv.previousSibling.children[0]);
          }
          listDiv.remove();
          kebabModal.remove();
          console.log(listOfLists);
        });

        renameList.addEventListener("click", () => {
          if (document.querySelector(".edit-prop")) {
            document.querySelector(".edit-prop").remove();
          }
          listButton.style.visibility = "hidden";

          const editProp = document.createElement("input");
          editProp.classList.add("edit-prop");
          editProp.setAttribute("type", "text");
          editProp.value = listButton.textContent;
          listButton.parentElement.insertBefore(
            editProp,
            listButton.nextSibling
          );
          editProp.style.alignSelf = "center";
          editProp.focus();
          editProp.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              listButton.textContent = editProp.value;
              editProp.remove();
              listButton.style.visibility = "visible";
              list.name = listButton.textContent;
              renameList.parentElement.remove();
            }
          });
        });
      }
    });

    listDiv.appendChild(listButton);
    listDiv.appendChild(listKebab);
    listDiv.style.display = "grid";
    allListDivs.appendChild(listDiv);
  });
};

export const listGeneration = (listOfLists) => {
  const listOptionsDiv = document.createElement("div");
  const mainDiv = document.querySelector(".main");
  listOptionsDiv.classList.add("list-options");
  listOptionsDiv.style.display = "grid";
  const listOptionsHeading = document.createElement("h2");
  listOptionsHeading.textContent = "Choose a list:";
  listOptionsDiv.appendChild(listOptionsHeading);
  mainDiv.appendChild(listOptionsDiv);

  listOfLists.forEach((list) => {
    const listButton = document.createElement("button");
    listButton.textContent = list.name;

    listOptionsDiv.appendChild(listButton);
  });
};

export const setList = (listOfLists, newItem) => {
  listGeneration(listOfLists);

  const listOptionsDiv = document.querySelector(".list-options");
  const listButtons = document.querySelectorAll(".list-options button");
  if (listOfLists.length == 1) {
    addItem(newItem, listOfLists[0]);
    newItem.list = listOfLists[0].name; /// added .name due to JSON error
    showList(listOfLists[0].items);
    removeToDo(listOfLists[0].items);
    listOptionsDiv.parentElement.removeChild(listOptionsDiv);
  } else {
    listButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        listOfLists.forEach((list) => {
          if (button.textContent == list.name) {
            addItem(newItem, list);
            newItem.list = list.name; /// added .name due to JSON error
            showList(list.items);
            removeToDo(list.items);
            console.log(list.items);
            const listSelectButtons = document.querySelectorAll(".list-name");
            listSelectButtons.forEach((listButton) => {
              if (list.name == listButton.textContent) {
                showActiveList(listButton);
                localStorage.clear();
                localStorage.setItem(
                  "listOfLists",
                  JSON.stringify(listOfLists)
                );
              }
            });
          }
        });
        listOptionsDiv.parentElement.removeChild(listOptionsDiv);
        console.log(listOfLists);
      });
    });
  }
};

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
      if (nameInput.value == "") {
        alert("Please insert a task.");
        return;
      } else {
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
            mediumPriority.textContent = "Mid";
            mediumPriority.classList.add("priority-button");
            setPriority.appendChild(mediumPriority);

            const highPriority = document.createElement("button");
            highPriority.textContent = "High";
            highPriority.classList.add("priority-button");
            setPriority.appendChild(highPriority);
            mainModalDiv.appendChild(setPriority);
            const priorityButtons =
              document.querySelectorAll(".priority-button");
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
                localStorage.clear();
                localStorage.setItem(
                  "listOfLists",
                  JSON.stringify(listOfLists)
                );
              });
            });
          });
        });
      }
    }
  });
};

export const createNewList = () => {
  const mainDiv = document.querySelector(".main");
  const newListModal = document.createElement("div");
  newListModal.classList.add("new-list-modal");
  const newListHeading = document.createElement("h2");
  newListHeading.textContent = "List name?";
  newListModal.appendChild(newListHeading);
  const newListInput = document.createElement("input");
  newListInput.setAttribute("type", "text");
  newListInput.classList.add("new-list-input");
  newListInput.setAttribute("name", "new-list-name");
  newListModal.appendChild(newListInput);
  mainDiv.appendChild(newListModal);
  newListInput.focus();

  newListInput.addEventListener("keypress", (e) => {
    e.stopPropagation();
    let nameIsTaken = false;
    listOfLists.forEach((list) => {
      if (newListInput.value == list.name) {
        nameIsTaken = true;
        return;
      }
    });
    if (e.key === "Enter") {
      if (newListInput.value == "") {
        alert("Please insert a list name.");
        return;
      } else if (nameIsTaken) {
        alert("There's already a list by that name. Please pick another.");
        return;
      } else {
        const newListName = newListInput.value;
        const newList = createList(newListName);
        newList.addList();
        showAllLists();
        newListModal.remove();
        const listSelectButtons = document.querySelectorAll(".list-name");
        listSelectButtons.forEach((listButton) => {
          if (newList.name == listButton.textContent) {
            showActiveList(listButton);
          }
        });
        showList(listOfLists[listOfLists.length - 1].items);
        localStorage.clear();
        localStorage.setItem("listOfLists", JSON.stringify(listOfLists));
        return;
      }
    }
  });
};

export const showActiveList = (thisListButton) => {
  const allTheButtons = document.querySelectorAll(".list-name");
  allTheButtons.forEach((button) => {
    if (button.hasAttribute("style")) {
      button.removeAttribute("style", "background-color");
      button.parentElement.removeAttribute("style", "background-color");
      button.nextSibling.removeAttribute("style", "background-color");
    }
  });
  thisListButton.parentElement.style.backgroundColor = "red";
  thisListButton.style.backgroundColor = "red";
  thisListButton.nextSibling.style.backgroundColor = "red";
};

const parseListOfLists = (async () => {
  if (localStorage.getItem("listOfLists") !== null) {
    const fetchJson = localStorage.getItem("listOfLists");
    let parsedArray = await JSON.parse(fetchJson);
    console.log(parsedArray);
    listOfLists.pop();
    parsedArray.forEach((item) => {
      listOfLists.push(item);
      // domGeneration();
      showList(listOfLists[0].items);
      showAllLists();
    });
    // listOfLists = parsedArray.slice();
    console.log(listOfLists);
  } else {
    return;
  }
})();
