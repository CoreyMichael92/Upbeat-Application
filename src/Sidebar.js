import { Avatar } from '@mui/material'
import React from 'react'
import './CSS/Sidebar.css'
import WA from "./WA blur 2017.jpg";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebarRecentItem">
            <span className="sidebarHash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
       <div className="sidebarTop">
            <img src={WA} alt="" />
            <Avatar className='sidebarAvatar'/>
            <h2>Corey Dickerson</h2>
            <h4>corey.dickerson614@gmail.com</h4>
        </div>

        <div className="sidebarStats">
            <div className="sidebarStat">
                <p>Views</p>
                <p className="sidebarNumber">500</p>
            </div>
            
            <div className="sidebarStat">
                <p>Views on post</p>
                <p className="sidebarNumber">1,000</p>
            </div>
        </div>

        <div className="sidebarBottom">
                <p>Recent</p>
                {recentItem('Solo')}
                {recentItem('Rock')}
                {recentItem('Jazz')}
                {recentItem('Jam band')}
                {recentItem('Bluegrass')}

        </div> 
    </div>

   
  )
}

export default Sidebar
