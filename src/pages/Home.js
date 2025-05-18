import "../css/page/Home.scss";

import { useState } from "react";
import { BiAlignLeft } from "react-icons/bi";

import Nav from "../components/Nav";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="home">
      <div className={`h-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>

      <div className={`h-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="h-icon" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>

        <div className="h-name">
          <h1 className="h-first">Philip Dykes</h1>
          <h1 className="h-last">Photographer</h1>
        </div>

        <footer />
        <footer />
      </div>
    </div>
  );
}
