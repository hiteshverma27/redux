import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counterSlice";
import {
  anotherDecrement,
  anotherIncrement,
  anotherIncrementByAmount,
} from "./features/anotherCounterSlice";
import { addTodo, removeTodo, toggleTodo } from "./features/todoSlice";

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

const TodoList = ({ todos, onToggle, onRemove }) => (
  <ul style={{ listStyle: "none", padding: 0 }}>
    {todos.map((todo) => (
      <li key={todo.id}>
        <span
          onClick={() => onToggle(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
        <button onClick={() => onRemove(todo.id)}>❌</button>
      </li>
    ))}
  </ul>
);

function App() {
  const [text, setText] = useState("");
  const count = useSelector((state) => state.counter.value);
  const anotherCount = useSelector(
    (state) => state.anotherCounter.anotherValue
  );
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Counter
        label="Redux Counter Example"
        value={count}
        onIncrement={() => dispatch(increment())}
        onDecrement={() => dispatch(decrement())}
        onIncrementByAmount={(amt) => dispatch(incrementByAmount(amt))}
        incrementAmount={5}
      />
      <Counter
        label="Another Redux Counter Example"
        value={anotherCount}
        onIncrement={() => dispatch(anotherIncrement())}
        onDecrement={() => dispatch(anotherDecrement())}
        onIncrementByAmount={(amt) => dispatch(anotherIncrementByAmount(amt))}
        incrementAmount={10}
      />

      <h1>Redux Todo App</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add Todo</button>
      <TodoList
        todos={todos}
        onToggle={(id) => dispatch(toggleTodo(id))}
        onRemove={(id) => dispatch(removeTodo(id))}
      />
    </div>
  );
}

export default App;
