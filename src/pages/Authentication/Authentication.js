import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import BasicCard from '../../components/common/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import { cardHeaderStyles } from './styles';
import NewUserModal from '../../components/Modals/NewUserModal/NewUserModal';


const Authentication = () => {
  const [ open, setOpen ] = useState(false);

  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      setOpen(true);
    };


    return (
      <Box sx={cardHeaderStyles.wrapper}>
    <SearchBar 
      placeholder="Search by email, phone number, or User ID"
      onChange={(event) => handleChange(event.target.value)}
      searchBarWidth='40vw'
    />
    <Box>
      <CommonButton
        variant='contained'
        onClick={addUser}
        size='large'
        sx={cardHeaderStyles.addUserButton}
      >
        Add User
      </CommonButton>
      <IconButton>
        <RefreshIcon />
      </IconButton>
    </Box>
    </Box>
    )
  };
  
  const getContent = () => (
    <Typography
      align='center'
      sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}
    >
      No users for this project yet
    </Typography>
  );

  return (
    <GridWrapper>
      <BasicCard 
        header={getHeader()}
        content={getContent()} 
      />
      <NewUserModal 
        open={open}
        onClose={() => setOpen(false)}
      />
    </GridWrapper>
  )
}

export default Authentication