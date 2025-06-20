import React from 'react';

interface CounterBoxProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

/**
 * Displays a counter for a single table.
 * @param {CounterBoxProps} props Component props
 * @returns {JSX.Element} React element
 */
const CounterBox: React.FC<CounterBoxProps> = ({ label, value, onIncrement, onDecrement, onReset }) => (
  <div className='CounterBox'>
    <button onClick={onDecrement} className='Button'>➖</button>
    <p className='Text'>{label}分數是 ： {value}</p>
    <button onClick={onIncrement} className='Button'>➕</button>
    <button onClick={onReset} className='Button'>重設 </button>
  </div>
);

export default CounterBox;
