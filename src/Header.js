import React from 'react'
import './CSS/Header.css';
import Corey from './Corey 2019.jpg';
import SearchIcon from '@mui/icons-material/Search';
import QueueIcon from '@mui/icons-material/Queue';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactsIcon from '@mui/icons-material/Contacts';
import ForumIcon from '@mui/icons-material/Forum';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();

  }

  return (
    <div className='header'>
      <div className="headerLeft">
        <QueueIcon/>
      </div>
       
      <div className="headerSearch">
        <SearchIcon/>
        <input placeholder='Search' type="text" />
      </div>
          
      <div className="headerRight">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption Icon={ForumIcon} title="Messages"/>
        <HeaderOption Icon={ContactsIcon} title="Contacts"/>
        <HeaderOption Icon={PlayArrowIcon} title="Gigs"/>
        <HeaderOption avatar={true} title="Account" onClick={logoutOfApp}/>

      </div>
    </div>
  );
}

export default Header