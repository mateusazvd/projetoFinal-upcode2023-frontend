import Header from './components/Header';
import './App.css';
import Main from './components/Main/Index';
import Menu from './components/Menu';
import MainResum from "./components/Resume/MainResum/MainResum"
import { createContext, useContext } from 'react';
import { FormProvider } from './Context/formPesquisaContext';

function App() {
  return (
    <div className="App">
        <Header />
        <Menu />
        <Main />
        <MainResum />
    </div>
  );
}

export default App;
