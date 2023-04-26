import './App.css';
import Navbar from './Navbar.js';
import Users from './Users.js';

function App() {
  return (
    <div className="container mt-3 mb-3 border1">
        <h1 className="text-center">
          Welcome to LN World.
        </h1>
        <hr></hr>
        <Navbar></Navbar>
        <Users></Users>
    </div>
  );
}

export default App;
