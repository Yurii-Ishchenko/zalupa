import React, { Component } from 'react';
import TodoList from './TodoList';
// import initialTodos from './components/test/todos.json';
import TodoEditor from './TodoEditor';
// import shortId from 'shortid';
import Filter from './Filter';
import Modal from '../Backdrop/Backdrop';

import IconButton from '../IconButton/IconButton';
import { ReactComponent as IconBtn } from '../../Icons/add.svg';

class TodoView extends Component {
  state = {
    showModal: false,
  };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todoId === todo.id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  // addTodo = text => {
  //   const todo = {
  //     id: shortId.generate(),
  //     text,
  //     completed: false,
  //   };
  //   this.setState(({ todos }) => ({
  //     todos: [todo, ...todos],
  //   }));
  //   this.toggleModal();
  // };
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  // componentDidMount() {
  //   const todos = localStorage.getItem('todos');
  //   const parseTodos = JSON.parse(todos);

  //   if (parseTodos) {
  //     this.setState({ todos: parseTodos });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
  //   }
  // }

  toggleModal = e => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    // const completedTodo = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );
    // const visibleTodos = todos.filter(todo =>
    //   todo.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    // );
    // const totalTodos = visibleTodos.length;

    return (
      <div>
        <IconButton onClick={this.toggleModal} aria-label="Добавить туду">
          <IconBtn width="40" height="40" fill="white" />
        </IconButton>

        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
            {/* <h1>МАДАЛКА</h1>
            <p>kjdbkbkfebr,kbvfkbjkbgtdlhnlnhgltkgbtkl</p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button> */}
          </Modal>
        )}
        {/* <p>Общее кол-во: {totalTodos}</p>
        <p>Кол-во выполненых: {completedTodo} </p> */}

        <Filter />
        <TodoList
        // todos={visibleTodos}
        // onDeleteTodo={this.deleteTodo}
        // onToggleCompleted={this.toggleCompleted}
        />
        {/* <Form onSubmit={this.handleFormSummit} /> */}
      </div>
    );
  }
}
export default TodoView;
