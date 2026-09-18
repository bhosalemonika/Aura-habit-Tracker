import "../css/Home.css";

import logo from "../assets/logo/logo.png";
import topGrid from "../assets/logo/grid-top.png";
import bottomGrid from "../assets/logo/grid-bottom.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img src={topGrid} className="top-grid" />
      <div className="content">
        <div className="logo-area">
          <div className="circle outer"></div>
          <div className="circle inner"></div>
          <img src={logo} className="logo" />
        </div>
        <h1>
          Aura <span>Habit Tracker</span>
        </h1>
        <p>Build Better Habits Every Day</p>
        <button onClick={() => navigate("/login")}>GET STARTED →</button>
      </div>
      <img src={bottomGrid} className="bottom-grid" />
    </div>
  );
}

export default Home;
