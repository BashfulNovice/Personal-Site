import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      {/* <h1>this is an app!</h1> */}
      <Header/>
      <Routes>
        <Route path = '/' element = {<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
