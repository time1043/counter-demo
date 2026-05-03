import { useFlash } from "@/hooks/flash";
import { countAtom } from "@/state/counterAtom";
import { getDefaultStore, useAtom, useSetAtom } from "jotai";
import { useRef } from "react";

export function Counter() {
  return (
    <div className="counter-container">
      <CountDisplay />
      <CountControls />
    </div>
  );
}

function CountDisplay() {
  const [count] = useAtom(countAtom);

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
  const setCount = useSetAtom(countAtom);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

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
  getDefaultStore().set(countAtom, (c) => c + 1);
}
