import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as todoActions from '../../redux/todos/todos-actions';
import { getFilter } from '../../redux/todos/todos-selectors';

const Filter = () => {
  const value = useSelector(state => getFilter(state));
  const dispatch = useDispatch();
  const onChange = e => dispatch(todoActions.filterTodo(e.target.value));
  return (
    <label>
      Фильтрация по имени
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
// const mapStateToProps = state => ({
//   value: getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(todoActions.filterTodo(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
