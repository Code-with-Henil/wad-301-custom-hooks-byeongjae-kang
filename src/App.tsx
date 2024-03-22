import "./App.css";
import { Cats } from "./components/Cats/Cats";
import { Button } from "./components/core/Button/Button";
import { useCounter } from "./hooks/useCounter";

function App() {
  const [count, setCount] = useCounter(12);

  document.title = "Bart!!!!!";

  return (
    <div className="container">
      <h1>Vite + React</h1>
      <h3>{count}</h3>

      <Button size="lg" onClick={setCount}>
        Button
      </Button>

      <br />
      <Cats />
    </div>
  );
}

export default App;
