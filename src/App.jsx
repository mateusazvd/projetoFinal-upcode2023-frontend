import Header from './components/Header';
import './App.css';
import Main from './components/Main/Index';
import Menu from './components/Menu';
import MainResume from './components/Resume/NameJojas/MainResume';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Menu />
      <Main />
      <MainResume/>
    </div>
  );
}

export default App;
