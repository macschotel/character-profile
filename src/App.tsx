import { useState } from "react";
import "./App.css";
import characterName from "./assets/title/character-name.png";
import { Biodata } from "./sections/Biodata";
import { Kepribadian } from "./sections/Kepribadian";
import { Keahlian } from "./sections/Keahlian";
import { LatarBelakang } from "./sections/LatarBelakang";

type Section = "biodata" | "kepribadian" | "keahlian" | "latar-belakang";

function App() {
  const [activeSelection, setActiveSelection] = useState<Section>("biodata");

  return (
    <div className="page-wrapper">
      <div className="character-page">
        <header className="character-header">
          <p style={{ fontSize: "12px" }}> PANDUAN KARAKTER</p>
          <img className="title" src={characterName} alt="Character" />
          <p style={{ fontSize: "12px" }}>
            DISUSUN OLEH ITO DIGUNAKAN UNTUK
            <br></br>
            KEPENTINGAN MENULIS
          </p>
        </header>

        <nav className="guide-nav">
          <button
            className={activeSelection === "biodata" ? "active" : ""}
            onClick={() => setActiveSelection("biodata")}
          >
            BIODATA
          </button>
          <button
            className={activeSelection === "kepribadian" ? "active" : ""}
            onClick={() => setActiveSelection("kepribadian")}
          >
            KEPRIBADIAN
          </button>
          <button
            className={activeSelection === "keahlian" ? "active" : ""}
            onClick={() => setActiveSelection("keahlian")}
          >
            KEAHLIAN
          </button>
          <button
            className={activeSelection === "latar-belakang" ? "active" : ""}
            onClick={() => setActiveSelection("latar-belakang")}
          >
            LATAR BELAKANG
          </button>
        </nav>

        <main>
          {activeSelection === "biodata" && <Biodata />}
          {activeSelection === "kepribadian" && <Kepribadian />}
          {activeSelection === "keahlian" && <Keahlian />}
          {activeSelection === "latar-belakang" && <LatarBelakang />}
        </main>
      </div>
    </div>
  );
}

export default App;
