import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyNavbar from './components/Navbar';
import Team from './pages/Team';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
