import "../css/component/Nav.scss";

import { useState } from "react";
import { IoReturnDownForward } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import Contact from "./Contact";
import Drop from "./Drop";

export default function Nav({ clicked, setClicked }) {
  const [vert, setVertical] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div className={`nav ${clicked ? "hidden" : "visible"}`}>
      <div id="menu" onClick={() => setClicked(!clicked)}>
        <IoReturnDownForward />
      </div>
      <div className="n-item">
        <Link to="/">Home</Link>
      </div>
      <div className="n-item gallery">
        <Link onClick={() => setVertical(!vert)}>Gallery</Link>
        <RiArrowDownSLine
          onClick={() => setVertical(!vert)}
          className={`drop-btn ${!vert ? "vertical" : ""}`}
        />
      </div>
      <Drop vert={vert} />
      <div className="n-item gallery">
        <Link onClick={() => setContact(!contact)}>Contact</Link>
        <RiArrowDownSLine
          onClick={() => setContact(!contact)}
          className={`drop-btn ${!contact ? "vertical" : ""}`}
        />
      </div>
      <Contact contact={contact} />
    </div>
  );
}
