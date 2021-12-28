// import React from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

//ROUTER
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Item = ({ prod }) => { 

  console.log(prod);

    return (
            <Card sx={{ maxWidth: 345, ml: 5, mt: 5 }} >
                <Typography variant="body2"  sx={{ p: 2 }} align='center' >
                    <span className='colorFontTitle'>
                      Titulo: {prod.title}
                    </span>
                </Typography>
              <Box
                display="flex"
                justifyContent="center"
              >
                <img 
                src={prod.pictureUrl} 
                component="img"
                height="140"
                />
              </Box>
                
                <CardContent>
                  <Typography>

                    <Router>
                      <Switch>
                        <Route>
                          <Button color='primary' variant='contained'> Ver detalle del producto </Button>
                        </Route>
                      </Switch>
                    </Router>

                  </Typography>
                </CardContent>

            </Card>
    )
}

export default Item
 