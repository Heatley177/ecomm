import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './ConstsNav/navbarItems';
import { navbarStyles } from './ConstsNav/styles';
import { useParams, useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem 
                key={item.id} 
                disablePadding
                onClick={() => navigate(item.route)}
                >
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons} >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                sx={navbarStyles.text}
                primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default Sidebar