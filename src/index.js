import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageBody from './Components/PageBody';
const OurRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'',element:<PageBody/>},
      {path:'about',element:<PageBody/>},
      {path:'academics',element:<PageBody/>},
      {path:'placements',element:<PageBody/>},
      {path:'contact',element:<PageBody/>},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={OurRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
