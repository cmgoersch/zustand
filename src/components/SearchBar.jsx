import React from "react";
import { useState } from "react";
import { useTodoStore } from "../zustand";

export default function SearchBar() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const todos = useTodoStore((state) => state.todos);

  const filtered = todos.filter((todo) => todo.text.includes(searchedTerm));

  return (
    <>
      <input
        type="text"
        value={searchedTerm}
        onChange={(e) => setSearchedTerm(e.target.value)}
      />
      <ul>{filtered.map}</ul>
    </>
  );
}
