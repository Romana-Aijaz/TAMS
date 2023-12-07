import './App.css';
import Home from './screens/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login/Login';
import AdminDashboard from './screens/AdminDashboard/AdminDashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
