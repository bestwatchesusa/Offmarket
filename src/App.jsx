import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {AuthProvider} from './context/AuthContext';

function App() {
  return (
   
    <Router>
       <AuthProvider>
      <ToastContainer/>
      <Routes />
      </AuthProvider>
    </Router>
  
  );
}

export default App;
