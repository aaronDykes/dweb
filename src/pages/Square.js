import "../css/page/Gallery.scss";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

import Nav from "../components/Nav";
import Gal1 from "../assets/util/Gal1";

export default function Square() {
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

        <div className="h-name">
          <h1>
            Square
          </h1>
          <br />

          <p>
            Begin by finding a comfortable posture, allowing your body to relax. Close your eyes gently, or soften your gaze.
            Notice your breath as it enters and leaves your body. Don't try to change it, simply observe the natural rhythm.
            Now, bring your awareness to this very moment. This breath. This feeling in your body. This sound you might hear.
            Aurelius wrote, "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present."
            Reflect on this. The worries about tomorrow, the regrets of yesterday – they hold no power in this present instant. All that truly exists is now.
            Consider one thing you are currently experiencing. It could be the warmth of the air on your skin, the gentle rise and fall of your chest, or the stillness behind your eyelids.
            Acknowledge this sensation without judgment. It simply is.
            Just as this moment arose, it will also pass. Another will take its place. This is the nature of things.
            Embrace this transience. Find peace in the simplicity of the present. You have everything you need in this moment to be fully alive.
            Take a few more breaths here, anchoring yourself in the now. When you are ready, gently open your eyes, carrying this awareness with you.
          </p>

          <br />
        </div>

        <div className="photos">
          <Gal1 />
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="h-name">
          <ul>
            <li>
              <h2> Image 1</h2>
              Begin by finding a comfortable posture, allowing your body to relax. Close your eyes gently, or soften your gaze.
            </li>
            <br />
            <li>
              <h2> Image 2</h2>
              Notice your breath as it enters and leaves your body. Don't try to change it, simply observe the natural rhythm.
            </li>
            <br />
            <li>
              <h2> Image 3</h2>
              Now, bring your awareness to this very moment. This breath. This feeling in your body. This sound you might hear.
            </li>
            <br />
          </ul>

          <br />
        </div>

      </div>
    </div>
  );
}
