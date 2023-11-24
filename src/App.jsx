import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './components/Login';
import Loader from "./components/Loader";
import Rooms from './pages/Rooms'
import ProtectedRoute from './components/ProtectedRoute';
import History from './pages/History';
import Computers from './pages/Computers'

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <Loader />
  }

  return isAuthenticated ? (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />} >
          <Route path="/booking-rooms" element={<Rooms />} />
          <Route path="/booking-computers" element={<Computers />} />
          <Route path="/booking-history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (<Login />)
}

function Navigation() {
  return (
    <nav>
      <ul className='container'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/booking-rooms'>Salas</Link></li>
        <li><Link to='/booking-computers'>Computadores</Link></li>
        <li><Link to='/booking-history'>Historial</Link></li>
      </ul>
    </nav>
  )
}
