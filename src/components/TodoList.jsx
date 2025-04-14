import React from "react";
import { useTodoStore } from "../zustand";

export default function TodoList({ searchTerm }) {
  const todos = useTodoStore((state) => state.todos);

  const filtered = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filtered.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
