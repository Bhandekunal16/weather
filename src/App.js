import logo from "./logo.svg";
import "./App.css";
import color from "./component/color";
import { Dashboard } from "../src/component/Dashboard";
import Slider from "./component/Slider";
import { Profile } from "./component/Profile";
import Header from "./component/Header";

function App() {
  return (
    <div className="mainUI">
      <div className="leftSide">
        <div
          className="Slider"
          style={{ color: color.DARK, background: color.WHITE }}
        >
          <Slider />
        </div>
      </div>
      <div className="rightSide">
        <div className="Header">
          <Header />
        </div>
        <div
          style={{ background: color.CONTENT, color: color.DARK }}
          className="content"
        >
          <Profile />
        </div>

        <div
          style={{ background: color.WHITE, color: color.DARK }}
          className="Footer"
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
