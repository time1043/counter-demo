import { useState } from "react";
import { Counter } from "./components/Counter";

export default function App() {
  // https://react.dev/learn/passing-data-deeply-with-context
  const [count, setCount] = useState(1);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return <Counter {...{ count, increment, decrement, reset }} />;
}
