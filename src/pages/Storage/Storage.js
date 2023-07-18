import React, {useEffect, useState} from 'react'
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import Loading from '../../components/common/Loading/Loading';
const Storage = () => {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] =useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000);
      return () => clearTimeout(timer);
  }, []);

  return (
    <GridWrapper>
      { loading ? 
        <Loading>
          <CommonButton 
                variant="contained" 
                onClick={handleClick}
            >
                Open success snackbar
          </CommonButton>
        </Loading>
        :
        <CommonButton 
              variant="contained" 
              onClick={handleClick}
          >
              Open success snackbar
        </CommonButton>
      }
      <BasicSnackbar 
        open={open}
        onClose={handleClose}
        severity='success'
        message='Success!'
      />
    </GridWrapper>
  )
}

export default Storage