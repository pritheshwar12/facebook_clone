import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore }from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

import { createRoot } from 'react-dom/client';


const store =createStore(rootReducer,composeWithDevTools())  
// ReactDOM.render(   
//   <Provider store={store}>
//  <Router>
//     <App />
//   </Router>
//   </Provider>
//  ,
//   document.getElementById("root")
// );
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( <Provider store={store}>
  <Router>
     <App />
   </Router>
   </Provider>);