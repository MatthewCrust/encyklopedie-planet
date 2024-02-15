import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlanetList from './PlanetList.js'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<PlanetList />} />
    </Routes>
  </Router>
  );
}

export default App;
;