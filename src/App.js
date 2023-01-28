import './CSS/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './CSS/Header.css';
import { selectUser }  from './features/userSlice';
import Login from './Login';
import { useSelector } from 'react-redux';




function App() {
  const user = useSelector(selectUser);

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
      )}
    </div>
    
  

    
  );
}

export default App;
