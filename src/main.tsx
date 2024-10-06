import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css'
import Login from './components/Login.tsx';
import Dashboard from './components/Dashboard.tsx';
import { AuthContextProvider } from './context/AuthContext.tsx';
import PrivateRoute from './routes/PrivateRoute.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route element= { <PrivateRoute /> }>
          <Route index path='dashboard' element={ <Dashboard /> } />
        </Route>
        <Route index element={ <Login /> } />
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>
)
