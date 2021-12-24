import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CartWidget } from '../CartWidget/CartWidget';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            TIENDI
          </IconButton>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Productos
          </Typography>
          
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Ofertas
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacto
          </Typography>

          <Typography variant="h6" component="div">
            <CartWidget />
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
