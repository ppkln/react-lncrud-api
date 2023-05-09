import React from 'react';
import Navbar from './Navbar.js';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Users from './Users.js';
import InsertUser from './InsertUser';
import UserUpdate from './UserUpdate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container mt-3 mb-3 border1">
      <h1 className='text-center'><a href='http://localhost:3000'>Welcome to LN world </a></h1>
      <img src='http://localhost:3000/public/gi_image/logo-nueng1.png' alt=''></img>
        <hr></hr>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users></Users>}></Route>
            <Route path='create' element={<InsertUser></InsertUser>}></Route>
            <Route path='updateuser/:id' element={<UserUpdate></UserUpdate>}></Route>
          </Routes>
        </BrowserRouter>
  </div>

  
);
reportWebVitals();
