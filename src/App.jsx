import Header from './components/Header';
import './App.css';
import Main from './components/Main/Index';
import Menu from './components/Menu';
import MainResum from "./components/Resume/MainResum/MainResum"
import { useState } from 'react';
import Dashboard from './components/Dashboard/MainDashboard';


function App() {

  const [main,setMain] = useState(false)
  const [dashboard,setDashboard] = useState(false)

  return (
    <div className="App">
        <Header />

        <Menu setDashboard={setDashboard}/>
        {
          dashboard?<Dashboard/>:<div>{main?<Main setMain = {setMain}/>:<MainResum setMain = {setMain}/>}</div>
        }
               
    </div>
  );
}

export default App;
