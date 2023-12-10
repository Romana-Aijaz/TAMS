import './App.css';
import Home from './screens/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login/Login';
import AdminDashboard from './screens/AdminDashboard/AdminDashboard';
import Admin from './screens/Admin/Admin';
import Student from './screens/Student/Student';
import Teacher from './screens/Teacher/Teacher';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/student' element={<Student />} />
          <Route path='/teacher' element={<Teacher/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
