import "../css/page/Gallery.scss";
import { Link } from "react-router-dom";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

import Nav from "../components/Nav";
import Email from "../components/Email";

export default function Page2() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="gallery">
      <div className={`g-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`g-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="g-icon" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>

        <div className="form">
          <Email />
        </div>

      </div>
    </div>
  );
}
