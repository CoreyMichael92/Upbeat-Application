import './CSS/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './CSS/Header.css';
import { login, logout, selectUser }  from './features/userSlice';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
    } else {
        // user is logged out
        dispatchEvent(logout());

    }
    });
  });

  return (
    <div className="app">
      <Header/>
       
      {!user ? (
        <Login/>
      ) : (
        <div className="appBody">
          <Sidebar/>
          <Feed/>
          {/* Widgets */}
        </div>
      )};
    </div>
    
  

    
  );
}

export default App;
