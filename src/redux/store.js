import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import todosReducer from './todos/todos-reducer';
// const initialState = {
//   counter: {
//     value: 10,
//     step: 7,
//   },
// };

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// Старое Redux Todos
// const rootReducer = combineReducers({
//   todos: persistReducer(persistConfig, todosReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const rootReducer = combineReducers({
//   todos: todosReducer,
// });
// console.log(process.env.NODE_ENV);
// const store = createStore(rootReducer, composeWithDevTools());

// Новое reduxToolkit

// const todoPersistConfig = {
//   key: 'todo',
//   storage: storage,
//   blacklist: ['filter'],
// };

// export const store = configureStore({
//   reducer: {
//     todos: persistReducer(todoPersistConfig, todosReducer),
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
