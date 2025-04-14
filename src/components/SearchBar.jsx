import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Suchen..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
