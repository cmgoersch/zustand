import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}
