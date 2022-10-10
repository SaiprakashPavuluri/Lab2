import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddNumbers from './components/addnumbers';
import Biography from './components/biography';
import LiveNews from './components/latestnews';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/addnumbers" element={<AddNumbers />} />
                    <Route path="/" element={<Biography />} />
                    <Route path="/latestnews" element={<LiveNews />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
