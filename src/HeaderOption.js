import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import './CSS/HeaderOption.css'
import { selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className="headerOptionIcon"/>}
      {avatar && 
        (<Avatar className="headerOptionIcon">{user?.email[0]}</Avatar>
      )}
      <h3 className='headerOptionTitle'>{title}</h3>
    </div>
  )
};

export default HeaderOption
