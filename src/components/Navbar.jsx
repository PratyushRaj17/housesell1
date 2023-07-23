import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
import helpHand from "../assets/jpg/helphand.png";
import helpHand2 from "../assets/jpg/helphand2.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathmatch = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={pathmatch("/profile")||pathmatch("/sign-in") ? "2c2c2c" : "white"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathmatch("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
         
          <li className='navbarListItem' onClick={() => navigate('/')}>

             <img className="helphand"src= {pathmatch('/') ? helpHand: helpHand2} alt="helphand" />
            <p
              className={
                pathmatch('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Russian-Ukrainian conflict
              help
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
