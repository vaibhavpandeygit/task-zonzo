import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import RouteProtected from './hooks/RouteProtected';
import Profile from './pages/Profile';


function App () {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register /> } />
        <Route path="/login" element={<Login />} />
        <Route path='/products' element={<RouteProtected><Products/></RouteProtected>}/>
        <Route path='/profile' element={<RouteProtected><Profile/></RouteProtected>}/>
      </Routes>
    </>
  );
}

export default App;