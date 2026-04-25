import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterState = {
  count: number;
};

// create<>()(...)
// https://github.com/pmndrs/zustand#persist-middleware
export const useCounterStore = create<CounterState>()(
  persist(
    () => ({
      count: 1,
    }),
    {
      name: "counter",
      // storage: createJSONStorage(() => localStorage), // default
      // partialize: (state) => ({ count: state.count + 1 }),
    },
  ),
);

export const increment = () =>
  useCounterStore.setState((state) => ({ count: state.count + 1 }));

export const decrement = () =>
  useCounterStore.setState((state) => ({ count: state.count - 1 }));

export const reset = () => useCounterStore.setState({ count: 0 });
