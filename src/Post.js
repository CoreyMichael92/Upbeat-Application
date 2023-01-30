import { Avatar } from '@mui/material'
import React from 'react'
import './CSS/Post.css'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';





function Post({ name, discription, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="postHeader">
         <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="postInfo">
                <h2>{name}</h2>
                <p>{discription}</p>
            </div>
        </div>

        <div className="postBody">
            <p>{message}</p>
        </div>

        <div className="postButtons">
            <InputOption Icon={ThumbUpIcon} title="Like" color="#708b75"/>
            <InputOption Icon={ChatIcon} title="Chat" color="#708b75"/>
            <InputOption Icon={ShareIcon} title="Share" color="#708b75"/>
            <InputOption Icon={SendIcon} title="Send" color="#708b75"/>
        </div>
    </div>
  )
}

export default Post
