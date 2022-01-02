import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import prod from '../../mock';

const ItemListContainer = ( ) => {

    const {idCategory} = useParams();
    
    const [productos, setProductos] = useState([])

const getItems = new Promise ((resolve, reject) =>{
    setTimeout(() => { 
        resolve(prod)
    }, 2000);
})

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
}, [])

    console.log("Holu", productos);

    return (
        <Box
            display="flex"
            justifyContent="center"
            >
            <ItemList prod = {productos} />
            {/* Poner itemCount aca */}
        </Box>
    )
}

export default ItemListContainer