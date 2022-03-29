import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About'

function App() {
  return (
    <div className="App">
      {/* <h1>this is an app!</h1> */}
      <Header/>
      <Routes>
        <Route path = '/' element = {<Main/>}/>
        <Route path = '/about' element = {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
