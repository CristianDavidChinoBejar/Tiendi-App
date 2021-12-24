import {useState} from 'react';
import {Button, Container, CardActions} from '@mui/material';

const ItemCount = ( {stock, initial} ) => {
    const [cont, setCont] = useState(initial)

    const handleContSum = () => {
        if(cont < stock){
            setCont(cont + 1)
        }
    }

    const handleContRes = () => {
        if(cont > initial){
            setCont(cont - 1)
        }
    }

    const onAdd = () => {
        console.log(cont)
    };

    return (
        <>
            <CardActions className='styleTeamButtons'>
                <Button color='primary' variant='contained' className='buttonInd' onClick = { () => { handleContRes() }} > - </Button>
                <p> {cont} </p>
                <Button color='primary' variant='contained' className='buttonInd' onClick = { () => { handleContSum() }} > + </Button>
            </CardActions>
                <Button color='primary' variant='contained' className='StyleButtonAddToCart' onClick = { () => { onAdd () } } > Agregar al carrito </Button>
        </>
    )
}

export default ItemCount

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function DirectionStack() {
//   return (
//     <div>
//       <Stack direction="row" spacing={2}>
//         <Item>Item 1</Item>
//         <Item>Item 2</Item>
//         <Item>Item 3</Item>
//       </Stack>
//     </div>
//   );
// }