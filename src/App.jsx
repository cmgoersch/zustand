import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <TodoForm />
      <TodoList searchTerm={searchTerm} />
    </div>
  );
}
