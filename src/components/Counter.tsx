import { useFlash } from "@/hooks/flash";
import { useRef } from "react";
import { count, decrement, increment, reset } from "@/state/counterSignal";

export function Counter() {
  return (
    <div className="counter-container">
      <CountDisplay />
      <CountControls />
    </div>
  );
}

function CountDisplay() {
  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <h2 className="count-display">{count.value}</h2>
      <p className="render-count">Renders: {renders}</p>
    </div>
  );
}

function CountControls() {
  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <div className="button-group">
        <button onClick={decrement}>- 1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ 1</button>
        <button onClick={() => incrementOutsideReact()}>+1 Outside</button>
      </div>
      <p className="render-count">Renders: {renders}</p>
    </div>
  );
}

function incrementOutsideReact() {
  console.log("Outside of React");
  // With signals, can write directly from anywhere — no function reference needed
  count.value++;
}
