import { Outlet } from 'react-router';
import './App.css';
import MenuBar from './components/MenuBar';
import Sidebar from './components/Sidebar';
import Grid from '@mui/material/Grid'


function App() {
  return (
    <Grid container >
      <Sidebar />
      <Outlet />
    </Grid>
  );
}

export default App;
