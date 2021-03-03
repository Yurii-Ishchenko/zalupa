import React from 'react';
import s from './Todo.module.css';
import Todo from '../Todo/Todo';
import { useSelector, useDispatch } from 'react-redux';
import * as todoActions from '../../redux/todos/todos-actions';
import { getvisibleTodos } from '../../redux/todos/todos-selectors';

export default function TodoList() {
  const todos = useSelector(getvisibleTodos);

  const dispatch = useDispatch();
  const onDeleteTodo = id => dispatch(todoActions.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todoActions.toggleCompleted(id));
  return (
    <ul className={s.todo_list}>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className={s.item}>
          <Todo
            text={text}
            completed={completed}
            onDeleteTodo={() => onDeleteTodo(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
          />
        </li>
      ))}
    </ul>
  );
}

// const getvisibleTodos = (allTodos, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allTodos.filter(todo =>
//     todo.text.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };
// const mapStateToProps = state => {
//   const { filter, items } = state.todos;
//   const visibleTodos = getvisibleTodos(items, filter);
//   return {
//     todos: visibleTodos,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteTodo: id => dispatch(todoActions.deleteTodo(id)),
//   onToggleCompleted: id => dispatch(todoActions.toggleCompleted(id)),
// });
