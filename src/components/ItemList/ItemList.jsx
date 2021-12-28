import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';
import Box from '@mui/material/Box';

const ItemList = ({prod}) => {
    const [items, setItems] = useState([])

    
    const getItems = new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(prod)
        }, 2000);
    })
    
    useEffect(() => {
        getItems
        .then(data =>{
            setItems(data)
        })
    }, [])

    return (
        <Box sx={{ display: 'inline-flex'}}>
            {
                items.map( prod =>{ return <Item prod = {prod} /> })
            }
        </Box>
    )
}
export default ItemList