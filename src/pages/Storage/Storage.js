import React, {useEffect, useState} from 'react'
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import UserTable from '../../components/common/UserTable/UserTable';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';
import { set } from 'react-hook-form';


const Storage = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  return (
    <GridWrapper>
      <BasicCard 
        content={<UserTable onError={() => setOpen(true) } />}
      />
      <BasicSnackbar 
        open={open}
        severity='error'
        message="Data couldn't be fetched"
        onClose={handleClose}
      />
    </GridWrapper>
  )
}

export default Storage