import React from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Item = ({ prod }) => { 

  console.log(prod);

    return (
            <Card sx={{ maxWidth: 345 }}>
                <Typography variant="body2" color="text.secondary" sx={{ p: 2 }} >
                    Titulo: {prod.title}
                  </Typography>
                <img 
                src={prod.pictureUrl} 
                component="img"
                height="140"
                />
                <CardContent>
                  <Typography>
                    {/* <ItemCount stock={ 5 } initial={ 1 } /> */}
                    <Button color='primary' variant='contained' className='buttonInd'> Ver detalle del producto </Button>
                  </Typography>
              
                </CardContent>
            </Card>
    )
}

export default Item
