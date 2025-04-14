# 4. Extensions & Features

Zustand offers a few simple extensions to help manage global state more effectively and flexibly in real-world projects.

---

## 🔎 What extensions are available?

---

### 🔐 `persist`

With `persist`, your store can automatically save its state in `localStorage` or `sessionStorage`.  
This way, data stays available even after a page reload.

**Example:**

```js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      username: "",
      setUsername: (val) => set({ username: val }),
    }),
    {
      name: "user-storage",
    }
  )
);
```

---

### 🧪 `devtools`

The `devtools` extension lets you inspect and track your state in the Redux DevTools browser extension.

**Example:**

```js
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
  }))
);
```

---

### 🧹 `combine`

`combine` helps you split your store into logical parts while still keeping everything in one place.

**Example:**

```js
import { create } from "zustand";
import { combine } from "zustand/middleware";

const useStore = create(
  combine({ count: 0 }, (set) => ({
    increase: () => set((state) => ({ count: state.count + 1 })),
  }))
);
```

---

## ✅ Conclusion

These extensions make Zustand more flexible and practical –  
while keeping its simplicity.  
**persist**, **devtools**, and **combine** are the most commonly used features.
