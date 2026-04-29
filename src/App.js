import './index.css';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
    return (
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/Employees" element={<Employees/>}/>
            <Route path="/Customers" element={<Customers/>}/>
            <Route path="/Dictionary" element={<Dictionary/>}/>
            <Route path="/Definition/:search" element={<Definition/>}/>
            <Route path="/404" element={<NotFound/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Header>
      </BrowserRouter>
    );
}

export default App;
