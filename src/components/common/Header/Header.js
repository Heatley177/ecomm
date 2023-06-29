import React from 'react'
import NotificationBell from '../NotificationBell/NotificationBell';
import CommonButton from '../CommonButton/CommonButton';
import { Avatar, IconButton, Tooltip, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';


const Header = ({ title }) => {
    const headerStyles = {
        wrapper: {
            width: '100%',
            backgroundColor: '#009be5',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            marginLeft: '180px'
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            marginBottom: '20px',
            '*': {
                marginRight: '5px',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginLeft: '20px', 
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
                color: '#f1f1f1',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
        },
    };

  return (
    <Box sx={headerStyles.wrapper}>
        <Box sx={headerStyles.topRow}> 
            <Typography sx={headerStyles.link}>
                Go To Docs
            </Typography>
            <NotificationBell 
            iconColor='white'
            badgeContent={2}
            />
            <Avatar src='https://mui.com/static/images/avatar/1.jpg' />
        </Box>
        <Box sx={headerStyles.middleRow}>
            <Typography 
                variant='h1'
                color='white'
            >
                {title}
            </Typography>
            <Box>
                <CommonButton
                    sx={headerStyles.webButton}
                    variant='outlined'
                >
                    Web Setup
                </CommonButton>
            <Tooltip 
                title='help'
            >
                <IconButton
                    color='white'
                    sx={headerStyles.helpIcon}
                > 
                    <HelpIcon />
                </IconButton>
            </Tooltip>
            </Box>
        </Box>      
    </Box>
  )
}

export default Header