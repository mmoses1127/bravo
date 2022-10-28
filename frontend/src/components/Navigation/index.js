import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { NavLink } from "react-router-dom";
import stravaLogo from "../../assets/strava_logo.svg";
import './Navigation.css';


const Navigation = () => {
const user = useSelector(state => state.session.user);

  if (!user) {
    return (

      <div id='nav-bar'>
        <div class='nav-item'>
        <NavLink exact to="/"><img src={stravaLogo} alt="Strava Logo" /></NavLink>
        </div>
        <div class='nav-item'>
        <NavLink exact to="/signup"><button>Sign Up</button></NavLink>
        </div>
      </div>

      // <ul>
      //   <li><NavLink exact to="/"/>Home Page</li>
      //   <li><NavLink exact to="/login"/>Log In</li>
      //   <li><NavLink exact to="/signup"/>Sign Up</li>
      // </ul>
    );
  } else {
    return (
      <ul>
        <NavLink to="/">Home Page</NavLink>
        <ProfileButton user={user}/>
      </ul>
    );
  };
}


export default Navigation;