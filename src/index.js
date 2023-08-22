import "./styles.css";
import { toDo } from "./new-todo";
import { newList } from "./new-list";

const testButton = document.createElement("button");
testButton.textContent = "Test";
document.body.appendChild(testButton);

testButton.addEventListener("click", () => {
  let newToDo = toDo(
    "Изхвърли боклука",
    "Утре",
    "спешно",
    "Много е мръсно брат, просто го направи",
    "не е готово"
  );
  let newerToDo = toDo(
    "Изхвърли боклука2",
    "Утре2",
    "спешно2",
    "Много е222 мръсно брат, просто го направи",
    "не е готов2222о"
  );
  let newerList = newList("домашни");
  newerList.items[0] = newToDo;
  newerList.items[1] = newerToDo;
  //   console.log(newToDo);
  console.log(newerList.items);
});

// create parentLists - projects / work / personal / etc.

// separate all functionality in different modules according to SOLID
