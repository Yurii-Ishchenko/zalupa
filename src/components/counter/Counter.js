import s from './Counter.module.css';
import Controls from './Controls';
import Value from './Value';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/counter/counter-actions';
import { getValue, getStep } from '../../redux/counter/counter-selectors';

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();
  return (
    <div className={s.counter}>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => dispatch(increment(step))}
        onDecrement={() => dispatch(decrement(step))}
      />
    </div>
  );
}

// const mapstateToProps = state => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: step => dispatch(actions.increment(step)),
//   onDecrement: step => dispatch(actions.decrement(step)),
// });

// export default connect(mapstateToProps, mapDispatchToProps)(Counter);
