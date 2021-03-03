import React from 'react';
import s from './Counter.module.css';

export default function Controls({ step, onIncrement, onDecrement }) {
  return (
    <div className={s.controls}>
      <button type="button" onClick={onIncrement}>
        Увеличить на {step}
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить на {step}
      </button>
    </div>
  );
}
