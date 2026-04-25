import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterState = {
  count: number;
  user: {
    name: string;
    address: { street: string; zipcode: string };
  };
};

// create<>()(...)
// https://github.com/pmndrs/zustand#persist-middleware
// https://github.com/pmndrs/zustand#immer-middleware
export const useCounterStore = create<CounterState>()(
  persist(
    immer(() => ({
      count: 1,
      user: {
        name: "John Doe",
        address: { street: "Main St", zipcode: "12345" },
      },
    })),
    { name: "counter" },
  ),
);

// merge automatically at top level
export const increment = () =>
  useCounterStore.setState((state) => {
    state.count++;
  });

export const decrement = () =>
  useCounterStore.setState((state) => {
    state.count--;
  });

export const reset = () => useCounterStore.setState({ count: 0 });

// merge automatically at deep level - immer middleware
export const updateStreet = (street: string) =>
  useCounterStore.setState((state) => {
    state.user.address.street = street;
  });
