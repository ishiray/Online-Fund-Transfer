
import './App.css';
import React, { useState } from "react";
import {Transfer} from './Transfer'
import { Navbar } from './Navbar';
import { Heading } from './Heading';
import { Login } from './Login';
import { Register } from './Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
        </Routes>
      </Router>
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Heading />
//       <Transfer />
//     </div>
//   );
// }

export default App;
