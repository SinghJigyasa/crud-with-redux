import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddUser } from './AddUser';
import { EditComp } from './Edit';

const store = configureStore({
  reducer:{
   users:reducer
  }

})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/edit/:id' element={<EditComp/>}/>
      
    </Routes>
   </BrowserRouter>
   </Provider>
  </>
);

