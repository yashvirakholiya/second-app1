import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shop from './Shop';
import Shopdetail from './Shopdetail';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  
  },
  {
    path: "/shop",
    element: <Shop></Shop>,
    isExact:true
  },
  {
    path: "/shop-details",
    element: <Shopdetail/>,
    isExact:true
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
