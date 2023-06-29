import React from 'react'
import NotificationBell from '../NotificationBell/NotificationBell';
import CommonButton from '../CommonButton/CommonButton';
import { Avatar, IconButton, Tooltip, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';


const Header = ({title}) => {
    const headerStyles = {
        wrapper: {
            width: '100%',
            backgroundColor: '#009be5',
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            marginBottom: '15px',
            '*': {
                marginRight: '5px',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            marginBottom: '15px',
            '*': {
                marginRight: '5px',
            },
        },
    };

  return (
    <Box sx={headerStyles.wrapper}>
        <CommonButton
        variant='default'>
          Go To Docs
        </CommonButton>
        
        <NotificationBell 
          iconColor='primary'
          badgeContent={2}
        />
        
        <Avatar src='https://mui.com/static/images/avatar/1.jpg' />
    <div>
        <Typography>{title}</Typography>
        <CommonButton variant='outlined' >Web Setup</CommonButton>
        <Tooltip title='help' ><IconButton> <HelpIcon /> </IconButton></Tooltip>
    </div>
    
    </Box>
  )
}

export default Header