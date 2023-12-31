import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Page Setup
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';
import Functions from './pages/Functions/Functions';
import Hosting from './pages/Hosting/Hosting';
import MachineLearning from './pages/MachineLearning/MachineLearning';

//MUI Global
import { ThemeProvider } from '@mui/material';
import { dashboardTheme } from './dashboardTheme';


ReactDOM.render(
  <ThemeProvider theme={dashboardTheme} >
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path='database' element={<Database />} />
        <Route path='storage' element={<Storage />} />
        <Route path='hosting' element={<Hosting />} />
        <Route path='functions' element={<Functions />} />
        <Route path='machine learning' element={<MachineLearning />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
