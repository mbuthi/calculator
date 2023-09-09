import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Finance from './pages/Finance/Finance';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Finance />}/>
          <Route path='/calculator' element={<Home />}/>
        </Routes>        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
