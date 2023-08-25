// default list and new list creation
export const newList = (name, items) => {
  items = [];
  return { name, items };
};

const defaultList = newList("Tasks");

export const setDefault = (newItem) => {
  defaultList.items[defaultList.items.length] = newItem;
  return defaultList;
};
