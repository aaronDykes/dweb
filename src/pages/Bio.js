import "../css/page/Bio.scss";

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
                              <h1>
                                    Meditation 1: On the Present Moment
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
                              <br />
                              <br />
                              <br />

                              <h1>
                                    Meditation 2: On Impermanence and Acceptance
                              </h1>
                              <br />

                              <p>

                                    Find a quiet space and settle in. Allow your body to be at ease.
                                    Bring to mind something you are currently attached to. It could be a possession, a relationship, an outcome, or even a certain image of yourself.
                                    Observe this attachment without criticism. It is natural to form connections.
                                    Now, reflect on the words of Aurelius: "Everything existing is in a continual state of change; and thou thyself art also in a perpetual flux, and in a manner in a perpetual state of dissolution, and the whole universe [is so too]."
                                    Consider the impermanent nature of all things. The object you cherish may one day break or be lost. The people you love will eventually depart. Your own body and mind are constantly changing.
                                    This is not a cause for sadness, but an acceptance of reality. Just as a river flows and changes course, so too does life.
                                    Try to loosen your grip on the idea that things should remain fixed. Embrace the flow, the transformation.
                                    Think of something that has changed in your life recently. Perhaps a job, a friendship, or even just the weather. Did resisting this change bring you peace, or did acceptance allow you to move forward?
                                    Aurelius also said, "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart."
                                    Practice acceptance of what you cannot control. Focus your energy on what lies within your power: your thoughts, your actions, your judgments.
                                    Find gratitude for what you have in this moment, knowing that it is precious precisely because it is fleeting.
                                    Take a few moments to sit with this understanding. When you feel ready, gently bring your awareness back to your surroundings, carrying this sense of acceptance with you.
                              </p>
                        </div>
                  </div>
            </div >
      );
}