import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyNavbar from './components/Navbar';
import Team from './pages/Team';
import Footer from './components/Footer';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Alumni from './pages/Alumni';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} /> 
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/alumni" element={<Alumni />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
