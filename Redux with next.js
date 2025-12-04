Redux is a JavaScript library designed for managing and centralizing application state. It is widely used with React.Redux provides a predictable state container,
making it easier to manage complex application states by centralizing them in a single store.
#Redux Toolkit 
#Installation
1️⃣ Install Dependencies
npm install @reduxjs/toolkit react-redux
2️⃣ Create a Redux Store
#project root diretory
redux/store.js
--code for store.js--
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counterSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export default store;
redux/counterSlice.js
--code for counterSlice.js--
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

#app/layout.js
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../redux';

export const metadata = {
  title: 'Next.js Redux App',
  description: 'Using Redux with Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}

#app/page.js
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

export default function HomePage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-blue-500 text-white mr-2">
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white">
        Decrement
      </button>
    </div>
  );
}


6️⃣ Optional: TypeScript Support

If using TypeScript, define RootState and AppDispatch for type safety:

// store/index.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


Then in components:

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch<AppDispatch>();

✅ Summary

Create Redux store & slices in store/.

Wrap Provider in app/layout.js.

Mark any component using Redux as 'use client'.

Use useSelector & useDispatch inside client components.
