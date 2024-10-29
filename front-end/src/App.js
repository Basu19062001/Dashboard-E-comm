import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path='/' element={<h1>Products Listing Components</h1>} />
          <Route path='/add' element={<h1>Products add Components</h1>} />
          <Route path='/update' element={<h1>Products update Components</h1>} />
          <Route path='/logout' element={<h1>Logout Components</h1>} />
          <Route path='/profile' element={<h1>Profile Components</h1>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App; 