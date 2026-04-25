import { useFlash } from "@/hooks/flash";
import { useCounterStore } from "@/state/useCounterStore";
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
  const count = useCounterStore((state) => state.count);

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
  // Not need useShallow
  const { increment, decrement, reset } = useCounterStore(
    (state) => state.actions,
  );

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
  // Call zustand outside of react component by getState / setState
  // useCounterStore.getState().actions.increment();
  useCounterStore.setState((state) => ({ count: state.count + 1 }));
}
