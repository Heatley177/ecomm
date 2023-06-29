import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'



const BasicMenu = ({ anchorEl, handleClose, open, menuItems }) => {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
            <MenuItem
                onClick={handleClose}
            >{item.label}
            </MenuItem>
        ))}
        
        
      </Menu>
    </div>
  )
}

export default BasicMenu