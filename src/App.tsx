import { Counter } from "./components/Counter";
import { DevTools } from "jotai-devtools";
import css from "jotai-devtools/styles.css?inline";

// https://github.com/jotaijs/jotai-devtools/discussions/188
// https://github.com/jotaijs/jotai-devtools?tab=readme-ov-file#tree-shaking
const JotaiDevTools = () =>
  import.meta.env.MODE !== "production" ? (
    <>
      <style>{css}</style>
      <DevTools />
    </>
  ) : null;

export default function App() {
  return (
    <>
      <Counter />
      <JotaiDevTools />
    </>
  );
}
