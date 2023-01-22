import './CSS/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './CSS/Header.css';



function App() {
  return (
    <div className="app">
      <Header/>

      <div className="appBody">
        <Sidebar/>
        <Feed/>
      </div>

      

      {/* Widgets */}

    </div>

    
  );
}

export default App;
