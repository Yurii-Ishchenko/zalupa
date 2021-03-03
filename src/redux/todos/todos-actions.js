import { createAction } from '@reduxjs/toolkit';
// import * as types from './todos-types';
import shortid from 'shortid';

export const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));
// console.log(addTodo('hell'));

// export const addTodo = text => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// });

export const deleteTodo = createAction('todos/delete');

// export const deleteTodo = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

export const filterTodo = createAction('todos/changeFilter');

// export const filterTodo = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export const toggleCompleted = createAction('todos/toogleCompleted');
