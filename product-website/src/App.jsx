import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <div>
       <MyNavbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
