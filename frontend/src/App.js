//import React from 'react';
import{Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import "./App.css";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useState } from 'react';

function App() {
  const{user,setLoginUser}=useState({})
  return (
     <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>
        {
          // user && user._id ?<Route path="/login"  element={<Login setLoginUser={setLoginUser}/>}/> : 
          // <Route path="/" element={<Homepage/>}/>
        
      }
      {/* <Route path="/"  element={<Homepage/>}></Route> */}
      <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    
    </div>
  )
}

export default App;
