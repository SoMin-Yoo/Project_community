import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from "react-redux";
// import { applyMiddleware, createStore } from "redux";
// import promiseMiddleware from "redux-promise"; 
// import Reducer from "./reducers/reducerIndex.js";
import app from './firebase';
import db from './firebase';

// const createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware
// )(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      
    </Provider> */}
    <App />
  </React.StrictMode>
);


reportWebVitals();
