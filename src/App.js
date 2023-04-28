import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import Users from './Users.js';
import InsertUser from './InsertUser';

function App() {
  return (
    <div className="container mt-3 mb-3 border1">
      <h1 className='text-center'><a href='http://localhost:3000'>Welcome to LN world </a></h1>
      <img src='http://localhost:3000/public/gi_image/logo-nueng1.png' alt=''></img>
        <hr></hr>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Users></Users>}></Route>
          <Route path='create' element={<InsertUser></InsertUser>}></Route>
        </Routes>
    </div>
  );
}

export default App;
