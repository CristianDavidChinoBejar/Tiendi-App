import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CartWidget } from '../CartWidget/CartWidget';
import Link from '@mui/material/Link';


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
          <Link href='/'>
            <span className='optionNavBrand'>
              TIENDI
            </span>
          </Link>

          </IconButton>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            <Link href="/category/Teclado" >
              <span className='optionsNav'>
                Teclado
              </span>
            </Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            <Link href='/category/Auriculares'>
              <span className='optionsNav'>
                Auriculares
              </span>
            </Link>
            </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='/category/Kit'>
              <span className='optionsNav'>
                Kit
              </span>
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <CartWidget />
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
