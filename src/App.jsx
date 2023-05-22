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

      <FormProvider value='test'>
        <Header />
        <Menu />
        <Main />
        <MainResum />
      </FormProvider>

    </div>
  );
}

export default App;
