// import React, { createContext } from 'react';
 import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import colors from "./color-data";
// import { render } from "react-dom";


// export const ColorContext = createContext();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ColorContext.Provider value={{ colors }}>
//   <App />
//   </ColorContext.Provider>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ColorProvider from "./color-hooks.js";
import { render } from "react-dom";
import App from "./App";


// render(
//  <ColorProvider>
//  <App />
//  </ColorProvider>,
//  document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorProvider>
  <App />
  </ColorProvider>,
  document.getElementById("root")
);
