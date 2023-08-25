export const todoForm = () => {
  const name = prompt("What?");
  const dueDate = prompt("When?");
  const priority = prompt("Priority?");
  const notes = prompt("Any details?");
  return { name, dueDate, priority, notes };
};
