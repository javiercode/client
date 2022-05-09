import * as React from 'react';
import '../assets/styles/App.css';
import Layout from './Layout';
import Login from './Login';
import About from './About';
import Home from './Home';
import Member from './Member';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouterPathEnum } from '../enums/RouterPathEnum';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={RouterPathEnum.LOGIN} element={<Login />} />

          <Route element={<Layout />} >
            <Route path={RouterPathEnum.HOME} element={<Home />} />
            <Route path={RouterPathEnum.ABOUT} element={<About />} />            
            <Route path={RouterPathEnum.MEMBER} element={<Member />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;