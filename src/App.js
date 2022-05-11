import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
      
   
    </div>
  );
}

export default App;
