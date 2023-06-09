
import './App.css';
import React, { useState } from "react";
import {Transfer} from './Transfer'
import { Navbar } from './Navbar';
import { Heading } from './Heading';
import { Login } from './Login';
import { Register } from './Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CenteredForm, {submitComplaint} from './submitComplaint';
import ReactTable from './transactions';
import { Balance } from './balance';
import { Mfa } from './mfa';


{/*
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
    {/*
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

*/}

function App(){
  return(
    <div>
      <Router>
        
        <Routes>
          <Route path = '/transfer' element = {<Transfer/>} />
          <Route path = '/register' element = {<Register/>} />
          <Route path = '/viewTransactions' element = {<ReactTable/>} />
          <Route path = '/balance' element = {<Balance />} />
          <Route path = '/submitComplaint' element = {<CenteredForm/>}/>
          <Route path = '/' element = {<Login/>} />
          <Route path = '/mfa' element = {<Mfa/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default App;
