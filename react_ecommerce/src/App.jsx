import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserContext/UserState';
import TheHeader from './components/TheHeader/TheHeader';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';


import './App.css'
import LoginApp from './views/LoginApp/LoginApp';
import HomeApp from './views/HomeApp/HomeApp';
import ProfileApp from './views/ProfileApp/ProfileApp';

function App() {
  const [count, setCount] = useState(0)

  return (
      <UserProvider>
      <Router>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/User" element={<LoginApp />} />
        <Route path="/" element={<Register />} />
        <Route path="/ProfileApp" element={<ProfileApp />} />
      </Routes>
      </Router>
      </UserProvider>
    
);
}

export default App
