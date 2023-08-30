const deleteToDo = (list, index) => {
  list.splice(index, 1);
};

export const removeToDo = (list) => {
  const deleteButtons = document.querySelectorAll(".delete-todo");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault;
      deleteToDo(list, e.target.getAttribute("data-index"));
      e.target.parentElement.remove();
    });
  });
};
