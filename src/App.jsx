import Header from './components/Header';
import './App.css';
import Main from './components/Main/Index';
import Menu from './components/Menu';
import MainResum from "./components/Resume/MainResum/MainResum"
import { useState } from 'react';

function App() {

  const [main,setMain] = useState(true)


  return (
    <div className="App">
        <Header />
        <Menu />
        {main?<Main />:<MainResum />
}
        
    </div>
  );
}

export default App;
