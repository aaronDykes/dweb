import '../css/component/Drop.scss';

import { Link } from 'react-router-dom';

export default function Nav({ vert }) {
  return (
    <div className={`drop-content-${vert ? 'visible' : 'hidden'}`}>
      <div className="page">
        <Link to="/square">Square</Link>
      </div>
      <div className="page">
        <Link to="/plate">Plate_Polaroid</Link>
      </div>
      <div className="page">
        <Link to="/abu-dhabi">Abu_Dhabi</Link>
      </div>
      <div className="page">
        <Link to="/peabody">Peabody</Link>
      </div>
    </div>
  );
}
