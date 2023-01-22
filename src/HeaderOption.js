import { Avatar } from '@mui/material'
import React from 'react'
import './CSS/HeaderOption.css'

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOptionIcon"/>}
      {avatar && <Avatar className="headerOptionIcon" src={avatar}/>}
      <h3 className='headerOptionTitle'>{title}</h3>
    </div>
  )
};

export default HeaderOption
