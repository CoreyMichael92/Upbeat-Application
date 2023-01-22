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


function Header() {
  return (
    <div className='header'>
      <div className="headerLeft">
        <QueueIcon/>
      </div>
       
      <div className="headerSearch">
        <SearchIcon/>
        <input type="text" />
      </div>
          
      <div className="headerRight">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption Icon={ForumIcon} title="Messages"/>
        <HeaderOption Icon={ContactsIcon} title="Contacts"/>
        <HeaderOption Icon={PlayArrowIcon} title="Gigs"/>
        <HeaderOption avatar={Corey} title="Account" />

      </div>
    </div>
  );
}

export default Header