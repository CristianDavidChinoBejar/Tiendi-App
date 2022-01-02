import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';
import Box from '@mui/material/Box';

const ItemList = ({prod}) => {

    return (
        <Box sx={{ display: 'inline-flex'}}>
            {
                prod.map( product =>{ return <Item prod = {product} key={product.id} /> })
            }
        </Box>
    )
}
export default ItemList