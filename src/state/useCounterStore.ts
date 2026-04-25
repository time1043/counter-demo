import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterState = {
  count: number;
  user: {
    name: string;
    address: { street: string; zipcode: string };
  };
};

// create<>()(...)
// https://github.com/pmndrs/zustand#persist-middleware
export const useCounterStore = create<CounterState>()(
  persist(
    () => ({
      count: 1,
      user: {
        name: "John Doe",
        address: { street: "Main St", zipcode: "12345" },
      },
    }),
    { name: "counter" },
  ),
);

// merge automatically at top level
export const increment = () =>
  useCounterStore.setState((state) => ({ count: state.count + 1 }));

export const decrement = () =>
  useCounterStore.setState((state) => ({ count: state.count - 1 }));

export const reset = () => useCounterStore.setState({ count: 0 });

// merge manually at deep level
export const updateStreet = (street: string) =>
  useCounterStore.setState((state) => ({
    // user: { address: { street } }, // ❌
    user: { ...state.user, address: { ...state.user.address, street } },
  }));
