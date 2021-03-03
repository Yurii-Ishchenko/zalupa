export const getTodos = state => state.todos.items;
export const getFilter = state => state.todos.filter;

export const getvisibleTodos = state => {
  const todos = getTodos(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return todos.filter(todo =>
    todo.text.toLocaleLowerCase().includes(normalizedFilter),
  );
};
