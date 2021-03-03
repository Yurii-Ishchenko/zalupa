import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as todoActions from '../../redux/todos/todos-actions';
// import * as todotypes from '../../redux/todos/todos-types';
// console.log(todoActions.addTodo);
// console.log(todotypes.ADD);

export default function TodoEditor({ onSave }) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    // this.setState({ message: e.currentTarget.value });
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(todoActions.addTodo(message));
    onSave();

    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={handleChange}
        style={{ width: '100%' }}
      ></textarea>
      <button type="submit" style={{ color: 'red', width: '100%' }}>
        Отправить
      </button>
    </form>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: text => dispatch(todoActions.addTodo(text)),
// });

// export default connect(null, mapDispatchToProps)(TodoEditor);
