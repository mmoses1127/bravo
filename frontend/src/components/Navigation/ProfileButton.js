import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { logout} from "../../store/session";
import avatar from "../../assets/mtb1.jpg";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const ProfileButton = ({user}) => {

  const history = useHistory();  
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false)
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };


  return (
    <div onMouseEnter={openMenu} onMouseLeave={closeMenu} className="profile-drop-down, nav-dropdown">
      <div className='nav-bar-component'>
        <img className="avatar-image" src={avatar} alt="Avatar"/>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      {showMenu && (<ul className='dropdown-list'>
        <li className="dropdown-item" onClick={() => history.push(`/profile`)}>Profile</li>
        <li className="dropdown-item" onClick={logoutHandler}>Log Out</li>
      </ul>
      )}
    </div>

  );
};

export default ProfileButton;