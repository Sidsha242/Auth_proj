import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import DashBoard from './DashBoard';
function App() {

  return (<Router>
    <div className="App text-center">
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/dashboard' element={< DashBoard />}></Route>
      </Routes>
    </div >
  </Router >
  );
}
export default App;
