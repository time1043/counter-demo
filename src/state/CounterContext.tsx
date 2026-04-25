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

type CounterContextType = {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
};

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
      return state;
  }
}

const CounterContext = createContext<CounterContextType | null>(null);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 1 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error("useCounter must be used within a CounterProvider");

  return context;
}
