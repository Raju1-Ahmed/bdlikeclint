
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
// import RequireAuth from './components/Login/RequireAuth';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <Routes>
      {/* <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} ></Route> */}
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
