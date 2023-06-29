import { Outlet, useLocation } from 'react-router';
import './App.css';
import MenuBar from './components/MenuBar';
import Sidebar from './components/Sidebar';
import Grid from '@mui/material/Grid'
import Header from './components/common/Header/Header';
import { useEffect, useState } from 'react';


function App() {
  //TITLE CHANGE
  const [ title, setTitle ] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/[\W\d+]/g, ' ');
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container >
      <Sidebar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;
