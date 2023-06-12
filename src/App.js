
import './App.css';
import {Transfer} from './Transfer'
import { Login } from './Login';
import { Register } from './Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CenteredForm from './submitComplaint';
import ReactTable from './transactions';
import { Balance } from './balance';
import { Mfa } from './mfa';

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
