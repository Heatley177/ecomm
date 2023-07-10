import React from 'react'
import { Card, CardContent } from '@mui/material'


const BasicCard = ({ header, content }) => {
    const cardStyles = {
        width: '80vw',
        position: 'absolute',
        transform: 'translateX(-50%)',
        borderRadius: '8px',
        left: '50%',
    }

  return (
    <Card sx={cardStyles}>
        {header}
        <CardContent>
            {content}
        </CardContent>
    </Card>
  )
};

export default BasicCard;