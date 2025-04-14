import { useTodoStore } from "../zustand.js";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  // toggle State
  const toggleDone = useTodoStore((state) => state.toggleDone);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          // toggle
          onClick={() => toggleDone(todo.id)}
          style={{
            textDecoration: todo.done ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;