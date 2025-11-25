import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Room from './pages/room'
import Roomone from '@/pages/roomone'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/roomone" element={<Roomone />} />
      </Routes>
    </Router>
  );
}

export default App;
