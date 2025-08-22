const TodoList = ({ todos, onToggle, onRemove }) => (
  <ul style={{ listStyle: "none", padding: 0 }}>
    {todos.map((todo) => (
      <li key={todo.id}>
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
        <button onClick={() => onToggle(todo.id)}>Mark as done</button>
        <button onClick={() => onRemove(todo.id)}>Remove</button>
      </li>
    ))}
  </ul>
);

export default TodoList