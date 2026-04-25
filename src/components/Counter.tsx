import { useFlash } from "@/hooks/flash";
import { useRef } from "react";

export function Counter({
  count,
  increment,
  decrement,
  reset,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}) {
  return (
    <div className="counter-container">
      <CountDisplay {...{ count }} />
      <CountControls {...{ increment, decrement, reset }} />
    </div>
  );
}

function CountDisplay({ count }: { count: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <h2 className="count-display">{count}</h2>
      <p className="render-count">Renders: {renders}</p>
    </div>
  );
}

function CountControls({
  increment,
  decrement,
  reset,
}: {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}) {
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
  increment();
}
