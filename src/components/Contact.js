import '../css/component/Drop.scss';
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";

export default function Nav({ contact }) {
  return (
    <div className={`drop-content-${contact ? 'visible' : 'hidden'}`}>
      <div className="page" id="icon">
        <Link to="https://www.instagram.com/philipdykesphotographer/">
          <IoLogoInstagram />
        </Link>
      </div>
      <div className="page">
        <Link to="/inquire">inquire</Link>
      </div>
      <div className="page">
        <h2>613-286-6265</h2>
      </div>
      <div className="page">
        <a href="mailto:philipdykesphotographer@gmail.com">philipdykesphotographer@gmail.com</a>
      </div>
    </div>
  );
}
