import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { User } from "firebase/auth";

const App = () => {

  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    });
  });

  return (
    <Routes>
      <Route 
        path='/' 
        element={ user ? <Navigate to='/dashboard'/> : <Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
