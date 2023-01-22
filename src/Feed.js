import React, {useEffect, useState} from 'react'
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import './CSS/Feed.css';
import { db, auth } from './firebase';
import firebase from 'firebase';


function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState ([]);
    
    useEffect (() => {
        db.collection("posts").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }))
            ));
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Corey Dickerson',
            discription: 'Test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };

  return (
    <div className='feed'>
        <div className="feedInputContainer">
            <div className="feedInput">
            <CreateIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                    <button onclick= {sendPost} type='submit'>Send</button>
                </form>
            </div>

            <div className="feedInputOption">
                <InputOption Icon={ImageIcon} title="Photo" color="#708b75"/>
                <InputOption Icon={VideoCameraBackIcon} title="Video" color="#708b75"/>
                <InputOption Icon={EventAvailableIcon} title="Event" color="#708b75"/>
                <InputOption Icon={CalendarViewDayIcon} title="Calendar" color="#708b75"/>
            </div>
        </div>

        
            {/* Posts */}

            {posts.map(({id, data: {name, discription, message, photoUrl}}) => (
            <Post
                Key={id}
                name={name}
                discription={discription}
                message={message}
                photoUrl={photoUrl}
            />))}



            <Post name='Corey Dickerson' discription='This is a test' message='Wow'/>
        
      
    </div>
  )
}

export default Feed
