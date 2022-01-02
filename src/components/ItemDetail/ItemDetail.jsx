import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import ItemCount from "../ItemCount/ItemCount";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ItemDetail( {detalles} ) {
  console.log("uwu", detalles);
  
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
      <h2> DETALLE DEL PRODUCTO </h2>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={detalles.pictureUrl} />
          </ButtonBase>
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              {
                <Typography gutterBottom variant="subtitle1" component="div">
                  {detalles.title}
                </Typography>
              }
              {
              <Typography variant="body2" gutterBottom>
                {detalles.description}
              </Typography>
              }
              {
              <Typography variant="body2" color="text.secondary">
                id: {detalles.id}
              </Typography>
              }
            </Grid>

          </Grid>
          <Grid item>
            {
            <Typography variant="subtitle1" component="div">
              Precio: $ {detalles.price}
            </Typography>
            }
          </Grid>
        </Grid>
      </Grid>
          <ItemCount stock={10} initial={0}/>
    </Paper>
  );
}