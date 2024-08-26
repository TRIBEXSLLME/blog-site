import "./topbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faPinterestP,
  faSquareInstagram,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

const Topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <FontAwesomeIcon className="topicon" icon={faFacebook} />
        <FontAwesomeIcon className="topicon" icon={faXTwitter} />
        <FontAwesomeIcon className="topicon" icon={faPinterestP} />
        <FontAwesomeIcon className="topicon" icon={faSquareInstagram} />
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="toplistitem"> <Link to="/" className="link">
              ABOUT
            </Link></li>
          <li className="toplistitem"> <Link to="/" className="link">
              CONTACT
            </Link></li>
          <li className="toplistitem"> <Link to="/write" className="link">
              WRITE
            </Link></li>
          <li className="toplistitem"> <Link to="/" className="link">
             {user && 'LOG OUT'} 
            </Link></li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img className="topimage" src="./image.png" alt="" />
        ): (
          <ul className="toplist">
            <li className="toplistitem">
            <Link className="link" to='/login'>LOGIN</Link>
            </li>
            <li className="toplistitem">
            <Link className="link" to='/register'>REGISTER</Link>
            </li>
          
          
          </ul>
        )}
        
        <FontAwesomeIcon className="topsearchicon" icon={faSearchengin} />
      </div>
    </div>
  );
};

export default Topbar;
