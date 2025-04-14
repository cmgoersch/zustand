import React from "react";
import { useTodoStore } from "../zustand";

export default function TodoList() {
  const list = useTodoStore((state) => state.todos);

  return (
    <div>
      {list.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}
