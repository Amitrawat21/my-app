import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import UserForm from './components/UserForm';
import UserTable from './components/Home';
import Edit from './components/Edit';
import Location from './components/Location';
import {Routes , Route , BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>

    <Routes>
    <Route path="/" element= {<UserTable/>}/>
  <Route path="/register" element= {<UserForm/>}/>
  <Route path="/edit/:id" element= {<Edit/>}/>
  <Route path="/location/:id" element= {<Location/>}/>
  
  
  </Routes>
  
    </Router>

  );
}

export default App;
