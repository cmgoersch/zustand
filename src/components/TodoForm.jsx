import { useState } from "react";
import { useTodoStore } from "../zustand.js";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Neue Aufgabe"
      />
      <button onClick={handleAdd}>Hinzufügen</button>
    </div>
  );
};

export default TodoForm;
