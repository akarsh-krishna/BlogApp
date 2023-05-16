import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <br/><br/><br/><br/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={ <Form/> } />
        </Routes>
    </div>
  );
}

export default App;
