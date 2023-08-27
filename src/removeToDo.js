const removeToDo = (list, index) => {
  list.splice(index, 1);
};

export const todoX = (list) => {
  const deleteButtons = document.querySelectorAll(".delete-todo");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault;
      removeToDo(list, e.target.getAttribute("data-index"));
      e.target.parentElement.remove();
    });
  });
};
