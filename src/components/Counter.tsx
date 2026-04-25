import { useFlash } from "@/hooks/flash";
import {
  decrement,
  increment,
  reset,
  updateStreet,
  useCounterStore,
} from "@/state/useCounterStore";
import { useRef, useState, type SubmitEvent } from "react";

export function Counter() {
  return (
    <div className="counter-container">
      <CountDisplay />
      <CountControls />
      <UserDisplay />
      <UserControls />
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
  // increment();
  useCounterStore.setState((state) => ({ count: state.count + 1 }));
}

function UserDisplay() {
  const user = useCounterStore((state) => state.user);
  return (
    <div className="card">
      <p>Name: {user.name}</p>
      <p>Street: {user.address.street}</p>
      <p>Zipcode: {user.address.zipcode}</p>
    </div>
  );
}

function UserControls() {
  const [street, setStreet] = useState("");

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    updateStreet(street);
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label htmlFor="street-input">Address</label>
      <input
        type="text"
        id="street-input"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
