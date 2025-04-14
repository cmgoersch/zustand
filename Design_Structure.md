# Design und Structure of Zustand

## Introduction

Zustand is a minimal and performant **global state management** library used in modern React applications. Unlike more complex solutions like Redux, Zustand provides a simple and functional approach to managing state. This report analyzes the design logic and file structure of Zustand using the [Zustand Demo Application](https://zustand-demo.pmnd.rs/).

---

## Basic Design of Zustand

At its core, Zustand uses the `create` function to define a **store**. Inside this store:

- Global state variables are declared (e.g., `bears`)
- Functions that modify the state (actions) are written (e.g., `increasePopulation`)

Zustand allows React components to subscribe only to the specific pieces of state they need. This prevents unnecessary re-renders and enhances performance.

---

## Zustand Demo: Structure and Organization

The Zustand demo application is structured around a few key elements:

### 1. `store.ts` – Main Store File

```ts
import create from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

- bears: a numeric example of global state

- increasePopulation: function that increases the state

- removeAllBears: function that resets the state to zero

### 2. Usage Inside React Components

        const BearCounter = () => {
            const bears = useStore((state) => state.bears)
            return <h1>{bears} bears around here ...</h1>
        }

- The component subscribes only to the bears state

- It re-renders only when bears changes

### 3. Use of Selectors

        useStore((state) => state.bears)

This is an example of a selector. With selectors, components subscribe only to what they need — improving performance and separation of concerns.

### ⚙️ Key Strengths of Zustand’s Architecture

✅ **Simplicity:** Readable and clean, with no excessive boilerplate

⚡ **Performance:** Prevents unnecessary renders

🔄 **Reusability:** Stores and components remain modular and independent

📦 **Minimal Setup:** No need for reducers, contexts, or middleware
