import { type InjectionKey, type Ref, inject } from "vue";

export type CounterContext = {
  count: Ref<number>;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const counterKey: InjectionKey<CounterContext> = Symbol("counter");

export function useCounter() {
  const ctx = inject(counterKey);
  if (!ctx) {
    throw new Error(
      "useCounter() must be used within a component that provides counterKey",
    );
  }
  return ctx;
}
