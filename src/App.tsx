import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const login = ()=>{
  axios
      .post('http://localhost:3000/v1/auth',{
        "email":"test_3@example.com",
        "password":"password"
      }
      )
      .then(response => {
        console.log(response)

        

      })

}

function App() {
  return (
    <div className="App">
      <Button onClick={login}>hello!</Button>

      

     
    </div>
  );
}

export default App;
