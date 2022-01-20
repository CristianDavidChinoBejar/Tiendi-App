import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {getItems} from '../../mock';

const ItemListContainer = ( ) => {

    const {idCategory} = useParams();
    
    const [productos, setProductos] = useState([])

useEffect(() => {
    getItems
    .then(data =>{
        if(idCategory){
            console.log("se muestra filter");
            const catFilter = data.filter( (items) =>  items.category === idCategory)
            setProductos(catFilter)
        }else{
            console.log("se muestra category");
            setProductos(data)
        }
    })
}, [idCategory])

    console.log("Holu", productos);

    return (
        <Box
            display="flex"
            justifyContent="center"
            >
            <ItemList prod = {productos} />
        </Box>
    )
}

export default ItemListContainer