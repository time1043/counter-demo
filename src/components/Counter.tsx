import { useFlash } from "@/hooks/flash";
import {
  CounterProvider,
  useCounter,
  type CounterAction,
} from "@/state/CounterContext";
import { useRef, type Dispatch } from "react";

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
  const { state } = useCounter();

  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <h2 className="count-display">{state.count}</h2>
      <p className="render-count">Renders: {renders}</p>
    </div>
  );
}

function CountControls() {
  const { dispatch } = useCounter();

  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <div className="button-group">
        <button onClick={() => dispatch({ type: "decrement" })}>- 1</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>+ 1</button>
        <button onClick={() => incrementOutsideReact(dispatch)}>
          +1 Outside
        </button>
      </div>
      <p className="render-count">Renders: {renders}</p>
    </div>
  );
}

function incrementOutsideReact(dispatch: Dispatch<CounterAction>) {
  console.log("Outside of React");
  // Doesn't call hooks outside of react component, Only calls function by props
  // const { dispatch } = useCounter(); // ❌
  dispatch({ type: "increment" });
}
