import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AthkarSabah from './components/AthkarSabah';
import NoTFound from './components/NoTFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoTFound />}></Route>
        <Route exact path="athkar-masaa" element={<App />}></Route>
        <Route exact path="" element={<App />}></Route>
        <Route exact path="athkar-sabah" element={<AthkarSabah />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoute />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
