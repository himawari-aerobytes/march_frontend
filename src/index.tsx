import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container } from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
    <footer className='bg-light'>
      <div className="sticky-top bg-light">
        <p className="text-center text-muted">himawari-project all right reserved 2022</p>
      </div>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
