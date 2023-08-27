// array of lists
let allLists = [];

// default list and new list creation
export const newList = (name) => {
  let items = [];
  // allLists[allLists.length] = this;
  // console.log(allLists);
  return { name, items };
};

const defaultList = newList("Tasks");

export const addItem = (newItem) => {
  defaultList.items[defaultList.items.length] = newItem;
  return defaultList;
};
