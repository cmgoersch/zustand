import React from "react";
import { useTodoStore } from "../zustand";

export default function TodoList() {
  const list = useTodoStore((state) => state.todos);

  return (
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
