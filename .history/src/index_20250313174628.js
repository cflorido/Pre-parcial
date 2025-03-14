import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ccomponentes from "./Componentes"
import reportWebVitals from './reportWebVitals';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container className="mt-3">
    <Row>
      <componentes/>
    </Row>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
