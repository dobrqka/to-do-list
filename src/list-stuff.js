// default list and new list creation

export const newList = (name) => {
  let items = [];
  return { name, items };
};

const defaultList = newList("Tasks");

export const addItem = (newItem) => {
  defaultList.items[defaultList.items.length] = newItem;
  return defaultList;
};

// array of lists

export let listOfLists = [defaultList];

export const createList = (name) => {
  const addList = () => {
    listOfLists[listOfLists.length] = newList(name);
  };
  return { name, addList };
};
