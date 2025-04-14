## How to Use Zustand in React

Zustand makes state management in React extremely simple and intuitive. Unlike Redux or the Context API, there is no need to create complex reducers, actions, or providers. Zustand uses a hook-based approach, which feels just like React's own `useState` and `useEffect`.

### Steps to use Zustand in React:

1. **Install Zustand:**

```bash
npm install zustand
```

## Notes

Zustand is a small, fast and powerful state management library for React. It remove unnecessary complexity and helps you build scalable applications faster with clean code.

## Create a store(e.g., store/ counterStore.js):

```
import {create} from 'zustand';

const useCounterStore = create((set) => ({
    count:0,
    increase: ()set((state) => ({count: state.count + 1})),
    increase: ()set((state) => ({count: state.count - 1})),
}));

export default useCounterStore;
```
