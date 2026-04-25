import { create } from "zustand";

type CounterState = {
  count: number;
};

export const useCounterStore = create<CounterState>()(() => ({
  count: 1,
}));

export const increment = () =>
  useCounterStore.setState((state) => ({ count: state.count + 1 }));

export const decrement = () =>
  useCounterStore.setState((state) => ({ count: state.count - 1 }));

export const reset = () => useCounterStore.setState({ count: 0 });
