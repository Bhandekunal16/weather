import logo from "./logo.svg";
import "./App.css";
import color from "../src/color.tsx";

function App() {
  return (
    <h1 className="title" style={{ color: color.TRUE }}>
      Weather App
    </h1>
  );
}

export default App;
