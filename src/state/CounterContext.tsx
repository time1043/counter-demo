import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

// Definition of state
type CounterState = {
  count: number;
};

// Definition of actions
export type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set"; payload: number };

// Reducer: (state, action) => newState
// All of the state update logic is centralized in a Reducer function
// An action can change multiple state properties at the same time
function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: action.payload };
    default:
      action satisfies never;
      return state;
  }
}

const CounterStateContext = createContext<CounterState | null>(null);
const CounterDispatchContext = createContext<Dispatch<CounterAction> | null>(
  null,
);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 1 });

  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

export function useCounterState() {
  const context = useContext(CounterStateContext);
  if (context === null)
    throw new Error("useCounterState must be used within a CounterProvider");
  return context;
}

export function useCounterDispatch() {
  const context = useContext(CounterDispatchContext);
  if (context === null)
    throw new Error("useCounterDispatch must be used within a CounterProvider");
  return context;
}
