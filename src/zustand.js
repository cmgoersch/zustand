import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      filter: "all",
      addTodo: (text) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, done: false }],
        })),
      toggleDone: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        })),
      setFilter: (val) => set({ filter: val }),
    }),
    {
      name: "todo-storage",
    }
  )
);
