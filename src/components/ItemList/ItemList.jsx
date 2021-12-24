import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';

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
        <div>
            {
                items.map( (prod) =>{ return <Item prod = {prod} /> })
            }
        </div>
    )
}
export default ItemList