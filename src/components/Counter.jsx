const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementByAmount,
  label,
  incrementAmount,
}) => (
  <div>
    <h1>{label}</h1>
    <h2>{value}</h2>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={() => onIncrementByAmount(incrementAmount)}>
      Increment by {incrementAmount}
    </button>
  </div>
);

export default Counter