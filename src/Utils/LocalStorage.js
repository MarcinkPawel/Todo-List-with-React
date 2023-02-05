const toLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const fromLocalStorage = () => {
  const localData = localStorage.getItem("tasks");
  return localData ? JSON.parse(localData) : [];
};

export { toLocalStorage, fromLocalStorage };
