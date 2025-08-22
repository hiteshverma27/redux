import React, { useEffect, useState } from "react";
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
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "./features/todoSlice";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import { fetchTodos } from "./features/todoThunk";


function App() {
  const [text, setText] = useState("");
  const status = useSelector((state)=>state.todo.status)
  const todos = useSelector((state)=>state.todo.todos)
  const count = useSelector((state) => state.counter.value);
  const anotherCount = useSelector(
    (state) => state.anotherCounter.anotherValue
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status==="failed") return <p>Error: {status}</p>;

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
      {status==="pending" ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {
            <TodoList
              todos={todos}
              onToggle={(id) => dispatch(toggleTodo(id))}
              onRemove={(id) => dispatch(removeTodo(id))}
            />
          }
        </ul>
      )}
    </div>
  );
}

export default App;
