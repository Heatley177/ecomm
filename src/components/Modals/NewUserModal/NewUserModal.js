import React from 'react'
import BasicModal from '../../common/BasicModal/BasicModal'
import { TextField, Box } from '@mui/material';



const NewUserModal = ({ open, onClose }) => {
    const modalStyles = {
        inputFields: { 
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiInput-root': {
                marginBottom: '20px',
            },
        },
    };
    
    const getContent = () => (
        <Box sx={modalStyles.inputFields} >
                <TextField 
                    placeholder='User ID'
                    name='userId'
                    label='User ID'
                    required
                    error
                    helperText={'This field is required'}
                />
        </Box>
    );


  return (
    <BasicModal
        open={open}
        onClose={onClose}
        title='New User'
        subTitle='Fill out inputs and hit "Submit" button.'
        content={getContent()}
        validate={ () => { } }
    />
  )
}

export default NewUserModal