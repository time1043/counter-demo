import { useFlash } from "@/hooks/flash";
import { CounterProvider, useCounter } from "@/state/CounterContext";
import { useRef } from "react";

export function Counter() {
  return (
    <CounterProvider>
      <div className="counter-container">
        <CountDisplay />
        <CountControls />
      </div>
    </CounterProvider>
  );
}

function CountDisplay() {
  const { count } = useCounter();

  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <h2 className="count-display">{count}</h2>
      <p className="render-count">Renders: {renders}</p>
    </div>
  );
}

function CountControls() {
  const { increment, decrement, reset } = useCounter();

  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <div className="button-group">
        <button onClick={decrement}>- 1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ 1</button>
        <button onClick={() => incrementOutsideReact(increment)}>
          +1 Outside
        </button>
      </div>
      <p className="render-count">Renders: {renders}</p>
    </div>
  );
}

function incrementOutsideReact(increment: () => void) {
  console.log("Outside of React");
  // Doesn't call hooks outside of react component, Only calls function by props
  // const { increment } = useCounter(); // ❌
  increment();
}
